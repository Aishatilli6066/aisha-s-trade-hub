import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Reach Out",
    desc: "Send a WhatsApp message or email describing your trade objective.",
  },
  {
    n: "02",
    title: "Get a Scoped Plan",
    desc: "Receive a practical assessment, feasibility review, and execution roadmap.",
  },
  {
    n: "03",
    title: "Execute Together",
    desc: "Support through sourcing, verification, documentation, negotiation, and implementation.",
  },
];

export function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <h2 id="process-title" className="font-display text-3xl font-bold text-text sm:text-5xl">
            How We Work Together
          </h2>
        </FadeIn>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n}>
              <FadeIn>
                <div className="font-display text-sm tracking-widest text-accent">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-text">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text/80">{s.desc}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
