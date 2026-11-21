import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { SITIO } from '@/lib/catalogo';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: 'Home & Garden Panamá | Vivero de árboles y paisajismo',
  description: 'Vivero de árboles en Panamá. Transformamos espacios con árboles, plantas y palmas de la más alta calidad: vivero, instalación y mantenimiento de jardines.',
  keywords: 'vivero de árboles, vivero de árboles panamá, vivero panama, plantas panama, paisajismo panama, jardines panama, arboles panama, palmas panama',
  openGraph: {
    title: 'Home & Garden Panama',
    description: 'Vivero de árboles, paisajismo e instalación de jardines en Panamá.',
    locale: 'es_PA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
