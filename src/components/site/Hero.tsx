import aishaPhoto from "@/assets/aisha-usman.jpg";
import { WhatsAppIcon } from "./icons";

import { WHATSAPP_URL as WHATSAPP } from "@/lib/discovery";

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
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between lg:gap-16">
          <figure className="order-1 mx-auto w-40 shrink-0 sm:w-56 md:order-2 md:mx-0 md:w-72 lg:w-80">
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
              Founder, ASMAN Prime Hub Global Services Limited
            </p>
            <p className="mt-2 font-display text-xl font-bold tracking-tight text-text sm:text-3xl">
              Aisha Usman
            </p>
            <p className="mt-2 text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.15em] text-gold-deep sm:text-xs sm:tracking-[0.2em]">
              International Trade Consultant <span className="text-text/40">|</span> Global Sourcing Specialist <span className="text-text/40">|</span> Export Strategist
            </p>

            <h1 className="mt-5 font-display text-[1.75rem] font-bold leading-[1.15] text-text sm:mt-6 sm:text-5xl lg:text-6xl">
              Helping Businesses Source, Verify, Trade and Expand Across International Markets
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text/85 sm:mt-6 sm:text-lg">
              I help importers, exporters, manufacturers, procurement teams, commodity buyers and
              growing businesses reduce trade risk through supplier verification, sourcing strategy,
              export structuring, landed-cost analysis and import/export business planning.
            </p>

            <p className="mt-4 text-sm text-muted">
              Based in Nigeria. Working with clients and trade opportunities across Africa, Asia,
              the Middle East and Europe. Corporate sourcing and execution are delivered through
              ASMAN Prime Hub Global Services Limited, a CAC and NEPC registered company.
            </p>

            <p className="mt-2 text-sm text-muted">
              Written advisory over email and WhatsApp. Calls only when a matter requires one.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap md:items-start md:justify-start">
              <a
                href="#advisory"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
              >
                Start a Strategy Advisory
              </a>
              <a
                href="#done-for-you"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-accent px-6 py-3 text-sm font-semibold text-gold-deep transition-colors hover:bg-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
              >
                Request a Written Proposal
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-text/20 px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-[#25D366] hover:text-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
              >
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                Message on WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              Not sure which you need? Message me first — I will point you to the right one before
              you pay anything.
            </p>
          </div>


        </div>

      </div>
    </section>
  );
}


