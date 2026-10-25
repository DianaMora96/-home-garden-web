import type { Metadata } from 'next';
import Image from 'next/image';
import { Cormorant_Garamond, Poppins } from 'next/font/google';
import CompraYappy from '@/components/tienda/CompraYappy';
import { arboles, formatoBalboas, WHATSAPP } from '@/lib/catalogo';
import { CDN, entornoYappy, yappyConfigurado } from '@/lib/yappy';
import './tienda.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--t-display',
});
const body = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--t-body' });

export const metadata: Metadata = {
  title: 'Home & Garden | Tienda de árboles de interior',
  description:
    'Árboles de interior, piezas únicas seleccionadas en nuestro vivero. Compra en línea con Yappy, ACH o tarjeta y recibe tu árbol a domicilio en Panamá.',
};

export const dynamic = 'force-dynamic';

const cuidados = [
  {
    tema: 'Luz',
    titulo: 'Cerca de la ventana',
    texto: 'Ubícalo donde reciba abundante luz natural durante el día, sin sol directo intenso sobre las hojas detrás del vidrio.',
  },
  {
    tema: 'Riego',
    titulo: 'Solo cuando lo pida',
    texto: 'Riega cuando los primeros centímetros de tierra estén secos. Evita que quede agua acumulada en el plato.',
  },
  {
    tema: 'Adaptación',
    titulo: 'Las primeras semanas',
    texto: 'Es normal que pierda algunas hojas al cambiar de espacio. Evita moverlo de lugar mientras se adapta.',
  },
  {
    tema: 'Ambiente',
    titulo: 'Lejos del aire directo',
    texto: 'No lo coloques frente al aire acondicionado. Limpia las hojas con un paño húmedo para que respiren mejor.',
  },
];

const proyectos = [
  { foto: 1, alt: 'Árbol de interior en pote blanco texturizado junto a una ventana' },
  { foto: 4, alt: 'Lobby con sofás curvos, potes de lujo y jardín tropical al fondo' },
  { foto: 6, alt: 'Árbol en pote de lujo gris junto a una piscina en la terraza' },
  { foto: 3, alt: 'Composición de árboles en potes color arena en un lobby' },
  { foto: 7, alt: 'Clusia en pote texturizado sobre base metálica en un balcón' },
  { foto: 8, alt: 'Yuca de varios troncos en pote cilíndrico blanco' },
  { foto: 2, alt: 'Grupo de plantas en potes junto a una columna en una terraza' },
  { foto: 5, alt: 'Palma abanico, clusia y anturio en potes claros' },
];

function Ondas({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 800 400" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 150 C 160 90, 300 210, 460 150 S 700 90, 800 140 L 800 400 L 0 400 Z" fill="#1F7A3F" opacity=".28" />
      <path d="M0 220 C 180 160, 320 270, 500 215 S 720 170, 800 205 L 800 400 L 0 400 Z" fill="#2A9446" opacity=".22" />
      <path d="M0 300 C 200 250, 360 340, 540 295 S 740 260, 800 285 L 800 400 L 0 400 Z" fill="#16301F" opacity=".55" />
      <path d="M0 150 C 160 90, 300 210, 460 150 S 700 90, 800 140" fill="none" stroke="#8DC63F" strokeWidth="1.2" opacity=".55" />
    </svg>
  );
}

