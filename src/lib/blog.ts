import { marked } from "marked";

// Lightweight browser-safe frontmatter parser (avoids gray-matter's Node Buffer dep).
function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };
  const [, fm, content] = match;
  const data: Record<string, any> = {};
  let currentKey: string | null = null;
  for (const line of fm.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const listItem = /^\s*-\s*(.*)$/.exec(line);
    if (listItem && currentKey) {
      (data[currentKey] ||= []).push(stripQuotes(listItem[1]));
      continue;
    }
    const kv = /^([A-Za-z0-9_]+)\s*:\s*(.*)$/.exec(line);
    if (kv) {
      const [, key, value] = kv;
      currentKey = key;
      if (value.trim() === "") {
        data[key] = [];
      } else {
        data[key] = stripQuotes(value.trim());
      }
    }
  }
  return { data, content };
}
function stripQuotes(s: string): string {
  return s.replace(/^["'](.*)["']$/, "$1");
}
const matter = (raw: string) => parseFrontmatter(raw);

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

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Post extends PostMeta {
  html: string;
  content: string;
  toc: TocItem[];
  readingMinutes: number;
}

// Eagerly import all markdown files in src/content/posts as raw strings.
const modules = import.meta.glob("/src/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Adds stable ids to h2/h3 headings and returns the table of contents. */
function withHeadingIds(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const seen = new Set<string>();
  const out = html.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_m, lvl: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      let id = slugifyHeading(text) || `section-${toc.length + 1}`;
      let n = 2;
      while (seen.has(id)) id = `${id}-${n++}`;
      seen.add(id);
      toc.push({ id, text, level: Number(lvl) as 2 | 3 });
      return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
    },
  );
  return { html: out, toc };
}

function parseRaw(path: string, raw: string): Post {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const { data, content } = matter(raw);
  const rendered = marked.parse(content, { async: false }) as string;
  const { html, toc } = withHeadingIds(rendered);
  const words = content.split(/\s+/).filter(Boolean).length;
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
    toc,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

const allPosts: Post[] = Object.entries(modules)
  .filter(([path]) => !/\/readme\.md$/i.test(path))
  .map(([path, raw]) => parseRaw(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** Newer / older neighbours in the chronological listing. */
export function getAdjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const i = allPosts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: allPosts[i - 1], next: allPosts[i + 1] };
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const explicit = (post.related ?? [])
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => Boolean(p));
  if (explicit.length >= limit) return explicit.slice(0, limit);

  const byCategory = allPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !explicit.includes(p),
  );
  const rest = allPosts.filter(
    (p) => p.slug !== post.slug && !explicit.includes(p) && !byCategory.includes(p),
  );
  return [...explicit, ...byCategory, ...rest].slice(0, limit);
}


export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
