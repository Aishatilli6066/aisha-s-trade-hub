import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug, getRelatedPosts, formatDate, type Post } from "@/lib/blog";
import { AuthorBio } from "@/components/site/AuthorBio";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(post) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
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
        { property: "og:url", content: `/blog/${params.slug}` },
        ...(post.image ? [{ property: "og:image", content: post.image }] : []),
        { name: "twitter:card", content: post.image ? "summary_large_image" : "summary" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription || post.description,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            articleSection: post.category,
            image: post.image ? [post.image] : undefined,
            mainEntityOfPage: `/blog/${params.slug}`,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl font-bold text-text">Post not found</h1>
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
        <Link to="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-accent">Blog</Link>
      </nav>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{String(post.category)}</p>
      <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
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
          <h2 className="font-serif text-2xl font-semibold text-text">Related articles</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((r: Post) => (
              <li key={r.slug} className="rounded-lg border border-text/10 bg-text/[0.02] p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {String(r.category)}
                </p>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="text-text hover:text-accent"
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
        <h2 className="font-serif text-xl font-semibold text-text">Have a sourcing or export project?</h2>
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
