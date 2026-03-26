'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteFormSchema, type QuoteFormInput } from '@/lib/validations';
import { Send, CheckCircle2, AlertCircle, Loader2, Paperclip } from 'lucide-react';

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

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function QuotePage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormInput>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      projectDescription: '',
      budgetRange: '',
      location: '',
      timeline: '',
    },
  });

  const validateFile = (file: File | undefined): boolean => {
    setFileError('');
    if (!file) return true;
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setFileError('Only PDF, DOC, and DOCX files are accepted.');
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size must be under 10MB.');
      return false;
    }
    return true;
  };

  const onSubmit = async (data: QuoteFormInput) => {
    setServerError('');
    setSubmitStatus('idle');

    // Check honeypot
    const honeypotField = document.querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypotField && honeypotField.value) {
      setSubmitStatus('success');
      return;
    }

    // Validate file if present
    const file = fileInputRef.current?.files?.[0];
    if (!validateFile(file)) return;

    try {
      const formData = new FormData();

      // Append all validated fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Append file if present
      if (file) {
        formData.append('attachment', file);
      }

      const res = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setServerError('Too many requests. Please wait a few minutes and try again.');
        } else if (result.error) {
          setServerError(result.error);
        } else {
          setServerError('Something went wrong. Please try again.');
        }
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      reset();
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
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
            <button
              type="button"
              onClick={() => setSubmitStatus('idle')}
              className="mt-6 text-deep-blue underline hover:text-construction-yellow transition-colors"
            >
              Submit another request
            </button>
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
          {submitStatus === 'error' && serverError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Honeypot - hidden from humans */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="quote-website">Leave this empty</label>
              <input type="text" id="quote-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quoteName" className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                <input
                  type="text"
                  id="quoteName"
                  {...register('name')}
                  aria-describedby={errors.name ? 'quoteName-error' : undefined}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="quoteName-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="quoteCompany" className="block text-sm font-medium text-charcoal mb-2">Company Name</label>
                <input
                  type="text"
                  id="quoteCompany"
                  {...register('company')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quoteEmail" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                <input
                  type="email"
                  id="quoteEmail"
                  {...register('email')}
                  aria-describedby={errors.email ? 'quoteEmail-error' : undefined}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p id="quoteEmail-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="quotePhone" className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                <input
                  type="tel"
                  id="quotePhone"
                  {...register('phone')}
                  aria-describedby={errors.phone ? 'quotePhone-error' : undefined}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors`}
                  placeholder="+232 XX XXX XXX"
                />
                {errors.phone && (
                  <p id="quotePhone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-charcoal mb-2">Type of Service Needed</label>
              <select
                id="serviceType"
                {...register('serviceType')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-charcoal mb-2">Project Description *</label>
              <textarea
                id="projectDescription"
                {...register('projectDescription')}
                rows={5}
                aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
                aria-invalid={errors.projectDescription ? 'true' : 'false'}
                className={`w-full px-4 py-3 rounded-lg border ${errors.projectDescription ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors resize-y`}
                placeholder="Describe your project requirements, scope, and any specific needs..."
              />
              {errors.projectDescription && (
                <p id="projectDescription-error" className="mt-1 text-sm text-red-600" role="alert">{errors.projectDescription.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-charcoal mb-2">Budget Range</label>
                <select
                  id="budgetRange"
                  {...register('budgetRange')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quoteLocation" className="block text-sm font-medium text-charcoal mb-2">Project Location</label>
                <input
                  type="text"
                  id="quoteLocation"
                  {...register('location')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors"
                  placeholder="City, District"
                />
              </div>
            </div>

            <div>
              <label htmlFor="quoteTimeline" className="block text-sm font-medium text-charcoal mb-2">Expected Timeline</label>
              <input
                type="text"
                id="quoteTimeline"
                {...register('timeline')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors"
                placeholder="e.g., Q2 2026, 6 months, ASAP"
              />
            </div>

            <div>
              <label htmlFor="attachment" className="block text-sm font-medium text-charcoal mb-2">Upload Attachment</label>
              <div className="relative">
                <input
                  type="file"
                  id="attachment"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  aria-describedby={fileError ? 'attachment-error' : 'attachment-help'}
                  aria-invalid={fileError ? 'true' : 'false'}
                  className={`w-full px-4 py-3 rounded-lg border ${fileError ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors text-sm text-concrete-gray file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-deep-blue/10 file:text-deep-blue hover:file:bg-deep-blue/20`}
                  onChange={(e) => validateFile(e.target.files?.[0])}
                />
              </div>
              {fileError ? (
                <p id="attachment-error" className="mt-1 text-sm text-red-600" role="alert">{fileError}</p>
              ) : (
                <p id="attachment-help" className="text-xs text-concrete-gray mt-1">
                  <Paperclip className="inline h-3 w-3 mr-1" />
                  Accepted: PDF, DOC, DOCX (max 10MB)
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-construction-yellow text-deep-blue font-heading font-bold text-base rounded-lg hover:bg-construction-yellow-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Submit Your Project for Review
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
