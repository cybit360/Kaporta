export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-soft-white" aria-label="Loading services">
      {/* Hero skeleton */}
      <div className="bg-deep-blue px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto h-10 w-64 animate-pulse rounded bg-white/15 mb-4" />
          <div className="mx-auto h-5 w-96 max-w-full animate-pulse rounded bg-white/10" />
        </div>
      </div>

      {/* Service cards grid skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              {/* Icon placeholder */}
              <div className="h-12 w-12 animate-pulse rounded-lg bg-construction-yellow/20 mb-4" />
              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200 mb-3" />
              {/* Description lines */}
              <div className="space-y-2 mb-5">
                <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-gray-100" />
              </div>
              {/* CTA button placeholder */}
              <div className="h-10 w-36 animate-pulse rounded-lg bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
