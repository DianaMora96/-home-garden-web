import type { MetadataRoute } from 'next';
import { SITIO } from '@/lib/catalogo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITIO}/sitemap.xml`,
  };
}
