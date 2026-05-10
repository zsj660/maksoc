"use client";

import Image from "next/image";
import { useState } from "react";
import { HomeParallax } from "@/components/home-parallax";
import { resolveImageUrl } from "@/lib/image-url";

type CategoryItem = {
  name: string;
  slug: string;
  image: string;
};

export function CollectionsHeroWall({ categories }: { categories: readonly CategoryItem[] }) {
  const [glow, setGlow] = useState<{ x: number; y: number } | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 pt-28 md:px-10">
      <div
        className="relative grid grid-cols-1 gap-4 overflow-hidden rounded-3xl md:grid-cols-3"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setGlow({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        }}
        onMouseLeave={() => setGlow(null)}
      >
        {glow && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(280px circle at ${glow.x}px ${glow.y}px, rgba(255,255,255,0.22), transparent 60%)`,
            }}
          />
        )}
        {categories.map((category, index) => (
          <HomeParallax key={category.slug} offset={0.02 + index * 0.01}>
            <div className="interactive-glow group relative h-52 overflow-hidden rounded-2xl border border-black/10">
              <Image
                src={resolveImageUrl(category.image)}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute bottom-4 left-4 text-sm tracking-[0.12em] text-white">
                {category.name}
              </p>
            </div>
          </HomeParallax>
        ))}
      </div>
    </section>
  );
}
