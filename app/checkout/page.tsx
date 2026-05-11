"use client";

import { FormEvent, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCart, useCartLines } from "@/components/cart-provider";
import { ORDER_KEY } from "@/lib/client-storage";
import type { AdminOrder } from "@/lib/admin-types";

function createLocalOrderId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `LOCAL-${crypto.randomUUID()}`;
  }
  return `LOCAL-${new Date().getTime()}`;
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

  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    const form = new FormData(event.currentTarget);
    const customer = String(form.get("customerName") || "Guest Customer");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const address = String(form.get("address") || "");
    const notes = String(form.get("notes") || "");
    const linesPayload = lines.map((line) => ({
      productId: line.product!.id,
      productName: line.product!.name,
      unitPrice: line.product!.price,
      quantity: line.quantity,
      lineTotal: line.product!.price * line.quantity,
    }));
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          email,
          phone,
          address,
          notes,
          itemCount,
          total,
          lines: linesPayload,
        }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Unable to place order.");
      }
      const payload = (await response.json()) as { orderId: string };
      setOrderId(payload.orderId);
      setOrdered(true);
      clearCart();
    } catch (error) {
      const raw = window.localStorage.getItem(ORDER_KEY);
      const existing: AdminOrder[] = raw ? JSON.parse(raw) : [];
      const fallbackOrder: AdminOrder = {
        id: createLocalOrderId(),
        customer,
        status: "Pending",
        createdAt: new Date().toISOString().slice(0, 10),
        itemCount,
        total,
        email,
        phone,
        address,
        notes,
        lines: linesPayload,
      };
      window.localStorage.setItem(ORDER_KEY, JSON.stringify([fallbackOrder, ...existing]));
      setOrderId(fallbackOrder.id);
      setOrdered(true);
      clearCart();
      setSubmitError(
        error instanceof Error
          ? `Database sync failed, saved locally instead: ${error.message}`
          : "Database sync failed, saved locally instead."
      );
    }
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
        <div className="mt-4 rounded-xl border border-black/15 bg-[#f8f5ee] p-4 text-sm text-[#161616]/80">
          No online payment is required. Submit this order, and our team will contact you to
          confirm stock, shipping, and offline payment details.
        </div>
        {!ordered ? (
          <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-black/10 bg-white/60 p-6">
            <div className="rounded-xl border border-black/15 bg-[#f8f5ee] p-4">
              <p className="text-sm tracking-[0.12em]">
                Estimated Order Total: ${total.toFixed(2)}
              </p>
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
              Submit Order Request
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-8 text-center">
            <h2 className="text-2xl tracking-[0.08em]">Order Confirmed</h2>
            <p className="mt-3 text-[#161616]/70">
              Thank you. Your order request has been received. We will contact you shortly for
              offline payment and fulfillment.
            </p>
            <p className="mt-3 text-xs tracking-[0.12em] text-[#161616]/65">Order ID: {orderId}</p>
          </div>
        )}
        {submitError && <p className="mt-4 text-sm text-[#8b1e1e]">{submitError}</p>}
      </main>
      <SiteFooter />
    </div>
  );
}
