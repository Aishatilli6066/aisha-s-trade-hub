import * as React from "react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function FadeIn({
  children,
  as: As = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = As as any;
  return (
    <Tag
      ref={ref as any}
      className={`fade-in-init ${shown ? "fade-in-show" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
