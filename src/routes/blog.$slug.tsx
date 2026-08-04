import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug, getRelatedPosts, formatDate, type Post } from "@/lib/blog";
import { AuthorBio } from "@/components/site/AuthorBio";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(post) };
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
  const { post, related } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text/60">
        <Link to="/" className="hover:text-gold-deep">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-gold-deep">Blog</Link>
      </nav>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">{String(post.category)}</p>
      <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-text/60">
        By {post.author} · {formatDate(post.date)}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt=""
          className="mt-8 aspect-video w-full rounded-lg object-cover"
        />
      )}

      <div
        className="prose-blog mt-10"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <AuthorBio />

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

      <div className="mt-16 rounded-lg border border-text/10 bg-text/[0.02] p-6 text-center">
        <h2 className="font-display text-xl font-semibold text-text">Have a sourcing or export project?</h2>
        <p className="mt-2 text-sm text-text/70">
          Engagements begin from USD 250. Custom proposals for larger transactions.
        </p>
        <Link
          to="/"
          hash="service-request"
          className="mt-4 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
        >
          Request a proposal
        </Link>
      </div>
    </article>
  );
}
