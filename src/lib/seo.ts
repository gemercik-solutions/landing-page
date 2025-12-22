import { SITE } from "./site";

export function buildTitle(pageTitle?: string) {
  return pageTitle ? `${pageTitle} | ${SITE.name}` : SITE.name;
}

export function absoluteUrl(path: string) {
  const base = SITE.url.replace(/\/+$/, ""); // Remove trailing slashes
  const p = path.startsWith("/") ? path : `/${path}`; // Ensure leading slash
  return `${base}${p}`;
}
