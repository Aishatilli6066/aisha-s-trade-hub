import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "";
const SITE_TITLE = "Aisha Usman — International Trade Insights";
const SITE_DESCRIPTION =
  "Articles on global sourcing, supplier verification, commodity export, OEM/ODM manufacturing, private label development, and international trade.";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const posts = getAllPosts();
        const items = posts
          .map((p) => {
            const link = `${BASE_URL}/blog/${p.slug}`;
            return [
              `    <item>`,
              `      <title>${escapeXml(p.title)}</title>`,
              `      <link>${link}</link>`,
              `      <guid isPermaLink="true">${link}</guid>`,
              `      <pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
              `      <category>${escapeXml(String(p.category))}</category>`,
              `      <author>${escapeXml(p.author)}</author>`,
              `      <description>${escapeXml(p.metaDescription || p.description || p.excerpt || "")}</description>`,
              `    </item>`,
            ].join("\n");
          })
          .join("\n");

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0">`,
          `  <channel>`,
          `    <title>${escapeXml(SITE_TITLE)}</title>`,
          `    <link>${BASE_URL}/blog</link>`,
          `    <description>${escapeXml(SITE_DESCRIPTION)}</description>`,
          `    <language>en</language>`,
          posts[0] ? `    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>` : "",
          items,
          `  </channel>`,
          `</rss>`,
        ]
          .filter(Boolean)
          .join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
