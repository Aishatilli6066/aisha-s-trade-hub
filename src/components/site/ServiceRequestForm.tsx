import { useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";

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

function buildMessage(d: FormState) {
  return `New Service Request — ASMAN Prime Hub

Name: ${d.name}
Email: ${d.email}
Company: ${d.company || "—"}
WhatsApp: ${d.whatsapp || "—"}
Country: ${d.country || "—"}

Service requested: ${d.service}
Budget: ${d.budget || "—"}
Timeline: ${d.timeline || "—"}

Project details:
${d.details}`;
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

export function ServiceRequestForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const message = buildMessage(form);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const mailtoFallback = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Service Request: ${form.service || "Inquiry"}`,
  )}&body=${encodeURIComponent(buildMessage(form))}`;

  const inputCls =
    "w-full rounded-md border border-text/20 bg-bg px-3 py-2.5 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-text";
  const errCls = "mt-1 text-xs text-[#6B1026]";

  return (
    <section
      id="service-request"
      aria-labelledby="service-request-title"
      className="border-b border-text/10"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Request a Proposal
          </p>
          <h2
            id="service-request-title"
            className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl"
          >
            Tell me about your project
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text/80 sm:text-lg">
            Share your sourcing or trade requirements and you&rsquo;ll receive a tailored proposal
            following a short consultation.
          </p>
        </FadeIn>

        <FadeIn>
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-10 grid gap-5 rounded-xl border border-text/10 bg-surface p-6 sm:p-8"
          >
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
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>
                      {t}
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
              <p className="mt-1 text-xs text-muted">
                {form.details.length}/2000 characters
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">
                Submitting opens WhatsApp with your request pre-filled. Prefer email?{" "}
                <a
                  href={mailtoFallback}
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Send via email
                </a>
                .
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Submit Request via WhatsApp
              </button>
            </div>

            {sent && (
              <div
                role="status"
                className="rounded-md border border-accent/50 bg-accent/15 px-4 py-3 text-sm text-text"
              >
                Thanks! Your request opened in WhatsApp. If it didn&rsquo;t, use the email link
                above.
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
