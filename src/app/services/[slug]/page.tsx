import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-construction-yellow/20 rounded-lg flex items-center justify-center">
              <Icon className="h-7 w-7 text-construction-yellow" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-deep-blue mb-6">Overview</h2>
              <p className="text-concrete-gray leading-relaxed text-lg">{service.overview}</p>
            </div>
            <div className="bg-gradient-to-br from-deep-blue to-charcoal rounded-2xl h-72 flex items-center justify-center">
              <Icon className="h-24 w-24 text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-soft-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                <CheckCircle2 className="h-5 w-5 text-forest-green flex-shrink-0" />
                <span className="text-charcoal font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.keyBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4">
                <div className="w-6 h-6 bg-construction-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-construction-yellow-dark" />
                </div>
                <span className="text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-16 lg:py-24 bg-soft-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">Who We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {service.targetCustomers.map((customer) => (
              <div key={customer} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
                <Users className="h-4 w-4 text-deep-blue" />
                <span className="text-charcoal text-sm font-medium">{customer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">{service.cta}</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Get in touch with our team to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-construction-yellow text-deep-blue font-heading font-bold rounded-lg hover:bg-construction-yellow-dark transition-colors"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-heading font-semibold rounded-lg hover:bg-white hover:text-deep-blue transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
