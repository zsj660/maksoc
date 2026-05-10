import { CollectionCatalogClient } from "@/components/collection-catalog-client";
import { CollectionsHeroWall } from "@/components/collections-hero-wall";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { categories, products } from "@/lib/products";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <CollectionsHeroWall categories={categories} />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10">
        <CollectionCatalogClient
          title="All Wax Prints"
          categories={categories}
          products={products}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
