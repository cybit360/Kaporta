'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { newsletterSchema, type NewsletterData } from '@/lib/validations';

interface NewsletterFormProps {
  variant?: 'light' | 'dark';
}

export function NewsletterForm({ variant = 'dark' }: NewsletterFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const isDark = variant === 'dark';

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${isDark ? 'text-forest-green' : 'text-forest-green'}`} />
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-concrete-gray'}`}>
          Thanks! Check your email to confirm.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2" aria-label="Newsletter signup">
      <div className="flex gap-2">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            aria-label="Email address for newsletter"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'newsletter-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors ${
              isDark
                ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20'
                : 'bg-white border border-gray-300 text-charcoal placeholder-concrete-gray focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/20'
            } ${errors.email ? 'border-red-500' : ''}`}
            {...register('email')}
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-label="Subscribe to newsletter"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-construction-yellow text-deep-blue font-heading font-semibold text-sm rounded-lg hover:bg-construction-yellow-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </div>

      {errors.email && (
        <p id="newsletter-error" className="text-xs text-red-400 flex items-center gap-1" role="alert">
          <AlertCircle className="h-3 w-3" />
          {errors.email.message}
        </p>
      )}

      {status === 'error' && (
        <p className="text-xs text-red-400 flex items-center gap-1" role="alert">
          <AlertCircle className="h-3 w-3" />
          {errorMessage}
        </p>
      )}
    </form>
  );
}
