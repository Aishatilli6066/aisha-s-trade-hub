import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/FadeIn";
import { ConsultationQuestionnaire } from "@/components/site/ConsultationQuestionnaire";
import { CONSULTATION_PAYMENT_LINK } from "@/lib/discovery";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Consultation Questionnaire — Aisha Usman Trade Consulting" },
      {
        name: "description",
        content:
          "Complete your International Trade Strategy Consultation questionnaire and submit your Flutterwave payment reference and receipt for manual verification.",
      },
      { property: "og:title", content: "Consultation Questionnaire — Aisha Usman" },
      {
        property: "og:description",
        content:
          "Questionnaire and payment verification step for the $250 International Trade Strategy Consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: ConsultationPage,
});

function ConsultationPage() {
  return (
    <div className="min-h-dvh bg-bg font-sans text-text antialiased">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Step 2 of the consultation process
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Consultation Questionnaire
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text/80 sm:text-lg">
            Complete this questionnaire after paying the $250 fee, then enter your Flutterwave
            payment reference and upload your receipt. Payments are verified manually. Once your
            payment is verified, the Cal.com scheduling link for your 60-minute session is sent to
            you by email or WhatsApp — there is no automatic scheduling.
          </p>
          <p className="mt-4 text-sm text-muted">
            Haven&rsquo;t paid yet?{" "}
            <a
              href={CONSULTATION_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Pay the $250 consultation fee first
            </a>
            .
          </p>
        </FadeIn>

        <div className="mt-10">
          <ConsultationQuestionnaire />
        </div>
      </main>
      <Footer />
    </div>
  );
}
