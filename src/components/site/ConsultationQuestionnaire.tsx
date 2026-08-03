import { useMemo, useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";
import { CONSULTATION_STEPS, CONTACT_EMAIL } from "@/lib/discovery";
import { fileList, mailtoUrl, whatsappUrl } from "@/lib/submit";

const FOCUS_OPTIONS = [
  "Global product sourcing",
  "Supplier identification & verification",
  "OEM / ODM manufacturing",
  "Private label product development",
  "Agricultural commodity export",
  "Import / export documentation & compliance",
  "Pricing, costing & landed cost",
  "Logistics & shipping",
  "Payment terms & risk management",
  "Market entry strategy",
];

type State = {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  website: string;
  focus: string[];
  objectives: string;
  product: string;
  origin: string;
  destination: string;
  volume: string;
  challenges: string;
  q1: string;
  q2: string;
  q3: string;
  paymentRef: string;
  consent: boolean;
};

const INITIAL: State = {
  name: "",
  email: "",
  company: "",
  phone: "",
  country: "",
  website: "",
  focus: [],
  objectives: "",
  product: "",
  origin: "",
  destination: "",
  volume: "",
  challenges: "",
  q1: "",
  q2: "",
  q3: "",
  paymentRef: "",
  consent: false,
};

const inputCls =
  "w-full rounded-md border border-text/20 bg-bg px-3 py-2.5 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
const labelCls = "block text-xs font-semibold uppercase tracking-wider text-text";
const errCls = "mt-1 text-xs text-[#6B1026]";

function sectionTitle(n: number, title: string) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-bold text-[#6B1026]">
        {n}
      </span>
      <h3 className="font-display text-lg font-bold text-text">{title}</h3>
    </div>
  );
}

