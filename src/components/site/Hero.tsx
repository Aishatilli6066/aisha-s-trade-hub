const WHATSAPP = "https://wa.me/2347042322970";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/5">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#C8963E" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#C8963E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C8963E" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M -50 460 Q 300 120 600 280 T 1250 180"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.2"
          className="arc-draw"
        />
        <circle cx="180" cy="380" r="2.5" fill="#C8963E" />
        <circle cx="600" cy="280" r="2.5" fill="#C8963E" />
        <circle cx="980" cy="220" r="2.5" fill="#C8963E" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <p className="font-display text-2xl text-text sm:text-3xl">Aisha Usman</p>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Founder, ASMAN Prime Hub
        </p>
        <p className="text-sm text-muted sm:text-base">
          International Trade Consultant &amp; Global Sourcing Specialist
        </p>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Where global trade gets done
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-text sm:text-6xl lg:text-7xl">
          Source, verify, and ship — <span className="text-accent">without getting burned.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/85 sm:text-lg">
          International trade consulting and global sourcing for importers, exporters, and
          commodity buyers who need expertise they can trust — not promises they can't verify.
        </p>

        <p className="mt-4 text-sm text-muted">
          Based in Kano, Nigeria. Operating across Asia · Africa · Middle East · Europe.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Start a Conversation
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-md border border-accent/60 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Explore My Services
          </a>
        </div>
      </div>
    </section>
  );
}
