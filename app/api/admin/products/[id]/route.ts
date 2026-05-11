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
  const body = (await request.json().catch(() => null)) as
    | {
        name?: string;
        category?: string;
        image?: string;
        description?: string;
        material?: string;
        colors?: string[];
        price?: number;
      }
    | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }
  const payload: Record<string, unknown> = {};
  if (typeof body.name === "string") {
    payload.name = body.name.trim();
    payload.slug = body.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }
  if (typeof body.category === "string") payload.category = body.category;
  if (typeof body.image === "string") payload.image = body.image.trim();
  if (typeof body.description === "string") payload.description = body.description.trim();
  if (typeof body.material === "string") payload.material = body.material.trim();
  if (Array.isArray(body.colors)) payload.colors = body.colors;
  if (typeof body.price === "number") payload.price = body.price;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("products_admin")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ product: data });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await ensureAdmin();
  if (!auth.ok) return auth.response;
  const { id } = await params;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("products_admin").delete().eq("id", id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
