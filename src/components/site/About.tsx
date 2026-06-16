import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface border-b border-white/5">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <h2 id="about-title" className="font-display text-3xl font-bold text-text sm:text-5xl">
            About Aisha Usman
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text/85 sm:text-lg">
            I help importers, exporters, manufacturers, and commodity buyers reduce risk,
            identify reliable suppliers, structure profitable transactions, and build
            sustainable international trade operations. My focus is practical execution,
            verified information, and long-term business relationships that create value for
            all parties involved.
          </p>
          <p className="mt-6 text-base leading-relaxed text-text/85 sm:text-lg">
            My experience spans global product sourcing, OEM/ODM manufacturing, custom-made
            machinery procurement, agricultural commodity exports, supplier verification, and
            private-label brand development for entrepreneurs and growing businesses.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
