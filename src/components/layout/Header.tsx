'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { navigation } from '@/data/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-deep-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden sm:flex items-center gap-4">
              <a href="tel:+23278341012" className="flex items-center gap-1 hover:text-construction-yellow transition-colors">
                <Phone className="h-3 w-3" />
                +232 78341012
              </a>
              <a href="mailto:kaportaq1@gmail.com" className="flex items-center gap-1 hover:text-construction-yellow transition-colors">
                <Mail className="h-3 w-3" />
                kaportaq1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <span>Mon–Sat: 8:00am–6:00pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-construction-yellow rounded-lg flex items-center justify-center">
              <span className="font-heading text-deep-blue font-bold text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-deep-blue text-lg leading-tight">Kaporta</span>
              <span className="text-concrete-gray text-xs leading-tight">Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-deep-blue transition-colors rounded-md hover:bg-soft-white"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-soft-white hover:text-deep-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center px-5 py-2.5 bg-construction-yellow text-deep-blue font-heading font-semibold text-sm rounded-lg hover:bg-construction-yellow-dark transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-deep-blue hover:bg-soft-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            {navigation.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-charcoal hover:bg-soft-white rounded-md"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-concrete-gray hover:text-deep-blue transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-charcoal hover:bg-soft-white rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/quote"
                className="block w-full text-center px-5 py-3 bg-construction-yellow text-deep-blue font-heading font-semibold text-sm rounded-lg hover:bg-construction-yellow-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
