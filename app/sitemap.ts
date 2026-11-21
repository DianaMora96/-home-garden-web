import type { MetadataRoute } from 'next';
import { SITIO } from '@/lib/sitio';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITIO, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITIO}/empresa`, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
