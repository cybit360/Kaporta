'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/23278341012"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-24 right-6 z-80 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      style={{ backgroundColor: '#25D366' }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-25"
        style={{ backgroundColor: '#25D366' }}
        aria-hidden="true"
      />

      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white relative" />

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-charcoal px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
        role="tooltip"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
