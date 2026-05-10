"use client";

import { useEffect, useState } from "react";

export function BrandOpening() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    const opened = window.sessionStorage.getItem("maksoc_opening_seen");
    if (opened) return false;
    window.sessionStorage.setItem("maksoc_opening_seen", "1");
    return true;
  });

  useEffect(() => {
    if (!show) return;
    const timer = window.setTimeout(() => setShow(false), 1500);
    return () => window.clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div className="opening-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="text-5xl tracking-[0.28em]">MAKSOC</p>
        <p className="mt-4 text-xs tracking-[0.2em] text-white/70">
          AUTHENTIC AFRICAN WAX PRINTS
        </p>
      </div>
    </div>
  );
}
