'use client';
import { useState } from 'react';
import Image from 'next/image';

// Para cada proyecto: pega aquí el ID del archivo de Google Drive (la parte
// entre /d/ y /view en el link para compartir, con acceso "Cualquiera con el
// enlace puede ver"). Deja driveId: null mientras no tengas la foto.
// Nota: "PH Galería" usa una foto confirmada de esa carpeta en Drive. Los
// demás espacios usan fotos generales del vivero (no de un cliente
// específico), así que llevan etiqueta genérica en vez de nombre de cliente
// para no atribuirle mal un proyecto a alguien. Si consigues fotos propias de
// IVY, Colón, Balmoral, Corona o TDJD, reemplaza el driveId y el label aquí.
const projects: { id: number; label: string; size: 'large' | 'small'; bg: string; driveId: string | null }[] = [
  { id: 1, label: 'PH Galería', size: 'large', bg: '#c8e6d4', driveId: '1jYJ2l0dDmiFwBiS4tj0F44ZBluQW8uFY' },
  { id: 2, label: 'Vivero propio', size: 'small', bg: '#b8d9c4', driveId: '18Ju3VB3k6DtHjYQLHqB0hoUAYWa60xJ5' },
  { id: 3, label: 'Instalaciones', size: 'small', bg: '#cce8d8', driveId: '16CLXK7MYddHxZEZCSLobALbanVloNU9g' },
  { id: 4, label: 'Diseño paisajista', size: 'small', bg: '#d4eadc', driveId: '1axDHI6jOyCvJBoGiFEPnZiyF5wvbAWvD' },
  { id: 5, label: 'Mantenimiento', size: 'small', bg: '#bfe0cb', driveId: '1dGLYmxFvuePTu_AKR5mjJWr6yGRoCYVs' },
  { id: 6, label: 'Entrega e instalación', size: 'small', bg: '#c4ddd0', driveId: '1UbSjjQsTiBJw_2tqxFA8WKoKUXyN-dRw' },
];

function driveImageUrl(driveId: string) {
  return `https://lh3.googleusercontent.com/d/${driveId}=w1000`;
}

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="proyectos" className="py-28 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1db87a' }}>
              Portafolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight" style={{ color: '#0d1f17', letterSpacing: '-0.02em' }}>
              Proyectos que<br />hablan por sí solos
            </h2>
          </div>
          <a
            href="https://wa.me/50769999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap"
            style={{ background: '#f4faf7', color: '#0f6e56', border: '1px solid #c8e6d4' }}
          >
            Ver todos →
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div
            className="col-span-2 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:shadow-2xl"
            style={{ minHeight: 400, background: projects[0].bg }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            {projects[0].driveId ? (
              <Image src={driveImageUrl(projects[0].driveId)} alt={projects[0].label} fill className="object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontSize: '8rem', opacity: 0.25 }}>🌳</span>
              </div>
            )}
            <div
              className="absolute inset-0 flex items-end p-6 transition-all duration-300"
              style={{ background: hovered === 1 ? 'rgba(13,31,23,0.4)' : 'rgba(13,31,23,0.1)' }}
            >
              <div>
                <div className="text-xs text-white/70 uppercase tracking-widest mb-1">Proyecto</div>
                <div className="text-white font-bold text-2xl">{projects[0].label}</div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {projects.slice(1).map((p) => (
            <div
              key={p.id}
              className="rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:shadow-xl"
              style={{ minHeight: 180, background: p.bg }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {p.driveId ? (
                <Image src={driveImageUrl(p.driveId)} alt={p.label} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontSize: '4rem', opacity: 0.25 }}>🌿</span>
                </div>
              )}
              <div
                className="absolute inset-0 flex items-end p-4 transition-all duration-300"
                style={{ background: hovered === p.id ? 'rgba(13,31,23,0.4)' : 'rgba(13,31,23,0.05)' }}
              >
                <div className="text-white font-semibold text-sm">{p.label}</div>
              </div>
            </div>
          ))}
        </div>

        {projects.some((p) => !p.driveId) && (
          <p className="text-center text-sm mt-8" style={{ color: '#8aab99' }}>
            Faltan fotos reales para: {projects.filter((p) => !p.driveId).map((p) => p.label).join(', ')}.
          </p>
        )}
      </div>
    </section>
  );
}
