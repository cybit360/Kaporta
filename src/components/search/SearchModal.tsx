'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, ArrowUp, ArrowDown, CornerDownLeft, Clock, Trash2 } from 'lucide-react';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog-posts';
import { jobs } from '@/data/jobs';
import { navigation } from '@/data/navigation';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'Services' | 'Projects' | 'Blog' | 'Careers' | 'Pages';
  href: string;
}

const RECENT_SEARCHES_KEY = 'kaporta-recent-searches';
const MAX_RECENT = 5;

function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  try {
    const recent = getRecentSearches().filter((s) => s !== query);
    recent.unshift(query);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
  } catch {
    // Ignore storage errors
  }
}

function clearRecentSearches() {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // Ignore
  }
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Services
  for (const s of services) {
    results.push({
      id: `service-${s.slug}`,
      title: s.title,
      description: s.description,
      category: 'Services',
      href: `/services/${s.slug}`,
    });
  }

  // Projects
  for (const p of projects) {
    results.push({
      id: `project-${p.slug}`,
      title: p.title,
      description: p.description,
      category: 'Projects',
      href: `/projects/${p.slug}`,
    });
  }

  // Blog posts
  for (const b of blogPosts) {
    results.push({
      id: `blog-${b.slug}`,
      title: b.title,
      description: b.excerpt,
      category: 'Blog',
      href: `/blog/${b.slug}`,
    });
  }

  // Jobs
  for (const j of jobs) {
    results.push({
      id: `job-${j.id}`,
      title: j.title,
      description: `${j.department} - ${j.location} (${j.type})`,
      category: 'Careers',
      href: '/careers',
    });
  }

  // Static pages from navigation
  const flatPages: { label: string; href: string }[] = [];
  for (const item of navigation) {
    flatPages.push({ label: item.label, href: item.href });
    if (item.children) {
      for (const child of item.children) {
        flatPages.push({ label: child.label, href: child.href });
      }
    }
  }
  // Add pages not in nav
  flatPages.push({ label: 'Request a Quote', href: '/quote' });
  flatPages.push({ label: 'Payment', href: '/payment' });

  const seen = new Set<string>();
  for (const page of flatPages) {
    if (seen.has(page.href)) continue;
    seen.add(page.href);
    results.push({
      id: `page-${page.href}`,
      title: page.label,
      description: `Navigate to ${page.label}`,
      category: 'Pages',
      href: page.href,
    });
  }

  return results;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Load recent searches when modal opens
  useEffect(() => {
    if (isOpen) {
      setRecentSearches(getRecentSearches());
      setQuery('');
      setActiveIndex(0);
      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter results
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    const terms = lower.split(/\s+/).filter(Boolean);
    return searchIndex.filter((item) => {
      const text = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      return terms.every((term) => text.includes(term));
    });
  }, [query, searchIndex]);

  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    const order: string[] = ['Services', 'Projects', 'Blog', 'Careers', 'Pages'];
    for (const result of filteredResults) {
      if (!groups[result.category]) groups[result.category] = [];
      groups[result.category].push(result);
    }
    return order
      .filter((cat) => groups[cat])
      .map((cat) => ({ category: cat, results: groups[cat] }));
  }, [filteredResults]);

  // Flat list for keyboard navigation
  const flatResults = useMemo(() => {
    return groupedResults.flatMap((g) => g.results);
  }, [groupedResults]);

  // Reset active index on results change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    const activeEl = resultsRef.current?.querySelector('[data-active="true"]');
    activeEl?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleSelect = useCallback(
    (href: string) => {
      if (query.trim()) {
        saveRecentSearch(query.trim());
      }
      onClose();
    },
    [query, onClose]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < flatResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : flatResults.length - 1));
      } else if (e.key === 'Enter' && flatResults[activeIndex]) {
        e.preventDefault();
        handleSelect(flatResults[activeIndex].href);
        // Programmatic navigation
        window.location.href = flatResults[activeIndex].href;
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [flatResults, activeIndex, handleSelect, onClose]
  );

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const categoryBadgeColor: Record<string, string> = {
    Services: 'bg-construction-yellow/20 text-construction-yellow-dark',
    Projects: 'bg-deep-blue/10 text-deep-blue',
    Blog: 'bg-forest-green/15 text-forest-green-dark',
    Careers: 'bg-purple-100 text-purple-700',
    Pages: 'bg-concrete-gray/15 text-concrete-gray',
  };

  const showRecent = !query.trim() && recentSearches.length > 0;
  const showNoResults = query.trim() && flatResults.length === 0;

  let currentFlatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      role="dialog"
      aria-label="Site search"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-200 animate-slide-up overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search className="h-5 w-5 text-concrete-gray flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, projects, blog posts, careers..."
            className="flex-1 text-base text-charcoal placeholder:text-concrete-gray/70 bg-transparent outline-none font-body"
            aria-label="Search"
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-activedescendant={flatResults[activeIndex] ? `result-${flatResults[activeIndex].id}` : undefined}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md hover:bg-soft-white text-concrete-gray hover:text-charcoal transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-1 px-2 py-1 text-xs font-medium text-concrete-gray bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Results area */}
        <div
          ref={resultsRef}
          id="search-results"
          role="listbox"
          aria-label="Search results"
          className="max-h-[60vh] overflow-y-auto"
        >
          {/* Recent searches */}
          {showRecent && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-concrete-gray uppercase tracking-wider">
                  Recent Searches
                </p>
                <button
                  onClick={() => {
                    clearRecentSearches();
                    setRecentSearches([]);
                  }}
                  className="flex items-center gap-1 text-xs text-concrete-gray hover:text-charcoal transition-colors"
                  aria-label="Clear recent searches"
                >
                  <Trash2 className="h-3 w-3" />
                  Clear
                </button>
              </div>
              {recentSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-charcoal hover:bg-soft-white rounded-md transition-colors text-left"
                >
                  <Clock className="h-3.5 w-3.5 text-concrete-gray" />
                  {term}
                </button>
              ))}
            </div>
          )}

          {/* Grouped results */}
          {groupedResults.map((group) => (
            <div key={group.category} className="py-2">
              <p className="px-5 py-1.5 text-xs font-semibold text-concrete-gray uppercase tracking-wider">
                {group.category}
              </p>
              {group.results.map((result) => {
                const idx = currentFlatIndex++;
                const isActive = idx === activeIndex;
                return (
                  <Link
                    key={result.id}
                    id={`result-${result.id}`}
                    href={result.href}
                    role="option"
                    aria-selected={isActive}
                    data-active={isActive}
                    onClick={() => handleSelect(result.href)}
                    className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                      isActive ? 'bg-deep-blue/5' : 'hover:bg-soft-white'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal truncate">
                        {result.title}
                      </p>
                      <p className="text-xs text-concrete-gray truncate mt-0.5">
                        {result.description}
                      </p>
                    </div>
                    <span
                      className={`flex-shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                        categoryBadgeColor[result.category] || ''
                      }`}
                    >
                      {result.category}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}

          {/* No results */}
          {showNoResults && (
            <div className="px-5 py-12 text-center">
              <Search className="h-10 w-10 text-concrete-gray/40 mx-auto mb-3" />
              <p className="text-sm font-medium text-charcoal">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-concrete-gray mt-2">
                Try searching for: services, quarry, haulage, projects, careers, or contact
              </p>
            </div>
          )}

          {/* Empty state (no query, no recent) */}
          {!query.trim() && recentSearches.length === 0 && (
            <div className="px-5 py-12 text-center">
              <Search className="h-10 w-10 text-concrete-gray/40 mx-auto mb-3" />
              <p className="text-sm text-concrete-gray">
                Start typing to search across the entire site
              </p>
            </div>
          )}
        </div>

        {/* Results count (live region) */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {query.trim() && `${flatResults.length} result${flatResults.length !== 1 ? 's' : ''} found`}
        </div>

        {/* Footer hints */}
        <div className="flex items-center gap-4 px-5 py-3 border-t border-gray-100 bg-soft-white/50 text-[11px] text-concrete-gray">
          <span className="flex items-center gap-1">
            <ArrowUp className="h-3 w-3" />
            <ArrowDown className="h-3 w-3" />
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" />
            Select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 bg-gray-100 rounded text-[10px] font-mono">ESC</kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
