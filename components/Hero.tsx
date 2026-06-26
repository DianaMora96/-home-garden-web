'use client';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a3d2e 0%, #0f6e56 50%, #1a8f6a 100%)' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, #1db87a, transparent)',
            top: '-10%',
            right: '-10%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, #a8f0c6, transparent)',
            bottom: '10%',
            left: '-5%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, #ffffff, transparent)',
            top: '40%',
            left: '60%',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* 3D floating leaf elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['🌿', '🍃', '🌱', '🍀', '🌾'].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl select-none"
            style={{
              top: `${15 + i * 15}%`,
              left: `${5 + i * 18}%`,
              opacity: 0.15,
              fontSize: `${2 + i * 0.5}rem`,
              animation: `float ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              filter: 'blur(1px)',
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ background: 'rgba(255,255,255,0.1)', color: '#a8f0c6', border: '1px solid rgba(168,240,198,0.3)' }}
        >
          <span>🌿</span>
          <span>Vivero & Paisajismo en Panamá</span>
        </div>

        <h1 className="text-white font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          Naturaleza que
          <br />
          <span style={{ color: '#1db87a' }}>transforma</span> espacios
        </h1>

        <p className="text-white/70 mb-10 mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: 600 }}>
          Plantas, árboles y palmas de la más alta calidad. Diseñamos, instalamos y mantenemos
          los jardines más hermosos de Panamá.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#test"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95"
            style={{ background: '#1db87a', color: 'white', boxShadow: '0 4px 24px rgba(29,184,122,0.4)' }}
          >
            Encuentra tu planta ideal 🌱
          </a>
          <a
            href="#proyectos"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            Ver proyectos
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {[
            { number: '10+', label: 'Años de experiencia' },
            { number: '100+', label: 'Proyectos completados' },
            { number: '50+', label: 'Especies disponibles' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#1db87a' }}>{stat.number}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
