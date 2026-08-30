import { FadeIn } from "./FadeIn";

const stats: { value: string; label: string; badge?: boolean }[] = [
  { value: "5+", label: "Years International Trade Experience" },
  { value: "4", label: "Continents — Clients Served" },
  { value: "Verified", label: "International Supplier Network", badge: true },
  { value: "10+", label: "Export Commodities" },
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Track Record
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-text sm:text-4xl">
            Experience That Keeps Your Capital Out of the Wrong Deal
          </h2>
        </FadeIn>

        <dl className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <FadeIn key={s.label}>
              <div className="rounded-lg border border-accent/30 bg-bg p-5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  {"badge" in s && s.badge ? (
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-deep/40 bg-accent/10 text-gold-deep sm:h-12 sm:w-12">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3l7 3v5c0 4.4-3 8.2-7 10-4-1.8-7-5.6-7-10V6l7-3z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </span>
                  ) : (
                    <span className="block font-display text-3xl font-bold text-gold-deep sm:text-4xl">
                      {s.value}
                    </span>
                  )}
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true">
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
