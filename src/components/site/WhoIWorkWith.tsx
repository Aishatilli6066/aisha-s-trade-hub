import { FadeIn } from "./FadeIn";

const clients = [
  "Importers",
  "Exporters",
  "Commodity Buyers",
  "Manufacturers",
  "Procurement Teams",
  "Startups",
  "Private Label Brands",
  "Distributors",
  "Trading Companies",
  "SMEs Entering International Markets",
];

export function WhoIWorkWith() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="border-b border-text/10">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Clientele</p>
          <h2 id="clients-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Who I Work With
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text/80 sm:text-lg">
            Advisory engagements span founders, operators, and procurement leaders building
            cross-border trade operations.
          </p>
        </FadeIn>
        <ul className="mt-10 flex flex-wrap gap-3">
          {clients.map((c) => (
            <li
              key={c}
              className="rounded-full border border-text/15 bg-surface px-5 py-2.5 text-sm font-medium text-text/85"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
