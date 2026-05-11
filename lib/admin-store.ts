import type { AdminOrder } from "@/lib/admin-types";
import { demoOrders, products as defaultProducts, type Product } from "@/lib/products";

type ProductUpdate = Partial<
  Pick<Product, "name" | "slug" | "category" | "image" | "description" | "material" | "colors" | "price">
>;

const globalStore = globalThis as unknown as {
  __MAKSOC_ADMIN_PRODUCTS__?: Product[];
  __MAKSOC_ADMIN_ORDERS__?: AdminOrder[];
};

function getProductsRef() {
  if (!globalStore.__MAKSOC_ADMIN_PRODUCTS__) {
    globalStore.__MAKSOC_ADMIN_PRODUCTS__ = defaultProducts.map((item) => ({ ...item }));
  }
  return globalStore.__MAKSOC_ADMIN_PRODUCTS__;
}

function getOrdersRef() {
  if (!globalStore.__MAKSOC_ADMIN_ORDERS__) {
    globalStore.__MAKSOC_ADMIN_ORDERS__ = demoOrders.map((item) => ({ ...item }));
  }
  return globalStore.__MAKSOC_ADMIN_ORDERS__;
}

export function listAdminProducts() {
  return getProductsRef().slice().sort((a, b) => a.name.localeCompare(b.name));
}

export function addAdminProduct(input: Omit<Product, "id">) {
  const products = getProductsRef();
  const id = crypto.randomUUID();
  const product: Product = { id, ...input };
  products.push(product);
  return product;
}

export function updateAdminProduct(id: string, update: ProductUpdate) {
  const products = getProductsRef();
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...update };
  return products[index];
}

export function deleteAdminProduct(id: string) {
  const products = getProductsRef();
  const next = products.filter((item) => item.id !== id);
  const deleted = next.length !== products.length;
  globalStore.__MAKSOC_ADMIN_PRODUCTS__ = next;
  return deleted;
}

export function listAdminOrders() {
  return getOrdersRef().slice().sort((a, b) => {
    const at = new Date(a.submittedAt || a.createdAt).getTime();
    const bt = new Date(b.submittedAt || b.createdAt).getTime();
    return bt - at;
  });
}

export function upsertAdminOrder(order: AdminOrder) {
  const orders = getOrdersRef();
  const index = orders.findIndex((item) => item.id === order.id);
  if (index >= 0) {
    orders[index] = order;
    return;
  }
  orders.unshift(order);
}

export function updateAdminOrderStatus(id: string, status: AdminOrder["status"]) {
  const orders = getOrdersRef();
  const index = orders.findIndex((item) => item.id === id);
  if (index === -1) return false;
  orders[index] = { ...orders[index], status };
  return true;
}

export function clearAdminOrders() {
  globalStore.__MAKSOC_ADMIN_ORDERS__ = [];
}
