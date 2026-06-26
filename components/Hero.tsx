'use client';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Left content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-8 items-center pt-24 pb-16">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
            style={{ background: '#e8f5ef', color: '#0f6e56' }}
          >
            🌿 Vivero & Paisajismo · Panamá
          </div>

          <h1
            className="font-bold leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#0d1f17', letterSpacing: '-0.03em' }}
          >
            Plantas que
            <br />
            <span style={{ color: '#1db87a' }}>transforman</span>
            <br />
            tu mundo.
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: '#5a7a6a' }}>
            Vivero, paisajismo e instalación de jardines en Panamá.
            Llevamos la naturaleza a cada espacio con el mayor cuidado.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#test"
              className="px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: '#0f6e56', boxShadow: '0 4px 16px rgba(15,110,86,0.25)' }}
            >
              Encuentra tu planta ideal
            </a>
            <a
              href="#proyectos"
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 border"
              style={{ color: '#0f6e56', borderColor: '#0f6e56', background: 'white' }}
            >
              Ver proyectos
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8" style={{ borderTop: '1px solid #e5ede9' }}>
            {[
              { number: '10+', label: 'Años' },
              { number: '100+', label: 'Proyectos' },
              { number: '50+', label: 'Especies' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold" style={{ color: '#0f6e56' }}>{s.number}</div>
                <div className="text-sm" style={{ color: '#8aab99' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo mosaic */}
        <div className="relative hidden md:grid grid-cols-2 gap-3 h-[580px]">
          {/* Main photo */}
          <div
            className="col-span-2 rounded-3xl overflow-hidden flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #c8e6d4, #a8d4b8)', height: 320 }}
          >
            <span style={{ fontSize: '8rem', opacity: 0.5 }}>🌳</span>
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: 'rgba(15,110,86,0.7)' }}>
              Agrega tus fotos aquí
            </div>
          </div>
          {/* Small photos */}
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #d4eadc, #b8d9c4)', height: 200 }}
          >
            <span style={{ fontSize: '4rem', opacity: 0.5 }}>🌿</span>
          </div>
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #e0f0e6, #c4dfd0)', height: 200 }}
          >
            <span style={{ fontSize: '4rem', opacity: 0.5 }}>🌴</span>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to left, #f0f8f4, transparent)', zIndex: 0 }}
      />
    </section>
  );
}
