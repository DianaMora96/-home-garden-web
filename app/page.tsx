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
    'Árboles de interior, piezas únicas seleccionadas en nuestro vivero. Compra en línea con Yappy y recibe tu árbol a domicilio en Panamá.',
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
              <p>Piezas únicas, seleccionadas una a una en nuestro vivero. Págalas con Yappy o ACH y te las llevamos a domicilio.</p>
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
              <h3>Pago con Yappy o ACH</h3>
              <p>Reserva tu pieza sin comisiones de tarjeta.</p>
            </div>
            <div>
              <h3>Entrega a domicilio</h3>
              <p>Transporte cuidado e instalación en tu espacio.</p>
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
              <p>Cuando una pieza se reserva, sale de la tienda. Recomendamos que el espacio interior cuente con excelente iluminación natural.</p>
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
          <p>© {new Date().getFullYear()} Home & Garden Panamá · Pagos seguros con Yappy</p>
        </div>
      </footer>
    </div>
  );
}
