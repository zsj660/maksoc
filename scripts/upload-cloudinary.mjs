import { v2 as cloudinary } from "cloudinary";
import { existsSync, readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import path from "node:path";

/** Node does not load .env.local; Next.js does. Read it here for uploads. */
function loadEnvLocal() {
  const rootDir = process.cwd();
  const envPath = path.join(rootDir, ".env.local");
  if (!existsSync(envPath)) {
    console.error(`No .env.local found at ${envPath}`);
    console.error("Create it in the project root (same folder as package.json).");
    return;
  }
  let text = readFileSync(envPath, "utf8");
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvLocal();

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, "public", "catalog-import");
const cloudFolder = process.env.CLOUDINARY_FOLDER || "";
const maxFiles = Number(process.env.CLOUDINARY_MAX_FILES || "0");

const cloudName = (process.env.CLOUDINARY_CLOUD_NAME || "").trim();
const apiKey = (process.env.CLOUDINARY_API_KEY || "").trim();
const apiSecret = (process.env.CLOUDINARY_API_SECRET || "").trim();

function looksLikePlaceholder(name, value) {
  if (!value) return true;
  if (value === name) return true;
  if (/^(your_|xxx|changeme|paste|here)$/i.test(value)) return true;
  return false;
}

/** Cloud name is its own field on the dashboard — not the word "key" and not the API Key. */
function invalidCloudName(value) {
  if (looksLikePlaceholder("CLOUDINARY_CLOUD_NAME", value)) return true;
  if (/^(key|root|secret|api|cloud|name)$/i.test(value)) return true;
  return false;
}

if (
  invalidCloudName(cloudName) ||
  looksLikePlaceholder("CLOUDINARY_API_KEY", apiKey) ||
  looksLikePlaceholder("CLOUDINARY_API_SECRET", apiSecret)
) {
  console.error("Cloudinary credentials in .env.local are missing or still wrong.");
  console.error("");
  console.error("1) CLOUDINARY_CLOUD_NAME = the **Cloud name** on the Dashboard (top of page).");
  console.error("   Do NOT put: key, root, API Key, or API Secret here.");
  console.error("2) CLOUDINARY_API_KEY = API Key (often digits).");
  console.error("3) CLOUDINARY_API_SECRET = API Secret.");
  console.error("4) NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = same value as (1).");
  console.error("");
  console.error(`Read from: ${path.join(rootDir, ".env.local")}`);
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listFiles(fullPath)));
      continue;
    }
    if (!/\.(png|jpe?g|webp|gif)$/i.test(entry.name)) continue;
    out.push(fullPath);
  }
  return out;
}

function toCloudPublicId(localFilePath) {
  const relativeFromPublic = path
    .relative(path.join(rootDir, "public"), localFilePath)
    .replace(/\\/g, "/");
  const withoutExt = relativeFromPublic.replace(/\.[^.]+$/, "");
  return cloudFolder ? `${cloudFolder}/${withoutExt}` : withoutExt;
}

async function main() {
  const allFiles = await listFiles(sourceDir);
  const files = maxFiles > 0 ? allFiles.slice(0, maxFiles) : allFiles;
  console.log(`Uploading ${files.length} images from ${sourceDir}`);

  let success = 0;
  let failed = 0;

  for (const filePath of files) {
    const publicId = toCloudPublicId(filePath);
    try {
      await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        resource_type: "image",
      });
      success += 1;
      if (success % 50 === 0) {
        console.log(`Uploaded ${success}/${files.length}`);
      }
    } catch (error) {
      failed += 1;
      console.error(`Failed: ${filePath}`);
      console.error(error?.message || error);
    }
  }

  console.log(`Done. Success: ${success}, Failed: ${failed}`);
  if (failed > 0) process.exit(2);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
