'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-soft-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-construction-yellow/20">
          <AlertTriangle className="h-10 w-10 text-construction-yellow" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-deep-blue mb-3">
          Something Went Wrong
        </h1>
        <p className="text-concrete-gray mb-4">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or return to the homepage.
        </p>

        {/* Error details — dev mode only */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-left">
            <p className="text-sm font-mono text-red-800 break-words">
              {error.message}
            </p>
            {error.digest && (
              <p className="mt-1 text-xs text-red-600">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-construction-yellow px-6 py-3 font-semibold text-deep-blue transition-colors hover:bg-construction-yellow/90 focus:outline-none focus:ring-2 focus:ring-construction-yellow focus:ring-offset-2"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-deep-blue px-6 py-3 font-semibold text-deep-blue transition-colors hover:bg-deep-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
