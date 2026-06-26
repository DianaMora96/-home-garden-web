export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6" style={{ background: '#f5f7f2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1db87a' }}>
              Quiénes somos
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6 leading-tight" style={{ color: '#0a3d2e' }}>
              Más de una década cultivando belleza natural
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#3d5a4a' }}>
              Somos una empresa panameña dedicada a la venta de plantas, árboles y palmas de la
              más alta calidad. Contamos con nuestro propio vivero donde cultivamos y cuidamos
              cada especie con dedicación.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#3d5a4a' }}>
              Desde proyectos residenciales hasta grandes proyectos corporativos, llevamos la
              naturaleza a cada espacio con diseño, instalación y mantenimiento profesional.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🌿', label: 'Vivero propio' },
                { icon: '🏗️', label: 'Instalación profesional' },
                { icon: '✂️', label: 'Mantenimiento' },
                { icon: '🎨', label: 'Diseño paisajista' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(15,110,86,0.06)', border: '1px solid rgba(15,110,86,0.1)' }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-sm" style={{ color: '#0a3d2e' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main card */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0a3d2e, #0f6e56)', minHeight: 400 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontSize: '12rem', opacity: 0.1 }}>🌳</span>
              </div>
              <div className="relative z-10">
                <div className="text-white/60 text-sm mb-1">Nuestra misión</div>
                <div className="text-white text-2xl font-bold leading-snug">
                  "Llevar la naturaleza a cada rincón de Panamá."
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-4"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className="flex items-center justify-between text-white">
                  <div className="text-center">
                    <div className="font-bold text-xl" style={{ color: '#1db87a' }}>10+</div>
                    <div className="text-xs text-white/60">Años</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="font-bold text-xl" style={{ color: '#1db87a' }}>100+</div>
                    <div className="text-xs text-white/60">Proyectos</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="font-bold text-xl" style={{ color: '#1db87a' }}>50+</div>
                    <div className="text-xs text-white/60">Especies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div
              className="absolute -top-4 -right-4 rounded-2xl p-4 shadow-xl"
              style={{ background: 'white', border: '1px solid rgba(15,110,86,0.1)' }}
            >
              <div className="text-3xl mb-1">🏆</div>
              <div className="text-xs font-semibold" style={{ color: '#0a3d2e' }}>Calidad</div>
              <div className="text-xs" style={{ color: '#3d5a4a' }}>garantizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
