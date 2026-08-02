import { FadeIn } from "./FadeIn";
import { selectTrack, CONSULTATION_STEPS, DONE_FOR_YOU_STEPS } from "@/lib/discovery";


// ============================================================================
// CALENDLY BOOKING LINK — ADVISORY ONLY
// ----------------------------------------------------------------------------
// The $250 International Trade Strategy Consultation is paid first through
// Calendly's payment step, then the invitee questionnaire is completed, then
// the client picks a time slot. Done-for-you services are scoped and quoted
// separately via the service request form, so they have no booking link.
//
// QUESTIONNAIRE — added manually in the Calendly UI for the /30min event
// (Event → Invitee Questions), which Calendly shows AFTER payment and BEFORE
// the booking is confirmed. Calendly's public API does not expose writing
// custom invitee questions.
//   • Full Name (default Calendly field)
//   • Email Address (default Calendly field)
//   • Company Name (Optional)
//   • Phone Number
//   • Country
//   • Industry or Business Type
//   • What would you like to discuss during the consultation?
//   • What are your primary goals for this session?
//   • Any specific products, suppliers, or markets to discuss?
//   • What challenges are you currently facing?
//   • Links to relevant documents (specs, quotations, certificates)
// ============================================================================

const CALENDLY_HANDLE = "aishausman-international";

const CONSULTATION_CALENDLY_URL = `https://calendly.com/${CALENDLY_HANDLE}/30min`;

const FEE_NOTE =
  "Final professional fee depends on product complexity, supplier location, quantity, verification requirements and project scope.";

const PROCESS_STEPS = DONE_FOR_YOU_STEPS;

const DISCOVERY_COVERS =
  "The Project Discovery Fee covers initial project review, feasibility assessment, scope definition, risk identification, and preparation of a tailored written proposal.";

const DISCOVERY_EXCLUDES =
  "It does not include supplier sourcing, market research, negotiations, document preparation, logistics coordination, or transaction execution.";


type Service = {
  title: string;
  price: string;
  discoveryFee: string;
  discoveryIntro: string;
  description: string;
  includes: string[];
  bestFor?: string;
  disclaimer?: string;
  ctaLabel: string;
  track: "sourcing" | "commodity";
};

const services: Service[] = [
  {
    title: "Global Sourcing and Procurement",
    price: "Starting from $500",
    discoveryFee: "$100",
    discoveryIntro:
      "You begin by submitting your project requirements and paying the non-refundable $100 Project Discovery Fee. The $100 is credited toward your final professional service fee if you proceed with the engagement.",
    description:
      "A comprehensive sourcing and procurement engagement for businesses ready to purchase products internationally — covering product requirements, specifications, quality standards, budget, destination market and timeline before work begins.",
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
    ctaLabel: "Start Project Discovery",
    track: "sourcing",
  },
  {
    title: "Agricultural Commodity Buyer Representation",
    price: "Starting from $750",
    discoveryFee: "$150",
    discoveryIntro:
      "You begin by submitting your commodity requirements and paying the non-refundable $150 Project Discovery Fee. The $150 is credited toward your final professional service fee if you proceed with the engagement.",
    description:
      "End-to-end buyer representation for international companies sourcing agricultural commodities from Nigeria. I act as your sourcing partner throughout procurement — ensuring credible suppliers, competitive pricing, and compliance with your quality, documentation and logistics requirements.",
    includes: [
      "Dedicated buyer representation",
      "End-to-end agricultural commodity sourcing",
      "Supplier identification, screening, and verification",
      "Quality assessment and compliance verification",
      "Commercial price negotiation",
      "Export documentation and compliance guidance",
      "Logistics and shipment coordination",
      "Procurement management through export readiness",
      "Ongoing transaction support and communication",
    ],
    bestFor:
      "Importers, distributors, manufacturers, wholesalers, and procurement teams sourcing Nigerian agricultural commodities — sesame seeds, hibiscus flowers, dry ginger, gum arabic, cashew kernels, coconut shell charcoal, soybeans, shea products, and other export-ready commodities.",
    disclaimer:
      "This professional service fee covers buyer representation and sourcing support only. It does not include the cost of goods, freight, inspections, customs duties, taxes, certifications, laboratory testing, or any other third-party expenses.",
    ctaLabel: "Start Commodity Discovery",
    track: "commodity",
  },
];


