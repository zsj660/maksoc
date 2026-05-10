import { notFound } from "next/navigation";
import { CollectionCatalogClient } from "@/components/collection-catalog-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { categories, getCategoryBySlug, getProductsByCategorySlug } from "@/lib/products";

export default async function CategoryCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const categoryProducts = getProductsByCategorySlug(slug);

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10">
        <CollectionCatalogClient
          title={category.name}
          categories={categories}
          products={categoryProducts}
          activeSlug={slug}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
