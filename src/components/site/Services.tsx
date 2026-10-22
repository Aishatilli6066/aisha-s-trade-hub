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
      "A structured written assessment of your proposed import or export opportunity — product and market viability, compliance requirements, cost structure, commercial soundness, and counterparty risks — so you can make an informed decision instead of an expensive assumption.",
    who: [
      "Deciding whether a product, supplier, or market justifies capital spend",
      "Requiring an independent review of a quotation before money moves",
      "Entering a new import/export corridor and needing compliance mapped",
    ],
    start: { label: "Evaluate My Opportunity — $250", href: "#advisory" },
    startNote: "$250 USD · Asynchronous written review after manual payment verification.",
  },
  {
    eyebrow: "Path 2 — Done-for-you",
    title: "Execute the Decision Without Carrying the Risk Alone",
    summary:
      "Once the decision is made, I lead the execution on the ground: the right supplier at a commercially viable landed cost, verified before payment, with quality, documentation, and counterparty risk controlled through to shipment.",
    who: [
      "The commercial decision is made and work must be executed properly",
      "Need overseas or local manufacturers screened and independently verified",
      "Procuring agricultural commodities and requiring trusted representation on the ground",
    ],
    start: { label: "Scope My Project", href: "#done-for-you" },
    startNote:
      "Begins with a paid project discovery fee ($100 or $150), credited toward your final fee.",
  },
];

function CheckList({ items, tone }: { items: string[]; tone: "yes" | "no" }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-xs leading-relaxed text-text/85 sm:text-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
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
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-surface border-b border-text/10"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Advisory vs. Execution
          </p>
          <h2
            id="services-title"
            className="mt-2 font-display text-2xl font-bold text-text sm:text-4xl"
          >
            Decide First. Then Execute Properly.
          </h2>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-text/80 sm:text-sm">
            Most trade losses stem from committing capital to the wrong supplier or from an
            unrealistic landed cost. Advisory protects your decision. Done-for-you execution
            protects your shipment on the ground.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {paths.map((p) => (
            <FadeIn key={p.title}>
              <article className="flex h-full flex-col rounded-xl border-2 border-accent/40 bg-bg p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  {p.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-text sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-text/85 sm:text-sm">{p.summary}</p>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text/70">
                    Who It's For
                  </h4>
                  <CheckList items={p.who} tone="yes" />
                </div>

                <div className="mt-auto border-t border-text/10 pt-5">
                  <p className="text-xs text-text/75">{p.startNote}</p>
                  <a
                    href={p.start.href}
                    className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
