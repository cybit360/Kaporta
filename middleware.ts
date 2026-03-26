import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limit tracking
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 60; // max requests per window

function getRateLimitInfo(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    const newEntry = { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, newEntry);
    return { count: 1, remaining: RATE_LIMIT_MAX - 1 };
  }

  entry.count += 1;
  return { count: entry.count, remaining: Math.max(0, RATE_LIMIT_MAX - entry.count) };
}

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { remaining } = getRateLimitInfo(ip);

  // Request logging
  console.log(
    `[API] ${request.method} ${request.nextUrl.pathname} - IP: ${ip} - ${new Date().toISOString()}`
  );

  const response = NextResponse.next();

  // Rate limiting headers
  response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT_MAX));
  response.headers.set('X-RateLimit-Remaining', String(remaining));

  if (remaining <= 0) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
        'X-RateLimit-Remaining': '0',
        'Retry-After': '60',
      },
    });
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*'],
};
