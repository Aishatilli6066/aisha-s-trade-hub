import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { getAllPosts, BLOG_CATEGORIES, formatDate } from "@/lib/blog";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

const TITLE = "Insights & Field Notes — Aisha Usman";
const DESC =
  "Articles on global sourcing, supplier verification, commodity export, trade documentation, importation, OEM/ODM manufacturing, and private label development.";

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search["category"] === "string" ? (search["category"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      {
        property: "og:description",
        content: "Practical articles on international trade and global sourcing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = useMemo(() => getAllPosts(), []);
  const { category } = Route.useSearch();
  const [active, setActive] = useState<string>(
    category && (BLOG_CATEGORIES as string[]).includes(category) ? category : "All",
  );

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Insights &amp; field notes
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">
          Articles on international trade &amp; sourcing
        </h1>
        <p className="mt-4 text-base text-text/75">
          Practical, field-tested writing on global sourcing, supplier verification, commodity
          export, OEM/ODM, and private label development.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2">
        {(["All", ...BLOG_CATEGORIES] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`min-h-11 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              active === c
                ? "border-accent bg-accent text-text"
                : "border-text/15 text-text/75 hover:border-accent/60 hover:text-text"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text/60">No posts yet in this category.</p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li
              key={p.slug}
              className="group rounded-lg border border-text/10 bg-text/[0.02] p-5 transition-colors hover:border-accent/40"
            >
              {p.image && (
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                  <img
                    src={p.image}
                    alt=""
                    className="mb-4 aspect-video w-full rounded object-cover"
                    loading="lazy"
                  />
                </Link>
              )}
              <p className="text-xs font-medium uppercase tracking-wider text-gold-deep">
                {p.category}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold leading-snug">
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="text-text transition-colors group-hover:text-gold-deep"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-text/70">{p.excerpt || p.description}</p>
              <p className="mt-4 text-xs text-text/50">
                {p.author} · {formatDate(p.date)} · {p.readingMinutes} min read
              </p>

            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
