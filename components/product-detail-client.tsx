"use client";

import Image from "next/image";
import Link from "next/link";
import { TouchEvent, useEffect, useState } from "react";
import { useCart } from "@/components/cart-provider";
import { resolveImageUrl } from "@/lib/image-url";
import type { Product } from "@/lib/products";

type ProductDetailClientProps = {
  product: Product;
  gallery: string[];
};

export function ProductDetailClient({ product, gallery }: ProductDetailClientProps) {
  const { addToCart } = useCart();
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setLoading(true);
        setImageIndex((prev) => (prev + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setLoading(true);
        setImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
      if (event.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gallery.length]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 42) {
      if (delta < 0) {
        setLoading(true);
        setImageIndex((prev) => (prev + 1) % gallery.length);
      }
      if (delta > 0) {
        setLoading(true);
        setImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    }
    setTouchStartX(null);
  };

  return (
    <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-2">
      <section>
        <div
          key={imageIndex}
          className="image-fade-in relative aspect-square overflow-hidden rounded-2xl"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {loading && <div className="absolute inset-0 shimmer-skeleton" />}
          <Image
            src={resolveImageUrl(gallery[imageIndex])}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            onLoad={() => setLoading(false)}
          />
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs tracking-[0.08em] text-white"
          >
            Preview
          </button>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => {
                setLoading(true);
                setImageIndex(index);
              }}
              className={`relative aspect-square overflow-hidden rounded-xl border ${
                imageIndex === index ? "border-black" : "border-black/10"
              }`}
            >
              <Image
                src={resolveImageUrl(image)}
                alt={`${product.name}-${index}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
        <h1 className="text-4xl tracking-[0.08em]">{product.name}</h1>
        <p className="leading-8 text-[#161616]/78">{product.description}</p>
        <div>
          <h2 className="text-sm tracking-[0.14em] text-[#161616]/70">Material</h2>
          <p className="mt-2">{product.material}</p>
        </div>
        <div>
          <h2 className="text-sm tracking-[0.14em] text-[#161616]/70">Color Options</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <span key={color} className="rounded-full border border-black/20 px-4 py-2 text-xs">
                {color}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-black/20">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2 text-xl"
            >
              -
            </button>
            <span className="px-5">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-4 py-2 text-xl"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              for (let i = 0; i < quantity; i += 1) addToCart(product.id);
            }}
            className="rounded-full bg-black px-7 py-3 text-xs tracking-[0.14em] text-white hover:bg-[#2b2b2b]"
          >
            Add to Cart
          </button>
        </div>
        <Link
          href={`/collections/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-4 inline-flex w-fit rounded-full border border-black/20 px-5 py-2 text-xs tracking-[0.12em] hover:bg-black hover:text-white"
        >
          More in {product.category}
        </Link>
      </section>
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={resolveImageUrl(gallery[imageIndex])}
              alt={`${product.name} preview`}
              fill
              sizes="100vw"
              className={`object-contain transition-transform duration-300 ${zoomed ? "scale-[1.45]" : "scale-100"}`}
            />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-2">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-lightbox-${index}`}
                  type="button"
                  onClick={() => {
                    setLoading(true);
                    setImageIndex(index);
                  }}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === imageIndex ? "bg-white" : "bg-white/45"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setZoomed((prev) => !prev)}
              className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-1 text-sm text-white"
            >
              {zoomed ? "Zoom Out" : "Zoom In"}
            </button>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/20 px-3 py-1 text-sm text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
