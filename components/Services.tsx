const services = [
  { icon: '🌿', title: 'Vivero', description: 'Más de 50 especies de plantas, árboles y palmas disponibles todo el año en nuestro vivero propio.' },
  { icon: '🏗️', title: 'Instalaciones', description: 'Instalamos jardines completos en proyectos residenciales, corporativos y municipales.' },
  { icon: '✂️', title: 'Mantenimiento', description: 'Mantenimiento periódico para que tu jardín siempre luzca en su mejor estado.' },
  { icon: '🪴', title: 'Plantas de lujo', description: 'Plantas ornamentales en envases premium para interiores y espacios de alto nivel.' },
  { icon: '🎨', title: 'Diseño paisajista', description: 'Diseñamos jardines personalizados adaptados a tu espacio, estilo y presupuesto.' },
  { icon: '🚛', title: 'Entrega e instalación', description: 'Llevamos tus plantas a cualquier parte de Panamá con instalación incluida.' },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-8 md:px-16" style={{ background: '#f7faf8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1db87a' }}>
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight" style={{ color: '#0d1f17', letterSpacing: '-0.02em' }}>
            Todo para tu jardín en un solo lugar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ border: '1px solid #eaf2ec' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transition-all group-hover:scale-110"
                style={{ background: '#eaf5f0' }}
              >
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#0d1f17' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7a9a8a' }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
