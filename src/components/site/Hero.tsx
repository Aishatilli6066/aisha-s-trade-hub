import aishaPhoto from "@/assets/aisha-usman.jpg";

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

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-24 lg:py-28">
        <div className="flex flex-col items-center gap-6 sm:gap-10 md:flex-row md:items-center md:justify-between lg:gap-16">
          <figure className="order-1 mx-auto w-32 shrink-0 sm:w-56 md:order-2 md:mx-0 md:w-72 lg:w-80">
            <div className="overflow-hidden rounded-full border-2 border-accent/40 shadow-2xl shadow-black/30">
              <img
                src={aishaPhoto}
                alt="Aisha Usman, Founder of ASMAN Prime Hub"
                className="aspect-square h-full w-full object-cover"
                style={{ objectPosition: "50% 22%" }}
                width={400}
                height={400}
                loading="eager"
              />
            </div>
          </figure>

          <div className="order-2 min-w-0 flex-1 text-center md:order-1 md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Aisha Usman — International Trade Consultant
            </p>

            <h1 className="mt-4 font-display text-[1.6rem] font-bold leading-[1.18] text-text sm:mt-6 sm:text-5xl lg:text-6xl">
              Know Whether the Deal Is Worth It — Before You Commit Your Capital
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text/85 sm:mt-6 sm:text-lg">
              Independent assessment of your import or export opportunity — product and market
              viability, true landed cost, supplier risk and compliance — then execution through
              global sourcing, supplier verification and agricultural commodity export. Based in
              Nigeria, working across Africa, Asia, the Middle East and Europe.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap md:items-start md:justify-start">
              <a
                href="#advisory"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
              >
                Evaluate My Opportunity — $250
              </a>
              <a
                href="#done-for-you"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-accent px-6 py-3 text-sm font-semibold text-gold-deep transition-colors hover:bg-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
              >
                I've Decided — Scope My Project
              </a>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}


