import { FadeIn } from "./FadeIn";

const WHATSAPP = "https://wa.me/2347042322970";
const WHATSAPP_DISPLAY = "+234 704 232 2970";
const EMAIL = "aishau6066@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/liaisha-usman-consultant";

const CHANNELS = [
  {
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP,
    note: "Fastest for quick questions and scoping. Typical reply within a few hours during business hours (WAT).",
    external: true,
    icon: (
      <path d="M20.5 3.5A11.5 11.5 0 003.6 18.3L2 22l3.8-1.6A11.5 11.5 0 1020.5 3.5zm-8.5 18a9.5 9.5 0 01-4.8-1.3l-.3-.2-2.2.9.9-2.1-.2-.4A9.5 9.5 0 1112 21.5z" />
    ),
    filled: true,
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: "Best for detailed briefs, specifications and documents. Replies within one business day.",
    external: false,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </>
    ),
    filled: false,
  },
  {
    label: "LinkedIn",
    value: "Aisha Usman — Trade Consultant",
    href: LINKEDIN,
    note: "Professional background, current focus and field notes on sourcing and export.",
    external: true,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9z" />
    ),
    filled: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="border-t border-text/10 bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-text sm:text-4xl">
            Not Sure Which Service Fits? Ask First.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/80">
            You are welcome to describe your situation before paying for anything. Tell me the
            product or commodity, the market you are targeting and where you are stuck, and I will
            tell you honestly which service applies — or whether none of them does yet.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group rounded-xl border border-text/10 bg-bg p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-accent/50 text-gold-deep">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={c.filled ? "currentColor" : "none"}
                    stroke={c.filled ? "none" : "currentColor"}
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-text">{c.label}</h3>
                <p className="mt-1 break-words text-sm font-semibold text-gold-deep">{c.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-text/80">{c.note}</p>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 rounded-xl border border-accent/40 bg-bg p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-text">
                Ready to start instead of ask?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text/80">
                Choose a service, complete the form for it, and pay through the secure Flutterwave
                link. Every payment is verified by hand before work begins.
              </p>
            </div>
            <a
              href="#pricing"
              className="mt-4 inline-flex shrink-0 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:mt-0"
            >
              View services & pricing
            </a>
          </div>
        </FadeIn>

        <p className="mt-6 text-xs leading-relaxed text-muted">
          Based in Kano, Nigeria (WAT). Working with clients across Africa, Asia, the Middle East and
          Europe. Business enquiries only — no unsolicited marketing, please.
        </p>
      </div>
    </section>
  );
}
