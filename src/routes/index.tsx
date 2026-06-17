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
import { ServiceRequestForm } from "@/components/site/ServiceRequestForm";

import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aisha Usman — International Trade Consultant | Kano, Nigeria" },
      {
        name: "description",
        content:
          "International Trade Consultant and Global Sourcing Specialist based in Kano, Nigeria. Supplier verification, commodity export, landed cost analysis, OEM coordination, and import/export business consulting across Asia, Africa, the Middle East, and Europe.",
      },
      { property: "og:title", content: "Aisha Usman — International Trade Consultant" },
      {
        property: "og:description",
        content:
          "Global sourcing, supplier verification, commodity export, and import/export business consulting from Kano, Nigeria.",
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
        <Services />
        <Pricing />
        <Process />
        <CaseStudies />
        <About />
        <WhyWorkWithMe />
        <ServiceRequestForm />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
