import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kaporta Investment Sierra Leone Limited',
    short_name: 'Kaporta Group',
    description: 'Construction & Logistics Experts Since 2008',
    start_url: '/',
    display: 'standalone',
    theme_color: '#002F5D',
    background_color: '#FAFAFA',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
