"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCart, useCartLines } from "@/components/cart-provider";
import { resolveImageUrl } from "@/lib/image-url";

export default function CartPage() {
  const lines = useCartLines();
  const { removeFromCart, updateQuantity } = useCart();
  const total = lines.reduce(
    (sum, line) => sum + (line.product?.price ?? 0) * line.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10">
        <h1 className="text-4xl tracking-[0.08em]">Your Cart</h1>
        <div className="mt-10 space-y-4">
          {lines.length === 0 && (
            <div className="rounded-2xl border border-black/10 bg-white/50 p-8 text-center">
              <p className="text-[#161616]/70">Your cart is empty.</p>
              <Link
                href="/collections"
                className="mt-4 inline-flex rounded-full border border-black px-5 py-2 text-xs tracking-[0.14em] hover:bg-black hover:text-white"
              >
                Explore Collections
              </Link>
            </div>
          )}
          {lines.map((line) => (
            <article
              key={line.productId}
              className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-white/60 p-4 md:flex-row md:items-center"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                <Image
                  src={resolveImageUrl(line.product!.image)}
                  alt={line.product!.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg tracking-[0.05em]">{line.product!.name}</h2>
                <p className="text-sm text-[#161616]/65">{line.product!.category}</p>
                <p className="mt-1 text-sm text-[#161616]/80">
                  ${line.product!.price.toFixed(2)} x {line.quantity} = $
                  {(line.product!.price * line.quantity).toFixed(2)}
                </p>
              </div>
              <div className="inline-flex items-center rounded-full border border-black/20">
                <button
                  type="button"
                  onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                  className="px-4 py-2"
                >
                  -
                </button>
                <span className="px-4">{line.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                  className="px-4 py-2"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeFromCart(line.productId)}
                className="rounded-full border border-black/20 px-4 py-2 text-xs tracking-[0.1em] hover:bg-black hover:text-white"
              >
                Remove
              </button>
            </article>
          ))}
        </div>

        {lines.length > 0 && (
          <div className="mt-8 flex flex-col items-end gap-4">
            <p className="text-base tracking-[0.08em]">Cart Total: ${total.toFixed(2)}</p>
            <Link
              href="/checkout"
              className="rounded-full bg-black px-8 py-3 text-xs tracking-[0.14em] text-white hover:bg-[#2b2b2b]"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
