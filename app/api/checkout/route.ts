import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

type CheckoutPayload = {
  customer: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
  itemCount: number;
  total: number;
  lines: Array<{
    productId: string;
    productName: string;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
  }>;
};

function createNextOrderId(existingIds: string[]) {
  const max = existingIds.reduce((acc, id) => {
    const match = id.match(/ORD-(\d+)/);
    const numeric = match ? Number(match[1]) : 0;
    return Math.max(acc, numeric);
  }, 1000);
  return `ORD-${max + 1}`;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as CheckoutPayload | null;
  if (!body?.customer || !Array.isArray(body.lines) || body.lines.length === 0) {
    return NextResponse.json({ error: "Invalid checkout payload." }, { status: 400 });
  }
  const supabase = getSupabaseAdmin();
  const { data: latest, error: idError } = await supabase
    .from("orders_admin")
    .select("id")
    .order("created_at", { ascending: false })
    .limit(20);
  if (idError) {
    return NextResponse.json({ error: idError.message }, { status: 500 });
  }
  const orderId = createNextOrderId((latest ?? []).map((x) => x.id));
  const createdAt = new Date().toISOString().slice(0, 10);

  const { error: orderError } = await supabase.from("orders_admin").insert({
    id: orderId,
    customer: body.customer,
    status: "Pending",
    created_at: createdAt,
    item_count: body.itemCount,
    total: body.total,
    email: body.email ?? null,
    phone: body.phone ?? null,
    address: body.address ?? null,
    notes: body.notes ?? null,
  });
  if (orderError) {
    return NextResponse.json({ error: orderError.message }, { status: 500 });
  }

  const linesPayload = body.lines.map((line) => ({
    order_id: orderId,
    product_id: line.productId,
    product_name: line.productName,
    unit_price: line.unitPrice,
    quantity: line.quantity,
    line_total: line.lineTotal,
  }));
  const { error: linesError } = await supabase.from("order_lines_admin").insert(linesPayload);
  if (linesError) {
    return NextResponse.json({ error: linesError.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, orderId });
}
