import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    // Canonical and og:url live on the leaf routes — links concatenate here.
    links: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Aisha Usman — Blog RSS",
        href: "/rss.xml",
      },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <div className="min-h-dvh bg-bg font-sans text-text antialiased">
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
