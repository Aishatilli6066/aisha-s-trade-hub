import { useState, type FormEvent } from "react";
import { FadeIn } from "./FadeIn";

const WHATSAPP = "https://wa.me/2347042322970";
const WHATSAPP_NUMBER = "2347042322970";
const EMAIL = "aishau6066@gmail.com";

type ContactState = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
};

const INITIAL: ContactState = { name: "", email: "", whatsapp: "", message: "" };

function validate(d: ContactState) {
  const errors: Partial<Record<keyof ContactState, string>> = {};
  if (!d.name.trim()) errors.name = "Please enter your name";
  if (d.name.length > 100) errors.name = "Name is too long";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errors.email = "Enter a valid email";
  if (d.email.length > 255) errors.email = "Email is too long";
  if (!d.message.trim() || d.message.trim().length < 10)
    errors.message = "Please write a short message (10+ characters)";
  if (d.message.length > 1500) errors.message = "Message is too long";
  return errors;
}

function buildMessage(d: ContactState) {
  return `New Inquiry — ASMAN Prime Hub

Name: ${d.name}
Email: ${d.email}
WhatsApp: ${d.whatsapp || "—"}

Message:
${d.message}`;
}

export function Contact() {
  const [form, setForm] = useState<ContactState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof ContactState>(k: K, v: ContactState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(form))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const mailtoFallback = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Inquiry from website",
  )}&body=${encodeURIComponent(buildMessage(form))}`;

  const inputCls =
    "w-full rounded-md border border-text/20 bg-bg px-3 py-2.5 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-text";
  const errCls = "mt-1 text-xs text-[#6B1026]";

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <h2 id="contact-title" className="font-display text-3xl font-bold text-text sm:text-5xl">
            Ready to Move?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/85 sm:text-lg">
            Have a quick question or want to get in touch? Send a short message below, or use the
            direct channels on the right.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn>
            <form
              onSubmit={onSubmit}
              noValidate
              className="grid gap-5 rounded-xl border border-text/10 bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className={labelCls}>
                    Name *
                  </label>
                  <input
                    id="c-name"
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
                  <label htmlFor="c-email" className={labelCls}>
                    Email *
                  </label>
                  <input
                    id="c-email"
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
              </div>
              <div>
                <label htmlFor="c-whatsapp" className={labelCls}>
                  WhatsApp / Phone
                </label>
                <input
                  id="c-whatsapp"
                  type="tel"
                  maxLength={30}
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  className={`mt-2 ${inputCls}`}
                  placeholder="+234..."
                />
              </div>
              <div>
                <label htmlFor="c-message" className={labelCls}>
                  Message *
                </label>
                <textarea
                  id="c-message"
                  required
                  rows={5}
                  maxLength={1500}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={`mt-2 ${inputCls} resize-y`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className={errCls}>{errors.message}</p>}
                <p className="mt-1 text-xs text-muted">{form.message.length}/1500 characters</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                  Opens WhatsApp with your message pre-filled.{" "}
                  <a
                    href={mailtoFallback}
                    className="font-semibold text-accent underline-offset-2 hover:underline"
                  >
                    Send by email instead
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Send Message
                </button>
              </div>
              {sent && (
                <div
                  role="status"
                  className="rounded-md border border-accent/50 bg-accent/15 px-4 py-3 text-sm text-text"
                >
                  Thanks! Your message opened in WhatsApp.
                </div>
              )}
            </form>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-text/15 bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-text">
                  WhatsApp
                </div>
                <div className="mt-2 font-display text-2xl text-text">+234-7042-322970</div>
                <div className="mt-3 text-sm text-muted">Tap to open WhatsApp</div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block rounded-lg border border-text/15 bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-text">
                  Email
                </div>
                <div className="mt-2 font-display text-xl break-all text-text">{EMAIL}</div>
                <div className="mt-3 text-sm text-muted">Tap to compose an email</div>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
