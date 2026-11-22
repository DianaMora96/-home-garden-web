import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bricolage_Grotesque, Nunito } from 'next/font/google';
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { WHATSAPP } from '@/lib/catalogo';
import { fotosVivero, proximamente, proyectos } from '@/lib/portafolio';
import '../tienda.css';
import './portafolio.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--t-display' });
const body = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--t-body' });

const descripcion =
  'Portafolio de Home & Garden: paisajismo, plantas pieza única y potes artesanales para residencias, comercios y proyectos públicos en todo Panamá.';

export const metadata: Metadata = {
  title: { absolute: 'Portafolio de proyectos | Home & Garden Panamá' },
  description: descripcion,
  alternates: { canonical: '/portafolio' },
  openGraph: {
    title: 'Portafolio de proyectos | Home & Garden Panamá',
    description: descripcion,
    url: '/portafolio',
    images: [{ url: '/portafolio/balmoral-3.jpg', width: 788, height: 1400, alt: 'Residencia Balmoral, jardín y piscina' }],
    siteName: 'Home & Garden Panamá',
    locale: 'es_PA',
    type: 'website',
  },
};

const wa = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
const textoProyecto = 'Hola Home & Garden, vi su portafolio y quiero conversar sobre un proyecto.';

export default function Portafolio() {
  return (
    <div className={`tienda port ${display.variable} ${body.variable}`}>
      <header className="t-barra">
        <div className="t-wrap t-barra-in">
          <Link href="/" aria-label="Home & Garden, ir a la tienda">
            <img src="/brand/HG-logo-horizontal-color.svg" alt="Home & Garden" className="t-barra-logo" />
          </Link>
          <nav className="t-barra-nav" aria-label="Secciones">
            <a href="#proyectos">Proyectos</a>
            <a href="#vivero">Vivero</a>
            <Link className="t-barra-cat" href="/">
              Tienda
            </Link>
            <a className="t-barra-wa" href={wa(textoProyecto)} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="port-hero">
          <div className="t-wrap port-hero-in">
            <div className="port-hero-texto">
              <span className="port-kicker">Portafolio 2026</span>
              <h1>
                El lujo de <span className="port-sol">lo verde.</span>
              </h1>
              <p>
                Diseño de paisajismo, suministro de plantas pieza única y macetas artesanales, para residencias, comercios y proyectos públicos en todo
                Panamá.
              </p>
              <div className="port-hero-ctas">
                <a className="t-btn t-btn-sol" href="#proyectos">
                  Ver proyectos <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <a className="port-link" href={wa(textoProyecto)} target="_blank" rel="noopener noreferrer">
                  Cotiza tu proyecto <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="port-hero-fotos">
              <Image
                src="/portafolio/balmoral-3.jpg"
                alt="Residencia Balmoral, vista aérea de la piscina y el jardín"
                width={788}
                height={1400}
                priority
                sizes="(max-width: 860px) 60vw, 300px"
                className="port-hero-f1"
              />
              <Image
                src="/portafolio/ivy-2.jpg"
                alt="PH IVY, terraza con plantas en potes"
                width={931}
                height={1400}
                priority
                sizes="(max-width: 860px) 45vw, 240px"
                className="port-hero-f2"
              />
            </div>
          </div>
        </section>

        <section className="port-intro">
          <div className="t-wrap port-intro-in">
            <h2>Cada proyecto nace de nuestro vivero.</h2>
            <p>
              Desde interiorismo residencial hasta reforestación urbana, cada proyecto combina plantas pieza única, macetas artesanales y un servicio que va
              del diseño a la instalación y el mantenimiento continuo.
            </p>
          </div>
          <div className="t-wrap">
            <ol className="port-indice" aria-label="Índice de proyectos">
              {proyectos.map((p, i) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>
                    <span className="port-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <b>{p.nombre}</b>
                      <small>{p.tipo}</small>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div id="proyectos">
          {proyectos.map((p, i) => (
            <section key={p.id} id={p.id} className="port-proyecto">
              <div className="t-wrap">
                <div className="port-proyecto-cab">
                  <span className="port-num port-num-grande">{String(i + 1).padStart(2, '0')}</span>
                  <div className="port-proyecto-titulo">
                    <span className="port-kicker">{p.tipo}</span>
                    <h2>{p.nombre}</h2>
                    {p.detalle && <p className="port-detalle">{p.detalle}</p>}
                  </div>
                  <p className="port-proyecto-texto">{p.texto}</p>
                </div>
                {p.datos && (
                  <dl className="port-datos">
                    {p.datos.map((d) => (
                      <div key={d.label}>
                        <dt>{d.label}</dt>
                        <dd>{d.valor}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
              <div className="port-fotos" tabIndex={0} aria-label={`Fotos de ${p.nombre}. Desliza para ver más.`}>
                {p.fotos.map((foto) => (
                  <figure key={foto.src}>
                    <Image src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} sizes="(max-width: 560px) 70vw, 340px" />
                    {foto.pie && <figcaption>{foto.pie}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="port-pronto">
          <div className="t-wrap port-pronto-in">
            <span className="port-kicker">Próximamente</span>
            <ul>
              {proximamente.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="vivero" className="port-vivero">
          <div className="t-wrap port-vivero-in">
            <div>
              <span className="port-kicker">Vivero</span>
              <h2>Somos productores.</h2>
              <p>
                Contamos con una hectárea dedicada exclusivamente a la reproducción de plantas, especializada en árboles y palmas de gran tamaño, además de
                una amplia variedad de plantas de interior y ornamentales. Esto nos permite trabajar de la mano con desarrolladores en proyectos de gran
                escala y abastecer con calidad y consistencia a paisajistas en toda la ciudad.
              </p>
            </div>
            <dl className="port-datos port-datos-vivero">
              <div>
                <dt>árboles</dt>
                <dd>+2000</dd>
              </div>
              <div>
                <dt>palmas</dt>
                <dd>+1000</dd>
              </div>
              <div>
                <dt>plantas de interior y ornamentales</dt>
                <dd>Miles</dd>
              </div>
            </dl>
          </div>
          <div className="port-fotos port-fotos-oscuro" tabIndex={0} aria-label="Fotos del vivero. Desliza para ver más.">
            {fotosVivero.map((foto) => (
              <figure key={foto.src}>
                <Image src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} sizes="(max-width: 560px) 70vw, 340px" />
              </figure>
            ))}
          </div>
        </section>

        <section className="port-cierre">
          <div className="t-wrap port-cierre-in">
            <h2>Trabajemos juntos.</h2>
            <p>Diseño, suministro, instalación y mantenimiento.</p>
            <div className="port-hero-ctas">
              <a className="t-btn t-btn-sol t-btn-grande" href={wa(textoProyecto)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} strokeWidth={2.5} aria-hidden="true" /> Escríbenos por WhatsApp
              </a>
              <a className="port-link" href="https://instagram.com/homeandgardenpa" target="_blank" rel="noopener noreferrer">
                @homeandgardenpa <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="t-pie port-pie">
        <div className="t-wrap t-pie-in">
          <img src="/brand/HG-logo-horizontal-blanco.svg" alt="Home & Garden, vivero y paisajismo" />
          <p>
            © {new Date().getFullYear()} Home & Garden Panamá ·{' '}
            <Link className="t-pie-equipo" href="/">
              Tienda de árboles
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
