import { FadeIn } from "./FadeIn";

export const UPWORK_URL = "https://www.upwork.com/freelancers/~01fa3cf6e886a40e02";

export function Upwork() {
  return (
    <section
      id="upwork"
      aria-labelledby="upwork-title"
      className="border-b border-text/10 bg-surface"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Upwork
          </p>
          <h2
            id="upwork-title"
            className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl"
          >
            Prefer Working Through <span className="text-accent">Upwork?</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text/85 sm:text-lg">
            Businesses and entrepreneurs who prefer platform-based engagements can hire me
            directly through Upwork for trade consulting, supplier sourcing, supplier
            verification, import/export business planning, OEM/ODM manufacturing projects,
            private label product development, commodity exports, and custom-made machinery
            sourcing.
          </p>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#14A800] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14A800] focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.808 2.287 5.083 5.096 5.083 2.808 0 5.095-2.275 5.095-5.083v-1.191c.531 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45-.001-3.014-2.439-5.482-5.479-5.482z" />
            </svg>
            Hire Me on Upwork
          </a>
          <p className="mt-4 text-xs text-muted">Opens in a new tab.</p>
        </FadeIn>
      </div>
    </section>
  );
}
