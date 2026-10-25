// Catálogo de árboles de interior. Para publicar un precio, cambia `precio`
// de null al monto en balboas (ej. 450). Con precio en null la pieza muestra
// "Consultar" y solo se puede pedir por WhatsApp.
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

// Costo de entrega por árbol, en balboas (zonas aplican). No se cobra en
// línea: se confirma y paga al coordinar la entrega.
export const ENTREGA = 15;
export const DIAS_ENTREGA = 'Entregamos únicamente jueves o viernes. Te avisamos antes de la visita.';

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
      'Follaje ligero y abundante con presencia imponente. Para techos altos, dobles alturas y áreas sociales.',
    riego: 'Moderado, según la luz del espacio',
    precio: 185,
  },
  {
    id: 'reina-3m',
    foto: '/tienda/reina-isabel-3m.jpg',
    nombre: 'Reina Isabel',
    altura: '3.00',
    etiqueta: 'Gran formato',
    descripcion:
      'Tres metros de follaje ligero y elegante. Para techos altos, dobles alturas y lobbies que piden una pieza protagonista.',
    riego: 'Moderado, según la luz del espacio',
    precio: 230,
  },
  {
    id: 'reina-2',
    foto: '/tienda/reina-isabel-2.jpg',
    nombre: 'Reina Isabel',
    altura: '2.50',
    etiqueta: 'Copa abierta',
    descripcion:
      'Copa amplia y frondosa sobre un tronco firme. Llena de verde una esquina o un área social con presencia natural.',
    riego: 'Moderado, según la luz del espacio',
    precio: 250,
  },
  {
    id: 'olivo-negro',
    foto: '/tienda/olivo-negro.jpg',
    nombre: 'Olivo negro',
    altura: '2.20',
    etiqueta: 'Hoja menuda',
    descripcion:
      'Ramas en pisos y hoja pequeña y brillante. Un árbol de líneas finas que se lee como escultura en salas y terrazas.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 250,
  },
  {
    id: 'terminalia',
    foto: '/tienda/terminalia-mantaly.jpg',
    nombre: 'Terminalia mantaly',
    latin: 'Terminalia mantaly',
    altura: '2.50',
    etiqueta: 'Copa en pisos',
    descripcion:
      'Tronco esbelto y copa ligera que crece en niveles. Silueta limpia y moderna para espacios abiertos y muy luminosos.',
    riego: 'Moderado, sin encharcar',
    precio: 230,
  },
  {
    id: 'acacia-rosada',
    foto: '/tienda/acacia-rosada.jpg',
    nombre: 'Acacia rosada',
    altura: '2.30',
    etiqueta: 'Tronco esbelto',
    descripcion:
      'Tronco alto y copa ligera de hoja fina. Aporta altura y movimiento sin ocupar demasiado espacio.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 230,
  },
  {
    id: 'pittosporum-2',
    foto: '/tienda/pittosporum-tobira-2.jpg',
    nombre: 'Pittosporum tobira',
    latin: 'Pittosporum tobira',
    altura: '1.80',
    etiqueta: 'Hoja perenne',
    descripcion:
      'Hojas brillantes en rosetas y ramas abiertas. Necesita un espacio muy luminoso, junto a ventanales o en balcón.',
    riego: 'Moderado, sin encharcar',
    precio: 185,
  },
  {
    id: 'pittosporum-variegado',
    foto: '/tienda/pittosporum-variegado.jpg',
    nombre: 'Pittosporum variegado',
    latin: 'Pittosporum tobira ‘Variegata’',
    altura: '1.70',
    etiqueta: 'Follaje variegado',
    descripcion:
      'Copa redonda de hojas verde grisáceo con borde crema. Luminoso y delicado, ideal para balcones y espacios claros.',
    riego: 'Moderado, sin encharcar',
    precio: 185,
  },
  {
    id: 'pithecellobium',
    foto: '/tienda/pithecellobium-dulce.jpg',
    nombre: 'Pithecellobium dulce',
    latin: 'Pithecellobium dulce',
    altura: '2.50',
    etiqueta: 'Copa en sombrilla',
    descripcion:
      'Tronco largo y copa abierta de hoja pequeña, como una sombrilla. Una silueta gráfica y ligera para espacios amplios.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 165,
  },
  {
    id: 'lorito',
    foto: '/tienda/arbol-lorito.jpg',
    nombre: 'Árbol lorito',
    altura: '2.00',
    etiqueta: 'Hoja de pluma',
    descripcion:
      'Follaje fino en forma de pluma sobre un tronco recto. Fresco y liviano, suaviza cualquier rincón luminoso.',
    riego: 'Moderado, cuando la superficie de la tierra esté seca',
    precio: 145,
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


export function formatoBalboas(monto: number): string {
  return `B/. ${monto.toLocaleString('es-PA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
