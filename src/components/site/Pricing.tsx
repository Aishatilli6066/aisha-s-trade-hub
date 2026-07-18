import { FadeIn } from "./FadeIn";

// ============================================================================
// CALENDLY BOOKING LINKS
// ----------------------------------------------------------------------------
// Each service uses its own Calendly event with PayPal payment enabled.
// In Calendly: create the event → Event Details → set duration & description →
// Payments → connect PayPal → set the price (USD 250 / 500 / 750) →
// enable "Require payment before booking is confirmed".
// Then paste the event's public URL below.
// ============================================================================

const CONSULTATION_CALENDLY_URL =
  "https://calendly.com/YOUR-HANDLE/international-trade-strategy-consultation";

const SOURCING_CALENDLY_URL =
  "https://calendly.com/YOUR-HANDLE/global-sourcing-procurement-service";

const COMMODITY_CALENDLY_URL =
  "https://calendly.com/YOUR-HANDLE/agricultural-commodity-buyer-representation";

type Tier = {
  eyebrow: string;
  title: string;
  price: string;
  duration?: string;
  description: string;
  includes: string[];
  bestFor?: string;
  disclaimer?: string;
  bookingUrl: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    eyebrow: "Advisory",
    title: "International Trade Strategy Consultation",
    price: "$250",
    duration: "60-minute one-on-one session",
    description:
      "A personalized one-on-one consultation for importers, exporters, entrepreneurs, and businesses seeking expert guidance on international trade.",
    includes: [
      "Product selection guidance",
      "Supplier sourcing & verification",
      "Import and export procedures",
      "Pricing strategies",
      "Shipping and logistics",
      "Market opportunities & risk assessment",
      "Payment methods & documentation",
      "Practical recommendations and action plan",
    ],
    bestFor:
      "Businesses seeking clarity, direction, and expert recommendations before engaging suppliers or entering new markets.",
    bookingUrl: CONSULTATION_CALENDLY_URL,
  },
  {
    eyebrow: "Engagement",
    title: "Global Sourcing & Procurement Service",
    price: "$500",
    description:
      "A comprehensive sourcing and procurement service for businesses ready to purchase products internationally. After payment, you'll schedule a kickoff meeting to discuss product requirements, specifications, quantity, quality standards, budget, destination market, timeline, and sourcing objectives before work begins.",
    includes: [
      "Product sourcing",
      "Supplier identification",
      "Supplier verification",
      "Supplier quotation comparison",
      "Price negotiation",
      "Factory communication",
      "Procurement coordination",
      "Ongoing sourcing support",
    ],
    bestFor:
      "Businesses requiring hands-on support for sourcing, procurement, and manufacturing coordination.",
    disclaimer:
      "This professional service fee covers sourcing and procurement support only. It does not include the cost of goods, shipping, inspections, customs duties, taxes, certifications, laboratory testing, or any other third-party expenses.",
    bookingUrl: SOURCING_CALENDLY_URL,
    featured: true,
  },
  {
    eyebrow: "Premium",
    title: "Agricultural Commodity Buyer Representation",
    price: "$750",
    description:
      "A premium buyer representation service for international buyers sourcing agricultural commodities from Nigeria. After payment, you'll schedule a kickoff meeting to discuss product specifications, quality standards, quantity, destination, packaging, delivery timeline, and commercial objectives before sourcing begins.",
    includes: [
      "Buyer representation",
      "Agricultural commodity sourcing",
      "Supplier identification & verification",
      "Quality verification",
      "Price negotiation",
      "Export documentation guidance",
      "Logistics coordination",
      "Transaction support through export readiness",
    ],
    bestFor:
      "International buyers sourcing sesame seeds, hibiscus flowers, dry ginger, gum arabic, cashew kernels, coconut shell charcoal, soybeans, shea products, and other Nigerian export commodities.",
    disclaimer:
      "This professional service fee covers buyer representation and sourcing support only. It does not include the cost of goods, freight, inspections, customs duties, taxes, certifications, laboratory testing, or any other third-party expenses.",
    bookingUrl: COMMODITY_CALENDLY_URL,
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-b border-text/10 bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Book &amp; Pay
          </p>
          <h2 id="pricing-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Work With Me
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Each service has its own dedicated booking page. Pay securely with PayPal, then
            immediately select a date and time for your kickoff meeting — you&rsquo;ll get
            a confirmation, calendar invite, and reminders automatically.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <FadeIn key={t.title}>
              <article
                className={`flex h-full flex-col rounded-2xl bg-surface p-8 shadow-sm ${
                  t.featured
                    ? "border-2 border-accent/50 shadow-md"
                    : "border border-text/15"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    t.featured ? "text-accent" : "text-text/70"
                  }`}
                >
                  {t.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-text sm:text-2xl">
                  {t.title}
                </h3>
                <p className="mt-4 font-display text-5xl font-bold text-text">
                  {t.price}
                  <span className="ml-1 text-base font-medium text-muted">USD</span>
                </p>
                {t.duration && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {t.duration}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-text/85">{t.description}</p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                  Includes
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {t.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                {t.bestFor && (
                  <>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text/85">{t.bestFor}</p>
                  </>
                )}

                <div className="mt-auto">
                  <a
                    href={t.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
                  >
                    Book &amp; Pay {t.price}
                  </a>
                  {t.disclaimer && (
                    <p className="mt-4 text-xs italic leading-relaxed text-muted">
                      {t.disclaimer}
                    </p>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 text-sm text-muted">
            Need something tailored?{" "}
            <a
              href="#service-request"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Request a written proposal
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
