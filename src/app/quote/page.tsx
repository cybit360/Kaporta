'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Quarrying & Mining',
  'Concrete Production',
  'Haulage & Logistics',
  'Civil Engineering & Construction',
  'Power & Energy Solutions',
  'Equipment Rental',
  'Multiple Services',
  'Other',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $500,000',
  'Over $500,000',
  'Not Sure',
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="hero-gradient py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-white">Request a Quote</h1>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-lg px-4 text-center">
            <CheckCircle2 className="h-16 w-16 text-forest-green mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-deep-blue mb-4">Thank You!</h2>
            <p className="text-concrete-gray text-lg">Your project has been submitted for review. A team member will respond within 1–2 business days.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Request a Quote</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Tell us about your project and we&apos;ll get back to you with a detailed quote.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">Company Name</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors" placeholder="Your company" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors" placeholder="+232 XX XXX XXX" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">Type of Service Needed *</label>
              <select id="service" name="service" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white">
                <option value="">Select a service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-2">Project Description *</label>
              <textarea id="description" name="description" required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors resize-y" placeholder="Describe your project requirements, scope, and any specific needs..." />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">Budget Range</label>
                <select id="budget" name="budget" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white">
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-2">Project Location</label>
                <input type="text" id="location" name="location" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors" placeholder="City, District" />
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-2">Expected Timeline</label>
              <input type="text" id="timeline" name="timeline" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors" placeholder="e.g., Q2 2026, 6 months, ASAP" />
            </div>

            <div>
              <label htmlFor="attachments" className="block text-sm font-medium text-charcoal mb-2">Upload Attachments</label>
              <input type="file" id="attachments" name="attachments" multiple accept=".pdf,.doc,.docx,.dwg,.jpg,.jpeg,.png" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors text-sm text-concrete-gray file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-deep-blue/10 file:text-deep-blue hover:file:bg-deep-blue/20" />
              <p className="text-xs text-concrete-gray mt-1">Accepted: PDF, DOC, DWG, JPG, PNG</p>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-construction-yellow text-deep-blue font-heading font-bold text-base rounded-lg hover:bg-construction-yellow-dark transition-colors"
            >
              <Send className="h-5 w-5" />
              Submit Your Project for Review
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
