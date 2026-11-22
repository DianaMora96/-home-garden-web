import type { MetadataRoute } from 'next';
import { SITIO } from '@/lib/catalogo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITIO, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITIO}/portafolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITIO}/empresa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
