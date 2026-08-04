import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProofStrip } from "@/components/site/ProofStrip";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { CaseStudies } from "@/components/site/CaseStudies";
import { About } from "@/components/site/About";
import { WhyWorkWithMe } from "@/components/site/WhyWorkWithMe";
import { WhoIWorkWith } from "@/components/site/WhoIWorkWith";
import { ServiceRequestChooser } from "@/components/site/ServiceRequestChooser";
import { Upwork } from "@/components/site/Upwork";
import { Faq, FAQS } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

const TITLE = "Aisha Usman — International Trade Consultant | Global Sourcing Specialist";
const DESCRIPTION =
  "Aisha Usman — International Trade Consultant, Global Sourcing Specialist, and Export Strategist helping businesses source products, verify suppliers, reduce procurement risk, and structure export opportunities across Asia, Africa, the Middle East, and Europe.";
const OG_DESCRIPTION =
  "Trusted advisor for importers, exporters, manufacturers, and procurement teams entering international markets.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Aisha Usman — International Trade Consultant" },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Aisha Usman — International Trade & Global Sourcing Consultant",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aisha Usman — International Trade Consultant" },
      { name: "twitter:description", content: OG_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-bg font-sans text-text antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <CaseStudies />
        <Services />
        <WhoIWorkWith />
        <WhyWorkWithMe />
        <Process />
        <Pricing />
        <About />
        <ServiceRequestChooser />
        <Upwork />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
