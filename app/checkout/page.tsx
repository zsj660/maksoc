"use client";

import { FormEvent, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCart, useCartLines } from "@/components/cart-provider";
import { ORDER_KEY } from "@/lib/client-storage";
import type { Order } from "@/lib/products";

type CheckoutOrder = Order & {
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
  lines?: Array<{
    productId: string;
    productName: string;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
  }>;
};

function createNextOrderId(existing: Order[]) {
  const max = existing.reduce((acc, order) => {
    const match = order.id.match(/ORD-(\d+)/);
    const numeric = match ? Number(match[1]) : 0;
    return Math.max(acc, numeric);
  }, 1000);
  return `ORD-${max + 1}`;
}

export default function CheckoutPage() {
  const { itemCount, clearCart } = useCart();
  const lines = useCartLines();
  const [ordered, setOrdered] = useState(false);
  const [orderId, setOrderId] = useState("");
  const total = lines.reduce(
    (sum, line) => sum + (line.product?.price ?? 0) * line.quantity,
    0
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const customer = String(form.get("customerName") || "Guest Customer");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const address = String(form.get("address") || "");
    const notes = String(form.get("notes") || "");
    const raw = window.localStorage.getItem(ORDER_KEY);
    const existing: CheckoutOrder[] = raw ? JSON.parse(raw) : [];
    const newOrder: CheckoutOrder = {
      id: createNextOrderId(existing),
      customer,
      status: "Pending",
      createdAt: new Date().toISOString().slice(0, 10),
      itemCount,
      total,
      email,
      phone,
      address,
      notes,
      lines: lines.map((line) => ({
        productId: line.product!.id,
        productName: line.product!.name,
        unitPrice: line.product!.price,
        quantity: line.quantity,
        lineTotal: line.product!.price * line.quantity,
      })),
    };
    window.localStorage.setItem(ORDER_KEY, JSON.stringify([newOrder, ...existing]));
    setOrderId(newOrder.id);
    setOrdered(true);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:px-10">
        <h1 className="text-4xl tracking-[0.08em]">Checkout</h1>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] tracking-[0.12em]">
          <div className="rounded-full border border-black bg-black px-3 py-2 text-white">
            1. Cart Review
          </div>
          <div
            className={`rounded-full border border-black px-3 py-2 ${
              ordered ? "bg-black text-white" : "bg-transparent"
            }`}
          >
            2. Shipping
          </div>
          <div
            className={`rounded-full border border-black px-3 py-2 ${
              ordered ? "bg-black text-white" : "bg-transparent"
            }`}
          >
            3. Confirmation
          </div>
        </div>
        <p className="mt-3 text-[#161616]/72">
          Complete your order details below. ({itemCount} item{itemCount === 1 ? "" : "s"})
        </p>
        {!ordered ? (
          <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-black/10 bg-white/60 p-6">
            <div className="rounded-xl border border-black/15 bg-[#f8f5ee] p-4">
              <p className="text-sm tracking-[0.12em]">Order Total: ${total.toFixed(2)}</p>
            </div>
            <input
              required
              name="customerName"
              placeholder="Full Name"
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none"
            />
            <input required name="email" placeholder="Email" type="email" className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none" />
            <input required name="phone" placeholder="Phone" className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none" />
            <input required name="address" placeholder="Shipping Address" className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none" />
            <textarea
              name="notes"
              placeholder="Order note (optional)"
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none"
              rows={3}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-black px-5 py-3 text-xs tracking-[0.14em] text-white hover:bg-[#2b2b2b]"
            >
              Place Order
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-8 text-center">
            <h2 className="text-2xl tracking-[0.08em]">Order Confirmed</h2>
            <p className="mt-3 text-[#161616]/70">
              Thank you for shopping with MAKSOC. Our team will contact you shortly.
            </p>
            <p className="mt-3 text-xs tracking-[0.12em] text-[#161616]/65">Order ID: {orderId}</p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
