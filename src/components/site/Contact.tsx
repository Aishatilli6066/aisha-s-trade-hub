import { FadeIn } from "./FadeIn";

const WHATSAPP = "https://wa.me/2347042322970";
const EMAIL = "aishau6066@gmail.com";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b border-white/5">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <h2 id="contact-title" className="font-display text-3xl font-bold text-text sm:text-5xl">
            Ready to Move?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/85 sm:text-lg">
            I work with importers, exporters, manufacturers, and commodity buyers across four
            continents. If you have a deal, sourcing challenge, business idea, or trade
            question, reach out.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <FadeIn>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                WhatsApp
              </div>
              <div className="mt-2 font-display text-2xl text-text">+234-7042-322970</div>
              <div className="mt-3 text-sm text-muted">Tap to open WhatsApp</div>
            </a>
          </FadeIn>
          <FadeIn>
            <a
              href={`mailto:${EMAIL}`}
              className="block rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Email
              </div>
              <div className="mt-2 font-display text-2xl break-all text-text">{EMAIL}</div>
              <div className="mt-3 text-sm text-muted">Tap to compose an email</div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
