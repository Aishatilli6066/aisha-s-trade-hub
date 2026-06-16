import { FadeIn } from "./FadeIn";
import aishaPhoto from "@/assets/aisha-usman.png.asset.json";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface border-b border-white/5">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            <div className="shrink-0">
              <div className="w-56 h-56 overflow-hidden rounded-lg border border-white/10 sm:w-64 sm:h-64">
                <img
                  src={aishaPhoto.url}
                  alt="Aisha Usman"
                  className="h-full w-full object-cover"
                  width={256}
                  height={256}
                />
              </div>
            </div>
            <div className="flex-1">
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
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

