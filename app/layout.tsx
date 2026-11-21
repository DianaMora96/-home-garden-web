import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { NOMBRE, SITIO } from '@/lib/sitio';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: 'Vivero de árboles en Panamá | Home & Garden',
    template: '%s | Home & Garden Panamá',
  },
  description:
    'Vivero de árboles en Panamá. Árboles de interior y exterior, palmas y plantas escogidas a mano. Compra en línea y recibe tu árbol a domicilio.',
  keywords: [
    'vivero de árboles',
    'vivero de árboles Panamá',
    'vivero Panamá',
    'árboles de interior Panamá',
    'comprar árboles Panamá',
    'árboles a domicilio Panamá',
    'plantas Panamá',
    'paisajismo Panamá',
    'palmas Panamá',
  ],
  applicationName: NOMBRE,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_PA',
    siteName: NOMBRE,
    url: '/',
    title: 'Home & Garden | Vivero de árboles en Panamá',
    description: 'Árboles de interior únicos, escogidos a mano en nuestro vivero. Compra en línea y te lo llevamos a domicilio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home & Garden | Vivero de árboles en Panamá',
    description: 'Árboles de interior únicos, escogidos a mano en nuestro vivero. Compra en línea y te lo llevamos a domicilio.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
