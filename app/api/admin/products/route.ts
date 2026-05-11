import { NextResponse } from "next/server";
import { ensureAdmin } from "@/lib/admin-api";
import { seedDefaultProductsIfNeeded, getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const auth = await ensureAdmin();
  if (!auth.ok) return auth.response;
  await seedDefaultProductsIfNeeded();
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("products_admin")
    .select("*")
    .order("name", { ascending: true });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ products: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await ensureAdmin();
  if (!auth.ok) return auth.response;
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
  if (!body?.name || !body?.category || !body?.image) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  const slug = body.name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
  const payload = {
    slug,
    name: body.name.trim(),
    category: body.category,
    image: body.image.trim(),
    description: body.description?.trim() || "Newly added wax print fabric.",
    material: body.material?.trim() || "100% premium cotton wax print",
    colors: Array.isArray(body.colors) && body.colors.length > 0 ? body.colors : ["Multi Color"],
    price: Number(body.price ?? 0),
  };
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("products_admin")
    .insert(payload)
    .select("*")
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ product: data });
}
