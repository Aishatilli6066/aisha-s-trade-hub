import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "Global Product Sourcing",
    desc: "Sourcing products, machinery, equipment, raw materials, packaging materials, private-label products and commercial goods from international markets — matched to your specification, quantity and target cost.",
  },
  {
    title: "Supplier Verification",
    desc: "Supplier background checks, business legitimacy review, production capacity assessment, quotation review and communication support — risk reduced before any payment leaves your account.",
  },
  {
    title: "Import Coordination",
    desc: "Support for importers across product specification, supplier communication, landed cost analysis, freight coordination, documentation guidance and shipment follow-up.",
  },
  {
    title: "Procurement Coordination",
    desc: "Structured purchasing for businesses that need reliable sourcing, quotation comparison, negotiation support and dependable supply-chain execution.",
  },
  {
    title: "Nigerian Agro Commodity Sourcing",
    desc: "Sourcing Nigerian agro commodities — hibiscus, sesame, ginger, shea products, cashew, charcoal, soybeans and more — for buyers and exporters, against written buyer specification.",
    to: "/agro-commodity-sourcing",
    cta: "Agro commodity sourcing & export support",
  },
  {
    title: "Export Documentation & Compliance Support",
    desc: "Export-readiness guidance and documentation planning: COA, phytosanitary certificate, certificate of origin, NEPC-related requirements, logistics coordination and buyer communication.",
  },
  {
    title: "Business Advisory",
    desc: "Strategic advisory for importers, exporters, agribusiness investors and companies entering international trade — market selection, product viability, transaction structure and risk control.",
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Services
          </p>
          <h2 id="services-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Global Sourcing, Procurement and Export Services
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Seven service areas covering the full trade cycle — from finding and verifying a
            supplier to landing goods and documenting an export shipment.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <article className="flex h-full flex-col rounded-xl border border-accent/30 bg-bg p-7">
                <h3 className="font-display text-xl font-semibold text-text">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text/85">{s.desc}</p>
                {s.to ? (
                  <Link
                    to={s.to}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
                  >
                    {s.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 text-sm text-text/80">
            Not sure which applies to your transaction?{" "}
            <a href="#advisory" className="font-semibold text-gold-deep underline-offset-4 hover:underline">
              Book a consultation
            </a>{" "}
            or read{" "}
            <Link to="/why-choose-us" className="font-semibold text-gold-deep underline-offset-4 hover:underline">
              why businesses choose ASMAN Prime Hub
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
