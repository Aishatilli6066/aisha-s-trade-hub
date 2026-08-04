import { createFileRoute, notFound } from "@tanstack/react-router";
import { FormPage } from "@/components/site/FormPage";
import { FORM_SPECS, type FormKey } from "@/lib/forms/specs";

/** URL slug → dedicated form. Each service renders its own questions. */
export const SERVICE_SLUGS: Record<string, FormKey> = {
  "global-sourcing": "sourcing",
  "commodity-buyer-representation": "commodity",
  "business-plan": "businessplan",
};

export const Route = createFileRoute("/request/$service")({
  head: ({ params }) => {
    const key = SERVICE_SLUGS[params.service];
    const spec = key ? FORM_SPECS[key] : undefined;
    const title = spec
      ? `${spec.title} — Project Discovery Request | Aisha Usman`
      : "Service Request — Aisha Usman";
    const description = spec
      ? spec.intro
      : "Submit a project discovery request to Aisha Usman, International Trade Consultant.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "robots", content: "noindex,follow" },
      ],
    };
  },
  component: ServiceRequestPage,
  notFoundComponent: MissingService,
});

function ServiceRequestPage() {
  const { service } = Route.useParams();
  const key = SERVICE_SLUGS[service];
  if (!key) throw notFound();
  return <FormPage spec={FORM_SPECS[key]} />;
}

function MissingService() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl font-bold text-text">Service not found</h1>
      <p className="mt-4 text-text/80">
        Choose a service from the{" "}
        <a href="/#pricing" className="font-semibold text-accent hover:underline">
          engagements section
        </a>
        .
      </p>
    </div>
  );
}
