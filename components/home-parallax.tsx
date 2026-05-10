"use client";

import { ReactNode, useEffect, useState } from "react";

type HomeParallaxProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
};

export function HomeParallax({ children, offset = 0.06, className = "" }: HomeParallaxProps) {
  const [translateY, setTranslateY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => setTranslateY(window.scrollY * offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, reducedMotion]);

  return (
    <div
      className={className}
      style={{
        transform: reducedMotion ? "none" : `translate3d(0, ${translateY}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
