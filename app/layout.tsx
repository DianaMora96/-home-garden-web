import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home & Garden Panama | Vivero y Paisajismo',
  description: 'Transformamos espacios con plantas, árboles y palmas de la más alta calidad. Vivero, instalaciones y mantenimiento de jardines en Panamá.',
  keywords: 'vivero panama, plantas panama, paisajismo panama, jardines panama, arboles panama, palmas panama',
  openGraph: {
    title: 'Home & Garden Panama',
    description: 'Vivero, paisajismo e instalación de jardines en Panamá.',
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
