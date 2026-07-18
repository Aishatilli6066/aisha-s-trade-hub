import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/FadeIn";

// ============================================================================
// CALENDLY CONFIGURATION
// ----------------------------------------------------------------------------
const CALENDLY_URL = "https://calendly.com/aishausman-international/30min";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Consultation — Aisha Usman" },
      {
        name: "description",
        content:
          "Thank you for your payment. Pick a date and time for your trade consultation with Aisha Usman.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <div className="min-h-dvh bg-bg font-sans text-text antialiased">
      <Nav />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Payment confirmed
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Pick a date &amp; time for your consultation
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text/80 sm:text-lg">
            Thank you for your payment. Choose a slot below — you&rsquo;ll receive a calendar
            invite and a confirmation email with the meeting link right away.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 overflow-hidden rounded-xl border border-text/10 bg-surface">
            <iframe
              src={CALENDLY_URL}
              title="Schedule your consultation"
              className="h-[820px] w-full"
              loading="lazy"
              frameBorder="0"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 text-sm text-muted">
            Trouble loading the scheduler?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Open it in a new tab
            </a>
            .
          </p>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
