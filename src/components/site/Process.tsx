import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Discovery & Opportunity Assessment",
    desc: "Understand your trade objective, product, target market, and constraints to define a realistic engagement scope.",
  },
  {
    n: "02",
    title: "Supplier Search & Verification",
    desc: "Identify qualified suppliers or buyers and conduct independent verification before any commercial commitment.",
  },
  {
    n: "03",
    title: "Commercial Evaluation & Negotiation",
    desc: "Evaluate pricing, terms, Incoterms, and total landed cost — then negotiate to protect margins and reduce risk.",
  },
  {
    n: "04",
    title: "Trade Structuring & Documentation",
    desc: "Structure the transaction and coordinate the required trade and compliance documentation.",
  },
  {
    n: "05",
    title: "Execution & Delivery Support",
    desc: "Stay engaged through production, shipment, and delivery to keep the transaction on track.",
  },
];

const principles = [
  {
    title: "Independent Verification",
    description: "Suppliers and buyers are vetted on credentials, status, and trade history before any commitment.",
  },
  {
    title: "Risk Reduction First",
    description: "Structured due diligence surfaces red flags and protects capital before contracts are signed.",
  },
  {
    title: "Documentation Advisory",
    description: "Practical guidance on Form M, NXP, NAQS, phytosanitary, packing lists, and shipping paperwork.",
  },
  {
    title: "CAC & NEPC Compliant",
    description: "Execution runs through ASMAN Prime Hub Global Services Limited, registered with the CAC and NEPC.",
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

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Engagement Process
          </p>
          <h2 id="process-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            How I Work
          </h2>
        </FadeIn>
        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n}>
              <FadeIn>
                <div className="font-display text-sm tracking-widest text-gold-deep">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text/80">{s.desc}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
        <FadeIn>
          <h3 className="mt-20 font-display text-2xl font-bold text-text sm:text-3xl">
            Why Clients Work With Me
          </h3>
        </FadeIn>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <FadeIn key={p.title}>
              <div className="h-full rounded-lg border border-text/15 bg-bg p-6 transition-colors hover:border-accent/40">
                <h4 className="font-display text-base font-semibold text-gold-deep">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-text/80">{p.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
