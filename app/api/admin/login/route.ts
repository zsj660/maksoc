import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, signAdminSession } from "@/lib/admin-session";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { username?: string; password?: string }
    | null;
  const username = body?.username?.trim() || "";
  const password = body?.password || "";
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD || "Maksoc@2026!";

  if (username !== expectedUser || password !== expectedPass) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signAdminSession(username);
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return NextResponse.json({ ok: true });
}
