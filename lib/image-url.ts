const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudBase = cloudName
  ? `https://res.cloudinary.com/${cloudName}/image/upload`
  : "";

export function resolveImageUrl(src: string) {
  if (!src) return src;
  if (!src.startsWith("/catalog-import/")) return src;
  if (!cloudBase) return src;
  return `${cloudBase}${encodeURI(src)}`;
}
