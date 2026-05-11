import { NextResponse } from "next/server";
import { ensureAdmin } from "@/lib/admin-api";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await ensureAdmin();
  if (!auth.ok) return auth.response;
  const { id } = await params;
  const body = (await request.json().catch(() => null)) as { status?: string } | null;
  const status = body?.status;
  if (!status || !["Pending", "Processing", "Shipped"].includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("orders_admin").update({ status }).eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
