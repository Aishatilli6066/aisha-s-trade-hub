import { useEffect, useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";
import {
  DISCOVERY_TRACKS,
  DISCOVERY_PAYMENT_LINKS,
  DONE_FOR_YOU_STEPS,
  DRAFT_STORAGE_KEY,
  TRACK_EVENT,
  isPaymentConfigured,
  type DiscoveryTrack,
} from "@/lib/discovery";

const WHATSAPP_NUMBER = "2347042322970";
const EMAIL = "aishau6066@gmail.com";

const SERVICES = [
  "Global Product Sourcing",
  "Supplier Verification",
  "Landed Cost Analysis",
  "OEM/ODM Coordination",
  "Agricultural Commodity Export",
  "Trade Documentation",
  "Import & Export Business Consulting",
  "Private Label Product Development",
  "Import & Export Business Plan Development",
  "Custom Machinery Procurement",
  "Other / Not sure yet",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

const TIMELINES = ["Immediate (< 2 weeks)", "1–3 months", "3–6 months", "Flexible / Exploring"];

type FormState = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  country: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  whatsapp: "",
  country: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
};

function buildMessage(
  d: FormState,
  track: DiscoveryTrack,
  paymentRef: string,
  receiptName: string,
) {
  const t = DISCOVERY_TRACKS[track];
  return `PAID Service Request — AWAITING MANUAL PAYMENT VERIFICATION

Engagement track: ${t.label}
Project Discovery Fee: ${t.fee} USD
Flutterwave payment reference: ${paymentRef}
Payment receipt file: ${receiptName || "— not attached —"}

Name: ${d.name}
Email: ${d.email}
Company: ${d.company || "—"}
WhatsApp: ${d.whatsapp || "—"}
Country: ${d.country || "—"}

Service requested: ${d.service}
Budget: ${d.budget || "—"}
Timeline: ${d.timeline || "—"}

Project requirements:
${d.details}

Please attach the payment receipt to this message before sending.`;
}


function validate(d: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!d.name.trim()) errors.name = "Please enter your name";
  if (d.name.length > 100) errors.name = "Name is too long";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errors.email = "Enter a valid email";
  if (d.email.length > 255) errors.email = "Email is too long";
  if (!d.service) errors.service = "Pick a service";
  if (!d.details.trim() || d.details.trim().length < 20)
    errors.details = "Please share a few sentences (20+ characters)";
  if (d.details.length > 2000) errors.details = "Details are too long (max 2000 chars)";
  return errors;
}

type Step = "requirements" | "payment" | "done";

