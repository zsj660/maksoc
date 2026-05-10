"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";
import { useCart } from "@/components/cart-provider";
import { resolveImageUrl } from "@/lib/image-url";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--mx", `${x}px`);
    event.currentTarget.style.setProperty("--my", `${y}px`);
  };

  const resetMove = () => {
    cardRef.current?.style.setProperty("--mx", "50%");
    cardRef.current?.style.setProperty("--my", "50%");
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      className="interactive-glow group overflow-hidden rounded-xl border border-black/10 bg-[#f8f5ee] p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        {loading && <div className="absolute inset-0 shimmer-skeleton" />}
        <Image
          src={resolveImageUrl(product.image)}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onLoad={() => setLoading(false)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <h3 className="pt-4 text-center text-sm tracking-[0.1em] text-[#1f1f1f]">{product.name}</h3>
      <div className="mt-4 flex items-center justify-center gap-3 pb-2">
        <Link
          href={`/products/${product.slug}`}
          className="rounded-full border border-black px-4 py-2 text-xs tracking-[0.1em] text-black transition-all hover:bg-black hover:text-white"
        >
          View Details
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product.id)}
          className="rounded-full border border-black px-4 py-2 text-xs tracking-[0.1em] text-black transition-all hover:bg-black hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
