import Image from "next/image";
import Link from "next/link";
import { BrandOpening } from "@/components/brand-opening";
import { CinematicHero } from "@/components/cinematic-hero";
import { HomeParallax } from "@/components/home-parallax";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resolveImageUrl } from "@/lib/image-url";
import { categories, featuredProducts } from "@/lib/products";

export default function Home() {
  return (
    <div className="bg-[#f8f5ee] text-[#161616]">
      <BrandOpening />
      <SiteHeader transparent />
      <CinematicHero
        scenes={[
          {
            image: resolveImageUrl(categories[0].image),
            title: "MAKSOC",
            subtitle: "Authentic African Wax Prints",
          },
          {
            image: resolveImageUrl(categories[1].image),
            title: "CURATED CRAFT",
            subtitle: "Luxury Textiles For Modern Tailoring",
          },
          {
            image: resolveImageUrl(categories[2].image),
            title: "GLOBAL EDIT",
            subtitle: "Premium Collections For Retail And Couture",
          },
        ]}
      />

      <HomeParallax offset={0.03}>
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10">
          <p className="luxury-subtitle text-xs">Collections</p>
          <h2 className="mt-3 text-4xl tracking-[0.08em] md:text-5xl">Signature Categories</h2>
        </div>
        <div className="space-y-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/collections/${category.slug}`} className="block">
              <article className="group relative h-[280px] overflow-hidden rounded-2xl">
                <Image
                  src={resolveImageUrl(category.image)}
                  alt={category.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl tracking-[0.15em] text-[#f8f5ee] md:text-4xl">
                    {category.name}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
        </section>
      </HomeParallax>

      <HomeParallax offset={0.02}>
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="mb-10">
          <p className="luxury-subtitle text-xs">Featured</p>
          <h2 className="mt-3 text-4xl tracking-[0.08em] md:text-5xl">Fabric Selection</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </section>
      </HomeParallax>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-3 md:px-10">
        <article className="rounded-2xl border border-black/10 bg-white/70 p-6">
          <p className="text-xs tracking-[0.14em] text-[#161616]/65">CURATED QUALITY</p>
          <h3 className="mt-3 text-2xl tracking-[0.08em]">Premium Selection</h3>
          <p className="mt-3 text-sm leading-7 text-[#161616]/75">
            Every print is selected for color depth, texture fidelity, and tailoring suitability.
          </p>
        </article>
        <article className="rounded-2xl border border-black/10 bg-white/70 p-6">
          <p className="text-xs tracking-[0.14em] text-[#161616]/65">AUTHENTIC TEXTILES</p>
          <h3 className="mt-3 text-2xl tracking-[0.08em]">Trusted Sourcing</h3>
          <p className="mt-3 text-sm leading-7 text-[#161616]/75">
            Sourced from verified African wax print channels and established fabric networks.
          </p>
        </article>
        <article className="rounded-2xl border border-black/10 bg-white/70 p-6">
          <p className="text-xs tracking-[0.14em] text-[#161616]/65">GLOBAL SHIPPING</p>
          <h3 className="mt-3 text-2xl tracking-[0.08em]">Ready to Dispatch</h3>
          <p className="mt-3 text-sm leading-7 text-[#161616]/75">
            Built for retail and wholesale workflows with efficient fulfillment and order tracking.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="rounded-3xl border border-black/10 bg-white/65 p-8 md:p-12">
          <p className="text-xs tracking-[0.16em] text-[#161616]/65">BRAND NARRATIVE</p>
          <h2 className="mt-4 text-3xl tracking-[0.08em] md:text-5xl">
            Designed for Luxury Tailoring
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-black/10 bg-[#f8f5ee] p-5">
              <p className="text-xs tracking-[0.14em] text-[#161616]/65">STEP 01</p>
              <p className="mt-3 text-sm leading-7 text-[#161616]/75">
                Select premium wax prints curated for silhouette, drape, and visual statement.
              </p>
            </article>
            <article className="rounded-2xl border border-black/10 bg-[#f8f5ee] p-5">
              <p className="text-xs tracking-[0.14em] text-[#161616]/65">STEP 02</p>
              <p className="mt-3 text-sm leading-7 text-[#161616]/75">
                Build category-focused wardrobes for retail drops, ceremonies, and couture lines.
              </p>
            </article>
            <article className="rounded-2xl border border-black/10 bg-[#f8f5ee] p-5">
              <p className="text-xs tracking-[0.14em] text-[#161616]/65">STEP 03</p>
              <p className="mt-3 text-sm leading-7 text-[#161616]/75">
                Ship globally with a consistent, premium product experience from sourcing to delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pb-24">
        <div className="marquee-track whitespace-nowrap border-y border-black/10 py-4">
          <span className="mx-8 text-xs tracking-[0.22em] text-[#161616]/65">
            MAKSOC - AUTHENTIC AFRICAN WAX PRINTS - PREMIUM COTTON - WHOLESALE READY -
            GLOBAL SHIPPING
          </span>
          <span className="mx-8 text-xs tracking-[0.22em] text-[#161616]/65">
            MAKSOC - AUTHENTIC AFRICAN WAX PRINTS - PREMIUM COTTON - WHOLESALE READY -
            GLOBAL SHIPPING
          </span>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
