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
import { ServiceRequestForm } from "@/components/site/ServiceRequestForm";
import { Upwork } from "@/components/site/Upwork";

import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aisha Usman — International Trade Consultant | Global Sourcing Specialist" },
      {
        name: "description",
        content:
          "Aisha Usman — International Trade Consultant, Global Sourcing Specialist, and Export Strategist helping businesses source products, verify suppliers, reduce procurement risk, and structure export opportunities across Asia, Africa, the Middle East, and Europe.",
      },
      { property: "og:title", content: "Aisha Usman — International Trade Consultant" },
      {
        property: "og:description",
        content:
          "Trusted advisor for importers, exporters, manufacturers, and procurement teams entering international markets.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        <ServiceRequestForm />
        <Upwork />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
