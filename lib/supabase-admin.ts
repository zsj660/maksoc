import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { products as defaultProducts } from "@/lib/products";

let cached: SupabaseClient | null = null;
let seeded = false;

export function getSupabaseAdmin() {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRole) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }
  cached = createClient(url, serviceRole, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cached;
}

export async function seedDefaultProductsIfNeeded() {
  if (seeded) return;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("products_admin").select("id").limit(1);
  if (error) throw error;
  if ((data?.length || 0) > 0) {
    seeded = true;
    return;
  }
  const payload = defaultProducts.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.category,
    image: product.image,
    description: product.description,
    material: product.material,
    colors: product.colors,
    price: product.price,
  }));
  const { error: insertError } = await supabase.from("products_admin").insert(payload);
  if (insertError) throw insertError;
  seeded = true;
}
