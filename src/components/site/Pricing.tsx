import { FadeIn } from "./FadeIn";

const highlights = [
  "Supplier verification & sourcing",
  "Commodity export support",
  "OEM/ODM coordination",
  "Custom machinery procurement",
  "Private label development",
  "Trade documentation & procurement",
  "Import / export strategy",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-b border-text/10 bg-surface"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Request a Proposal
          </p>
          <h2
            id="pricing-title"
            className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl"
          >
            Every trade opportunity is <span className="text-accent">different</span>
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn>
            <div className="space-y-5 text-base leading-relaxed text-text/85 sm:text-lg">
              <p>
                Whether you require supplier verification, global product sourcing, commodity
                export support, OEM/ODM manufacturing coordination, private label product
                development, custom machinery sourcing, trade documentation, procurement support,
                or a complete import/export business strategy &mdash; every engagement is
                carefully scoped to deliver practical, measurable, and commercially viable
                results.
              </p>
              <p>
                Final fees are determined by project scope, transaction value, sourcing
                requirements, complexity, and the level of support required.
              </p>
              <p>
                For large-scale sourcing projects, commodity contracts, manufacturing
                assignments, procurement mandates, and strategic trade advisory engagements,
                customized proposals are provided following an initial consultation.
              </p>
              <a
                href="#service-request"
                className="mt-4 inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Request a Proposal →
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-xl border-2 border-accent/40 bg-bg p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-text">
                Engagements From
              </p>
              <p className="mt-3 font-display text-5xl font-bold text-text">
                $250<span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                Initial consultation, project assessment &amp; scoped advisory engagements.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-text/85">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-10 rounded-xl border border-text/10 bg-bg p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Need a Custom Solution?
            </p>
            <p className="mt-3 text-base leading-relaxed text-text/85 sm:text-lg">
              Large-scale sourcing, manufacturing, export, procurement, and international trade
              projects are quoted individually based on requirements, deliverables, and expected
              outcomes.
            </p>
            <p className="mt-4 text-sm text-muted">
              Ready to discuss your project? Submit your requirements to receive a tailored
              proposal and recommendation.
            </p>
            <a
              href="#service-request"
              className="mt-5 inline-flex items-center rounded-md border border-accent/60 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              Request a Proposal →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
