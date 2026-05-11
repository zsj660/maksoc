import { NextResponse } from "next/server";
import { ensureAdmin } from "@/lib/admin-api";
import { clearAdminOrders } from "@/lib/admin-store";
import { hasSupabaseCredentials, getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST() {
  const auth = await ensureAdmin();
  if (!auth.ok) return auth.response;
  if (!hasSupabaseCredentials()) {
    clearAdminOrders();
    return NextResponse.json({ ok: true });
  }

  const supabase = getSupabaseAdmin();
  const { error: deleteLinesError } = await supabase
    .from("order_lines_admin")
    .delete()
    .neq("id", -1);
  if (deleteLinesError) {
    return NextResponse.json({ error: deleteLinesError.message }, { status: 500 });
  }

  const { error: deleteOrdersError } = await supabase
    .from("orders_admin")
    .delete()
    .neq("id", "");
  if (deleteOrdersError) {
    return NextResponse.json({ error: deleteOrdersError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
