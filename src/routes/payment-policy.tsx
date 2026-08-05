import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/site/LegalPage";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

const TITLE = "Payment, Refund & Cancellation Policy — Aisha Usman";
const DESC =
  "Advisory and project discovery fees, how discovery fees are credited, refund treatment and manual payment verification.";

export const Route = createFileRoute("/payment-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/payment-policy` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/payment-policy` }],
  }),
  component: PaymentPolicyPage,
});

function PaymentPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Payment, Refund and Cancellation Policy"
      updated="4 August 2026"
      intro="This policy explains what each fee covers, when it is charged, how discovery fees are credited toward final project fees, and how payments are verified. It forms part of the Terms of Service."
    >
      <Section heading="1. Fees at a glance">
        <List
          items={[
            "International Trade Strategy Advisory — $250 USD. Paid before the advisory questionnaire is completed and before any review begins.",
            "Global Sourcing & Procurement — $100 USD Project Discovery Fee, paid at the payment step of the request form before final submission.",
            "Agricultural Commodity Buyer Representation — $150 USD Project Discovery Fee, paid at the payment step of the request form before final submission.",
            "Import & Export Business Plan Development — $100 USD Project Discovery Fee, paid at the payment step of the request form before final submission.",
          ]}
        />
        <p>
          All fees are quoted in US dollars and paid through Flutterwave. Any bank charges, card
          fees or currency conversion costs applied by your payment provider are yours.
        </p>
      </Section>

      <Section heading="2. The $250 advisory">
        <p>
          The advisory fee is paid first. Only after payment do you complete the advisory
          questionnaire and submit your Flutterwave reference and receipt. This ordering exists
          because the work begins with the questionnaire and document review, which is what the fee
          pays for.
        </p>
        <p>The fee covers:</p>
        <List
          items={[
            "Review of your completed questionnaire and any documents you upload.",
            "A written strategic assessment with personalized recommendations, risk observations and a next-step action plan.",
            "Voice-note explanations where useful.",
            "Three business days of limited clarification support on the recommendations provided.",
          ]}
        />
      </Section>

      <Section heading="3. What a Project Discovery Fee covers">
        <p>
          The discovery fee compensates for the first paid stage of a done-for-you project: initial
          assessment of your requirements, a feasibility and risk review, scope definition, and
          preparation of a tailored written proposal setting out the final fee, timeline and
          deliverables.
        </p>
        <p>
          It does not cover supplier sourcing, market research, negotiation, costing models,
          document preparation, logistics coordination or transaction execution. Those form the main
          engagement quoted in the proposal.
        </p>
      </Section>

      <Section heading="4. Discovery fees are credited toward the final fee">
        <p>
          If you accept the written proposal and proceed with the engagement, the discovery fee you
          paid is credited in full against the final professional service fee. It is not an extra
          charge on top of the project — it is the first instalment of it, applied to work that has
          already been done.
        </p>
      </Section>

      <Section heading="5. Refunds">
        <List
          items={[
            "Discovery fees are generally non-refundable once assessment and review of your submission has begun, because the fee pays for that review.",
            "The advisory fee becomes non-refundable once review has begun — that is, once your questionnaire and documents have been reviewed, or once the written assessment has been delivered.",
            "Where payment has been received but no review, preparation or work has started, a refund request will be considered in good faith. Contact the consultant before work begins.",
            "Where a duplicate payment is made in error and confirmed, the duplicate amount is refunded.",
            "Where the consultant is unable to deliver the service at all, the corresponding fee is refunded.",
          ]}
        />
        <p>
          A project being assessed as not commercially feasible is a delivered outcome, not a
          failure to deliver: the assessment work was performed, so the discovery fee is not
          refunded on that basis. Where that happens, the findings and the reasoning are explained
          to you in writing.
        </p>
      </Section>

      <Section heading="6. Advisory scope and response boundaries">
        <List
          items={[
            "The advisory is limited to the submitted matter and clarification of the recommendations provided.",
            "It does not include supplier sourcing, extensive market research, document preparation, quotation development, negotiation, costing, logistics coordination or transaction management. These services are quoted separately.",
            "Advisory responses are provided during business hours within agreed response windows. This service does not provide continuous or unlimited live-chat access.",
            "Clarification support runs for three business days from delivery of the written assessment.",
          ]}
        />
      </Section>

      <Section heading="7. Manual verification">
        <p>
          Every payment on this website is verified by hand. There is no automatic payment
          verification. After you submit your Flutterwave reference and receipt, the payment is
          checked against the provider record. Only after that check:
        </p>
        <List
          items={[
            "For the advisory — your submission and documents are reviewed and your written strategic assessment is prepared and delivered by email or WhatsApp.",
            "For done-for-you services — scope and feasibility review begins, followed by your written proposal.",
          ]}
        />
        <p>
          Verification is normally completed within one business day. Submitting a form, on its own,
          does not confirm an engagement or start a project.
        </p>
      </Section>

      <Section heading="8. Payment evidence">
        <p>
          You must supply the email address used for payment, the payment date, the Flutterwave
          transaction or reference number, and a legible receipt. Submissions with missing,
          unreadable, duplicated, mismatched or altered payment evidence may be rejected, and a
          corrected submission will be requested. Payment evidence found to be fraudulent will end
          the engagement, and no work will be carried out.
        </p>
      </Section>

      <Section heading="9. Final fees, timelines and deliverables">
        <p>
          Prices shown on this website are starting points. The final professional fee depends on
          product complexity, supplier location, quantity, verification requirements and overall
          scope. Final fees, timelines and deliverables are always confirmed in writing in the
          proposal before the main engagement begins. Nothing is charged beyond the discovery fee
          until you have accepted a written proposal.
        </p>
      </Section>

      <Section heading="10. Third-party costs">
        <p>
          Professional fees never include the cost of goods, freight, insurance, inspections,
          laboratory testing, customs duties, taxes, certifications, registration or licensing fees.
          These are paid by you, directly to the relevant provider.
        </p>
      </Section>
    </LegalPage>
  );
}
