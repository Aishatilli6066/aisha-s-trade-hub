import { FadeIn } from "./FadeIn";

const points = [
  {
    title: "Independent Supplier Verification",
    description: "Suppliers are vetted on credentials, factory status, and trade history before any commitment.",
  },
  {
    title: "Procurement Risk Reduction",
    description: "Structured due diligence to surface red flags and protect capital before contracts are signed.",
  },
  {
    title: "Trade Opportunity Assessment",
    description: "Honest feasibility reviews on products, markets, suppliers, and transaction structures.",
  },
  {
    title: "Cost Negotiation Support",
    description: "Commercial guidance on pricing, terms, and Incoterms to improve landed-cost outcomes.",
  },
  {
    title: "Export Market Guidance",
    description: "Direction on destination market expectations, buyer profiles, and competitive positioning.",
  },
  {
    title: "Documentation Advisory",
    description: "Practical guidance on Form M, NXP, NAQS, phytosanitary, packing lists, and shipping paperwork.",
  },
  {
    title: "International Sourcing Expertise",
    description: "Hands-on experience across Asia, Africa, the Middle East, and Europe.",
  },
  {
    title: "CAC & NEPC Compliant",
    description: "Fully registered in Nigeria with the CAC and NEPC — a legitimate advisor for cross-border trade and export transactions.",
  },
  {
    title: "Transparent Communication",
    description: "Clear scope, honest recommendations, and direct updates — no hidden markups, no runaround.",
  },
  {
    title: "Practical Trade Execution",
    description: "Decision-grade advice from someone who has structured live transactions, not theory.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-bg border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Advisor Value
          </p>
          <h2 id="why-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Why Work With Me
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <FadeIn key={p.title}>
              <div className="h-full rounded-lg border border-text/15 bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="font-display text-base font-semibold text-accent">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text/80">{p.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
