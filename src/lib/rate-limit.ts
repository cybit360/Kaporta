/**
 * In-memory rate limiting utility.
 *
 * NOTE: This works per-process. In a serverless / multi-instance deployment
 * you would replace this with a Redis-backed solution.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const ipMap = new Map<string, RateLimitEntry>();

/** Remove entries whose window has expired. */
function cleanup() {
  const now = Date.now();
  for (const [key, entry] of ipMap) {
    if (now >= entry.resetTime) {
      ipMap.delete(key);
    }
  }
}

// Run cleanup every 60 seconds to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(cleanup, 60_000);
}

/**
 * Check whether the given IP has exceeded the rate limit.
 *
 * @param ip        - Client IP address (or other identifier)
 * @param max       - Maximum number of requests allowed in the window
 * @param windowMs  - Time window in milliseconds
 * @returns `{ success: true }` if allowed, `{ success: false, retryAfterMs }` if blocked
 */
export function rateLimit(
  ip: string,
  max: number,
  windowMs: number,
): { success: true } | { success: false; retryAfterMs: number } {
  const now = Date.now();
  const entry = ipMap.get(ip);

  // No existing entry or window has expired — start fresh
  if (!entry || now >= entry.resetTime) {
    ipMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true };
  }

  // Within window — check count
  if (entry.count < max) {
    entry.count += 1;
    return { success: true };
  }

  // Rate limited
  return { success: false, retryAfterMs: entry.resetTime - now };
}
