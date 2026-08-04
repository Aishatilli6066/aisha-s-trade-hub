import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/site/LegalPage";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

const TITLE = "Payment, Refund & Rescheduling Policy — Aisha Usman";
const DESC =
  "Consultation and project discovery fees, how discovery fees are credited, refund treatment, rescheduling rules and manual payment verification.";

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
      title="Payment, Refund, Rescheduling and Cancellation Policy"
      updated="4 August 2026"
      intro="This policy explains what each fee covers, when it is charged, how discovery fees are credited toward final project fees, and how payments are verified. It forms part of the Terms of Service."
    >
      <Section heading="1. Fees at a glance">
        <List
          items={[
            "International Trade Strategy Consultation — $250 USD. Paid before the questionnaire is completed and before any session is scheduled.",
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

      <Section heading="2. The $250 consultation">
        <p>
          The consultation fee is paid first. Only after payment do you complete the consultation
          questionnaire and submit your Flutterwave reference and receipt. This ordering exists
          because preparation begins with the questionnaire review: the session is not a sales call,
          and the time is reserved and prepared for in advance.
        </p>
        <p>The fee covers:</p>
        <List
          items={[
            "Review of your completed questionnaire and any documents you upload.",
            "A 60-minute private video strategy session.",
            "A written action summary following the session.",
            "Three business days of limited clarification support on what was discussed.",
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
            "The consultation fee becomes non-refundable once preparation has begun — that is, once your questionnaire and documents have been reviewed, or once the session has taken place.",
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

      <Section heading="6. Rescheduling and cancellation of a consultation">
        <List
          items={[
            "A scheduled consultation may be rescheduled once at no charge, with at least 24 hours' notice before the session start time.",
            "Requests with less than 24 hours' notice are accommodated where reasonably possible; if the time cannot be reused, the session is treated as delivered.",
            "If you do not attend and give no notice, the session is treated as delivered and the fee is not refunded. A written summary based on your questionnaire is still provided.",
            "If the consultant needs to reschedule, you will be offered a new time at no cost, or a full refund if no suitable time can be agreed.",
            "Additional reschedules beyond the first may be declined or re-quoted.",
          ]}
        />
      </Section>

      <Section heading="7. Manual verification — no automatic scheduling">
        <p>
          Every payment on this website is verified by hand. There is no automatic payment
          verification and there is no public scheduling link. After you submit your Flutterwave
          reference and receipt, the payment is checked against the provider record. Only after that
          check:
        </p>
        <List
          items={[
            "For consultations — a private Cal.com scheduling link is sent to you by email or WhatsApp.",
            "For done-for-you services — scope and feasibility review begins, followed by your written proposal.",
          ]}
        />
        <p>
          Verification is normally completed within one business day. Submitting a form, on its own,
          does not confirm a booking or start a project.
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
