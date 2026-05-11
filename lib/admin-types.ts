import type { Order, Product } from "@/lib/products";

export type AdminOrderLine = {
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
};

export type AdminOrder = Order & {
  submittedAt?: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
  lines?: AdminOrderLine[];
};

export type AdminProductInput = Pick<
  Product,
  "name" | "category" | "image" | "description" | "material" | "colors" | "price"
> & {
  slug?: string;
};
