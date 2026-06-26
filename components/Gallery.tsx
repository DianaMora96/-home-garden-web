'use client';
import { useState } from 'react';

const projects = [
  { id: 1, label: 'IVY', color: '#0f6e56' },
  { id: 2, label: 'Colón', color: '#0a3d2e' },
  { id: 3, label: 'PH Galería', color: '#1a8f6a' },
  { id: 4, label: 'Balmoral', color: '#0d5c47' },
  { id: 5, label: 'Corona', color: '#0f6e56' },
  { id: 6, label: 'TDJD', color: '#0a3d2e' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: '#f5f7f2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1db87a' }}>
            Portafolio
          </span>
          <h2 className="text-4xl font-bold mt-3" style={{ color: '#0a3d2e' }}>
            Nuestros proyectos
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#3d5a4a' }}>
            Proyectos que han transformado espacios en toda Panamá.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ aspectRatio: '4/3', background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)` }}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Placeholder with emoji background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontSize: '6rem', opacity: 0.12 }}>🌳</span>
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-5 transition-all duration-300"
                style={{ background: active === p.id ? 'rgba(10,61,46,0.6)' : 'rgba(10,61,46,0.2)' }}
              >
                <div>
                  <div className="text-xs text-white/60 mb-1 uppercase tracking-wider">Proyecto</div>
                  <div className="text-white font-bold text-lg">{p.label}</div>
                </div>
              </div>

              {/* Note for real photos */}
              <div
                className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.8)',
                  opacity: active === p.id ? 1 : 0,
                }}
              >
                📸 Ver fotos
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: '#3d5a4a' }}>
          ¿Quieres ver más? <a href="https://wa.me/50769999999" className="font-semibold" style={{ color: '#0f6e56' }}>Escríbenos por WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
