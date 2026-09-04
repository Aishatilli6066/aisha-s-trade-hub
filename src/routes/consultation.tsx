import { createFileRoute } from "@tanstack/react-router";
import { FormPage } from "@/components/site/FormPage";
import { FORM_SPECS } from "@/lib/forms/specs";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Advisory Questionnaire — Aisha Usman Trade Consulting" },
      {
        name: "description",
        content:
          "Complete your International Trade Strategy Advisory questionnaire and submit your Flutterwave payment reference and receipt for manual verification.",
      },
      { property: "og:title", content: "Advisory Questionnaire — Aisha Usman" },
      {
        property: "og:description",
        content:
          "Questionnaire and payment verification step for the $250 International Trade Strategy Advisory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/consultation` }],
  }),
  component: () => <FormPage spec={FORM_SPECS.consultation} />,
});
