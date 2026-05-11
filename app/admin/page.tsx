"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { AdminOrder } from "@/lib/admin-types";
import type { Product } from "@/lib/products";

const CATEGORY_OPTIONS: Product["category"][] = [
  "Super Wax",
  "Hollandairs",
  "Grand Super",
  "Small Diamond",
];

function getDateLabel(order: AdminOrder) {
  const raw = order.submittedAt || order.createdAt;
  const date = raw ? new Date(raw) : null;
  if (!date || Number.isNaN(date.getTime())) return "Unknown Time";
  const now = new Date();
  const startOfNow = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startOfTarget = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const diffDays = Math.floor((startOfNow - startOfTarget) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays <= 7) return "Last 7 Days";
  return "Older";
}

function getDateSortWeight(label: string) {
  if (label === "Today") return 0;
  if (label === "Yesterday") return 1;
  if (label === "Last 7 Days") return 2;
  if (label === "Older") return 3;
  return 4;
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [bulkCategory, setBulkCategory] = useState<Product["category"]>("Super Wax");
  const [bulkPrice, setBulkPrice] = useState<string>("");
  const [orderQuery, setOrderQuery] = useState("");
  const [booting, setBooting] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function loadDashboardData() {
    const [productsRes, ordersRes] = await Promise.all([
      fetch("/api/admin/products", { cache: "no-store" }),
      fetch("/api/admin/orders", { cache: "no-store" }),
    ]);
    if (!productsRes.ok || !ordersRes.ok) {
      throw new Error("Failed to load admin data.");
    }
    const productsPayload = (await productsRes.json()) as { products: Product[] };
    const ordersPayload = (await ordersRes.json()) as { orders: AdminOrder[] };
    setProducts(productsPayload.products ?? []);
    setOrders(ordersPayload.orders ?? []);
  }

  useEffect(() => {
    async function init() {
      try {
        const sessionRes = await fetch("/api/admin/session", { cache: "no-store" });
        const payload = (await sessionRes.json()) as { authenticated?: boolean };
        if (payload.authenticated) {
          setAuthenticated(true);
          await loadDashboardData();
        }
      } catch {
        setError("Unable to verify admin session.");
      } finally {
        setBooting(false);
      }
    }
    void init();
  }, []);

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

  const groupedOrders = useMemo(() => {
    const map = new Map<string, AdminOrder[]>();
    for (const order of filteredOrders) {
      const label = getDateLabel(order);
      const items = map.get(label) || [];
      items.push(order);
      map.set(label, items);
    }
    return Array.from(map.entries()).sort(
      (a, b) => getDateSortWeight(a[0]) - getDateSortWeight(b[0])
    );
  }, [filteredOrders]);

  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSaving(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Login failed.");
      }
      setAuthenticated(true);
      setPassword("");
      await loadDashboardData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setSaving(false);
    }
  }

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setProducts([]);
    setOrders([]);
    setUsername("");
    setPassword("");
  }

  async function updatePrice(productId: string, value: number) {
    setProducts((prev) =>
      prev.map((product) => (product.id === productId ? { ...product, price: value } : product))
    );
    const target = products.find((p) => p.id === productId);
    if (!target) return;
    const res = await fetch(`/api/admin/products/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: value, name: target.name }),
    });
    if (!res.ok) {
      await loadDashboardData();
    }
  }

  async function addProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const image = String(formData.get("image") || "").trim();
    const category = String(formData.get("category") || "Super Wax") as Product["category"];
    if (!name || !image) return;
    const payload = {
      name,
      image,
      category,
      description: "Newly added wax print fabric.",
      material: "100% premium cotton wax print",
      colors: ["Multi Color"],
      price: 0,
    };
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const json = (await res.json()) as { product: Product };
      setProducts((prev) => [...prev, json.product]);
      event.currentTarget.reset();
    } else {
      setError("Failed to add product.");
    }
  }

  async function deleteProduct(productId: string) {
    const previous = products;
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    const res = await fetch(`/api/admin/products/${productId}`, { method: "DELETE" });
    if (!res.ok) {
      setProducts(previous);
      setError("Failed to delete product.");
    }
  }

  async function applyBulkPrice() {
    const numericPrice = Number(bulkPrice);
    if (Number.isNaN(numericPrice) || numericPrice < 0) return;
    const target = products.filter((product) => product.category === bulkCategory);
    setSaving(true);
    try {
      await Promise.all(
        target.map((product) =>
          fetch(`/api/admin/products/${product.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: product.name, price: numericPrice }),
          })
        )
      );
      await loadDashboardData();
      setBulkPrice("");
    } catch {
      setError("Failed to apply category price.");
    } finally {
      setSaving(false);
    }
  }

  async function updateOrderStatus(orderId: string, status: AdminOrder["status"]) {
    const prev = orders;
    setOrders((items) =>
      items.map((item) => (item.id === orderId ? { ...item, status } : item))
    );
    const res = await fetch(`/api/admin/orders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) {
      setOrders(prev);
      setError("Failed to update order status.");
    }
  }

  async function clearAllOrders() {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/orders/clear", { method: "POST" });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Failed to clear orders.");
      }
      await loadDashboardData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to clear orders.");
    } finally {
      setSaving(false);
    }
  }

  if (booting) {
    return (
      <div className="min-h-screen bg-[#111] px-6 py-20 text-[#f8f5ee]">
        <p className="text-center text-sm text-white/75">Loading admin panel...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#111] px-6 py-20 text-[#f8f5ee]">
        <main className="mx-auto max-w-md rounded-2xl border border-white/15 bg-black/40 p-6">
          <h1 className="text-2xl tracking-[0.1em]">Admin Login</h1>
          <p className="mt-2 text-sm text-white/70">
            This panel is protected with server-side session authentication.
          </p>
          <p className="mt-1 text-xs text-white/50">
            Default login: admin / Maksoc@2026! (if environment variables are not set).
          </p>
          <form className="mt-6 space-y-3" onSubmit={onLogin}>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
              required
              className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
              type="password"
              className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            />
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl border border-[#9e7b34] bg-[#9e7b34]/20 px-4 py-2 disabled:opacity-60"
            >
              {saving ? "Signing in..." : "Sign in"}
            </button>
          </form>
          {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] px-6 py-8 text-[#f8f5ee] md:px-10">
      <main className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl tracking-[0.1em]">MAKSOC Admin</h1>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-full border border-white/30 px-4 py-2 text-xs tracking-[0.12em]"
          >
            Sign out
          </button>
        </div>
        {error && (
          <p className="rounded-xl border border-red-300/40 bg-red-900/20 px-4 py-2 text-sm text-red-200">
            {error}
          </p>
        )}

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
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
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
              disabled={saving}
              className="rounded-xl border border-[#9e7b34] bg-[#9e7b34]/20 px-4 py-2 disabled:opacity-60"
            >
              Apply Category Price
            </button>
          </div>
          <form onSubmit={addProduct} className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">
            <input
              name="name"
              required
              placeholder="Product name"
              className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            />
            <input
              name="image"
              required
              placeholder="Image URL"
              className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            />
            <select
              name="category"
              className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none"
            >
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-xl border border-[#9e7b34] bg-[#9e7b34]/20 px-4 py-2"
            >
              Add Product
            </button>
          </form>

          <div className="mt-6 space-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 md:grid-cols-[2fr_1fr_1fr_auto]"
              >
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
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <input
              value={orderQuery}
              onChange={(event) => setOrderQuery(event.target.value)}
              placeholder="Search by order ID or customer"
              className="w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 outline-none md:max-w-md"
            />
            <button
              type="button"
              onClick={clearAllOrders}
              disabled={saving}
              className="rounded-xl border border-white/30 px-4 py-2 text-xs tracking-[0.12em] disabled:opacity-60"
            >
              Clear All Orders
            </button>
          </div>
          <div className="mt-5 space-y-3">
            {groupedOrders.map(([label, items]) => (
              <div key={label} className="space-y-3">
                <p className="text-xs tracking-[0.14em] text-white/55">{label}</p>
                {items.map((order) => (
                  <details
                    key={order.id}
                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <summary className="grid cursor-pointer list-none grid-cols-1 gap-2 md:grid-cols-5">
                      <p>{order.id}</p>
                      <p>{order.customer}</p>
                      <p>{order.itemCount} items</p>
                      <select
                        value={order.status}
                        onChange={(event) =>
                          updateOrderStatus(order.id, event.target.value as AdminOrder["status"])
                        }
                        className="rounded-lg border border-white/20 bg-black/30 px-3 py-2"
                      >
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                      </select>
                      <p>
                        {order.createdAt}
                        <span className="ml-2 text-xs text-white/65">
                          ${order.total.toFixed(2)}
                        </span>
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
                          <p className="text-sm text-white/70">
                            No line-item details for this order.
                          </p>
                        )}
                        {(order.lines || []).map((line) => (
                          <div
                            key={`${order.id}-${line.productId}`}
                            className="rounded-lg border border-white/10 p-2 text-sm"
                          >
                            <p>{line.productName}</p>
                            <p className="text-white/70">
                              {line.quantity} x ${line.unitPrice.toFixed(2)} = $
                              {line.lineTotal.toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            ))}
            {groupedOrders.length === 0 && (
              <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-sm text-white/70">
                No orders yet.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
