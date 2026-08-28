/**
 * Best-effort, in-memory abuse protection for the public submission endpoint.
 *
 * The worker runtime may recycle isolates, so these counters are not a hard
 * guarantee — they are a cheap first line of defence against scripted floods
 * and accidental double submissions, layered on top of the honeypot and the
 * form-fill speed check.
 */

type Hit = { count: number; first: number };

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5; // submissions per IP per window
const DUPLICATE_TTL_MS = 30 * 60 * 1000; // 30 minutes

const hits = new Map<string, Hit>();
const recent = new Map<string, number>();

function sweep(now: number) {
  for (const [key, hit] of hits) if (now - hit.first > WINDOW_MS) hits.delete(key);
  for (const [key, at] of recent) if (now - at > DUPLICATE_TTL_MS) recent.delete(key);
}

export function clientIp(request: Request): string {
  const headers = request.headers;
  const forwarded = headers.get("cf-connecting-ip") ?? headers.get("x-real-ip");
  if (forwarded) return forwarded.trim();
  const chain = headers.get("x-forwarded-for");
  if (chain) return (chain.split(",")[0] ?? "unknown").trim();
  return "unknown";
}

/** Returns null when allowed, or a human-readable reason when blocked. */
export function checkRateLimit(ip: string): string | null {
  const now = Date.now();
  sweep(now);
  const hit = hits.get(ip);
  if (!hit || now - hit.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return null;
  }
  hit.count += 1;
  if (hit.count > MAX_PER_WINDOW) {
    return "Too many submissions from this connection. Please wait a few minutes, or message +234 704 232 2970 on WhatsApp.";
  }
  return null;
}

/** Flags an identical submission (same form, email and payment reference). */
export function isDuplicate(key: string): boolean {
  const now = Date.now();
  sweep(now);
  if (recent.has(key)) return true;
  recent.set(key, now);
  return false;
}

/**
 * Humans need time to read and answer a multi-step form. Anything faster than
 * this from first render to submit is almost certainly automated.
 */
export const MIN_FILL_MS = 8000;
