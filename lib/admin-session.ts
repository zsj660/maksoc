import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "maksoc_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET environment variable.");
  }
  return secret;
}

function getSignature(payload: string) {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

export function signAdminSession(username: string) {
  const data = {
    username,
    exp: Date.now() + SESSION_TTL_MS,
  };
  const payload = Buffer.from(JSON.stringify(data)).toString("base64url");
  const sig = getSignature(payload);
  return `${payload}.${sig}`;
}

export function verifyAdminSession(token?: string | null) {
  if (!token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expectedSig = getSignature(payload);
  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedBuf.length) return null;
  if (!timingSafeEqual(sigBuf, expectedBuf)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      username: string;
      exp: number;
    };
    if (!data?.username || !data?.exp) return null;
    if (Date.now() > data.exp) return null;
    return data;
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return verifyAdminSession(token);
}
