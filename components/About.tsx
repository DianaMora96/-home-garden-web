export default function About() {
  return (
    <section id="nosotros" className="py-28 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Visual side */}
        <div className="relative">
          <div
            className="rounded-3xl overflow-hidden flex items-center justify-center"
            style={{ height: 460, background: 'linear-gradient(145deg, #c8e6d4, #8ecfac)' }}
          >
            <span style={{ fontSize: '12rem', opacity: 0.3 }}>🌳</span>
          </div>
          {/* Floating tag */}
          <div
            className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl"
            style={{ background: 'white', border: '1px solid #e5ede9' }}
          >
            <div className="text-2xl font-bold" style={{ color: '#0f6e56' }}>10+</div>
            <div className="text-xs" style={{ color: '#8aab99' }}>Años de experiencia</div>
          </div>
          <div
            className="absolute -top-4 -left-4 rounded-2xl px-4 py-3 shadow-lg"
            style={{ background: '#0f6e56' }}
          >
            <div className="text-white text-xl">🏆</div>
            <div className="text-white text-xs font-semibold mt-0.5">Calidad garantizada</div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1db87a' }}>
            Quiénes somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight" style={{ color: '#0d1f17', letterSpacing: '-0.02em' }}>
            Cultivamos belleza natural desde hace más de una década
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#5a7a6a' }}>
            Somos una empresa panameña dedicada a la venta, instalación y mantenimiento de plantas, árboles y palmas de la más alta calidad.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#5a7a6a' }}>
            Contamos con nuestro propio vivero donde cuidamos cada especie con dedicación, y un equipo experto que transforma espacios en Panamá.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🌿', label: 'Vivero propio' },
              { icon: '🏗️', label: 'Instalación profesional' },
              { icon: '✂️', label: 'Mantenimiento' },
              { icon: '🎨', label: 'Diseño paisajista' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#f4faf7' }}>
                <span>{item.icon}</span>
                <span className="text-sm font-medium" style={{ color: '#0d1f17' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
