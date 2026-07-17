import { FadeIn } from "./FadeIn";

const stats = [
  { value: "$2M+", label: "Trade Opportunities Structured" },
  { value: "4", label: "Continents Served" },
  { value: "50+", label: "Suppliers Vetted" },
  { value: "10+", label: "Years Trade Experience" },
];

const capabilities = [
  "International Supplier Network",
  "Agricultural Commodity Export Support",
  "Verified Manufacturer Sourcing",
  "End-to-End Procurement Coordination",
  "Import & Export Advisory",
  "Trade Documentation Guidance",
  "Supplier Verification & Due Diligence",
  "Private Label Product Development",
];

export function ProofStrip() {
  return (
    <section aria-label="Trade and procurement expertise" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Track Record
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-text sm:text-4xl">
            Trade &amp; Procurement Expertise Across Global Markets
          </h2>
        </FadeIn>

        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <FadeIn key={s.label}>
              <div className="rounded-lg border border-accent/30 bg-bg p-5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold text-accent sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-text/75">
                    {s.label}
                  </span>
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <FadeIn key={c}>
              <li className="flex items-start gap-3 rounded-lg border border-text/10 bg-bg p-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span className="text-sm font-medium text-text/85">{c}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
