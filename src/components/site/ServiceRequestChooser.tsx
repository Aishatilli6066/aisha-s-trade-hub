import { FadeIn } from "./FadeIn";
import { DISCOVERY_TRACKS, type DiscoveryTrack } from "@/lib/discovery";
import { FORM_SPECS } from "@/lib/forms/specs";

/**
 * Each service has its own dedicated multi-step form on its own page.
 * This section is the chooser that routes clients to the right one.
 */
const OPTIONS: { track: DiscoveryTrack; href: string }[] = [
  { track: "sourcing", href: "/request/global-sourcing" },
  { track: "commodity", href: "/request/commodity-buyer-representation" },
  { track: "businessplan", href: "/request/business-plan" },
];

export function ServiceRequestChooser() {
  return (
    <section
      id="service-request"
      aria-labelledby="service-request-title"
      className="scroll-mt-20 border-t border-text/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Start a project
          </p>
          <h2
            id="service-request-title"
            className="mt-3 font-display text-3xl font-bold text-text sm:text-4xl"
          >
            Choose your service and complete its request form
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text/80">
            Every service has its own dedicated questionnaire. Complete the requirements, pay the
            Project Discovery Fee, then submit your payment reference and receipt. Payments are
            verified manually before any work begins.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {OPTIONS.map(({ track, href }) => {
            const t = DISCOVERY_TRACKS[track];
            const spec = FORM_SPECS[track];
            return (
              <FadeIn key={track}>
                <article className="flex h-full flex-col rounded-2xl border border-text/15 bg-surface p-7 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-text">{t.label}</h3>
                  <p className="mt-3 text-sm font-semibold text-gold-deep">
                    Project Discovery Fee: {t.fee} USD
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text/85">{t.blurb}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-muted">
                    {spec.steps.length} short steps · saves your progress
                  </p>
                  {!spec.paymentLink && (
                    <p className="mt-3 text-xs italic leading-relaxed text-muted">
                      Payment link coming soon — you can still submit your requirements.
                    </p>
                  )}
                  <a
                    href={href}
                    className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-3 pt-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
                    style={{ marginTop: "1.75rem" }}
                  >
                    Open the request form
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <p className="mt-8 text-sm text-muted">
            Looking for the $250 advisory session instead?{" "}
            <a
              href="/consultation"
              className="font-semibold text-gold-deep underline-offset-2 hover:underline"
            >
              Open the consultation questionnaire
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
