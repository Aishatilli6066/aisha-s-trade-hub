import matter from "gray-matter";
import { marked } from "marked";

export type BlogCategory =
  | "Global Sourcing"
  | "Supplier Verification"
  | "Commodity Export"
  | "Trade Documentation"
  | "Importation"
  | "OEM / ODM Manufacturing"
  | "Private Label Development";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Global Sourcing",
  "Supplier Verification",
  "Commodity Export",
  "Trade Documentation",
  "Importation",
  "OEM / ODM Manufacturing",
  "Private Label Development",
];

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory | string;
  author: string;
  date: string; // ISO
  image?: string;
  seoTitle?: string;
  metaDescription?: string;
  related?: string[]; // slugs
  excerpt?: string;
}

export interface Post extends PostMeta {
  html: string;
  content: string;
}

// Eagerly import all markdown files in src/content/posts as raw strings.
const modules = import.meta.glob("/src/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseRaw(path: string, raw: string): Post {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "Global Sourcing",
    author: data.author ?? "Aisha Usman",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    image: data.image,
    seoTitle: data.seoTitle ?? data.title,
    metaDescription: data.metaDescription ?? data.description,
    related: data.related ?? [],
    excerpt: data.excerpt ?? data.description ?? "",
    html,
    content,
  };
}

const allPosts: Post[] = Object.entries(modules)
  .map(([path, raw]) => parseRaw(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const explicit = (post.related ?? [])
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => Boolean(p));
  if (explicit.length >= limit) return explicit.slice(0, limit);

  const byCategory = allPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !explicit.includes(p),
  );
  return [...explicit, ...byCategory].slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
