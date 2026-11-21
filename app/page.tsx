import type { Metadata } from 'next';
import Image from 'next/image';
import { Bricolage_Grotesque, Nunito } from 'next/font/google';
import { ArrowRight, CreditCard, Droplets, MessageCircle, Sparkles, Sprout, Sun, TreePine, Truck, Wind } from 'lucide-react';
import BotonWhatsApp from '@/components/tienda/BotonWhatsApp';
import CompraYappy from '@/components/tienda/CompraYappy';
import { arboles, formatoBalboas, SITIO, WHATSAPP } from '@/lib/catalogo';
import { CDN, entornoYappy, yappyConfigurado } from '@/lib/yappy';
import './tienda.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--t-display' });
const body = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--t-body' });

export const metadata: Metadata = {
  title: { absolute: 'Vivero de árboles en Panamá | Home & Garden' },
  description:
    'Vivero de árboles en Panamá: árboles de interior, piezas únicas escogidas a mano en nuestro vivero. Compra en línea con Yappy, ACH o tarjeta y recibe tu árbol a domicilio.',
  keywords: [
    'vivero de árboles',
    'vivero de árboles Panamá',
    'vivero Panamá',
    'árboles de interior Panamá',
    'comprar árboles Panamá',
    'árboles a domicilio',
    'potes de lujo Panamá',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vivero de árboles en Panamá | Home & Garden',
    description: 'Árboles únicos escogidos a mano en nuestro vivero. Págalo con Yappy y te lo llevamos a domicilio.',
    url: '/',
    siteName: 'Home & Garden Panamá',
    locale: 'es_PA',
    type: 'website',
    images: [{ url: '/tienda/portada-ocean-reef.jpg', alt: 'Árbol de interior de Home & Garden, vivero de árboles en Panamá' }],
  },
};

export const dynamic = 'force-dynamic';

const cuidados = [
  {
    tema: 'Luz',
    Icono: Sun,
    color: 'sol',
    titulo: 'Cerca de la ventana',
    texto: 'Ubícalo donde reciba abundante luz natural durante el día, sin sol directo intenso sobre las hojas detrás del vidrio.',
  },
  {
    tema: 'Riego',
    Icono: Droplets,
    color: 'cielo',
    titulo: 'Solo cuando lo pida',
    texto: 'Riega cuando los primeros centímetros de tierra estén secos. Evita que quede agua acumulada en el plato.',
  },
  {
    tema: 'Adaptación',
    Icono: Sprout,
    color: 'lima',
    titulo: 'Las primeras semanas',
    texto: 'Es normal que pierda algunas hojas al cambiar de espacio. Evita moverlo de lugar mientras se adapta.',
  },
  {
    tema: 'Ambiente',
    Icono: Wind,
    color: 'coral',
    titulo: 'Lejos del aire directo',
    texto: 'No lo coloques frente al aire acondicionado. Limpia las hojas con un paño húmedo para que respiren mejor.',
  },
];

const proyectos = [
  { foto: 1, alt: 'Árbol de interior en pote blanco texturizado junto a una ventana' },
  { foto: 9, alt: 'Árbol en pote blanco ovalado en un lobby de vidrio y mármol' },
  { foto: 4, alt: 'Lobby con sofás curvos, potes de lujo y jardín tropical al fondo' },
  { foto: 10, alt: 'Ficus en pote blanco junto al ventanal de una sala' },
  { foto: 6, alt: 'Árbol en pote de lujo gris junto a una piscina en la terraza' },
  { foto: 11, alt: 'Árbol y planta de interior en potes texturizados en una esquina' },
  { foto: 3, alt: 'Composición de árboles en potes color arena en un lobby' },
  { foto: 12, alt: 'Árbol de copa amplia en pote gris junto a un ventanal' },
  { foto: 7, alt: 'Clusia en pote texturizado sobre base metálica en un balcón' },
  { foto: 13, alt: 'Grupo de árboles y helecho en potes blancos en una terraza' },
  { foto: 8, alt: 'Yuca de varios troncos en pote cilíndrico blanco' },
  { foto: 2, alt: 'Grupo de plantas en potes junto a una columna en una terraza' },
  { foto: 5, alt: 'Palma abanico, clusia y anturio en potes claros' },
];

const pasos = [
  {
    Icono: TreePine,
    titulo: 'Elige tu árbol',
    texto: 'Cada árbol es único. Mira la foto, la altura y el precio.',
  },
  {
    Icono: CreditCard,
    titulo: 'Págalo como quieras',
    texto: 'Yappy aquí mismo, tarjeta Visa o Mastercard, o transferencia ACH.',
  },
  {
    Icono: Truck,
    titulo: 'Te lo llevamos',
    texto: 'Entregamos jueves o viernes. B/. 15 por árbol, zonas aplican.',
  },
];

