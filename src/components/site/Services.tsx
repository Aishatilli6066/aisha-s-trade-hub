import { FadeIn } from "./FadeIn";

const primary = [
  {
    title: "Global Sourcing & Supplier Verification",
    desc: "Supplier identification, manufacturer sourcing, due diligence, independent verification, factory assessment support, procurement coordination, and supplier risk reduction.",
  },
  {
    title: "Agricultural Commodity Export Structuring",
    desc: "Support for sesame, ginger, hibiscus, moringa, groundnuts, and related commodities — including supplier sourcing, documentation guidance, export readiness, and transaction support.",
  },
];

const supporting = [
  "Landed Cost Analysis",
  "OEM/ODM Coordination",
  "Trade Documentation Support",
  "Import & Export Consulting",
  "Private Label Development",
  "Custom Machinery Procurement",
  "Business Plan Development",
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Advisory Services
          </p>
          <h2 id="services-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Where I Add the Most Value
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Two focused practice areas, backed by a wider set of trade, procurement, and
            manufacturing capabilities.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {primary.map((s) => (
            <FadeIn key={s.title}>
              <article className="h-full rounded-xl border-2 border-accent/40 bg-bg p-8">
                <h3 className="font-display text-2xl font-semibold text-text">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text/85">{s.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 rounded-xl border border-text/10 bg-bg p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Supporting Expertise
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supporting.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-text/85">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
