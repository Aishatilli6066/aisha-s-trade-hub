import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  getPostBySlug,
  getRelatedPosts,
  getAdjacentPosts,
  formatDate,
  type Post,
  type TocItem,
} from "@/lib/blog";
import { AuthorBio } from "@/components/site/AuthorBio";
import { SITE_URL, OG_IMAGE } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/discovery";


export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    const { prev, next } = getAdjacentPosts(post.slug);
    return { post, related: getRelatedPosts(post), prev, next };
  },

  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Aisha Usman" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const url = `${SITE_URL}/blog/${params.slug}`;
    const image = post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${SITE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`
      : OG_IMAGE;
    return {
      meta: [
        { title: `${post.seoTitle || post.title} — Aisha Usman` },
        { name: "description", content: post.metaDescription || post.description },
        { name: "author", content: post.author },
        { property: "article:author", content: post.author },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: String(post.category) },
        { property: "og:title", content: post.seoTitle || post.title },
        { property: "og:description", content: post.metaDescription || post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: post.title,
            description: post.metaDescription || post.description,
            author: { "@type": "Person", name: post.author, "@id": `${SITE_URL}/#aisha-usman` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            datePublished: post.date,
            dateModified: post.date,
            articleSection: post.category,
            image: [image],
            inLanguage: "en",
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-text">Post not found</h1>
      <p className="mt-3 text-text/70">This article doesn't exist or has been moved.</p>
      <Link
        to="/blog"
        className="mt-6 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg"
      >
        Back to all articles
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post, related, prev, next } = Route.useLoaderData();
  const toc = post.toc.filter((t: TocItem) => t.level === 2);

  return (
    <article className="mx-auto max-w-[46rem] px-5 py-12 sm:px-6 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text/60">
        <Link to="/" className="hover:text-gold-deep">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-gold-deep">Blog</Link>
      </nav>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">{String(post.category)}</p>
      <h1 className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-4xl md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-text/60">
        By {post.author} · {formatDate(post.date)} · {post.readingMinutes} min read
      </p>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mt-8 aspect-video w-full rounded-lg object-cover"
        />
      )}

      {toc.length > 3 && (
        <nav
          aria-label="Table of contents"
          className="mt-10 rounded-lg border border-text/10 bg-text/[0.02] p-5 sm:p-6"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            In this article
          </h2>
          <ol className="mt-3 space-y-2 text-sm">
            {toc.map((t: TocItem, i: number) => (
              <li key={t.id} className="flex gap-2">
                <span className="text-text/40 tabular-nums">{i + 1}.</span>
                <a href={`#${t.id}`} className="text-text/80 hover:text-gold-deep hover:underline">
                  {t.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div
        className="prose-blog mt-10"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <AuthorBio />

      {(prev || next) && (
        <nav
          aria-label="More articles"
          className="mt-12 grid gap-4 border-t border-text/10 pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              to="/blog/$slug"
              params={{ slug: prev.slug }}
              className="rounded-lg border border-text/10 p-4 transition-colors hover:border-accent/50"
            >
              <span className="text-xs uppercase tracking-wider text-text/50">Newer article</span>
              <span className="mt-1 block font-display text-base font-semibold text-text">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}
          {next && (
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="rounded-lg border border-text/10 p-4 transition-colors hover:border-accent/50 sm:text-right"
            >
              <span className="text-xs uppercase tracking-wider text-text/50">Older article</span>
              <span className="mt-1 block font-display text-base font-semibold text-text">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}


      {related.length > 0 && (
        <aside className="mt-16 border-t border-text/10 pt-10">
          <h2 className="font-display text-2xl font-semibold text-text">Related articles</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((r: Post) => (
              <li key={r.slug} className="rounded-lg border border-text/10 bg-text/[0.02] p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-gold-deep">
                  {String(r.category)}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="text-text hover:text-gold-deep"
                  >
                    {r.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-text/70">{r.excerpt || r.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="mt-16 rounded-lg border border-accent/40 bg-text/[0.02] p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
          Planning a sourcing, import or export transaction?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-text/80">
          If you need a structured review before committing capital, you can request a paid
          advisory or a project discovery review. Strategy advisory starts at USD 250; done-for-you
          projects begin with a discovery fee and a written proposal.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/"
            hash="advisory"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-text"
          >
            Start Strategy Advisory
          </Link>
          <Link
            to="/"
            hash="done-for-you"
            className="inline-flex items-center justify-center rounded-md border-2 border-accent px-5 py-2.5 text-sm font-semibold text-gold-deep transition-colors hover:bg-accent hover:text-text"
          >
            Request a Written Proposal
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-text/20 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-[#25D366] hover:text-[#25D366]"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

    </article>
  );
}
