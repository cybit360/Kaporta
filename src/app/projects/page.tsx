'use client';

import { useState } from 'react';
import { projects, projectCategories } from '@/data/projects';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our portfolio of completed projects across Sierra Leone.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {projectCategories.map((cat) => (
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="card-hover bg-soft-white rounded-xl overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-deep-blue to-charcoal flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-white/20" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-construction-yellow-dark bg-construction-yellow/10 px-3 py-1 rounded-full mb-3 capitalize">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-concrete-gray mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {project.timeline}
                    </span>
                  </div>
                  <p className="text-concrete-gray text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">Scope of Work</h4>
                    <ul className="space-y-1">
                      {project.scope.map((item) => (
                        <li key={item} className="text-xs text-concrete-gray flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-construction-yellow rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.outcome && (
                    <div className="mt-4 p-3 bg-forest-green/5 rounded-lg">
                      <p className="text-xs text-forest-green-dark font-medium">{project.outcome}</p>
                    </div>
                  )}

                  {project.testimonial && (
                    <blockquote className="mt-4 text-xs text-concrete-gray italic border-l-2 border-construction-yellow pl-3">
                      &ldquo;{project.testimonial}&rdquo;
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
