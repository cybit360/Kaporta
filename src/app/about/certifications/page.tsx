import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Shield, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifications & Partnerships',
  description: 'Kaporta Group certifications, industry standards compliance, and strategic partnerships.',
};

const certifications = [
  { title: 'ISO 9001:2015', description: 'Quality Management System certification ensuring consistent quality.', icon: Award },
  { title: 'Safety Compliance', description: 'Full compliance with local and international workplace safety standards.', icon: Shield },
  { title: 'Environmental Standards', description: 'Commitment to environmentally responsible quarrying and construction.', icon: CheckCircle2 },
  { title: 'Local Council Registration', description: 'Registered with Sierra Leone local councils and business registry.', icon: FileCheck },
];

const partners = [
  'Sierra Leone Roads Authority',
  'Ministry of Works & Infrastructure',
  'UNDP Sierra Leone',
  'World Bank Projects',
  'African Development Bank',
  'Freetown City Council',
];

export default function CertificationsPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Certifications & Partnerships</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our commitment to quality, safety, and excellence is backed by recognized certifications and trusted partnerships.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.title} className="flex gap-4 p-6 bg-soft-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-construction-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-construction-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-charcoal">{cert.title}</h3>
                    <p className="text-concrete-gray text-sm mt-1">{cert.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="font-heading text-3xl font-bold text-deep-blue mb-8">Strategic Partnerships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center gap-3 p-4 bg-soft-white rounded-lg border border-gray-100">
                <CheckCircle2 className="h-5 w-5 text-forest-green flex-shrink-0" />
                <span className="text-charcoal font-medium text-sm">{partner}</span>
              </div>
            ))}
          </div>

          <div className="bg-deep-blue rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Become a Partner</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Interested in partnering with Kaporta Group? We&apos;re always looking for strategic collaborations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-construction-yellow text-deep-blue font-heading font-semibold rounded-lg hover:bg-construction-yellow-dark transition-colors"
            >
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
