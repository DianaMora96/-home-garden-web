import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import PlantTest from '@/components/PlantTest';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

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
