import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProofStrip } from "@/components/site/ProofStrip";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { CaseStudies } from "@/components/site/CaseStudies";
import { About } from "@/components/site/About";
import { Upwork } from "@/components/site/Upwork";
import { Faq, FAQS } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

const TITLE = "Aisha Usman | International Trade Consultant & Global Sourcing Specialist";
const DESCRIPTION =
  "International Trade Consultant helping businesses with global sourcing, supplier verification, procurement, import/export strategy, and international trade advisory.";
const IMAGE_ALT =
  "Aisha Usman, International Trade Consultant and Global Sourcing Specialist.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: IMAGE_ALT },
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
    <div className="min-h-dvh bg-bg pb-[calc(3.5rem+env(safe-area-inset-bottom))] font-sans text-text antialiased md:pb-0">
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
        <Process />
        <Pricing />
        <About />
        <Upwork />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
