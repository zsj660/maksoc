"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

type CategoryItem = {
  name: string;
  slug: string;
};

type CollectionCatalogClientProps = {
  title: string;
  categories: readonly CategoryItem[];
  products: Product[];
  activeSlug?: string;
};

const PAGE_SIZE = 24;

export function CollectionCatalogClient({
  title,
  categories,
  products,
  activeSlug,
}: CollectionCatalogClientProps) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name-asc" | "name-desc" | "latest">("latest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const list = normalized
      ? products.filter((product) => product.name.toLowerCase().includes(normalized))
      : products;

    const sorted = [...list];
    if (sortBy === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sorted.sort((a, b) => Number(b.id) - Number(a.id));
    }
    return sorted;
  }, [products, query, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const currentPageProducts = filtered.slice(start, start + PAGE_SIZE);

  return (
    <>
      <p className="luxury-subtitle text-xs">Collections</p>
      <h1 className="mt-3 text-4xl tracking-[0.08em] md:text-5xl">{title}</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/collections"
          className={`rounded-full border px-5 py-2 text-xs tracking-[0.12em] ${
            !activeSlug ? "border-black bg-black text-white" : "border-black/20 hover:bg-black hover:text-white"
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/collections/${category.slug}`}
            className={`rounded-full border px-5 py-2 text-xs tracking-[0.12em] ${
              category.slug === activeSlug
                ? "border-black bg-black text-white"
                : "border-black/20 hover:bg-black hover:text-white"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px]">
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(1);
          }}
          placeholder="Search by product name"
          className="rounded-full border border-black/20 bg-white/70 px-5 py-3 text-sm outline-none"
        />
        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value as "name-asc" | "name-desc" | "latest");
            setPage(1);
          }}
          className="rounded-full border border-black/20 bg-white/70 px-5 py-3 text-sm outline-none"
        >
          <option value="latest">Sort: Latest</option>
          <option value="name-asc">Sort: Name A-Z</option>
          <option value="name-desc">Sort: Name Z-A</option>
        </select>
      </div>
      <div className="mt-3">
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setSortBy("latest");
            setPage(1);
          }}
          className="rounded-full border border-black/20 px-4 py-2 text-xs tracking-[0.12em] hover:bg-black hover:text-white"
        >
          Reset Filters
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs tracking-[0.08em] text-[#161616]/70">
        <p>
          Showing {currentPageProducts.length} of {filtered.length} products
        </p>
        <p>
          Page {safePage} / {totalPages}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {currentPageProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {currentPageProducts.length === 0 && (
        <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-8 text-center">
          <p className="text-sm tracking-[0.08em] text-[#161616]/72">
            No products match your search. Try another keyword.
          </p>
        </div>
      )}

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={safePage <= 1}
          className="rounded-full border border-black/20 px-5 py-2 text-xs tracking-[0.12em] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={safePage >= totalPages}
          className="rounded-full border border-black/20 px-5 py-2 text-xs tracking-[0.12em] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Next
        </button>
      </div>
    </>
  );
}
