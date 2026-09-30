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
      if (url.protocol === "http:" || url.protocol === "https:") {
        return url.origin;
      }
    } catch {
      // try next candidate
    }
  }

  return null;
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

  return "http://localhost:3000";
}
