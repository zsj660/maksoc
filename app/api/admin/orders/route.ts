import { NextResponse } from "next/server";
import { ensureAdmin } from "@/lib/admin-api";
import { listAdminOrders } from "@/lib/admin-store";
import { hasSupabaseCredentials, getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const auth = await ensureAdmin();
  if (!auth.ok) return auth.response;
  if (!hasSupabaseCredentials()) {
    return NextResponse.json({ orders: listAdminOrders() });
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("orders_admin")
    .select(
      "id, customer, status, created_at, inserted_at, item_count, total, email, phone, address, notes, order_lines_admin(product_id, product_name, unit_price, quantity, line_total)"
    )
    .order("inserted_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const orders = (data ?? []).map((order) => ({
    id: order.id,
    customer: order.customer,
    status: order.status,
    createdAt: order.created_at,
    submittedAt: order.inserted_at ?? undefined,
    itemCount: order.item_count,
    total: Number(order.total),
    email: order.email ?? undefined,
    phone: order.phone ?? undefined,
    address: order.address ?? undefined,
    notes: order.notes ?? undefined,
    lines: (order.order_lines_admin ?? []).map((line) => ({
      productId: line.product_id,
      productName: line.product_name,
      unitPrice: Number(line.unit_price),
      quantity: line.quantity,
      lineTotal: Number(line.line_total),
    })),
  }));

  return NextResponse.json({ orders });
}
