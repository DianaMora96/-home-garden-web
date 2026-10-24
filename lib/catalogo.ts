// Catálogo de árboles de interior. Para publicar un precio, cambia `precio`
// de null al monto en balboas (ej. 450). Con precio en null la pieza muestra
// "Consultar" y solo se puede reservar por WhatsApp.
// Cuando una pieza se venda, ponle `vendido: true`: pasa a la sección
// "Ya encontraron su hogar", sin botón de compra.

export const WHATSAPP = '50764943951';

// Datos para pago por transferencia ACH. Mientras `cuenta` esté vacía, la
// tienda pide al cliente escribir por WhatsApp para recibir los datos.
export const ACH = {
  banco: '',
  tipo: 'Cuenta corriente',
  cuenta: '',
  titular: '',
};

// Porcentaje del precio que se cobra para reservar la pieza (Yappy o ACH).
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
  vendido?: boolean;
  foto?: string;
};

export const arboles: Arbol[] = [
  {
    id: 'benjamina',
    foto: '/tienda/ficus-benjamina-variegado.jpg',
    nombre: 'Ficus benjamina variegado',
    latin: 'Ficus benjamina',
    altura: '1.70',
    etiqueta: 'Look de bonsái',
    descripcion:
      'Follaje variegado verde y crema, con tronco formado que le da el aspecto de un bonsái de gran tamaño. Una pieza escultural para salas y recibidores.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 165,
  },
  {
    id: 'alii',
    vendido: true,
    foto: '/tienda/ficus-alii.jpg',
    nombre: 'Ficus Alii',
    latin: 'Ficus maclellandii',
    altura: '2.30',
    etiqueta: 'Hoja alargada',
    descripcion:
      'Hojas largas y finas que caen con elegancia. Uno de los ficus más agradecidos en interior, ideal para esquinas altas y lobbies.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 230,
  },
  {
    id: 'helecho',
    foto: '/tienda/helecho-japones.jpg',
    nombre: 'Helecho japonés',
    altura: '2.00',
    etiqueta: 'Follaje fino',
    descripcion:
      'Silueta vertical de follaje fino y abundante que suaviza cualquier espacio. Aporta textura y verde intenso.',
    riego: 'Frecuente, manteniendo la tierra ligeramente húmeda',
    precio: 185,
  },
  {
    id: 'reina',
    foto: '/tienda/reina-isabel.jpg',
    nombre: 'Reina Isabel',
    altura: '2.50',
    etiqueta: 'Gran formato',
    descripcion:
      'La pieza más alta de la colección. Presencia imponente para techos altos, dobles alturas y áreas sociales.',
    riego: 'Moderado, según la luz del espacio',
    precio: 185,
  },
  {
    id: 'mexicali',
    vendido: true,
    foto: '/tienda/ficus-mexicali.jpg',
    nombre: 'Ficus Mexicali',
    altura: '2.00',
    etiqueta: 'Copa densa',
    descripcion:
      'Copa frondosa de hoja brillante. Un árbol clásico que da estructura y frescura a salas, oficinas y terrazas techadas.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 185,
  },
  {
    id: 'pittosporum',
    vendido: true,
    foto: '/tienda/pittosporum-tobira.jpg',
    nombre: 'Pittosporum tobira',
    latin: 'Pittosporum tobira',
    altura: '1.70',
    etiqueta: 'Hoja perenne',
    descripcion:
      'Hojas brillantes en rosetas y forma compacta. Necesita un espacio muy luminoso, junto a ventanales o en balcón.',
    riego: 'Moderado, sin encharcar',
    precio: 185,
  },
];

export function montoReserva(precio: number): number {
  return Math.round(precio * RESERVA_PORCENTAJE) / 100;
}

export function formatoBalboas(monto: number): string {
  return `B/. ${monto.toLocaleString('es-PA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
