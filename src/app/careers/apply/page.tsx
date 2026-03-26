'use client';

import { useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { careerApplicationSchema, type CareerApplicationData } from '@/lib/validations';
import { jobs } from '@/data/jobs';
import Link from 'next/link';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Paperclip,
  ArrowLeft,
} from 'lucide-react';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export default function CareerApplyPage() {
  const searchParams = useSearchParams();
  const preselectedPosition = searchParams.get('position') ?? '';

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CareerApplicationData>({
    resolver: zodResolver(careerApplicationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position: preselectedPosition,
      coverLetter: '',
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

  const onSubmit = async (data: CareerApplicationData) => {
    setServerError('');
    setSubmitStatus('idle');

    // Check honeypot
    const honeypotField = document.querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypotField && honeypotField.value) {
      setSubmitStatus('success');
      return;
    }

    // Validate resume file
    const file = fileInputRef.current?.files?.[0];
    if (!validateFile(file)) return;

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (file) {
        formData.append('resume', file);
      }

      const res = await fetch('/api/career-apply', {
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

  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Apply for a Position</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Join the Kaporta Group team and help build Sierra Leone&apos;s future.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-deep-blue hover:text-construction-yellow transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Careers
          </Link>

          {submitStatus === 'success' ? (
            <div className="text-center py-16">
              <CheckCircle2 className="h-16 w-16 text-forest-green mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold text-deep-blue mb-4">Application Submitted!</h2>
              <p className="text-concrete-gray text-lg mb-6">
                Thank you for your interest in joining Kaporta Group. We will review your application and contact you if your qualifications match our requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="text-deep-blue underline hover:text-construction-yellow transition-colors"
                >
                  Submit another application
                </button>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest-green text-white font-heading font-semibold rounded-lg hover:bg-forest-green-dark transition-colors"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          ) : (
            <>
              {submitStatus === 'error' && serverError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{serverError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Honeypot - hidden from humans */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="apply-website">Leave this empty</label>
                  <input type="text" id="apply-website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="applyName" className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="applyName"
                      {...register('name')}
                      aria-describedby={errors.name ? 'applyName-error' : undefined}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p id="applyName-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="applyEmail" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                    <input
                      type="email"
                      id="applyEmail"
                      {...register('email')}
                      aria-describedby={errors.email ? 'applyEmail-error' : undefined}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p id="applyEmail-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="applyPhone" className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                    <input
                      type="tel"
                      id="applyPhone"
                      {...register('phone')}
                      aria-describedby={errors.phone ? 'applyPhone-error' : undefined}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors`}
                      placeholder="+232 XX XXX XXX"
                    />
                    {errors.phone && (
                      <p id="applyPhone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="applyPosition" className="block text-sm font-medium text-charcoal mb-2">Position *</label>
                    <select
                      id="applyPosition"
                      {...register('position')}
                      aria-describedby={errors.position ? 'applyPosition-error' : undefined}
                      aria-invalid={errors.position ? 'true' : 'false'}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.position ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white`}
                    >
                      <option value="">Select a position</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                    {errors.position && (
                      <p id="applyPosition-error" className="mt-1 text-sm text-red-600" role="alert">{errors.position.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-charcoal mb-2">Cover Letter *</label>
                  <textarea
                    id="coverLetter"
                    {...register('coverLetter')}
                    rows={6}
                    aria-describedby={errors.coverLetter ? 'coverLetter-error' : undefined}
                    aria-invalid={errors.coverLetter ? 'true' : 'false'}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.coverLetter ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors resize-y`}
                    placeholder="Tell us about yourself, your experience, and why you're interested in this position..."
                  />
                  {errors.coverLetter && (
                    <p id="coverLetter-error" className="mt-1 text-sm text-red-600" role="alert">{errors.coverLetter.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-charcoal mb-2">Resume / CV</label>
                  <input
                    type="file"
                    id="resume"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx"
                    aria-describedby={fileError ? 'resume-error' : 'resume-help'}
                    aria-invalid={fileError ? 'true' : 'false'}
                    className={`w-full px-4 py-3 rounded-lg border ${fileError ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors text-sm text-concrete-gray file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-deep-blue/10 file:text-deep-blue hover:file:bg-deep-blue/20`}
                    onChange={(e) => validateFile(e.target.files?.[0])}
                  />
                  {fileError ? (
                    <p id="resume-error" className="mt-1 text-sm text-red-600" role="alert">{fileError}</p>
                  ) : (
                    <p id="resume-help" className="text-xs text-concrete-gray mt-1">
                      <Paperclip className="inline h-3 w-3 mr-1" />
                      Accepted: PDF, DOC, DOCX (max 10MB)
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest-green text-white font-heading font-bold text-base rounded-lg hover:bg-forest-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Submit Application
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
