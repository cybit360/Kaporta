import Link from 'next/link';
import { Home, Briefcase, Phone, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-soft-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Construction-themed SVG illustration */}
        <div className="mx-auto mb-8 w-48 h-48 relative">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Hard hat */}
            <ellipse cx="100" cy="130" rx="60" ry="12" fill="#E5E7EB" />
            <path
              d="M55 100 C55 65, 145 65, 145 100 L145 110 C145 115, 140 118, 135 118 L65 118 C60 118, 55 115, 55 110 Z"
              fill="#F5A623"
              stroke="#002F5D"
              strokeWidth="2"
            />
            <rect x="50" y="112" width="100" height="10" rx="3" fill="#002F5D" />
            <path
              d="M85 65 L85 55 C85 48, 115 48, 115 55 L115 65"
              stroke="#002F5D"
              strokeWidth="3"
              fill="none"
            />
            {/* 404 text on hat */}
            <text
              x="100"
              y="100"
              textAnchor="middle"
              fill="#002F5D"
              fontWeight="bold"
              fontSize="24"
              fontFamily="sans-serif"
            >
              404
            </text>
            {/* Caution stripes */}
            <g opacity="0.5">
              <rect x="30" y="150" width="140" height="8" rx="2" fill="#F5A623" />
              <line x1="40" y1="150" x2="48" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="56" y1="150" x2="64" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="72" y1="150" x2="80" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="88" y1="150" x2="96" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="104" y1="150" x2="112" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="120" y1="150" x2="128" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="136" y1="150" x2="144" y2="158" stroke="#002F5D" strokeWidth="2" />
              <line x1="152" y1="150" x2="160" y2="158" stroke="#002F5D" strokeWidth="2" />
            </g>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-3">
          Page Not Found
        </h1>
        <p className="text-lg text-concrete-gray mb-8 max-w-md mx-auto">
          The page you are looking for may have been moved, removed, or is still
          under construction. Let us help you find what you need.
        </p>

        {/* Search suggestion */}
        <div className="mb-8 flex items-center justify-center gap-2 text-concrete-gray">
          <Search className="h-5 w-5" />
          <span className="text-sm">
            Try checking the URL for typos or use the links below to navigate.
          </span>
        </div>

        {/* Navigation links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-5 text-deep-blue transition-all hover:border-construction-yellow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
          >
            <Home className="h-6 w-6 text-construction-yellow" />
            <span className="font-semibold">Home</span>
          </Link>
          <Link
            href="/services"
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-5 text-deep-blue transition-all hover:border-construction-yellow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
          >
            <Briefcase className="h-6 w-6 text-construction-yellow" />
            <span className="font-semibold">Services</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-5 text-deep-blue transition-all hover:border-construction-yellow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-construction-yellow"
          >
            <Phone className="h-6 w-6 text-construction-yellow" />
            <span className="font-semibold">Contact</span>
          </Link>
        </div>

        {/* Back link */}
        <p className="mt-8 text-sm text-concrete-gray">
          Or{' '}
          <Link
            href="/"
            className="text-deep-blue font-medium underline underline-offset-2 hover:text-construction-yellow transition-colors"
          >
            go back to the homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
