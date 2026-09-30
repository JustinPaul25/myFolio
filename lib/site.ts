/** Canonical production origin — used when env is missing or invalid.
 *  Apex is primary: www currently 301s to https://jplayan.site/ */
const PRODUCTION_SITE_URL = "https://jplayan.site";

/** Canonical site origin — set NEXT_PUBLIC_SITE_URL in production. */
function normalizeOrigin(value: string): string | null {
  const trimmed = value.trim().replace(/\/$/, "");
  if (!trimmed) return null;

  const candidates = [trimmed];
  // Allow host-only values like "www.example.com"
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed)) {
    candidates.unshift(`https://${trimmed}`);
  }

  for (const candidate of candidates) {
    try {
      const url = new URL(candidate);
      if (url.protocol !== "http:" && url.protocol !== "https:") continue;
      if (!isPlausibleHost(url.hostname)) continue;
      return url.origin;
    } catch {
      // try next candidate
    }
  }

  return null;
}

/** Reject placeholder hosts like "test" that break Open Graph absolute URLs. */
function isPlausibleHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1" || host === "::1") {
    return true;
  }
  // Require a real domain (e.g. jplayan.site), not a single label like "test"
  return host.includes(".");
}

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    const normalized = normalizeOrigin(fromEnv);
    if (normalized) return normalized;
  }

  // Netlify deploy context
  const netlifyUrl = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (netlifyUrl) {
    const normalized = normalizeOrigin(netlifyUrl);
    if (normalized) return normalized;
  }

  if (process.env.VERCEL_URL) {
    const normalized = normalizeOrigin(`https://${process.env.VERCEL_URL}`);
    if (normalized) return normalized;
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  return "http://localhost:3000";
}
