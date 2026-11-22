// Catálogo de árboles de interior. Para publicar un precio, cambia `precio`
// de null al monto en balboas (ej. 450). Con precio en null la pieza muestra
// "Consultar" y solo se puede pedir por WhatsApp.
// Cuando una pieza se venda, ponle `vendido: true`: pasa a la sección
// "Ya encontraron su hogar", sin botón de compra.
// Con `nuevo: true` la pieza muestra la etiqueta "New" sobre la foto.

export const WHATSAPP = '50764943951';

// Dominio público de la página (para Google y redes sociales).
export const SITIO = 'https://homeandgardenpa.com';

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
  nuevo?: boolean;
  foto?: string;
};

export const arboles: Arbol[] = [
  {
    id: 'jabuticaba',
    nuevo: true,
    foto: '/tienda/jabuticaba.jpg',
    nombre: 'Jabuticaba',
    latin: 'Plinia cauliflora',
    altura: '1.70',
    etiqueta: 'Hoja menuda',
    descripcion:
      'Varios troncos finos y una copa amplia de hoja pequeña y clara. Ligera y luminosa, llena de textura un rincón con buena luz natural.',
    riego: 'Frecuente, manteniendo la tierra ligeramente húmeda',
    precio: 285,
  },
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
    vendido: true,
    foto: '/tienda/olivo-negro-2.jpg',
    nombre: 'Olivo negro',
    altura: '2.20',
    etiqueta: 'Hoja menuda',
    descripcion:
      'Ramas en pisos y hoja pequeña y brillante. Un árbol de líneas finas que se lee como escultura en salas y terrazas.',
    riego: 'Constante',
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
    vendido: true,
    foto: '/tienda/pittosporum-tobira-2b.jpg',
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

// Regalos de Navidad / Secret Santa: plantas pequeñas para regalar.
// Para agregar una, copia un bloque y cambia los datos. Para la foto, sube
// la imagen a `public/tienda/regalos/` y pon su ruta en `foto`
// (ej. '/tienda/regalos/poto.jpg'), o usa la dirección de la foto en Cuanto. Sin foto se muestra "Foto pronto".
// Si la planta está en Cuanto, pon el enlace del producto en `cuanto`: el
// botón "Comprar" lleva ahí. Sin enlace, el botón abre WhatsApp.
// Con `agotado: true` la planta se muestra como agotada, sin botón de compra.
export type Regalo = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  foto?: string;
  cuanto?: string;
  agotado?: boolean;
};

export const regalos: Regalo[] = [
  {
    id: 'potho-variegado',
    nombre: 'Potho variegado',
    descripcion: 'Pequeño y fácil: aguanta luz baja o alta. El regalo perfecto para el escritorio.',
    precio: 5.95,
    foto: 'https://images.cuanto.app/?url=https://cuanto-products.nyc3.digitaloceanspaces.com/208040c6-a072-4b3e-8515-b0f4475404aa&w=800&h=800&output=jpg',
    cuanto: 'https://cuanto.app/homeandgarden/p/80eb11',
  },
  {
    id: 'sigonio-rosado',
    nombre: 'Sigonio rosado',
    descripcion: 'Hojas en tonos rosados. Va bien con poca o mucha luz, dentro o fuera de casa.',
    precio: 10,
    foto: 'https://images.cuanto.app/?url=https://cuanto-products.nyc3.digitaloceanspaces.com/19f1e788-081d-4a2c-b147-03f2c6d8f41f&w=800&h=800&output=jpg',
    cuanto: 'https://cuanto.app/homeandgarden/p/ea2c01',
  },
  {
    id: 'aglaonema-silver-bay',
    nombre: 'Aglaonema Silver Bay',
    descripcion: 'Hojas verdes con plateado. Elegante y muy resistente en interior, con luz baja a media.',
    precio: 25,
    foto: 'https://images.cuanto.app/?url=https://cuanto-products.nyc3.digitaloceanspaces.com/1add0a54-4509-4781-8cb9-e6afed6b52f7&w=800&h=800&output=jpg',
    cuanto: 'https://cuanto.app/homeandgarden/p/35aa01',
  },
  {
    id: 'philodendron-congo-rojo',
    nombre: 'Philodendron Congo Rojo',
    descripcion: 'Hojas grandes con tonos rojizos: el color perfecto para Navidad.',
    precio: 25,
    foto: 'https://images.cuanto.app/?url=https://cuanto-products.nyc3.digitaloceanspaces.com/2926d66c-9045-4702-82b2-0208072ad1d0&w=800&h=800&output=jpg',
    cuanto: 'https://cuanto.app/homeandgarden/p/8761fe',
  },
];
