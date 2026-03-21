export default function Loading() {
  return (
    <div className="min-h-screen bg-soft-white" aria-label="Loading page content">
      {/* Hero section skeleton */}
      <div className="bg-deep-blue px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="h-5 w-32 animate-pulse rounded bg-white/10 mb-4" />
          <div className="h-10 w-3/4 animate-pulse rounded bg-white/15 mb-4" />
          <div className="h-6 w-1/2 animate-pulse rounded bg-white/10" />
        </div>
      </div>

      {/* Content section skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Section heading skeleton */}
        <div className="mb-8 text-center">
          <div className="mx-auto h-8 w-64 animate-pulse rounded bg-gray-200 mb-3" />
          <div className="mx-auto h-4 w-96 max-w-full animate-pulse rounded bg-gray-100" />
        </div>

        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-6"
            >
              <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200 mb-4" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200 mb-3" />
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
