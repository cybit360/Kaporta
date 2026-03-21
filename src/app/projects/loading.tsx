export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-soft-white" aria-label="Loading projects">
      {/* Hero skeleton */}
      <div className="bg-deep-blue px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto h-10 w-56 animate-pulse rounded bg-white/15 mb-4" />
          <div className="mx-auto h-5 w-80 max-w-full animate-pulse rounded bg-white/10" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Filter bar skeleton */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-10 animate-pulse rounded-full bg-gray-200"
              style={{ width: `${80 + i * 20}px` }}
            />
          ))}
        </div>

        {/* Project cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              {/* Image placeholder */}
              <div className="h-48 w-full animate-pulse bg-gray-200" />
              {/* Content */}
              <div className="p-5">
                {/* Category badge */}
                <div className="h-5 w-24 animate-pulse rounded-full bg-construction-yellow/20 mb-3" />
                {/* Title */}
                <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200 mb-2" />
                {/* Description */}
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-gray-100" />
                </div>
                {/* Meta info */}
                <div className="flex items-center gap-4">
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
                  <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
