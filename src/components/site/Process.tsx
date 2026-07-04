import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Trade Opportunity Assessment",
    desc: "Define the product, target market, technical specifications, budget, and commercial objectives — before a single supplier is contacted.",
  },
  {
    n: "02",
    title: "Supplier Intelligence & Verification",
    desc: "Identify, verify, audit, and qualify suppliers or buyers. Independent due diligence protects capital before any commitment is made.",
  },
  {
    n: "03",
    title: "Commercial Structuring",
    desc: "Negotiate pricing, Incoterms, payment terms, production timelines, and risk controls that hold up in a real cross-border transaction.",
  },
  {
    n: "04",
    title: "Documentation & Logistics",
    desc: "Coordinate export documentation, inspection, compliance, shipping, and delivery — the operational detail that determines whether the deal closes.",
  },
  {
    n: "05",
    title: "Ongoing Trade Advisory",
    desc: "Stay engaged through execution, supplier relationships, and future procurement rounds — so gains compound rather than reset.",
  },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Proprietary Method
          </p>
          <h2 id="process-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            The Trade Execution Framework
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            A five-stage framework I use on every engagement — from opportunity assessment
            through supplier verification, commercial structuring, documentation, and ongoing
            advisory.
          </p>
        </FadeIn>

        <ol className="mt-16 space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.n} className="relative md:pt-8">
              <FadeIn>
                <div className="hidden md:block absolute left-0 right-0 top-0 h-px bg-accent/30" />
                <div className="font-display text-xs tracking-[0.25em] text-accent">
                  STAGE {s.n}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text/75">{s.desc}</p>
              </FadeIn>
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 h-px w-12 bg-accent/30" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
