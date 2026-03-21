'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, blogCategories } from '@/data/blog-posts';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Industry news, company updates, and construction insights.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-deep-blue text-white'
                    : 'bg-soft-white text-charcoal hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="card-hover bg-soft-white rounded-xl overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-deep-blue to-charcoal flex items-center justify-center">
                  <span className="text-white/20 font-heading text-6xl font-bold">{post.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-forest-green bg-forest-green/10 px-3 py-1 rounded-full mb-3 capitalize">
                    {post.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-concrete-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-concrete-gray mb-4">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm text-deep-blue font-medium hover:text-construction-yellow-dark transition-colors">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