export default function Tienda() {
  const disponibles = arboles.filter((a) => !a.vendido);
  const vendidos = arboles.filter((a) => a.vendido);
  const activo = yappyConfigurado();
  const cdn = CDN[entornoYappy()];

  return (
    <div className={`tienda ${display.variable} ${body.variable}`}>
      <header className="t-barra">
        <div className="t-wrap t-barra-in">
          <a href="#inicio" aria-label="Home & Garden, inicio">
            <img src="/brand/HG-logo-horizontal-color.svg" alt="Home & Garden" className="t-barra-logo" />
          </a>
          <nav className="t-barra-nav" aria-label="Secciones">
            <a href="#coleccion">Colección</a>
            <a href="#potes">Potes</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#cuidados">Cuidados</a>
            <a href="/empresa">Empresa</a>
            <a className="t-barra-wa" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="t-hero" id="inicio">
          <div className="t-hero-texto">
            <Ondas className="t-ondas" />
            <div className="t-hero-in">
              <span className="t-pill">
                <i className="t-dot" />
                Pieza única
                <i className="t-dot" />
              </span>
              <span className="t-kicker t-kicker-lima">Tienda en línea</span>
              <h1>Árboles de interior</h1>
              <hr className="t-raya" />
              <p>Piezas únicas, seleccionadas una a una en nuestro vivero. Págalas con Yappy, ACH o tarjeta y te las llevamos a domicilio.</p>
              <a className="t-btn-claro" href="#coleccion">
                Ver la colección
              </a>
            </div>
          </div>
          <div className="t-hero-foto">
            <Image
              src="/tienda/portada-ocean-reef.jpg"
              alt="Árbol de interior en maceta blanca bajo un arco, en una sala frente al mar"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="t-pilares">
          <div className="t-wrap t-pilares-in">
            <div>
              <h3>Selección</h3>
              <p>Ejemplares escogidos por forma, follaje y salud.</p>
            </div>
            <div>
              <h3>Yappy, ACH o tarjeta</h3>
              <p>Paga tu pieza como prefieras, Visa o Mastercard incluidas.</p>
            </div>
            <div>
              <h3>Entrega a domicilio</h3>
              <p>B/. 15 por árbol, jueves o viernes. Zonas aplican.</p>
            </div>
          </div>
        </section>

        {vendidos.length > 0 && (
          <section className="t-vendidos" id="vendidos">
            <div className="t-wrap">
              <div className="t-seccion-head">
                <span className="t-kicker">Vendidos</span>
                <h2>Ya encontraron su hogar.</h2>
                <p>Cada pieza es única y no se repite. Si te gustó alguna de estas, escríbenos y buscamos una similar en el vivero.</p>
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
                    <p>{a.altura} m · {a.etiqueta}</p>
                    {a.precio != null && <p className="t-vendido-precio">Vendido en {formatoBalboas(a.precio)}</p>}
                  </article>
                ))}
              </div>
              <a
                className="t-btn-linea t-vendidos-cta"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Home & Garden, me gustaría un árbol similar a uno de los vendidos en la tienda.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero uno similar
              </a>
            </div>
          </section>
        )}

        <section className="t-coleccion" id="coleccion">
          <div className="t-wrap">
            <div className="t-seccion-head">
              <span className="t-kicker">La colección</span>
              <h2>Cada árbol es una pieza única.</h2>
              <p>Cuando una pieza se vende, sale de la tienda. Recomendamos que el espacio interior cuente con excelente iluminación natural.</p>
            </div>

            <div className="t-grid">
              {disponibles.map((a, i) => (
                <article key={a.id} id={a.id} className="t-card">
                  <div className="t-marco">
                    {a.foto ? (
                      <img className="t-foto" src={a.foto} alt={a.nombre} />
                    ) : (
                      <div className="t-ph">
                        <img src="/brand/HG-icono-color.svg" alt="" />
                        <span>Fotografía de la pieza</span>
                      </div>
                    )}
                    <div className="t-altura">
                      <b>{a.altura} m</b>
                      <small>Altura aprox.</small>
                    </div>
                  </div>
                  <div className="t-card-info">
                    <div className="t-info-top">
                      <span className="t-kicker">{String(i + 1).padStart(2, '0')} · Pieza única</span>
                      <span className="t-etiqueta">{a.etiqueta}</span>
                    </div>
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

        <section className="t-potes" id="potes">
          <div className="t-wrap">
            <div className="t-potes-in">
              <div className="t-potes-video">
                <video src="/potes/pote-solo.mp4" poster="/potes/pote-solo.jpg" autoPlay muted loop playsInline aria-label="Pote de lujo con textura de piedra girando" />
              </div>
              <div className="t-potes-texto">
                <span className="t-kicker">Potes de lujo</span>
                <h2>Hechos a mano, con textura de piedra.</h2>
                <hr className="t-raya" />
                <p>Potes de acabado mineral en blanco hueso, arena, gris, grafito y tierra. Cada uno con su propia textura, a la medida del árbol y del espacio.</p>
                <a
                  className="t-btn-linea"
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Home & Garden, me gustaría cotizar un pote de lujo.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar un pote
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
              <span className="t-kicker">Proyectos</span>
              <h2>Espacios que ya llenamos de verde.</h2>
              <p>Lobbies, terrazas y hogares en Panamá, diseñados con nuestros árboles y potes de lujo.</p>
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
              <span className="t-kicker">Guía de cuidados</span>
              <h2>Para que tu árbol luzca siempre como el primer día.</h2>
            </div>
            <div className="t-cuidados-grid">
              {cuidados.map((c) => (
                <div key={c.tema}>
                  <span className="t-kicker">{c.tema}</span>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="t-cierre">
          <Ondas className="t-ondas" />
          <div className="t-wrap t-cierre-in">
            <span className="t-kicker t-kicker-lima">Del vivero a tu nuevo espacio</span>
            <h2>¿Buscas otra pieza?</h2>
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
            <a className="t-btn-claro" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="t-pie">
        <div className="t-wrap t-pie-in">
          <img src="/brand/HG-logo-horizontal-blanco.svg" alt="Home & Garden, vivero y paisajismo" />
          <p>© {new Date().getFullYear()} Home & Garden Panamá · Pagos seguros con Yappy, ACH y tarjeta</p>
        </div>
      </footer>
    </div>
  );
}
