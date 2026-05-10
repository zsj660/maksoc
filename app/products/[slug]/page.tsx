import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/product-detail-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProductBySlug, getProductGallery } from "@/lib/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gallery = getProductGallery(slug, 4);

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <ProductDetailClient product={product} gallery={gallery} />
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <Link
          href="/collections"
          className="inline-flex rounded-full border border-black/20 px-5 py-2 text-xs tracking-[0.12em] hover:bg-black hover:text-white"
        >
          Back to Collections
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