export function ConsultationQuestionnaire() {
  const [d, setD] = useState<State>(INITIAL);
  const [documents, setDocuments] = useState<File[]>([]);
  const [receipt, setReceipt] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof State>(k: K, v: State[K]) => setD((p) => ({ ...p, [k]: v }));

  const body = useMemo(
    () => `INTERNATIONAL TRADE STRATEGY CONSULTATION — $250 (PAID, AWAITING MANUAL VERIFICATION)

— CLIENT INFORMATION —
Full name: ${d.name}
Email: ${d.email}
Company: ${d.company || "—"}
Phone / WhatsApp: ${d.phone || "—"}
Country: ${d.country || "—"}
Website: ${d.website || "—"}

— CONSULTATION FOCUS —
${d.focus.length ? d.focus.map((f) => `• ${f}`).join("\n") : "—"}

— BUSINESS OBJECTIVES —
${d.objectives}

— PRODUCT / TRADE DETAILS —
Product or commodity: ${d.product || "—"}
Origin market: ${d.origin || "—"}
Destination market: ${d.destination || "—"}
Quantity / volume: ${d.volume || "—"}

— CURRENT CHALLENGES —
${d.challenges}

— TOP QUESTIONS —
1. ${d.q1 || "—"}
2. ${d.q2 || "—"}
3. ${d.q3 || "—"}

— PAYMENT (MANUAL VERIFICATION) —
Flutterwave payment reference: ${d.paymentRef}
Receipt file: ${receipt ? receipt.name : "— not attached —"}

— SUPPORTING DOCUMENTS —
${fileList(documents)}

Please attach the receipt and the documents listed above to this email before sending.
Consent to be contacted: ${d.consent ? "Yes" : "No"}`,
    [d, documents, receipt],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!d.name.trim()) err.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) err.email = "Enter a valid email";
    if (!d.focus.length) err.focus = "Select at least one focus area";
    if (d.objectives.trim().length < 20) err.objectives = "Please describe your objectives (20+ characters)";
    if (d.challenges.trim().length < 20) err.challenges = "Please describe your challenges (20+ characters)";
    if (!d.q1.trim()) err.q1 = "Add at least one question";
    if (d.paymentRef.trim().length < 4) err.paymentRef = "Enter your Flutterwave payment reference";
    if (!receipt) err.receipt = "Upload your payment receipt";
    if (!d.consent) err.consent = "Please confirm to continue";
    setErrors(err);
    if (Object.keys(err).length) return;

    window.location.href = mailtoUrl({
      subject: `Consultation Questionnaire — ${d.name} — Ref ${d.paymentRef.trim()}`,
      body,
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FadeIn>
        <div
          role="status"
          className="rounded-xl border border-accent/50 bg-accent/15 p-6 sm:p-8"
        >
          <p className="font-display text-2xl font-bold text-text">
            Questionnaire submitted — payment under manual review
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text/90">
            Thank you, {d.name.split(" ")[0] || "there"}. Your consultation questionnaire and
            payment reference <strong>{d.paymentRef}</strong> have been sent to{" "}
            <strong>{CONTACT_EMAIL}</strong>. Your Flutterwave payment will be{" "}
            <strong>verified manually</strong>. Once verified, the Cal.com scheduling link for your
            60-minute session will be sent to you by email or WhatsApp. There is no automatic
            scheduling — please do not book a time until you receive that link.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text/90">
            If your email client did not open, send the questionnaire manually:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={mailtoUrl({
                subject: `Consultation Questionnaire — ${d.name} — Ref ${d.paymentRef.trim()}`,
                body,
              })}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-[#6B1026] shadow-sm transition-opacity hover:opacity-90"
            >
              Open email again
            </a>
            <a
              href={whatsappUrl(body)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-text/20 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent"
            >
              Send on WhatsApp instead
            </a>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <>
      <FadeIn>
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-text/75">
          {CONSULTATION_STEPS.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="rounded-full border border-text/15 bg-surface px-4 py-2">{s}</span>
              {i < CONSULTATION_STEPS.length - 1 && (
                <span aria-hidden="true" className="text-accent">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </FadeIn>

      <FadeIn>
        <form
          onSubmit={onSubmit}
          noValidate
          className="mt-10 grid gap-10 rounded-xl border border-text/10 bg-surface p-6 sm:p-8"
        >
          {/* 1 — Client information */}
          <div className="grid gap-5">
            {sectionTitle(1, "Client Information")}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className={labelCls}>
                  Full name *
                </label>
                <input
                  id="c-name"
                  maxLength={100}
                  value={d.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className={labelCls}>
                  Email *
                </label>
                <input
                  id="c-email"
                  type="email"
                  maxLength={255}
                  value={d.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-company" className={labelCls}>
                  Company
                </label>
                <input
                  id="c-company"
                  maxLength={120}
                  value={d.company}
                  onChange={(e) => set("company", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="c-phone" className={labelCls}>
                  Phone / WhatsApp
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  maxLength={30}
                  value={d.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                  placeholder="+234..."
                />
              </div>
              <div>
                <label htmlFor="c-country" className={labelCls}>
                  Country
                </label>
                <input
                  id="c-country"
                  maxLength={60}
                  value={d.country}
                  onChange={(e) => set("country", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="c-website" className={labelCls}>
                  Website
                </label>
                <input
                  id="c-website"
                  maxLength={200}
                  value={d.website}
                  onChange={(e) => set("website", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
            </div>
          </div>

          {/* 2 — Consultation focus */}
          <div className="grid gap-5">
            {sectionTitle(2, "Consultation Focus")}
            <fieldset>
              <legend className={labelCls}>Select all that apply *</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {FOCUS_OPTIONS.map((opt) => {
                  const checked = d.focus.includes(opt);
                  return (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm transition-colors ${
                        checked ? "border-accent bg-accent/10" : "border-text/15 hover:border-accent/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          set(
                            "focus",
                            checked ? d.focus.filter((f) => f !== opt) : [...d.focus, opt],
                          )
                        }
                        className="mt-0.5 h-4 w-4 accent-[#6B1026]"
                      />
                      <span className="text-text/90">{opt}</span>
                    </label>
                  );
                })}
              </div>
              {errors.focus && <p className={errCls}>{errors.focus}</p>}
            </fieldset>
          </div>

          {/* 3 — Business objectives */}
          <div className="grid gap-5">
            {sectionTitle(3, "Business Objectives")}
            <div>
              <label htmlFor="c-objectives" className={labelCls}>
                What do you want to achieve from this consultation? *
              </label>
              <textarea
                id="c-objectives"
                rows={4}
                maxLength={2000}
                value={d.objectives}
                onChange={(e) => set("objectives", e.target.value)}
                className={`mt-2 ${inputCls}`}
              />
              {errors.objectives && <p className={errCls}>{errors.objectives}</p>}
            </div>
          </div>

          {/* 4 — Product / trade details */}
          <div className="grid gap-5">
            {sectionTitle(4, "Product / Trade Details")}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-product" className={labelCls}>
                  Product or commodity
                </label>
                <input
                  id="c-product"
                  maxLength={160}
                  value={d.product}
                  onChange={(e) => set("product", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="c-volume" className={labelCls}>
                  Quantity / volume
                </label>
                <input
                  id="c-volume"
                  maxLength={120}
                  value={d.volume}
                  onChange={(e) => set("volume", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="c-origin" className={labelCls}>
                  Origin market
                </label>
                <input
                  id="c-origin"
                  maxLength={120}
                  value={d.origin}
                  onChange={(e) => set("origin", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
              <div>
                <label htmlFor="c-destination" className={labelCls}>
                  Destination market
                </label>
                <input
                  id="c-destination"
                  maxLength={120}
                  value={d.destination}
                  onChange={(e) => set("destination", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                />
              </div>
            </div>
          </div>

          {/* 5 — Current challenges */}
          <div className="grid gap-5">
            {sectionTitle(5, "Current Challenges")}
            <div>
              <label htmlFor="c-challenges" className={labelCls}>
                What challenges are you facing right now? *
              </label>
              <textarea
                id="c-challenges"
                rows={4}
                maxLength={2000}
                value={d.challenges}
                onChange={(e) => set("challenges", e.target.value)}
                className={`mt-2 ${inputCls}`}
              />
              {errors.challenges && <p className={errCls}>{errors.challenges}</p>}
            </div>
          </div>

          {/* 6 — Top questions */}
          <div className="grid gap-5">
            {sectionTitle(6, "Your Top Questions")}
            <div className="grid gap-4">
              {(["q1", "q2", "q3"] as const).map((k, i) => (
                <div key={k}>
                  <label htmlFor={`c-${k}`} className={labelCls}>
                    Question {i + 1}
                    {i === 0 ? " *" : ""}
                  </label>
                  <input
                    id={`c-${k}`}
                    maxLength={300}
                    value={d[k]}
                    onChange={(e) => set(k, e.target.value)}
                    className={`mt-2 ${inputCls}`}
                  />
                  {i === 0 && errors.q1 && <p className={errCls}>{errors.q1}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* 7 — Documents */}
          <div className="grid gap-5">
            {sectionTitle(7, "Supporting Documents")}
            <div>
              <label htmlFor="c-docs" className={labelCls}>
                Upload specifications, quotations, certificates (multiple files)
              </label>
              <input
                id="c-docs"
                type="file"
                multiple
                onChange={(e) => setDocuments(Array.from(e.target.files ?? []))}
                className={`mt-2 ${inputCls} file:mr-3 file:rounded file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#6B1026]`}
              />
              {documents.length > 0 && (
                <ul className="mt-2 space-y-1 text-xs text-muted">
                  {documents.map((f) => (
                    <li key={f.name}>• {f.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* 8 — Payment */}
          <div className="grid gap-5 rounded-lg border border-accent/40 bg-accent/10 p-5">
            {sectionTitle(8, "Payment Verification (Manual)")}
            <p className="text-sm leading-relaxed text-text/90">
              Enter the Flutterwave payment reference from your $250 receipt and upload the receipt.
              Payments are verified by hand — nothing is confirmed or scheduled automatically.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-ref" className={labelCls}>
                  Flutterwave payment reference *
                </label>
                <input
                  id="c-ref"
                  maxLength={80}
                  value={d.paymentRef}
                  onChange={(e) => set("paymentRef", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                  placeholder="e.g. FLW-MOCK-123456789"
                />
                {errors.paymentRef && <p className={errCls}>{errors.paymentRef}</p>}
              </div>
              <div>
                <label htmlFor="c-receipt" className={labelCls}>
                  Payment receipt upload *
                </label>
                <input
                  id="c-receipt"
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => setReceipt(e.target.files?.[0] ?? null)}
                  className={`mt-2 ${inputCls} file:mr-3 file:rounded file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#6B1026]`}
                />
                {receipt && <p className="mt-2 text-xs text-muted">• {receipt.name}</p>}
                {errors.receipt && <p className={errCls}>{errors.receipt}</p>}
              </div>
            </div>
          </div>

          {/* 9 — Consent */}
          <div className="grid gap-3">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-text/90">
              <input
                type="checkbox"
                checked={d.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#6B1026]"
              />
              <span>
                I confirm the information above is accurate, that my $250 payment will be verified
                manually, and that I consent to being contacted by email or WhatsApp regarding this
                consultation. *
              </span>
            </label>
            {errors.consent && <p className={errCls}>{errors.consent}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-[#6B1026] shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
            >
              Submit Questionnaire for Manual Verification
            </button>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Your questionnaire opens in your email client addressed to {CONTACT_EMAIL}. Attach the
              receipt and any documents you selected before sending. After manual verification, the
              Cal.com scheduling link is sent to you by email or WhatsApp.
            </p>
          </div>
        </form>
      </FadeIn>
    </>
  );
}
