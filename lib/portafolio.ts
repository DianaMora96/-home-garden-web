// Contenido del portafolio (homeandgardenpa.com/portafolio).
// Fotos en public/portafolio/. Para agregar un proyecto, copia uno de la lista
// y cambia los textos y las fotos.

export type Foto = { src: string; alt: string; w: number; h: number; pie?: string };

export type Proyecto = {
  id: string;
  tipo: string;
  nombre: string;
  detalle?: string;
  texto: string;
  datos?: { valor: string; label: string }[];
  fotos: Foto[];
};

const f = (src: string, alt: string, w: number, h = 1400, pie?: string): Foto => ({ src: `/portafolio/${src}.jpg`, alt, w, h, pie });

export const proyectos: Proyecto[] = [
  {
    id: 'balmoral',
    tipo: 'Diseño y desarrollo de jardín',
    nombre: 'Residencia Balmoral',
    texto:
      'Diseño y desarrollo del jardín de esta residencia: piscina infinita, terraza en madera y paisajismo tropical envolvente. Suministro integral, desde palmas de 6 metros de altura hasta la grama.',
    fotos: [
      f('balmoral-3', 'Residencia Balmoral, vista aérea de la piscina y el jardín', 788),
      f('balmoral-2', 'Residencia Balmoral, jardín reflejado en la piscina', 788),
      f('balmoral-4', 'Residencia Balmoral, jardín y grama', 788),
      f('balmoral-5', 'Residencia Balmoral, flotadores en la piscina', 774, 1384),
      f('balmoral-1', 'Residencia Balmoral, follaje reflejado en el agua', 931),
    ],
  },
  {
    id: 'ivy',
    tipo: 'Interiorismo para desarrolladores',
    nombre: 'PH IVY, Santa María',
    detalle: 'Interiorismo por Marietta Mallol · Desarrollo F&F',
    texto:
      'Suministro de plantas pieza única y potes artesanales para las áreas sociales del proyecto: lobby, área social de piscina y terrazas.',
    fotos: [
      f('ivy-1', 'PH IVY, lobby', 997),
      f('ivy-2', 'PH IVY, terraza', 931),
      f('ivy-3', 'PH IVY, área de piscina', 931),
      f('ivy-4', 'PH IVY, detalle de planta en pote', 931),
      f('ivy-5', 'PH IVY, muro verde', 931),
      f('ivy-6', 'PH IVY, jardinera', 931),
    ],
  },
  {
    id: 'colon',
    tipo: 'Proyecto del Ministerio de Cultura',
    nombre: 'Reforestación del Casco de Colón',
    detalle: 'Marzo 2026 · Mantenimiento continuo con cuadrilla en Colón',
    texto: 'Suministro y siembra de 600 árboles de 2 a 6 metros de altura en el casco urbano de Colón. Un proyecto del Ministerio de Cultura.',
    datos: [
      { valor: '600', label: 'árboles sembrados' },
      { valor: '2–6 m', label: 'altura de siembra' },
      { valor: '2026', label: 'mantenimiento activo' },
    ],
    fotos: [
      f('colon-1', 'Árbol sembrado en el Casco de Colón', 933),
      f('colon-2', 'Árbol frente a edificio histórico de Colón', 933),
      f('colon-4', 'Árbol recién sembrado en Colón', 933),
      f('colon-5', 'Árbol sembrado frente a una escuela en Colón', 933),
      f('colon-6', 'Árbol joven junto a la acera en Colón', 933),
      f('colon-7', 'Árbol sembrado junto a la calle en Colón', 933),
      f('colon-3', 'Árboles en el área urbana de Colón', 933),
    ],
  },
  {
    id: 'corona',
    tipo: 'Paisajismo de interior',
    nombre: 'Vista Corona, Aeropuerto de Tocumen',
    detalle: 'Terminal 2 · Diseño, instalación y mantenimiento mensual',
    texto:
      'Diseño de paisajismo de interior, suministro de plantas e instalación para el espacio Vista Corona, con mantenimiento mensual continuo.',
    fotos: [
      f('corona-1', 'Vista Corona, palmeras y sala', 1050),
      f('corona-2', 'Vista Corona, logo con plantas', 1050),
      f('corona-3', 'Vista Corona, hamacas', 1050),
      f('corona-4', 'Vista Corona, plantas en potes', 1050),
      f('corona-6', 'Vista Corona, detalle de estrella', 1050),
      f('corona-7', 'Vista Corona, árbol de interior', 1050),
      f('corona-8', 'Vista Corona, lounge', 1050),
      f('corona-5', 'Vista Corona, detalle', 1050),
    ],
  },
  {
    id: 'plant-styling',
    tipo: 'Piezas únicas de vivero',
    nombre: 'Plant Styling Residencial',
    texto: 'Selección y suministro de plantas de lujo pieza única para residencias, con macetas a juego con cada espacio.',
    fotos: [
      f('styling-corkidi', 'Residencia Corkidi', 788, 1400, 'Residencia Corkidi'),
      f('styling-blue-bahia', 'Lobby PH Blue Bahía', 1050, 1400, 'Lobby PH Blue Bahía'),
      f('styling-nahum', 'Residencia Nahum', 1050, 1400, 'Residencia Nahum'),
      f('styling-mizrachi', 'Residencia Mizrachi', 1050, 1400, 'Residencia Mizrachi'),
    ],
  },
  {
    id: 'galeria',
    tipo: 'Interiorismo para desarrolladores',
    nombre: 'PH Galería',
    detalle: 'Pacific Developers',
    texto: 'Suministro de plantas para 100 potes de lujo en las áreas sociales y todo el exterior del PH.',
    fotos: [
      f('galeria-1', 'PH Galería, áreas sociales', 933),
      f('galeria-2', 'PH Galería, lounge', 933),
      f('galeria-3', 'PH Galería, oficina', 941),
      f('galeria-4', 'PH Galería, terraza', 985),
      f('galeria-5', 'PH Galería, exterior', 933),
    ],
  },
];

export const proximamente = ['Museo de Antropología, Vía 5 de Mayo', 'Skyhomes 02', 'Garden 23', 'Casa Coronado', 'Jardines de Ciudad de Colón'];

export const fotosVivero: Foto[] = [
  f('vivero-2', 'Árboles grandes en el vivero Home & Garden', 931),
  f('vivero-1', 'Equipo trabajando en el vivero', 931),
  f('vivero-3', 'Plantas bajo sombra en el vivero', 931),
  f('vivero-4', 'Palmas en el vivero', 931),
  f('vivero-5', 'Hojas de palma en el vivero', 1011),
  f('vivero-6', 'Plantas listas para entrega en el vivero', 931),
];
