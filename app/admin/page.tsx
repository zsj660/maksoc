"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { demoOrders, products as defaultProducts, type Order, type Product } from "@/lib/products";
import { ORDER_KEY, PRODUCT_KEY } from "@/lib/client-storage";

type AdminOrder = Order & {
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

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window === "undefined") return defaultProducts;
    const productRaw = window.localStorage.getItem(PRODUCT_KEY);
    if (!productRaw) return defaultProducts;
    try {
      return JSON.parse(productRaw);
    } catch {
      return defaultProducts;
    }
  });
  const [orders, setOrders] = useState<AdminOrder[]>(() => {
    if (typeof window === "undefined") return demoOrders;
    const orderRaw = window.localStorage.getItem(ORDER_KEY);
    if (!orderRaw) return demoOrders;
    try {
      return JSON.parse(orderRaw);
    } catch {
      return demoOrders;
    }
  });
  const [bulkCategory, setBulkCategory] = useState<Product["category"]>("Super Wax");
  const [bulkPrice, setBulkPrice] = useState<string>("");
  const [orderQuery, setOrderQuery] = useState("");

  useEffect(() => {
    window.localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    window.localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
  }, [orders]);

  const updatePrice = (productId: string, value: number) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === productId ? { ...product, price: value } : product))
    );
  };

  const addProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const image = String(formData.get("image") || "");
    const category = String(formData.get("category") || "Super Wax") as Product["category"];
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const slug = name.toLowerCase().replaceAll(" ", "-");
    setProducts((prev) => [
      ...prev,
      {
        id,
        slug,
        name,
        image,
        category,
        description: "Newly added wax print fabric.",
        material: "100% premium cotton wax print",
        colors: ["Black", "Ivory"],
        price: 0,
      },
    ]);
    event.currentTarget.reset();
  };

  const deleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const applyBulkPrice = () => {
    const numericPrice = Number(bulkPrice);
    if (Number.isNaN(numericPrice) || numericPrice < 0) return;
    setProducts((prev) =>
      prev.map((product) =>
        product.category === bulkCategory ? { ...product, price: numericPrice } : product
      )
    );
  };

  const dashboard = useMemo(() => {
    const totalProducts = products.length;
    const pendingOrders = orders.filter((order) => order.status === "Pending").length;
    const processingOrders = orders.filter((order) => order.status === "Processing").length;
    const estimatedCatalogValue = products.reduce((sum, product) => sum + product.price, 0);
    return { totalProducts, pendingOrders, processingOrders, estimatedCatalogValue };
  }, [orders, products]);

  const filteredOrders = useMemo(() => {
    const q = orderQuery.trim().toLowerCase();
    if (!q) return orders;
    return orders.filter(
      (order) =>
        order.id.toLowerCase().includes(q) || order.customer.toLowerCase().includes(q)
    );
  }, [orderQuery, orders]);

  return (
    <div className="min-h-screen bg-[#111] px-6 py-8 text-[#f8f5ee] md:px-10">
      <main className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-3xl tracking-[0.1em]">MAKSOC Admin</h1>

        <section className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <article className="rounded-2xl border border-white/15 bg-black/40 p-4">
            <p className="text-xs text-white/65">Total Products</p>
            <p className="mt-2 text-2xl">{dashboard.totalProducts}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-black/40 p-4">
            <p className="text-xs text-white/65">Pending Orders</p>
            <p className="mt-2 text-2xl">{dashboard.pendingOrders}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-black/40 p-4">
            <p className="text-xs text-white/65">Processing Orders</p>
            <p className="mt-2 text-2xl">{dashboard.processingOrders}</p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-black/40 p-4">
            <p className="text-xs text-white/65">Catalog Value (USD)</p>
            <p className="mt-2 text-2xl">${dashboard.estimatedCatalogValue.toFixed(2)}</p>
          </article>
        </section>

        <section className="rounded-2xl border border-white/15 bg-black/40 p-6">
          <h2 className="text-xl tracking-[0.08em]">Product Management + Price Settings</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 rounded-xl border border-white/10 bg-black/20 p-4 md:grid-cols-[1fr_1fr_auto]">
            <select
              value={bulkCategory}
              onChange={(event) => setBulkCategory(event.target.value as Product["category"])}
              className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            >
              <option>Super Wax</option>
              <option>Hollandairs</option>
              <option>Grand Super</option>
              <option>Small Diamond</option>
            </select>
            <input
              type="number"
              min={0}
              value={bulkPrice}
              onChange={(event) => setBulkPrice(event.target.value)}
              placeholder="Bulk price"
              className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            />
            <button
              type="button"
              onClick={applyBulkPrice}
              className="rounded-xl border border-[#9e7b34] bg-[#9e7b34]/20 px-4 py-2"
            >
              Apply Category Price
            </button>
          </div>
          <form onSubmit={addProduct} className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">
            <input name="name" required placeholder="Product name" className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none" />
            <input name="image" required placeholder="Image URL" className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none" />
            <select name="category" className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none">
              <option>Super Wax</option>
              <option>Hollandairs</option>
              <option>Grand Super</option>
              <option>Small Diamond</option>
            </select>
            <button type="submit" className="rounded-xl border border-[#9e7b34] bg-[#9e7b34]/20 px-4 py-2">
              Add Product
            </button>
          </form>

          <div className="mt-6 space-y-3">
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-1 items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 md:grid-cols-[2fr_1fr_1fr_auto]">
                <div>
                  <p>{product.name}</p>
                  <p className="text-xs text-white/65">{product.category}</p>
                </div>
                <label className="text-xs text-white/75">
                  Price
                  <input
                    type="number"
                    min={0}
                    value={product.price}
                    onChange={(event) => updatePrice(product.id, Number(event.target.value))}
                    className="mt-1 w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 outline-none"
                  />
                </label>
                <p className="text-sm text-white/70">ID: {product.id}</p>
                <button
                  type="button"
                  onClick={() => deleteProduct(product.id)}
                  className="rounded-full border border-white/30 px-4 py-2 text-xs"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/15 bg-black/40 p-6">
          <h2 className="text-xl tracking-[0.08em]">Order Management</h2>
          <div className="mt-4">
            <input
              value={orderQuery}
              onChange={(event) => setOrderQuery(event.target.value)}
              placeholder="Search by order ID or customer"
              className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none md:max-w-md"
            />
          </div>
          <div className="mt-5 space-y-3">
            {filteredOrders.map((order) => (
              <details key={order.id} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <summary className="grid cursor-pointer list-none grid-cols-1 gap-2 md:grid-cols-5">
                  <p>{order.id}</p>
                  <p>{order.customer}</p>
                  <p>{order.itemCount} items</p>
                  <select
                    value={order.status}
                    onChange={(event) =>
                      setOrders((prev) =>
                        prev.map((item) =>
                          item.id === order.id
                            ? { ...item, status: event.target.value as Order["status"] }
                            : item
                        )
                      )
                    }
                    className="rounded-lg border border-white/20 bg-black/30 px-3 py-2"
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                  </select>
                  <p>
                    {order.createdAt}
                    <span className="ml-2 text-xs text-white/65">${order.total.toFixed(2)}</span>
                  </p>
                </summary>
                <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-black/30 p-4 md:grid-cols-2">
                  <div className="space-y-2 text-sm text-white/85">
                    <p>Email: {order.email || "-"}</p>
                    <p>Phone: {order.phone || "-"}</p>
                    <p>Address: {order.address || "-"}</p>
                    <p>Notes: {order.notes || "-"}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs tracking-[0.12em] text-white/65">Order Lines</p>
                    {(order.lines || []).length === 0 && (
                      <p className="text-sm text-white/70">No line-item details for this order.</p>
                    )}
                    {(order.lines || []).map((line) => (
                      <div key={`${order.id}-${line.productId}`} className="rounded-lg border border-white/10 p-2 text-sm">
                        <p>{line.productName}</p>
                        <p className="text-white/70">
                          {line.quantity} x ${line.unitPrice.toFixed(2)} = ${line.lineTotal.toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
