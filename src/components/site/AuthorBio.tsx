import { Link } from "@tanstack/react-router";

export function AuthorBio() {
  return (
    <aside
      aria-label="About the author"
      className="mt-16 rounded-lg border border-text/10 bg-text/[0.02] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div
          aria-hidden="true"
          className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-accent/15 font-display text-xl font-bold text-accent"
        >
          AU
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About the author
          </p>
          <h2 className="mt-1 font-display text-xl font-semibold text-text">Aisha Usman</h2>
          <p className="mt-3 text-sm leading-relaxed text-text/80">
            Aisha Usman is an International Trade Consultant and Global Sourcing
            Specialist helping importers, exporters, manufacturers, and commodity
            buyers navigate supplier verification, sourcing, OEM manufacturing,
            commodity exports, and international trade opportunities.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              to="/"
              hash="about"
              className="font-medium text-accent hover:underline"
            >
              More about Aisha →
            </Link>
            <a
              href="https://www.upwork.com/freelancers/~01fa3cf6e886a40e02"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text/70 hover:text-accent"
            >
              Hire on Upwork
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
