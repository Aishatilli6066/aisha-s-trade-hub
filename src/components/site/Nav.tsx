import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/asman-prime-hub-logo.png.asset.json";

const WHATSAPP = "https://wa.me/2347042322970";

const links = [
  { to: "/", hash: "services", label: "Services" },
  { to: "/", hash: "pricing", label: "Engagements" },
  { to: "/", hash: "work", label: "Case Studies" },
  { to: "/", hash: "about", label: "About" },
  { to: "/blog", hash: undefined, label: "Insights" },
  { to: "/", hash: "service-request", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-text/10 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          aria-label="Aisha Usman — International Trade Consultant, Home"
          className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <img
            src={logo.url}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="hidden font-display text-base font-semibold tracking-tight text-text sm:inline">
            Aisha Usman
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  activeOptions={{ exact: l.to === "/" && !l.hash }}
                  activeProps={{ className: "text-accent" }}
                  className="text-text/80 transition-colors hover:text-accent focus-visible:text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent rounded data-[status=active]:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-text transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-text/10 transition-[max-height] duration-300 ${open ? "max-h-[28rem]" : "max-h-0"}`}
      >
        <nav aria-label="Mobile" className="px-4 py-3">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" && !l.hash }}
                  activeProps={{ className: "text-accent" }}
                  className="block min-h-11 rounded px-2 py-3 text-base text-text/90 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-text"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
