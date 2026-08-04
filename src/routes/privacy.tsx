import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/site/LegalPage";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

const TITLE = "Privacy Policy — Aisha Usman Trade Consulting";
const DESC =
  "How Aisha Usman collects, uses, stores and protects the information and documents submitted through consultation and service request forms.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="4 August 2026"
      intro="This policy explains what information this website collects, why it is collected, and how it is handled. It applies to the consultation questionnaire, all service request forms, and any direct contact by email or WhatsApp."
    >
      <Section heading="1. Who is responsible for your information">
        <p>
          This website is operated by Aisha Usman, an independent international trade consultant
          based in Kano, Nigeria, and founder of ASMAN Prime Hub Global Services Limited. Where a
          project moves into sourcing, export coordination or transaction execution, information
          relevant to that work may also be handled through ASMAN Prime Hub Global Services Limited.
        </p>
      </Section>

      <Section heading="2. Information collected">
        <p>Depending on which form you complete, this website may collect:</p>
        <List
          items={[
            "Your full name, email address, WhatsApp number and country of residence.",
            "Company or business name, registration details, role, website and business stage.",
            "Business and trade information: products, commodities, target markets, quantities, budgets, timelines, quality standards, certifications and Incoterms preferences.",
            "Supplier and buyer details you choose to share, including supplier quotations, marketplace links and prior correspondence you describe.",
            "Product specifications, technical drawings, packaging requirements and branding material.",
            "Payment information limited to the email address used for payment, the payment date, the Flutterwave transaction or reference number, and the payment receipt you upload.",
            "Any supporting documents you upload — registration certificates, licences, quotations, financial records, product photographs, agreements or existing drafts.",
          ]}
        />
        <p>
          This website does not collect or store card numbers, bank credentials or payment
          passwords. Card payments are processed entirely on Flutterwave's own platform; only the
          reference and receipt you provide reach this website.
        </p>
      </Section>

      <Section heading="3. Why the information is collected">
        <List
          items={[
            "To identify you and respond to your enquiry.",
            "To understand your trade requirements well enough to assess feasibility and prepare advice or a written proposal.",
            "To verify your payment manually against the reference and receipt you supply.",
            "To deliver the service you requested — the consultation session, a scope review, or a written proposal.",
            "To keep a reasonable record of the engagement for accounting and reference purposes.",
          ]}
        />
        <p>
          Your information is not sold, rented, or used for advertising, and it is not added to any
          marketing list.
        </p>
      </Section>

      <Section heading="4. How uploaded documents are handled">
        <p>
          Documents you upload are reviewed only for the purpose of assessing and delivering the
          service you requested. They are not published, redistributed, or shared with unrelated
          third parties. Where a project requires contact with a supplier, buyer, freight partner or
          inspection body, only the details necessary for that specific step are shared, and
          commercially sensitive material is withheld unless you have agreed to its disclosure.
        </p>
      </Section>

      <Section heading="5. How your submission is transmitted">
        <p>
          When you submit a form, your answers and uploaded files are transmitted over an encrypted
          connection from this website to a server-side process, which sends them as an email with
          attachments to the consultant's business inbox at aishau6066@gmail.com. A confirmation
          copy of your submission summary is emailed to the address you provided. Email is a
          practical business channel but is not an end-to-end encrypted medium, and you should
          consider that before uploading highly sensitive material.
        </p>
        <p>
          Draft answers you type into a form are also saved in your own browser's local storage so
          you do not lose progress while paying. Those drafts stay on your device, never include
          uploaded files, and can be removed at any time using the "Clear saved draft" button.
        </p>
      </Section>

      <Section heading="6. Retention">
        <p>
          Submissions, payment references and uploaded documents are retained for as long as
          reasonably necessary to deliver the service, to answer follow-up questions, and to satisfy
          normal business record-keeping. When material is no longer needed for those purposes, it
          is deleted or archived. You may request earlier deletion of your documents at any time,
          subject to any records that must be retained for accounting purposes.
        </p>
      </Section>

      <Section heading="7. Security and its limits">
        <p>
          Reasonable measures are taken to protect your information: transmission over encrypted
          connections, server-side validation of uploaded files, restricted access to the business
          inbox, and a policy of collecting only what a project genuinely requires. No website,
          email system or internet transmission can be guaranteed to be completely secure, and no
          absolute guarantee of security is given. Please do not upload passwords, full card
          details, or login credentials — they are never required.
        </p>
      </Section>

      <Section heading="8. Third parties involved">
        <List
          items={[
            "Flutterwave — processes your payment on its own platform under its own privacy terms.",
            "Google (Gmail) — carries and stores the notification and confirmation emails.",
            "The website's hosting provider — serves the pages and processes form submissions in transit.",
            "Cal.com — used to schedule a consultation session only after your payment has been verified, when a private scheduling link is sent to you.",
          ]}
        />
      </Section>

      <Section heading="9. Your choices">
        <List
          items={[
            "You may ask what information relating to you is held.",
            "You may ask for corrections to inaccurate details.",
            "You may ask for your uploaded documents to be deleted.",
            "You may withdraw a request before work begins, subject to the Payment Policy.",
            "You may choose not to provide optional fields — only the fields marked required are needed to process a submission.",
          ]}
        />
      </Section>

      <Section heading="10. Children">
        <p>
          This is a business-to-business service and is not directed at anyone under 18. Information
          is not knowingly collected from minors.
        </p>
      </Section>

      <Section heading="11. Changes to this policy">
        <p>
          This policy may be updated as the services or the tools behind them change. The date at
          the top of this page reflects the most recent revision.
        </p>
      </Section>
    </LegalPage>
  );
}