const cinta = ['Piezas únicas', 'Paga con Yappy', 'Entrega jueves y viernes', 'Directo del vivero', 'Potes hechos a mano'];

function Hoja({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 8C28 30 18 62 30 94c8 18 22 20 30 18 8 2 22 0 30-18C102 62 92 30 60 8Z" fill="currentColor" />
      <path d="M60 30v80M60 56l-16-12M60 74l18-14M60 92l-14-10" stroke="rgba(0,0,0,.18)" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Tienda() {
  const disponibles = arboles.filter((a) => !a.vendido);
  const vendidos = arboles.filter((a) => a.vendido);
  const activo = yappyConfigurado();
  const cdn = CDN[entornoYappy()];
  const wa = (texto?: string) => `https://wa.me/${WHATSAPP}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

  const negocio = {
    '@context': 'https://schema.org',
    '@type': 'GardenStore',
    name: 'Home & Garden Panamá',
    description: 'Vivero de árboles en Panamá. Árboles de interior, potes de lujo, paisajismo y entrega a domicilio.',
    url: SITIO,
    logo: `${SITIO}/brand/HG-icono-color.svg`,
    image: `${SITIO}/tienda/portada-ocean-reef.jpg`,
    telephone: `+${WHATSAPP}`,
    priceRange: 'B/.',
    currenciesAccepted: 'PAB, USD',
    paymentAccepted: 'Yappy, ACH, Visa, Mastercard',
    address: { '@type': 'PostalAddress', addressCountry: 'PA' },
    areaServed: { '@type': 'Country', name: 'Panamá' },
    sameAs: ['https://homeandgardenportafolio.netlify.app/', 'https://cuanto.app/homeandgarden'],
    makesOffer: disponibles
      .filter((a) => a.precio != null)
      .map((a) => ({
        '@type': 'Offer',
        price: a.precio,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${SITIO}/#${a.id}`,
        itemOffered: { '@type': 'Product', name: a.nombre, description: a.descripcion, ...(a.foto ? { image: `${SITIO}${a.foto}` } : {}) },
      })),
  };

  return (
    <div className={`tienda ${display.variable} ${body.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio).replace(/</g, '\\u003c') }} />
      <header className="t-barra">
        <div className="t-wrap t-barra-in">
          <a href="#inicio" aria-label="Home & Garden, inicio">
            <img src="/brand/HG-logo-horizontal-color.svg" alt="Home & Garden" className="t-barra-logo" />
          </a>
          <nav className="t-barra-nav" aria-label="Secciones">
            <a href="#coleccion">Árboles</a>
            <a href="#como-comprar">Cómo comprar</a>
            <a href="#potes">Potes</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#cuidados">Cuidados</a>
            <a className="t-barra-port" href="https://homeandgardenportafolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              Portafolio
            </a>
            <a className="t-barra-cat" href="https://cuanto.app/homeandgarden" target="_blank" rel="noopener noreferrer">
              Catálogo
            </a>
            <a className="t-barra-wa" href={wa()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="t-hero" id="inicio">
          <Hoja className="t-hoja t-hoja-1" />
          <Hoja className="t-hoja t-hoja-2" />
          <div className="t-wrap t-hero-in">
            <div className="t-hero-texto">
              <span className="t-chip t-chip-sol">
                <Sparkles size={14} strokeWidth={2.5} aria-hidden="true" /> Vivero de árboles en Panamá
              </span>
              <h1>
                Árboles de interior <span className="t-subrayado">para tu casa</span>
              </h1>
              <p>
                Somos un vivero de árboles en Panamá. Cada árbol es único y lo escogemos a mano. Elige el tuyo, págalo con Yappy, tarjeta o ACH, y te lo
                llevamos a domicilio.
              </p>
              <div className="t-hero-ctas">
                <a className="t-btn t-btn-sol" href="#coleccion">
                  Ver los árboles <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <a className="t-btn t-btn-blanco" href={wa('Hola Home & Garden, quiero información sobre sus árboles.')} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" /> Escríbenos
                </a>
              </div>
              <ul className="t-hero-datos">
                <li>
                  <b>{disponibles.length}</b> árboles disponibles
                </li>
                <li>
                  <b>B/. 15</b> entrega
                </li>
                <li>
                  <b>Jue · Vie</b> días de entrega
                </li>
              </ul>
            </div>
            <div className="t-hero-foto">
              <Image
                src="/tienda/portada-ocean-reef.jpg"
                alt="Árbol de interior en maceta blanca bajo un arco, en una sala frente al mar"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <span className="t-hero-sticker">
                Pieza
                <br />
                única
              </span>
            </div>
          </div>
        </section>

        <div className="t-cinta" aria-hidden="true">
          <div className="t-cinta-pista">
            {[...cinta, ...cinta, ...cinta, ...cinta].map((c, i) => (
              <span key={i}>
                {c} <Sprout size={18} strokeWidth={2.5} />
              </span>
            ))}
          </div>
        </div>

        <section className="t-pasos" id="como-comprar">
          <div className="t-wrap">
            <div className="t-seccion-head t-centro">
              <span className="t-chip">Cómo comprar</span>
              <h2>Así de fácil, en 3 pasos</h2>
            </div>
            <ol className="t-pasos-grid">
              {pasos.map(({ Icono, titulo, texto }, i) => (
                <li key={titulo}>
                  <span className="t-paso-num">{i + 1}</span>
                  <Icono className="t-paso-icono" size={34} strokeWidth={2.2} aria-hidden="true" />
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="t-coleccion" id="coleccion">
          <div className="t-wrap">
            <div className="t-seccion-head">
              <span className="t-chip">Disponibles hoy en el vivero</span>
              <h2>Elige tu árbol</h2>
              <p>Cada árbol es único: cuando se vende, sale de la tienda. Todos necesitan un espacio con buena luz natural.</p>
            </div>

            <div className="t-grid">
              {disponibles.map((a) => (
                <article key={a.id} id={a.id} className="t-card">
                  <div className="t-marco">
                    {a.foto ? (
                      <img className="t-foto" src={a.foto} alt={`${a.nombre} de ${a.altura} m, árbol del vivero Home & Garden en Panamá`} loading="lazy" />
                    ) : (
                      <div className="t-ph">
                        <img src="/brand/HG-icono-color.svg" alt="" />
                        <span>Foto pronto</span>
                      </div>
                    )}
                    {a.nuevo && <span className="t-nuevo">New</span>}
                    <span className="t-altura">
                      <b>{a.altura} m</b> de alto
                    </span>
                  </div>
                  <div className="t-card-info">
                    <span className="t-etiqueta">{a.etiqueta}</span>
                    <h3>{a.nombre}</h3>
                    {a.latin && <p className="t-latin">{a.latin}</p>}
                    <p className="t-desc">{a.descripcion}</p>
                    <details className="t-detalles">
                      <summary>Luz y riego</summary>
                      <dl className="t-specs">
                        <div>
                          <dt>Luz</dt>
                          <dd>Muy luminosa, luz natural abundante</dd>
                        </div>
                        <div>
                          <dt>Riego</dt>
                          <dd>{a.riego}</dd>
                        </div>
                      </dl>
                    </details>
                    <CompraYappy arbol={a} cdn={cdn} activo={activo} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {vendidos.length > 0 && (
          <section className="t-vendidos" id="vendidos">
            <div className="t-wrap">
              <div className="t-seccion-head">
                <span className="t-chip t-chip-coral">Vendidos</span>
                <h2>Ya encontraron su hogar</h2>
                <p>Cada pieza es única y no se repite. ¿Te gustó alguna? Escríbenos y buscamos una parecida en el vivero.</p>
              </div>
              <div className="t-vendidos-grid">
                {vendidos.map((a) => (
                  <article key={a.id} className="t-vendido">
                    <div className="t-marco">
                      {a.foto ? (
                        <img className="t-foto" src={a.foto} alt={a.nombre} />
                      ) : (
                        <div className="t-ph">
                          <img src="/brand/HG-icono-color.svg" alt="" />
                        </div>
                      )}
                      <span className="t-sello">Vendido</span>
                    </div>
                    <h3>{a.nombre}</h3>
                    <p>
                      {a.altura} m · {a.etiqueta}
                    </p>
                    {a.precio != null && <p className="t-vendido-precio">Vendido en {formatoBalboas(a.precio)}</p>}
                  </article>
                ))}
              </div>
              <a
                className="t-btn t-btn-verde t-vendidos-cta"
                href={wa('Hola Home & Garden, me gustaría un árbol similar a uno de los vendidos en la tienda.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero uno parecido <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </section>
        )}

        <section className="t-mas" aria-label="Tienda de plantas en Cuanto">
          <a className="t-wrap t-mas-in" href="https://cuanto.app/homeandgarden" target="_blank" rel="noopener noreferrer">
            <div>
              <span className="t-chip t-chip-sol">¿Buscas algo más pequeño?</span>
              <h2>Compra más plantas aquí</h2>
              <p>Palmas, plantas de interior y más de nuestro vivero, listas para enviar a tu hogar.</p>
            </div>
            <span className="t-btn t-btn-sol">
              Ir a la tienda <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
          </a>
        </section>

        <section className="t-potes" id="potes">
          <div className="t-wrap">
            <div className="t-potes-in">
              <div className="t-potes-video">
                <img src="/potes/pote-blanco.jpg" alt="Pote de lujo blanco hueso con textura de piedra" />
              </div>
              <div className="t-potes-texto">
                <span className="t-chip t-chip-coral">Potes de lujo</span>
                <h2>Hechos a mano, con textura de piedra</h2>
                <p>
                  Acabado arenoso o liso en blanco hueso, arena, gris, grafito y tierra. Cada uno con su propia textura, a la medida de tu árbol y
                  tu espacio.
                </p>
                <div className="t-colores" aria-label="Colores disponibles">
                  {['#efe9dd', '#d8c3a0', '#a8a8a3', '#4a4a48', '#9a6a4a'].map((c) => (
                    <i key={c} style={{ background: c }} />
                  ))}
                </div>
                <a className="t-btn t-btn-verde" href={wa('Hola Home & Garden, me gustaría cotizar un pote de lujo.')} target="_blank" rel="noopener noreferrer">
                  Cotizar un pote <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="t-potes-galeria">
              <img src="/potes/potes-coleccion.jpg" alt="Colección de potes de lujo en distintos tonos y formas" />
              <img src="/potes/potes-textura.jpg" alt="Detalle de la textura de piedra de los potes" />
              <img src="/potes/potes-pared.jpg" alt="Cuatro potes de lujo frente a una pared de concreto" />
            </div>
          </div>
        </section>

        <section className="t-proyectos" id="proyectos">
          <div className="t-wrap">
            <div className="t-seccion-head">
              <span className="t-chip">Proyectos</span>
              <h2>Espacios que ya llenamos de verde</h2>
            </div>
          </div>
          <div className="t-carrusel">
            <div className="t-carrusel-pista">
              {[...proyectos, ...proyectos].map((p, i) => (
                <img
                  key={i}
                  src={`/proyectos/proyecto-${p.foto}.jpg`}
                  alt={i < proyectos.length ? p.alt : ''}
                  aria-hidden={i >= proyectos.length || undefined}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="t-cuidados" id="cuidados">
          <div className="t-wrap">
            <div className="t-seccion-head">
              <span className="t-chip">Guía de cuidados</span>
              <h2>Para que tu árbol siga feliz</h2>
            </div>
            <div className="t-cuidados-grid">
              {cuidados.map(({ tema, Icono, color, titulo, texto }) => (
                <div key={tema} className={`t-cuidado t-c-${color}`}>
                  <span className="t-cuidado-icono">
                    <Icono size={28} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <span className="t-cuidado-tema">{tema}</span>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="t-cierre">
          <Hoja className="t-hoja t-hoja-3" />
          <div className="t-wrap t-cierre-in">
            <h2>¿No encuentras el árbol ideal?</h2>
            <p>Escríbenos para ver más fotos, pedir un árbol especial o agendar una visita a nuestro vivero.</p>
            <div className="t-servicios">
              <div>
                <b>Potes de lujo</b>
                <span>Macetas a la medida de cada árbol.</span>
              </div>
              <div>
                <b>Entrega a domicilio</b>
                <span>Instalado y listo en tu espacio.</span>
              </div>
              <div>
                <b>Mantenimiento</b>
                <span>Visitas para que siga sano.</span>
              </div>
            </div>
            <a className="t-btn t-btn-sol t-btn-grande" href={wa()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} strokeWidth={2.5} aria-hidden="true" /> Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="t-pie">
        <div className="t-wrap t-pie-in">
          <img src="/brand/HG-logo-horizontal-blanco.svg" alt="Home & Garden, vivero y paisajismo" />
          <p>
            © {new Date().getFullYear()} Home & Garden Panamá · Pagos seguros con Yappy, ACH y tarjeta ·{' '}
            <a className="t-pie-equipo" href="https://homeandgarden-crm.vercel.app">
              Acceso equipo
            </a>
          </p>
        </div>
      </footer>
      <BotonWhatsApp />
    </div>
  );
}
