import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Kaporta Group website.',
};

export default function TermsPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Terms of Use</h1>
          <p className="text-gray-300 mt-2">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">1. Acceptance of Terms</h2>
          <p className="text-concrete-gray mb-6">By accessing this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">2. Use of Website</h2>
          <p className="text-concrete-gray mb-6">This website is provided for informational purposes about Kaporta Investment Sierra Leone Limited and its services. You agree to use the site only for lawful purposes.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">3. Intellectual Property</h2>
          <p className="text-concrete-gray mb-6">All content, logos, and materials on this website are the property of Kaporta Investment Sierra Leone Limited and are protected by applicable intellectual property laws.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">4. Limitation of Liability</h2>
          <p className="text-concrete-gray mb-6">Kaporta Group provides this website on an &quot;as is&quot; basis. We make no warranties regarding the accuracy or completeness of the content.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">5. Contact</h2>
          <p className="text-concrete-gray">For questions about these terms, contact us at kaportaq1@gmail.com.</p>
        </div>
      </section>
    </>
  );
}
