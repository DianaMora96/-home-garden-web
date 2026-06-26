const services = [
  {
    icon: '🌿',
    title: 'Vivero',
    description: 'Contamos con un vivero propio con más de 50 especies de plantas, árboles y palmas disponibles todo el año.',
  },
  {
    icon: '🏗️',
    title: 'Instalaciones',
    description: 'Instalamos jardines completos en proyectos residenciales, corporativos y municipales con equipo experto.',
  },
  {
    icon: '✂️',
    title: 'Mantenimiento',
    description: 'Servicio de mantenimiento periódico para que tu jardín siempre luzca en su mejor estado.',
  },
  {
    icon: '🪴',
    title: 'Plantas en potes de lujo',
    description: 'Plantas ornamentales en envases premium para interiores, terrazas y espacios de alto nivel.',
  },
  {
    icon: '🎨',
    title: 'Diseño paisajista',
    description: 'Diseñamos jardines personalizados adaptados a tu espacio, estilo y presupuesto.',
  },
  {
    icon: '🚛',
    title: 'Entrega e instalación',
    description: 'Llevamos tus plantas a cualquier parte de Panamá con servicio de instalación incluido.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6" style={{ background: '#0a3d2e' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1db87a' }}>
            Lo que hacemos
          </span>
          <h2 className="text-4xl font-bold mt-3 text-white">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Todo lo que necesitas para transformar cualquier espacio con naturaleza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all group-hover:scale-110"
                style={{ background: 'rgba(29,184,122,0.15)', border: '1px solid rgba(29,184,122,0.2)' }}
              >
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
