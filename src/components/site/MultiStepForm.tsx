import { useEffect, useMemo, useRef, useState } from "react";
import {
  CONSENTS,
  DOCS_ACCEPT,
  MAX_DOCS,
  MAX_FILE_BYTES,
  RECEIPT_ACCEPT,
  SECURITY_WARNING,
  type FieldSpec,
  type FormSpec,
} from "@/lib/forms/types";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/discovery";

type Values = Record<string, string | string[]>;
type Files = Record<string, File[]>;

const inputBase =
  "mt-1 w-full rounded-md border border-text/20 bg-bg px-3 py-2.5 text-base text-text outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";

function draftKey(id: string) {
  return `asman:draft:${id}`;
}

function asArray(v: string | string[] | undefined): string[] {
  return Array.isArray(v) ? v : [];
}

function fileError(f: File) {
  if (f.size > MAX_FILE_BYTES) return `${f.name} is larger than 10 MB.`;
  return null;
}

export function MultiStepForm({ spec }: { spec: FormSpec }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [files, setFiles] = useState<Files>({});
  const [consents, setConsents] = useState<boolean[]>(() => CONSENTS.map(() => false));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [restored, setRestored] = useState(false);
  const [draftMsg, setDraftMsg] = useState<string | null>(null);
  const [autosave, setAutosave] = useState(true);
  const topRef = useRef<HTMLDivElement>(null);

  const steps = spec.steps;
  const current = steps[step]!;
  const paymentDisabled = !spec.paymentLink;

  // Restore draft (text answers only — files cannot be persisted).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(draftKey(spec.id));
      if (raw) {
        const parsed = JSON.parse(raw) as { values?: Values; step?: number };
        if (parsed.values && Object.keys(parsed.values).length) {
          setValues(parsed.values);
          setStep(Math.min(parsed.step ?? 0, steps.length - 1));
          setRestored(true);
        }
      }
    } catch {
      /* ignore malformed drafts */
    }
  }, [spec.id, steps.length]);

  useEffect(() => {
    if (!autosave) return;
    try {
      window.localStorage.setItem(draftKey(spec.id), JSON.stringify({ values, step }));
    } catch {
      /* storage unavailable */
    }
  }, [values, step, spec.id, autosave]);

  function saveDraft() {
    try {
      window.localStorage.setItem(draftKey(spec.id), JSON.stringify({ values, step }));
      setAutosave(true);
      setDraftMsg("Draft saved on this device. Payment reference is kept; the receipt file must be re-selected.");
    } catch {
      setDraftMsg("Could not save the draft — browser storage is unavailable.");
    }
  }

  function clearDraft() {
    const ok = window.confirm(
      "Clear the saved draft from this device? Your current answers stay on screen — only the stored copy is removed.",
    );
    if (!ok) return;
    try {
      window.localStorage.removeItem(draftKey(spec.id));
    } catch {
      /* ignore */
    }
    setAutosave(false);
    setRestored(false);
    setDraftMsg("Saved draft cleared. Nothing on this form was erased — press “Save draft” to store it again.");
  }

  function setValue(id: string, v: string | string[]) {
    setValues((prev) => ({ ...prev, [id]: v }));
    setErrors((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function validateStep(): boolean {
    const next: Record<string, string> = {};
    for (const f of current.fields) {
      if (!f.required) continue;
      if (f.type === "files") {
        // The receipt is only mandatory when a live payment link exists.
        if (f.fileKind === "receipt" && paymentDisabled) continue;
        if (!(files[f.id]?.length ?? 0)) next[f.id] = "This file is required.";
        continue;
      }
      if (current.kind === "payment" && paymentDisabled) continue;
      const v = values[f.id];
      const empty = Array.isArray(v) ? v.length === 0 : !String(v ?? "").trim();
      if (empty) next[f.id] = "This field is required.";
      else if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v)))
        next[f.id] = "Enter a valid email address.";
    }
    if (current.kind === "consent" && consents.some((c) => !c)) {
      next["__consent"] = "Please tick all four confirmations.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function go(delta: number) {
    if (delta > 0 && !validateStep()) return;
    setStep((s) => Math.max(0, Math.min(steps.length - 1, s + delta)));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const emailBody = useMemo(() => {
    const lines: string[] = [];
    lines.push(spec.title.toUpperCase());
    lines.push("Submitted from aishausman.com — manual payment verification requested.");
    lines.push("");
    for (const s of steps) {
      if (s.kind === "consent") continue;
      lines.push(`--- ${s.title.toUpperCase()} ---`);
      for (const f of s.fields) {
        if (f.type === "files") {
          const list = files[f.id]?.map((x) => `• ${x.name} (${Math.round(x.size / 1024)} KB)`) ?? [];
          lines.push(`${f.label}:`);
          lines.push(list.length ? list.join("\n") : "— none selected —");
          continue;
        }
        const v = values[f.id];
        const text = Array.isArray(v) ? v.join(", ") : (v ?? "");
        if (!String(text).trim()) continue;
        lines.push(`${f.label}: ${text}`);
      }
      lines.push("");
    }
    lines.push("--- CONSENT ---");
    CONSENTS.forEach((c, i) => lines.push(`${consents[i] ? "[x]" : "[ ]"} ${c}`));
    lines.push("");
    lines.push("NOTE: files listed above are attached manually by the client to this email.");
    return lines.join("\n");
  }, [steps, values, files, consents, spec.title]);

  const subject = spec.subject(values);
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(emailBody)}`;
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${subject}\n\n${emailBody.slice(0, 1200)}`,
  )}`;

  function submit() {
    if (!validateStep()) return;
    setSubmitted(true);
    try {
      window.localStorage.removeItem(draftKey(spec.id));
    } catch {
      /* ignore */
    }
    window.location.href = mailto;
  }

  const allSelectedFiles = Object.values(files).flat();

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-accent/50 bg-surface p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Prepared for submission
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-text sm:text-3xl">
          Attach your files, then send the email
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text/85 sm:text-base">{spec.confirmation}</p>
        {allSelectedFiles.length > 0 && (
          <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text">
              Attach these files before sending
            </p>
            <ul className="mt-2 space-y-1 text-sm text-text/90">
              {allSelectedFiles.map((f) => (
                <li key={f.name}>• {f.name}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
          >
            Re-open the email
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-text/20 px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent sm:w-auto"
          >
            Fallback: send via WhatsApp
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Email is the primary channel. WhatsApp is a fallback only — files must still be attached
          manually there. Your payment will be verified manually before the next stage begins.
        </p>
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      {/* Flow overview */}
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-text/70">
        {spec.flow.map((f, i) => (
          <li key={f} className="flex items-center gap-2">
            <span className="rounded-full border border-text/15 bg-surface px-3 py-1.5">{f}</span>
            {i < spec.flow.length - 1 && (
              <span aria-hidden="true" className="text-accent">
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Progress */}
      <div className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-xs text-muted">
            {Math.round(((step + 1) / steps.length) * 100)}% complete
          </p>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-text/10"
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-label="Form progress"
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {restored && step === 0 && (
        <p className="mt-4 rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-text/90">
          We restored your saved draft from this device.
        </p>
      )}

      <form
        className="mt-8 rounded-2xl border border-text/15 bg-surface p-5 shadow-sm sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (step === steps.length - 1) submit();
          else go(1);
        }}
        noValidate
      >
        <h2 className="font-display text-xl font-bold text-text sm:text-2xl">{current.title}</h2>
        {current.description && (
          <p className="mt-2 text-sm leading-relaxed text-text/80">{current.description}</p>
        )}

        {current.examples && (
          <div className="mt-4 rounded-lg border border-text/15 bg-bg p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text">
              Accepted examples
            </p>
            <p className="mt-1.5 text-sm text-text/80">{current.examples.join(" · ")}</p>
          </div>
        )}

        {current.kind === "payment" && <PaymentBlock spec={spec} />}

        <div className="mt-6 grid gap-5">
          {current.fields.map((f) => (
            <Field
              key={f.id}
              field={f}
              value={values[f.id]}
              files={files[f.id] ?? []}
              error={errors[f.id]}
              disabled={current.kind === "payment" && paymentDisabled}
              onChange={(v) => setValue(f.id, v)}
              onFiles={(list) => setFiles((p) => ({ ...p, [f.id]: list }))}
            />
          ))}
        </div>

        {current.kind === "consent" && (
          <fieldset className="mt-6">
            <legend className="text-xs font-semibold uppercase tracking-wider text-text">
              Confirmations
            </legend>
            <div className="mt-3 space-y-3">
              {CONSENTS.map((c, i) => (
                <label key={c} className="flex items-start gap-3 text-sm leading-relaxed text-text/90">
                  <input
                    type="checkbox"
                    checked={consents[i] ?? false}
                    onChange={(e) =>
                      setConsents((prev) => prev.map((p, idx) => (idx === i ? e.target.checked : p)))
                    }
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
            {errors["__consent"] && (
              <p className="mt-3 text-sm font-medium text-[#B00020]">{errors["__consent"]}</p>
            )}
            <div className="mt-6 rounded-lg border border-text/15 bg-bg p-4 text-sm leading-relaxed text-text/85">
              Submitting opens your email app with every answer pre-filled.{" "}
              <strong className="font-semibold">
                Your receipt and supporting documents are not sent automatically
              </strong>{" "}
              — attach the files listed in the email before you send it.
            </div>
          </fieldset>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={step === 0}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-text/20 px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
          >
            {step === steps.length - 1 ? spec.submitLabel : "Next"}
          </button>
        </div>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        {SECURITY_WARNING} Your answers are saved in this browser only so you do not lose progress
        when you open Flutterwave.
      </p>
    </div>
  );
}

function PaymentBlock({ spec }: { spec: FormSpec }) {
  return (
    <div className="mt-5 rounded-xl border border-accent/40 bg-accent/10 p-5">
      <p className="text-sm leading-relaxed text-text/90">{spec.paymentNote}</p>
      {spec.paymentLink ? (
        <a
          href={spec.paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
        >
          {spec.paymentLabel}
        </a>
      ) : (
        <>
          <button
            type="button"
            disabled
            className="mt-4 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-md border border-text/20 bg-bg px-6 py-3 text-sm font-semibold text-muted sm:w-auto"
          >
            Payment link coming soon
          </button>
          <p className="mt-3 text-sm leading-relaxed text-text/85">
            A dedicated payment link for this service is not yet available. Complete and submit the
            rest of your requirements — you will be sent the payment link directly, and payment is
            still verified manually.
          </p>
        </>
      )}
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Payment is verified manually. Nothing is auto-approved and nothing is auto-scheduled.
      </p>
    </div>
  );
}

function Field({
  field,
  value,
  files,
  error,
  disabled,
  onChange,
  onFiles,
}: {
  field: FieldSpec;
  value: string | string[] | undefined;
  files: File[];
  error?: string;
  disabled?: boolean;
  onChange: (v: string | string[]) => void;
  onFiles: (files: File[]) => void;
}) {
  const [fileMsg, setFileMsg] = useState<string | null>(null);
  const id = `f-${field.id}`;
  const isReceipt = field.fileKind === "receipt";

  const label = (
    <label htmlFor={id} className="block text-sm font-medium text-text">
      {field.label}
      {field.required && <span className="ml-1 text-accent">*</span>}
    </label>
  );

  function handleFiles(list: FileList | null) {
    const arr = Array.from(list ?? []);
    if (!isReceipt && arr.length > MAX_DOCS) {
      setFileMsg(`Select at most ${MAX_DOCS} files.`);
      return;
    }
    const bad = arr.map(fileError).find(Boolean);
    if (bad) {
      setFileMsg(bad);
      return;
    }
    setFileMsg(null);
    onFiles(arr);
  }

  return (
    <div>
      {field.type !== "checkboxes" && label}

      {(field.type === "text" ||
        field.type === "email" ||
        field.type === "tel" ||
        field.type === "url" ||
        field.type === "date") && (
        <input
          id={id}
          type={field.type === "url" ? "text" : field.type}
          inputMode={field.type === "tel" ? "tel" : undefined}
          value={typeof value === "string" ? value : ""}
          placeholder={field.placeholder}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        />
      )}

      {field.type === "textarea" && (
        <textarea
          id={id}
          rows={4}
          value={typeof value === "string" ? value : ""}
          placeholder={field.placeholder}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        />
      )}

      {field.type === "select" && (
        <select
          id={id}
          value={typeof value === "string" ? value : ""}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        >
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}

      {field.type === "checkboxes" && (
        <fieldset>
          <legend className="text-sm font-medium text-text">
            {field.label}
            {field.required && <span className="ml-1 text-accent">*</span>}
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {field.options?.map((o) => {
              const selected = asArray(value).includes(o);
              return (
                <label
                  key={o}
                  className="flex items-start gap-2.5 rounded-md border border-text/15 bg-bg px-3 py-2.5 text-sm text-text/90"
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={(e) => {
                      const set = new Set(asArray(value));
                      if (e.target.checked) set.add(o);
                      else set.delete(o);
                      onChange([...set]);
                    }}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
                  />
                  <span>{o}</span>
                </label>
              );
            })}
          </div>
          {field.other && (
            <input
              type="text"
              placeholder="Other — please specify"
              value={asArray(value).find((v) => v.startsWith("Other: "))?.slice(7) ?? ""}
              onChange={(e) => {
                const rest = asArray(value).filter((v) => !v.startsWith("Other: "));
                onChange(e.target.value.trim() ? [...rest, `Other: ${e.target.value}`] : rest);
              }}
              className={inputBase}
            />
          )}
        </fieldset>
      )}

      {field.type === "files" && (
        <>
          <input
            id={id}
            type="file"
            multiple={!isReceipt}
            accept={isReceipt ? RECEIPT_ACCEPT : DOCS_ACCEPT}
            disabled={disabled}
            onChange={(e) => handleFiles(e.target.files)}
            className="mt-2 block w-full text-sm text-text/85 file:mr-3 file:min-h-11 file:rounded-md file:border-0 file:bg-accent file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-text"
          />
          <p className="mt-1.5 text-xs text-muted">
            {field.help ??
              `PDF, DOC, DOCX, XLS, XLSX, JPG, JPEG, PNG or WebP. Maximum ${MAX_DOCS} files, 10 MB each.`}
          </p>
          {files.length > 0 && (
            <ul className="mt-2 space-y-1 text-xs text-text/80">
              {files.map((f) => (
                <li key={f.name}>• {f.name}</li>
              ))}
            </ul>
          )}
          {fileMsg && <p className="mt-1.5 text-sm font-medium text-[#B00020]">{fileMsg}</p>}
        </>
      )}

      {field.help && field.type !== "files" && (
        <p className="mt-1.5 text-xs text-muted">{field.help}</p>
      )}
      {error && <p className="mt-1.5 text-sm font-medium text-[#B00020]">{error}</p>}
    </div>
  );
}
