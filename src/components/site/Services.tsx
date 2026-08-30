import { FadeIn } from "./FadeIn";

type Path = {
  eyebrow: string;
  title: string;
  summary: string;
  who: string[];
  start: { label: string; href: string };
  startNote: string;
};

const paths: Path[] = [
  {
    eyebrow: "Path 1 — Advisory",
    title: "Evaluate the Opportunity Before You Commit Capital",
    summary:
      "A structured written assessment of your proposed import or export opportunity — product and market viability, compliance requirements, cost structure, commercial soundness, key risks and execution strategy — so you can make an informed decision instead of an expensive assumption.",
    who: [
      "You are deciding whether a product, supplier or market justifies the spend",
      "You want an independent read on a quotation or supplier before money moves",
      "You are entering a new import or export market and need the route mapped",
    ],
    start: { label: "Evaluate My Opportunity", href: "#advisory" },
    startNote: "$250 USD · pay first, then complete the advisory questionnaire.",
  },
  {
    eyebrow: "Path 2 — Done-for-you",
    title: "Execute the Decision Without Carrying the Risk Alone",
    summary:
      "Once the decision is made, I run the work: the right supplier at a commercially viable landed cost, verified before payment, with quality, documentation and counterparty risk controlled through to shipment.",
    who: [
      "The decision is made and the work has to be carried out properly",
      "You need suppliers or manufacturers found, screened and independently verified",
      "You are buying commodities and need representation on the ground",
    ],
    start: { label: "Scope My Project", href: "#done-for-you" },
    startNote:
      "Begins with a paid project discovery, credited toward the final engagement fee.",
  },
];

function CheckList({ items, tone }: { items: string[]; tone: "yes" | "no" }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-text/85">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`mt-0.5 shrink-0 ${tone === "yes" ? "text-gold-deep" : "text-text/35"}`}
          >
            {tone === "yes" ? <path d="M5 12l5 5L20 7" /> : <path d="M6 6l12 12M18 6L6 18" />}
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Advisory Services
          </p>
          <h2 id="services-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Two ways to work with me
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Advisory when you need judgement before committing capital. Done-for-you when the
            decision is made and the work has to be carried out properly.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {paths.map((p) => (
            <FadeIn key={p.title}>
              <article className="flex h-full flex-col rounded-xl border-2 border-accent/40 bg-bg p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  {p.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text/85">{p.summary}</p>

                <div className="mt-7">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/60">
                    Who it's for
                  </h4>
                  <CheckList items={p.who} tone="yes" />
                </div>
                <p className="mt-5 text-xs text-text/60">
                  Full inclusions and exclusions are listed under each engagement below.
                </p>

                <div className="mt-8 border-t border-text/10 pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/60">
                    How to start
                  </h4>
                  <p className="mt-2 text-sm text-text/75">{p.startNote}</p>
                  <a
                    href={p.start.href}
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                  >
                    {p.start.label}
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