export function ServiceRequestForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [track, setTrack] = useState<DiscoveryTrack | null>(null);
  const [step, setStep] = useState<Step>("requirements");
  const [paymentRef, setPaymentRef] = useState("");
  const [receipt, setReceipt] = useState<File | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [refError, setRefError] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<DiscoveryTrack>).detail;
      if (detail in DISCOVERY_TRACKS) {

        setTrack(detail);
        setStep("requirements");
      }
    };
    window.addEventListener(TRACK_EVENT, handler);
    return () => window.removeEventListener(TRACK_EVENT, handler);
  }, []);

  // Restore any draft kept in the browser while the client was on the
  // payment provider's page.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { form?: FormState; track?: DiscoveryTrack };
      if (parsed.form) setForm({ ...INITIAL, ...parsed.form });
      if (parsed.track && parsed.track in DISCOVERY_TRACKS) setTrack(parsed.track);
    } catch {
      /* ignore malformed drafts */
    }
  }, []);

  useEffect(() => {
    if (step === "done") return;
    try {
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({ form, track }));
    } catch {
      /* storage unavailable */
    }
  }, [form, track, step]);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  function onContinueToPayment(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length || !track) return;
    setStep("payment");
    document.getElementById("service-request")?.scrollIntoView({ behavior: "smooth" });
  }

  function onSubmitPaidRequest() {
    if (!track) return;
    if (!isPaymentConfigured(track)) return;
    if (paymentRef.trim().length < 4) {
      setRefError("Enter the Flutterwave payment reference from your receipt");
      return;
    }
    if (!receipt) {
      setRefError("Upload your payment receipt");
      return;
    }
    setRefError("");
    const message = buildMessage(form, track, paymentRef.trim(), receipt.name);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Paid Service Request — ${DISCOVERY_TRACKS[track].label} — Ref ${paymentRef.trim()}`,
    )}&body=${encodeURIComponent(message)}`;
    setSubmittedMessage(message);
    try {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setStep("done");
  }


  const inputCls =
    "w-full rounded-md border border-text/20 bg-bg px-3 py-2.5 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-text";
  const errCls = "mt-1 text-xs text-[#6B1026]";

  const t = track ? DISCOVERY_TRACKS[track] : null;
  const paymentReady = track ? isPaymentConfigured(track) : false;

  return (
    <section
      id="service-request"
      aria-labelledby="service-request-title"
      className="border-b border-text/10"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Service Request
          </p>
          <h2
            id="service-request-title"
            className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl"
          >
            Let&rsquo;s Discuss Your Trade Opportunity
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text/80 sm:text-lg">
            Choose your engagement, complete the required project details, then pay the Project
            Discovery Fee. Your request is submitted only after payment succeeds. The fee is
            non-refundable and credited toward your final professional service fee if you proceed.
          </p>
        </FadeIn>

        <FadeIn>
          <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-text/75">
            {DONE_FOR_YOU_STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="rounded-full border border-text/15 bg-surface px-4 py-2">{s}</span>
                {i < DONE_FOR_YOU_STEPS.length - 1 && (
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-text">
              Step 1 — Choose your engagement
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {(Object.keys(DISCOVERY_TRACKS) as DiscoveryTrack[]).map((key) => {
                const item = DISCOVERY_TRACKS[key];
                const active = track === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setTrack(key);
                      setStep("requirements");
                    }}
                    aria-pressed={active}
                    className={`rounded-xl border p-5 text-left transition-colors ${
                      active
                        ? "border-accent bg-accent/10"
                        : "border-text/15 bg-surface hover:border-accent/50"
                    }`}
                  >
                    <p className="font-display text-base font-bold text-text">{item.label}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      Project Discovery Fee: {item.fee}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text/80">{item.blurb}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {step === "done" ? (
          <FadeIn>
            <div
              role="status"
              className="mt-10 rounded-xl border border-accent/50 bg-accent/15 p-6 sm:p-8"
            >
              <p className="font-display text-xl font-bold text-text">
                Request submitted — payment under manual review
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/90">
                Your request for <strong>{t?.label}</strong> has been sent with your Flutterwave
                payment reference <strong>{paymentRef}</strong> and receipt{" "}
                <strong>{receipt?.name}</strong>. Your payment will be{" "}
                <strong>verified manually</strong>. Once verified, project review begins and you
                will receive a written proposal by email. The {t?.fee} Project Discovery Fee is
                non-refundable and credited toward your final professional service fee if you
                proceed.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/90">
                Remember to attach your receipt to the email that opened. If it did not open, you
                can{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(submittedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  send the same details on WhatsApp
                </a>
                .
              </p>

            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <form
              onSubmit={onContinueToPayment}
              noValidate
              className="mt-10 grid gap-5 rounded-xl border border-text/10 bg-surface p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-text">
                Step 2 — Complete your project requirements
              </p>
              <fieldset disabled={step === "payment"} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="sr-name" className={labelCls}>
                      Full name *
                    </label>
                    <input
                      id="sr-name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className={errCls}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="sr-email" className={labelCls}>
                      Email *
                    </label>
                    <input
                      id="sr-email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className={errCls}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="sr-company" className={labelCls}>
                      Company
                    </label>
                    <input
                      id="sr-company"
                      type="text"
                      maxLength={100}
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="sr-whatsapp" className={labelCls}>
                      WhatsApp / Phone
                    </label>
                    <input
                      id="sr-whatsapp"
                      type="tel"
                      maxLength={30}
                      value={form.whatsapp}
                      onChange={(e) => set("whatsapp", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label htmlFor="sr-country" className={labelCls}>
                      Country
                    </label>
                    <input
                      id="sr-country"
                      type="text"
                      maxLength={60}
                      value={form.country}
                      onChange={(e) => set("country", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="sr-service" className={labelCls}>
                      Service *
                    </label>
                    <select
                      id="sr-service"
                      required
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className={errCls}>{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="sr-budget" className={labelCls}>
                      Estimated budget
                    </label>
                    <select
                      id="sr-budget"
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                    >
                      <option value="">Select…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sr-timeline" className={labelCls}>
                      Timeline
                    </label>
                    <select
                      id="sr-timeline"
                      value={form.timeline}
                      onChange={(e) => set("timeline", e.target.value)}
                      className={`mt-2 ${inputCls}`}
                    >
                      <option value="">Select…</option>
                      {TIMELINES.map((tl) => (
                        <option key={tl} value={tl}>
                          {tl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="sr-details" className={labelCls}>
                    Project details *
                  </label>
                  <textarea
                    id="sr-details"
                    required
                    rows={5}
                    maxLength={2000}
                    value={form.details}
                    onChange={(e) => set("details", e.target.value)}
                    className={`mt-2 ${inputCls} resize-y`}
                    placeholder="Product, supplier country, quantities, destination market, current challenges…"
                    aria-invalid={!!errors.details}
                  />
                  {errors.details && <p className={errCls}>{errors.details}</p>}
                  <p className="mt-1 text-xs text-muted">{form.details.length}/2000 characters</p>
                </div>
              </fieldset>

              {step === "requirements" && (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted">
                    Nothing is sent yet. Your request is submitted only after the Project Discovery
                    Fee is paid.
                  </p>
                  <button
                    type="submit"
                    disabled={!track}
                    className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    {t ? `Continue to Payment — ${t.fee}` : "Choose an engagement first"}
                  </button>
                </div>
              )}

              {step === "payment" && t && track && (
                <div className="rounded-xl border border-accent/50 bg-accent/10 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text">
                    Step 3 — Pay the Project Discovery Fee
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-text">
                    {t.label} — {t.fee} USD
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text/90">
                    Your requirements are saved in this browser and have not been sent. Complete
                    payment to submit your request. The fee is non-refundable and credited toward
                    your final professional service fee if you proceed.
                  </p>

                  {paymentReady ? (
                    <>
                      <a
                        href={DISCOVERY_PAYMENT_LINKS[track]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
                      >
                        Continue to Payment — {t.fee}
                      </a>
                      <div className="mt-5">
                        <label htmlFor="sr-payref" className={labelCls}>
                          Payment reference *
                        </label>
                        <input
                          id="sr-payref"
                          type="text"
                          maxLength={80}
                          value={paymentRef}
                          onChange={(e) => setPaymentRef(e.target.value)}
                          className={`mt-2 ${inputCls}`}
                          placeholder="From your payment receipt"
                        />
                        {refError && <p className={errCls}>{refError}</p>}
                      </div>
                      <button
                        type="button"
                        onClick={onSubmitPaidRequest}
                        className="mt-4 inline-flex items-center justify-center rounded-md border-2 border-accent px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-accent/20"
                      >
                        Submit Paid Request
                      </button>
                    </>
                  ) : (
                    <div className="mt-5 rounded-lg border border-[#6B1026]/40 bg-bg p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6B1026]">
                        Payment provider not connected
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text/90">
                        Online payment for the {t.fee} Project Discovery Fee is not live yet. A
                        secure payment link (Paystack, Flutterwave, Stripe or similar) must be
                        connected before requests can be submitted. Your details remain saved in
                        this browser and nothing has been sent.
                      </p>
                      <button
                        type="button"
                        disabled
                        className="mt-4 inline-flex cursor-not-allowed items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text opacity-50"
                      >
                        Continue to Payment — {t.fee}
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setStep("requirements")}
                    className="mt-4 block text-xs font-semibold text-accent underline-offset-2 hover:underline"
                  >
                    ← Edit my requirements
                  </button>
                </div>
              )}

              <p className="text-xs text-muted">
                Questions before paying?{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Email me
                </a>
                .
              </p>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
