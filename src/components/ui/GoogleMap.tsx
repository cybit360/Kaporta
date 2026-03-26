'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapProps {
  className?: string;
}

export function GoogleMap({ className = '' }: GoogleMapProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-gray-200 ${className}`}>
      {/* Loading fallback */}
      {!loaded && (
        <div className="absolute inset-0 bg-soft-white flex flex-col items-center justify-center z-10">
          <MapPin className="h-8 w-8 text-concrete-gray/40 animate-pulse mb-2" />
          <p className="text-xs text-concrete-gray">Loading map...</p>
        </div>
      )}

      <iframe
        src="https://maps.google.com/maps?q=Benguema+Waterloo+Freetown+Sierra+Leone&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '300px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kaporta Group location - Benguema Firing Range, Waterloo, Freetown, Sierra Leone"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
