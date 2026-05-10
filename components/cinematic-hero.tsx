"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroScene = {
  image: string;
  title: string;
  subtitle: string;
};

type CinematicHeroProps = {
  scenes: HeroScene[];
};

const SCENE_DURATION_MS = 4200;

export function CinematicHero({ scenes }: CinematicHeroProps) {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % scenes.length);
    }, SCENE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [scenes.length]);

  const active = scenes[sceneIndex];
  const progressWidth = useMemo(
    () => `${((sceneIndex + 1) / scenes.length) * 100}%`,
    [sceneIndex, scenes.length]
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      {scenes.map((scene, index) => (
        <div
          key={`${scene.image}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === sceneIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={scene.image}
            alt={scene.title}
            fill
            priority={index === 0}
            className="lux-image-zoom object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="film-grain absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(158,123,52,0.25),transparent_48%)]" />
      <div className="hero-glow absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9e7b34]/20 blur-3xl" />

      <div className="relative z-10 text-[#f8f5ee]">
        <h1 key={active.title} className="luxury-title reveal-up">
          {active.title}
        </h1>
        <p key={active.subtitle} className="reveal-up delay-1 mt-4 text-sm tracking-[0.22em] md:text-base">
          {active.subtitle}
        </p>
        <Link
          href="/collections"
          className="reveal-up delay-2 mt-10 inline-flex rounded-full bg-black px-8 py-3 text-xs tracking-[0.16em] text-white hover:bg-[#2c2c2c]"
        >
          Shop Now
        </Link>

        <div className="mx-auto mt-8 w-64 overflow-hidden rounded-full border border-white/40 bg-white/10 p-1">
          <div
            className="h-1 rounded-full bg-white transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </section>
  );
}