const consultationIncludes = [
  "Pre-consultation questionnaire",
  "Review of relevant information submitted in advance",
  "60-minute private video strategy session",
  "Written recommendations and next-step action plan",
  "Three business days of limited WhatsApp follow-up for clarification",
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
            Engagements
          </p>
          <h2 id="pricing-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Work With Me
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Advisory is booked and paid directly. Done-for-you services are scoped first, then
            quoted in a written proposal before any payment is made.
          </p>
        </FadeIn>

        {/* ---------------------------------------------------------------- */}
        {/* ADVISORY                                                          */}
        {/* ---------------------------------------------------------------- */}
        <FadeIn>
          <div className="mt-14 flex items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Advisory
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-text/15" />
          </div>
        </FadeIn>

        <FadeIn>
          <article className="mt-6 grid gap-8 rounded-2xl border-2 border-accent/50 bg-surface p-8 shadow-md lg:grid-cols-[1.1fr_1fr] lg:p-10">
            <div>
              <h4 className="font-display text-2xl font-bold text-text sm:text-3xl">
                International Trade Strategy Consultation
              </h4>
              <p className="mt-4 font-display text-5xl font-bold text-text">
                $250
                <span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                60-minute private video session
              </p>
              <p className="mt-5 text-sm leading-relaxed text-text/85 sm:text-base">
                A private advisory engagement for businesses requiring expert direction on sourcing,
                importation, export strategy, supplier verification, pricing, logistics, payment
                terms or market entry.
              </p>

              <a
                href={CONSULTATION_CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
              >
                Book &amp; Pay $250
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text">Includes</p>
              <ul className="mt-3 space-y-2 text-sm text-text/85">
                {consultationIncludes.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text">
                  Follow-up support
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text/90">
                  Includes three business days of WhatsApp follow-up for brief clarification on
                  recommendations discussed during the consultation. New research, document
                  preparation, supplier sourcing, costing, negotiation or transaction management is
                  billed separately.
                </p>
              </div>

              <p className="mt-4 text-xs italic leading-relaxed text-muted">
                This consultation does not include supplier sourcing, extensive market research,
                document preparation, negotiation, costing development or transaction management.
                These services are quoted separately.
              </p>
            </div>
          </article>
        </FadeIn>

        {/* ---------------------------------------------------------------- */}
        {/* DONE-FOR-YOU SERVICES                                             */}
        {/* ---------------------------------------------------------------- */}
        <FadeIn>
          <div className="mt-20 flex items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Done-For-You Services
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-text/15" />
          </div>
        </FadeIn>

        <FadeIn>
          <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-text/75">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-text/15 bg-surface px-4 py-2">
                  {step}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 rounded-xl border border-text/15 bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              What the Project Discovery Fee covers
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text/85">{DISCOVERY_COVERS}</p>
            <p className="mt-3 text-sm italic leading-relaxed text-muted">{DISCOVERY_EXCLUDES}</p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <article className="flex h-full flex-col rounded-2xl border border-text/15 bg-surface p-8 shadow-sm">
                <h4 className="font-display text-xl font-bold text-text sm:text-2xl">{s.title}</h4>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  Professional service fee
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-text sm:text-4xl">
                  {s.price}
                  <span className="ml-1 text-base font-medium text-muted">USD</span>
                </p>

                <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 p-4">
                  <p className="font-display text-lg font-bold text-text">
                    Project Discovery Fee: {s.discoveryFee}
                    <span className="ml-1 text-xs font-medium text-muted">USD</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text/90">{s.discoveryIntro}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text/85">{s.description}</p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                  Includes
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {s.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                {s.bestFor && (
                  <>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text/85">{s.bestFor}</p>
                  </>
                )}

                <div className="mt-auto">
                  <a
                    href="#service-request"
                    onClick={() => selectTrack(s.track)}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
                  >
                    {s.ctaLabel}
                  </a>
                  <p className="mt-4 text-xs leading-relaxed text-text/70">{FEE_NOTE}</p>
                  {s.disclaimer && (
                    <p className="mt-3 text-xs italic leading-relaxed text-muted">{s.disclaimer}</p>
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
