import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Kaporta Group services: quarrying, concrete production, haulage, civil engineering, power solutions, and equipment rental.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive construction and logistics solutions across 6 specialized domains.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-hover group p-8 bg-soft-white rounded-xl border border-gray-100 hover:border-construction-yellow/30"
                >
                  <div className="w-14 h-14 bg-deep-blue/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-construction-yellow/20 transition-colors">
                    <Icon className="h-7 w-7 text-deep-blue group-hover:text-construction-yellow-dark transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">{service.title}</h3>
                  <p className="text-concrete-gray text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-deep-blue font-medium group-hover:text-construction-yellow-dark transition-colors">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-construction-yellow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-4">Need a Custom Solution?</h2>
          <p className="text-deep-blue/80 text-lg mb-8 max-w-xl mx-auto">
            We tailor our services to meet your specific project requirements.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deep-blue text-white font-heading font-bold rounded-lg hover:bg-deep-blue-light transition-colors"
          >
            Request a Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
