import { FadeIn } from "./FadeIn";

const stats = [
  { value: "5+", label: "Years Trade Experience", sub: "Structuring & Verification" },
  { value: "4", label: "Continents Served", sub: "Africa, Asia, ME & Europe" },
  { value: "50+", label: "Verified Suppliers", sub: "Screened Counterparties" },
  { value: "10+", label: "Export Commodities", sub: "Agro & Manufactured" },
];

const complianceCredentials = [
  {
    title: "CAC Registered Entity",
    detail: "Execution through ASMAN Prime Hub Global Services Limited",
  },
  {
    title: "NEPC Registered Exporter",
    detail: "Compliant Nigerian Export Promotion Council registration",
  },
  {
    title: "NAQS & Phytosanitary",
    detail: "Guidance on quarantine standards and pest-free certification",
  },
  {
    title: "Trade Documentation",
    detail: "Practical compliance for Form M, Form NXP, and Bills of Lading",
  },
];

export function ProofStrip() {
  return (
    <section
      aria-label="Trade track record and compliance"
      className="border-b border-text/10 bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                Track Record &amp; Compliance
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl">
                Experience That Keeps Your Capital Out of the Wrong Deal
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted">
              Every engagement is backed by verifiable registration, physical supplier due
              diligence, and compliant documentation.
            </p>
          </div>
        </FadeIn>

        <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <FadeIn key={s.label}>
              <div className="rounded-xl border border-accent/40 bg-bg p-5 text-center shadow-sm">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold text-text sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-gold-deep">
                    {s.label}
                  </span>
                  <span className="mt-1 block text-[11px] text-muted">{s.sub}</span>
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {complianceCredentials.map((c) => (
            <FadeIn key={c.title}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-text/10 bg-bg p-4 transition-colors hover:border-accent/60">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-gold-deep"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="font-display text-xs font-bold text-text">{c.title}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-text/80">{c.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
