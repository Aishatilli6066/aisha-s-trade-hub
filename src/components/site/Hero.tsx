import aishaPhoto from "@/assets/aisha-usman.png.asset.json";

const WHATSAPP = "https://wa.me/2347042322970";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-text/10">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M -50 460 Q 300 120 600 280 T 1250 180"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.2"
          className="arc-draw"
        />
        <circle cx="180" cy="380" r="2.5" fill="#D4AF37" />
        <circle cx="600" cy="280" r="2.5" fill="#D4AF37" />
        <circle cx="980" cy="220" r="2.5" fill="#D4AF37" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between lg:gap-16">
          <figure className="order-1 w-full max-w-[14rem] shrink-0 sm:max-w-[16rem] md:order-2 md:max-w-[18rem] lg:max-w-[20rem]">
            <div className="overflow-hidden rounded-full border-2 border-accent/40 shadow-2xl shadow-black/30">
              <img
                src={aishaPhoto.url}
                alt="Aisha Usman — International Trade Consultant"
                className="aspect-square h-full w-full object-cover"
                style={{ objectPosition: "50% 22%" }}
                width={400}
                height={400}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </figure>

          <div className="order-2 flex-1 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text">
              Aisha Usman
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] text-text sm:text-6xl lg:text-7xl">
              International trade,<br />executed with precision.
            </h1>
            <p className="mt-5 font-display text-lg text-gold-deep sm:text-2xl">
              Global Sourcing · Supplier Verification · Import &amp; Export Strategy
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/85 sm:text-lg">
              I advise importers, exporters, manufacturers, and procurement teams on sourcing
              products globally, verifying suppliers, negotiating with manufacturers, and
              structuring cross-border transactions that hold up under commercial pressure.
              The goal is straightforward: reduce risk, protect margin, and move real trade forward.
            </p>

            <p className="mt-4 text-sm text-muted">
              Founder, ASMAN Prime Hub · Based in Kano, Nigeria · Advising clients across Asia, Africa, the Middle East &amp; Europe.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Chat on WhatsApp
              </a>
              <a
                href="#service-request"
                className="inline-flex items-center rounded-md border border-accent/60 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Request a Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
