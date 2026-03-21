import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Kaporta Investment Sierra Leone Limited.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">1. Information We Collect</h2>
          <p className="text-concrete-gray mb-6">We collect information you provide directly, such as your name, email address, phone number, and company details when you submit a contact form, request a quote, or apply for a position.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">2. How We Use Your Information</h2>
          <p className="text-concrete-gray mb-6">We use the information to respond to inquiries, provide services, process quotes, improve our website, and communicate about our services.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">3. Information Sharing</h2>
          <p className="text-concrete-gray mb-6">We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">4. Data Security</h2>
          <p className="text-concrete-gray mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">5. Contact Us</h2>
          <p className="text-concrete-gray">For privacy inquiries, contact us at kaportaq1@gmail.com or call +232 78341012.</p>
        </div>
      </section>
    </>
  );
}
