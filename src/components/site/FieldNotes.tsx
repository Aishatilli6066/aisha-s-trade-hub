import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";
import { getAllPosts, formatDate } from "@/lib/blog";

export function FieldNotes() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      id="field-notes"
      aria-labelledby="field-notes-title"
      className="border-b border-text/10 bg-bg"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Field Notes
              </p>
              <h2
                id="field-notes-title"
                className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl"
              >
                Perspectives from live trade
              </h2>
              <p className="mt-4 max-w-2xl text-base text-text/80">
                Practical writing on global sourcing, supplier verification, commodity export,
                and cross-border trade execution.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              View all articles
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <FadeIn key={p.slug}>
              <li className="group flex h-full flex-col overflow-hidden rounded-xl border border-text/10 bg-surface transition-colors hover:border-accent/40">
                {p.image && (
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                    <img
                      src={p.image}
                      alt=""
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-text">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="transition-colors group-hover:text-accent"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text/75">
                    {p.excerpt || p.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-text/55">
                    <span>{formatDate(p.date)}</span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="font-semibold text-accent hover:underline underline-offset-4"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
