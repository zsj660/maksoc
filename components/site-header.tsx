"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-provider";

const navItems = [
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroMode = transparent && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        heroMode
          ? "bg-transparent"
          : "bg-[rgba(248,245,238,0.92)] backdrop-blur-sm border-b border-black/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`text-xl font-semibold tracking-[0.28em] ${
            heroMode ? "text-[#f8f5ee]" : "text-[#151515]"
          }`}
        >
          MAKSOC
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`rounded-full px-3 py-2 text-xs tracking-[0.12em] md:hidden ${
            heroMode ? "border border-white/45 text-white" : "border border-black/20 text-[#151515]"
          }`}
        >
          Menu
        </button>
        <nav className="hidden items-center gap-5 md:flex md:gap-8">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/collections" && pathname.startsWith("/collections/"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-[0.12em] transition-colors ${
                  heroMode
                    ? active
                      ? "text-white"
                      : "text-white/78 hover:text-white"
                    : active
                      ? "text-[#151515]"
                      : "text-[#151515]/70 hover:text-[#151515]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/cart"
            className={`rounded-full px-4 py-1.5 text-xs tracking-[0.12em] transition-all ${
              heroMode
                ? "border border-white/45 text-white hover:bg-white hover:text-black"
                : "border border-black/20 text-[#151515] hover:bg-black hover:text-white"
            }`}
          >
            Cart ({itemCount})
          </Link>
        </nav>
      </div>
      {menuOpen && (
        <div className="mx-6 mb-4 rounded-2xl border border-black/10 bg-[rgba(248,245,238,0.96)] p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm tracking-[0.08em] hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm tracking-[0.08em] hover:bg-black/5"
            >
              Cart ({itemCount})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
