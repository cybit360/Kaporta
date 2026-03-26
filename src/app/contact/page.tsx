'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      serviceInterest: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setServerError('');
    setSubmitStatus('idle');

    // Check honeypot
    const honeypotField = document.querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypotField && honeypotField.value) {
      // Bot detected, fake success
      setSubmitStatus('success');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Get in touch with our team. We&apos;re here to help.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-deep-blue mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-construction-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-construction-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">Phone</h3>
                    <a href="tel:+23278341012" className="text-concrete-gray text-sm hover:text-deep-blue transition-colors block">+232 78341012</a>
                    <a href="tel:+23276573577" className="text-concrete-gray text-sm hover:text-deep-blue transition-colors block">+232 76573577</a>
                    <a href="tel:+23276692210" className="text-concrete-gray text-sm hover:text-deep-blue transition-colors block">+232 76692210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-construction-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-construction-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">Email</h3>
                    <a href="mailto:kaportaq1@gmail.com" className="text-concrete-gray text-sm hover:text-deep-blue transition-colors">kaportaq1@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-construction-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-construction-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">Address</h3>
                    <p className="text-concrete-gray text-sm">Benguema Firing Range, Waterloo,<br />Freetown, Sierra Leone</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-construction-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-construction-yellow-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">Business Hours</h3>
                    <p className="text-concrete-gray text-sm">Monday – Saturday<br />8:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-charcoal text-sm mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://wa.me/23278341012" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-forest-green/10 rounded-lg flex items-center justify-center text-forest-green hover:bg-forest-green hover:text-white transition-colors" aria-label="WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700/10 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-48 bg-soft-white rounded-xl border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-concrete-gray/30 mx-auto mb-2" />
                  <p className="text-xs text-concrete-gray">Google Map Embed<br />Benguema, Waterloo, Freetown</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <CheckCircle2 className="h-16 w-16 text-forest-green mb-6" />
                  <h2 className="font-heading text-3xl font-bold text-deep-blue mb-4">Message Sent!</h2>
                  <p className="text-concrete-gray text-lg">Thank you for contacting us. We&apos;ll get back to you within 1–2 business days.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 text-deep-blue underline hover:text-construction-yellow transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-soft-white p-8 rounded-2xl">
                  <h2 className="font-heading text-2xl font-bold text-deep-blue mb-6">Send Us a Message</h2>

                  {submitStatus === 'error' && serverError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{serverError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    {/* Honeypot - hidden from humans */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Leave this empty</label>
                      <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          aria-invalid={errors.name ? 'true' : 'false'}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="contactEmail" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                        <input
                          type="email"
                          id="contactEmail"
                          {...register('email')}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contactPhone" className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                        <input
                          type="tel"
                          id="contactPhone"
                          {...register('phone')}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          aria-invalid={errors.phone ? 'true' : 'false'}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white`}
                          placeholder="+232 XX XXX XXX"
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-charcoal mb-2">Company / Organization</label>
                        <input
                          type="text"
                          id="organization"
                          {...register('organization')}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-charcoal mb-2">Service Interested In</label>
                      <select
                        id="serviceInterest"
                        {...register('serviceInterest')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="quarrying">Quarrying &amp; Mining</option>
                        <option value="concrete">Concrete Production</option>
                        <option value="haulage">Haulage &amp; Logistics</option>
                        <option value="civil">Civil Engineering &amp; Construction</option>
                        <option value="power">Power &amp; Energy Solutions</option>
                        <option value="equipment">Equipment Rental</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message *</label>
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={5}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-300'} focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-colors bg-white resize-y`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-construction-yellow text-deep-blue font-heading font-bold rounded-lg hover:bg-construction-yellow-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
