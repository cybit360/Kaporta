import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { footerLinks } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/kaporta-logo.svg"
                  alt="Kaporta Investment Sierra Leone Limited"
                  width={240}
                  height={90}
                  className="h-20 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Building Sierra Leone&apos;s future since 2008. Your trusted partner in construction, logistics, and infrastructure development across West Africa.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="tel:+23278341012" className="flex items-center gap-2 text-gray-300 hover:text-construction-yellow transition-colors">
                <Phone className="h-4 w-4 text-construction-yellow" />
                +232 78341012 / +232 76573577
              </a>
              <a href="mailto:kaportaq1@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-construction-yellow transition-colors">
                <Mail className="h-4 w-4 text-construction-yellow" />
                kaportaq1@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-construction-yellow mt-0.5" />
                <span>Benguema Firing Range, Waterloo,<br />Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4 text-construction-yellow" />
                Mon–Sat: 8:00am–6:00pm
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-construction-yellow">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-construction-yellow">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-construction-yellow">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* TODO: Replace with actual social media URLs */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/23278341012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-forest-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/KaportaGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kaporta-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span>&copy; {currentYear} Kaporta Investment Sierra Leone Limited. All rights reserved.</span>
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
