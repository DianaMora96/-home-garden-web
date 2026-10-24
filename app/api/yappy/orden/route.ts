import { arboles, montoReserva } from '@/lib/catalogo';
import { crearOrden, nuevoOrderId, yappyConfigurado } from '@/lib/yappy';

export async function POST(request: Request) {
  if (!yappyConfigurado()) {
    return Response.json({ error: 'El pago con Yappy todavía no está activado.' }, { status: 503 });
  }

  const { arbolId, telefono } = (await request.json().catch(() => ({}))) as { arbolId?: string; telefono?: string };
  const arbol = arboles.find((a) => a.id === arbolId);
  if (!arbol || arbol.precio == null || arbol.vendido) {
    return Response.json({ error: 'Esta pieza no está disponible para pago en línea.' }, { status: 400 });
  }

  const numero = String(telefono || '').replace(/\D/g, '').replace(/^507/, '');
  if (!/^6\d{7}$/.test(numero)) {
    return Response.json({ error: 'Escribe tu número de celular de 8 dígitos, sin +507.' }, { status: 400 });
  }

  // El monto sale del catálogo en el servidor, nunca del navegador.
  const orderId = nuevoOrderId();
  try {
    const orden = await crearOrden({ orderId, telefono: numero, total: montoReserva(arbol.precio) });
    console.log(`[yappy] orden ${orderId} creada: ${arbol.nombre}, cel ${numero}`);
    return Response.json({ orderId, ...orden });
  } catch (e) {
    console.error(`[yappy] error al crear orden ${orderId}:`, e);
    return Response.json({ error: (e as Error).message }, { status: 502 });
  }
}
