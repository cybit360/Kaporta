import type { Metadata } from 'next';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import { Star, ArrowRight, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what our clients say about working with Kaporta Group across Sierra Leone and West Africa.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Trusted by clients across West Africa.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="card-hover p-8 bg-soft-white rounded-xl border border-gray-100 flex flex-col">
                <Quote className="h-8 w-8 text-construction-yellow/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'text-construction-yellow fill-construction-yellow' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-charcoal leading-relaxed mb-6 flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-heading font-semibold text-charcoal">{t.name}</div>
                  <div className="text-sm text-concrete-gray">{t.role}, {t.organization}</div>
                  <span className="inline-block mt-2 text-xs bg-deep-blue/10 text-deep-blue px-2 py-1 rounded-full">{t.projectType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Share Your Experience</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Worked with Kaporta Group? We&apos;d love to hear your feedback.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-construction-yellow text-deep-blue font-heading font-semibold rounded-lg hover:bg-construction-yellow-dark transition-colors">
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
