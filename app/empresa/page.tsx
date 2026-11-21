import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import PlantTest from '@/components/PlantTest';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Vivero de árboles y paisajismo en Panamá | Home & Garden',
  description:
    'Vivero de árboles, palmas y plantas en Panamá. Diseño, instalación y mantenimiento de jardines para casas, edificios y empresas.',
  openGraph: {
    title: 'Vivero de árboles y paisajismo en Panamá | Home & Garden',
    description: 'Diseño, instalación y mantenimiento de jardines con árboles y palmas de nuestro vivero.',
    url: '/empresa',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Home & Garden, vivero de árboles en Panamá' }],
    siteName: 'Home & Garden Panamá',
    locale: 'es_PA',
    type: 'website',
  },
  alternates: { canonical: '/empresa' },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <PlantTest />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  );
}
