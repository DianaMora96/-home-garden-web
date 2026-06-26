'use client';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex overflow-hidden" style={{ background: '#f4faf7' }}>

      {/* LEFT — Photo (takes ~65% width) */}
      <div className="relative w-full md:w-[65%] min-h-screen flex-shrink-0">
        {/* Placeholder — reemplaza con tu foto real */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(145deg, #a8d4b8, #6eb88a)' }}
        >
          <span style={{ fontSize: '16rem', opacity: 0.2 }}>🌿</span>
        </div>

        {/* Overlay sutil para legibilidad */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,61,46,0.15) 0%, transparent 60%)' }} />

        {/* Badge flotante sobre la foto */}
        <div className="absolute top-32 left-8 md:left-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(255,255,255,0.85)', color: '#0f6e56', backdropFilter: 'blur(8px)' }}
          >
            🌿 Vivero & Paisajismo · Panamá
          </div>
        </div>

        {/* Stats flotantes abajo a la izquierda */}
        <div
          className="absolute bottom-8 left-8 md:left-12 flex gap-6 px-6 py-4 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
        >
          {[
            { number: '10+', label: 'Años' },
            { number: '100+', label: 'Proyectos' },
            { number: '50+', label: 'Especies' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              <div>
                <div className="font-bold text-xl leading-none" style={{ color: '#0f6e56' }}>{s.number}</div>
                <div className="text-xs mt-0.5" style={{ color: '#5a7a6a' }}>{s.label}</div>
              </div>
              {i < 2 && <div className="w-px h-8" style={{ background: '#c8e6d4' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Content panel */}
      <div
        className="hidden md:flex flex-col justify-center px-12 lg:px-16 w-[35%] flex-shrink-0 relative z-10"
        style={{ background: '#0a3d2e', minHeight: '100vh' }}
      >
        <div>
          <h1
            className="font-bold leading-none mb-6 text-white"
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', letterSpacing: '-0.03em' }}
          >
            Naturaleza que
            <br />
            <span style={{ color: '#1db87a' }}>transforma</span>
            <br />
            espacios.
          </h1>

          <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 300 }}>
            Plantas, árboles y palmas de la más alta calidad. Diseñamos e instalamos los jardines más hermosos de Panamá.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#test"
              className="px-6 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 text-center"
              style={{ background: '#1db87a', boxShadow: '0 4px 20px rgba(29,184,122,0.35)' }}
            >
              Encuentra tu planta ideal 🌱
            </a>
            <a
              href="#proyectos"
              className="px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 text-center"
              style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
            >
              Ver proyectos
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden absolute inset-0 flex flex-col justify-end pb-12 px-6 z-10">
        <div
          className="rounded-3xl p-7"
          style={{ background: 'rgba(10,61,46,0.92)', backdropFilter: 'blur(12px)' }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(29,184,122,0.2)', color: '#1db87a' }}
          >
            🌿 Vivero & Paisajismo
          </div>
          <h1 className="text-3xl font-bold text-white mb-3 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Naturaleza que <span style={{ color: '#1db87a' }}>transforma</span> espacios.
          </h1>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Vivero, instalaciones y mantenimiento en Panamá.
          </p>
          <div className="flex gap-3">
            <a href="#test" className="flex-1 py-3 rounded-full font-semibold text-white text-sm text-center" style={{ background: '#1db87a' }}>
              Tu planta ideal
            </a>
            <a href="#proyectos" className="flex-1 py-3 rounded-full font-semibold text-sm text-center" style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}>
              Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
