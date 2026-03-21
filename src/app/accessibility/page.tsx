import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility commitment and statement for the Kaporta Group website.',
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white">Accessibility Statement</h1>
          <p className="text-gray-300 mt-2">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">Our Commitment</h2>
          <p className="text-concrete-gray mb-6">Kaporta Investment Sierra Leone Limited is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply WCAG 2.1 Level AA standards.</p>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">Accessibility Features</h2>
          <ul className="text-concrete-gray mb-6 list-disc pl-6 space-y-2">
            <li>Semantic HTML structure with proper landmarks</li>
            <li>Keyboard navigation support throughout</li>
            <li>Skip-to-content link for keyboard users</li>
            <li>Sufficient color contrast ratios (4.5:1 minimum)</li>
            <li>Alt text on all images</li>
            <li>Responsive design for all devices</li>
            <li>Focus indicators for interactive elements</li>
          </ul>
          <h2 className="font-heading text-2xl font-bold text-deep-blue mb-4">Feedback</h2>
          <p className="text-concrete-gray">If you encounter any accessibility barriers, please contact us at kaportaq1@gmail.com or call +232 78341012. We welcome your feedback and will work to address any issues.</p>
        </div>
      </section>
    </>
  );
}
