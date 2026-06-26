'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tu planta', href: '#test' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'white',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #eef2ef',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-xl">🌿</span>
          <span className="font-bold text-lg tracking-tight" style={{ color: '#0d1f17' }}>Home & Garden</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: '#3d5a4a' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/50769999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#0f6e56' }}
          >
            WhatsApp
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <div className="w-5 h-0.5 mb-1.5 transition-all" style={{ background: '#0d1f17', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <div className="w-5 h-0.5 mb-1.5 transition-all" style={{ background: '#0d1f17', opacity: menuOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 transition-all" style={{ background: '#0d1f17', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: '#3d5a4a', borderColor: '#eef2ef' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
