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
      <>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M20.52 3.449A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.423-8.452zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.002-5.45 4.437-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.885-9.884 9.885z" />
      </>
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
