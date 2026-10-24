// Catálogo de árboles de interior. Para publicar un precio, cambia `precio`
// de null al monto en balboas (ej. 450). Con precio en null la pieza muestra
// "Consultar" y solo se puede reservar por WhatsApp.
// Si la pieza tiene `enlaceCuanto` (el link del producto en cuanto.app), el
// botón "Comprar" lleva ahí y Cuanto cobra con Yappy o tarjeta.

export const WHATSAPP = '50769999999';

// Porcentaje del precio que se cobra con Yappy para reservar la pieza.
// Pon 100 para cobrar el precio completo.
export const RESERVA_PORCENTAJE = 50;

export type Arbol = {
  id: string;
  nombre: string;
  latin?: string;
  altura: string;
  etiqueta: string;
  descripcion: string;
  riego: string;
  precio: number | null;
  enlaceCuanto?: string;
  foto?: string;
};

export const arboles: Arbol[] = [
  {
    id: 'benjamina',
    nombre: 'Ficus benjamina variegado',
    latin: 'Ficus benjamina',
    altura: '1.70',
    etiqueta: 'Look de bonsái',
    descripcion:
      'Follaje variegado verde y crema, con tronco formado que le da el aspecto de un bonsái de gran tamaño. Una pieza escultural para salas y recibidores.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: null,
  },
  {
    id: 'alii',
    nombre: 'Ficus Alii',
    latin: 'Ficus maclellandii',
    altura: '2.30',
    etiqueta: 'Hoja alargada',
    descripcion:
      'Hojas largas y finas que caen con elegancia. Uno de los ficus más agradecidos en interior, ideal para esquinas altas y lobbies.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: null,
  },
  {
    id: 'helecho',
    nombre: 'Helecho japonés',
    altura: '2.00',
    etiqueta: 'Follaje fino',
    descripcion:
      'Silueta vertical de follaje fino y abundante que suaviza cualquier espacio. Aporta textura y verde intenso.',
    riego: 'Frecuente, manteniendo la tierra ligeramente húmeda',
    precio: null,
  },
  {
    id: 'reina',
    nombre: 'Reina Isabel',
    altura: '2.50',
    etiqueta: 'Gran formato',
    descripcion:
      'La pieza más alta de la colección. Presencia imponente para techos altos, dobles alturas y áreas sociales.',
    riego: 'Moderado, según la luz del espacio',
    precio: null,
  },
  {
    id: 'mexicali',
    nombre: 'Ficus Mexicali',
    altura: '2.00',
    etiqueta: 'Copa densa',
    descripcion:
      'Copa frondosa de hoja brillante. Un árbol clásico que da estructura y frescura a salas, oficinas y terrazas techadas.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: null,
  },
  {
    id: 'pittosporum',
    nombre: 'Pittosporum tobira',
    latin: 'Pittosporum tobira',
    altura: '1.70',
    etiqueta: 'Hoja perenne',
    descripcion:
      'Hojas brillantes en rosetas y forma compacta. Necesita un espacio muy luminoso, junto a ventanales o en balcón.',
    riego: 'Moderado, sin encharcar',
    precio: null,
  },
];

export function montoReserva(precio: number): number {
  return Math.round(precio * RESERVA_PORCENTAJE) / 100;
}

export function formatoBalboas(monto: number): string {
  return `B/. ${monto.toLocaleString('es-PA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
