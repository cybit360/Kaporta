export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-soft-white" aria-label="Loading blog">
      {/* Hero skeleton */}
      <div className="bg-deep-blue px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto h-10 w-64 animate-pulse rounded bg-white/15 mb-4" />
          <div className="mx-auto h-5 w-80 max-w-full animate-pulse rounded bg-white/10" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Category filter skeleton */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {['All', 'Industry News', 'Sustainability', 'Company Updates', 'Tips'].map(
            (label) => (
              <div
                key={label}
                className="h-9 animate-pulse rounded-full bg-gray-200 px-5"
                style={{ width: `${label.length * 10 + 24}px` }}
              />
            )
          )}
        </div>

        {/* Blog post cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              {/* Image placeholder */}
              <div className="h-44 w-full animate-pulse bg-gray-200" />
              {/* Content */}
              <div className="p-5">
                {/* Category + date row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-5 w-24 animate-pulse rounded-full bg-forest-green/15" />
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
                </div>
                {/* Title */}
                <div className="h-5 w-full animate-pulse rounded bg-gray-200 mb-2" />
                <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200 mb-3" />
                {/* Excerpt */}
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
                </div>
                {/* Author + read time */}
                <div className="flex items-center justify-between">
                  <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />
                  <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
