import aishaPhoto from "@/assets/aisha-usman.jpg";

const keyMetrics = [
  { value: "5+", label: "Years Experience", detail: "Global Trade & Structuring" },
  { value: "4", label: "Continents", detail: "Africa, Asia, ME & Europe" },
  { value: "50+", label: "Supplier Network", detail: "Verified Counterparties" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-text/10 bg-bg">
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

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:flex-row md:items-center md:justify-between lg:gap-16">
          <figure className="order-1 mx-auto w-36 shrink-0 sm:w-56 md:order-2 md:mx-0 md:w-72 lg:w-80">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-2 border-accent/50 bg-surface shadow-xl shadow-text/10">
                <img
                  src={aishaPhoto}
                  alt="Aisha Usman, International Trade Consultant and Founder of ASMAN Prime Hub"
                  className="aspect-[4/5] h-full w-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                  width={400}
                  height={500}
                  loading="eager"
                />
              </div>
              <div className="mt-3 rounded-lg border border-accent/40 bg-surface/90 px-3 py-2 text-center backdrop-blur-sm">
                <p className="font-display text-xs font-bold text-text">Aisha Usman</p>
                <p className="text-[11px] font-medium text-gold-deep">
                  Founder, ASMAN Prime Hub Global Services Ltd
                </p>
              </div>
            </div>
          </figure>

          <div className="order-2 min-w-0 flex-1 text-center md:order-1 md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
              International Trade Advisory &amp; Due Diligence
            </div>

            <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Protecting Capital &amp; Structuring Compliant Cross-Border Trade
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/85 sm:text-lg">
              Independent assessment of import and export opportunities — product viability,
              verified landed cost, supplier screening, and trade documentation. Grounded execution
              in Nigeria with active corridors across Africa, Asia, the Middle East, and Europe.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#advisory"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Start Advisory Review — $250
              </a>
              <a
                href="#done-for-you"
                className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-transparent px-6 py-3.5 text-sm font-semibold text-gold-deep transition-colors hover:bg-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Scope Done-for-You Project
              </a>
            </div>

            {/* Verified Quick Stats Strip */}
            <div className="mt-10 grid grid-cols-3 gap-2 border-t border-text/10 pt-6 sm:gap-4">
              {keyMetrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-surface/70 p-3 text-left">
                  <div className="font-display text-xl font-bold text-text sm:text-2xl">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-gold-deep">{m.label}</div>
                  <div className="hidden text-[11px] text-muted sm:block">{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
