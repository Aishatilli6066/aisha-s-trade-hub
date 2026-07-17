import { FadeIn } from "./FadeIn";

// ============================================================================
// PAYMENT LINK CONFIGURATION
// ----------------------------------------------------------------------------
// Paste the hosted payment-link URLs you create in Stripe (or Paystack) here.
// In your payment-link dashboard, set the AFTER-PAYMENT REDIRECT URL to:
//   https://YOUR-DOMAIN.com/booking
// Once the client pays, they'll land on /booking and pick a time on Calendly.
// ============================================================================

const CONSULTATION_PAYMENT_URL =
  "https://YOUR-PAYMENT-LINK-FOR-250-USD"; // $250 — replace with your Stripe/Paystack link

const ENGAGEMENT_PAYMENT_URL =
  "https://YOUR-PAYMENT-LINK-FOR-500-USD"; // $500 — replace with your Stripe/Paystack link

const consultationIncludes = [
  "Product sourcing strategy",
  "Supplier verification review",
  "Procurement planning",
  "Export opportunity assessment",
  "Trade documentation guidance",
  "International market insights",
  "Live Q&A session",
];

const engagementIncludes = [
  "Global sourcing support",
  "Supplier verification and due diligence",
  "Commodity export structuring",
  "Procurement coordination",
  "Trade documentation support",
  "Manufacturing and OEM/ODM advisory",
  "End-to-end project guidance",
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-b border-text/10 bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Engagements
          </p>
          <h2 id="pricing-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Work With Me
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Pay securely online, then pick a date and time that works for you on the next page.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Card 1 — $250 */}
          <FadeIn>
            <article className="flex h-full flex-col rounded-2xl border border-text/15 bg-surface p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text/70">
                Advisory
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-text">
                Trade Strategy Consultation
              </h3>
              <p className="mt-4 font-display text-5xl font-bold text-text">
                $250<span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                60-minute one-on-one session
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">
                A focused one-on-one consultation for importers, exporters, entrepreneurs,
                procurement teams, and businesses seeking expert guidance before making critical
                trade decisions.
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                Includes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-text/85">
                {consultationIncludes.map((i) => (
                  <li key={i} className="flex items-start gap-2"><Check /><span>{i}</span></li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                Best For
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                Businesses seeking clarity, direction, and expert recommendations before
                engaging suppliers or entering new markets.
              </p>

              <a
                href={CONSULTATION_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
              >
                Pay $250 &amp; Book
              </a>
              <p className="mt-3 text-xs text-muted">
                Secure card checkout. You&rsquo;ll be redirected to schedule your session
                immediately after payment.
              </p>
            </article>
          </FadeIn>

          {/* Card 2 — $500 */}
          <FadeIn>
            <article className="flex h-full flex-col rounded-2xl border-2 border-accent/50 bg-surface p-8 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Engagement
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-text">
                Trade Engagement
              </h3>
              <p className="mt-4 font-display text-5xl font-bold text-text">
                $500<span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/85">
                Comprehensive support for sourcing projects, supplier verification, commodity
                exports, procurement coordination, OEM/ODM manufacturing, and international
                trade execution. The $500 secures your engagement and kicks off a structured
                discovery and scoping call.
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                Includes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-text/85">
                {engagementIncludes.map((i) => (
                  <li key={i} className="flex items-start gap-2"><Check /><span>{i}</span></li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                Best For
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text/85">
                Businesses requiring hands-on support for sourcing, procurement, export
                transactions, or international trade projects.
              </p>

              <a
                href={ENGAGEMENT_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
              >
                Pay $500 &amp; Book
              </a>
              <p className="mt-3 text-xs text-muted">
                Final project pricing is determined after the discovery call based on scope,
                transaction value, sourcing complexity, destination market, and level of
                support required.
              </p>

              <p className="mt-4 text-xs leading-relaxed text-muted">
                Prefer a tailored proposal first?{" "}
                <a href="#service-request" className="font-semibold text-accent underline-offset-2 hover:underline">
                  Request a written proposal
                </a>
                .
              </p>

              <p className="mt-4 text-xs italic leading-relaxed text-muted">
                Projects are individually scoped. The $500 payment covers project initiation and
                strategic engagement. Additional fees may apply depending on project scope,
                transaction value, and complexity.
              </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
