import 'server-only';
import { createHmac, timingSafeEqual } from 'node:crypto';

// Botón de Pago Yappy (Banco General), integración v2.
// Variables de entorno (en Vercel → Settings → Environment Variables):
//   YAPPY_MERCHANT_ID  ID del comercio que da Yappy Comercial
//   YAPPY_SECRET_KEY   Clave secreta del botón (nunca en el código)
//   YAPPY_DOMAIN       Dominio registrado en el botón, ej. https://homeandgardenpa.vercel.app
//   YAPPY_ENV          "produccion" o "pruebas" (por defecto: pruebas)

const API = {
  produccion: 'https://apipagosbg.bgeneral.cloud',
  pruebas: 'https://api-comecom-uat.yappycloud.com',
};

export const CDN = {
  produccion: 'https://bt-cdn.yappy.cloud/v1/cdn/web-component-btn-yappy.js',
  pruebas: 'https://bt-cdn-uat.yappycloud.com/v1/cdn/web-component-btn-yappy.js',
};

export function entornoYappy(): 'produccion' | 'pruebas' {
  return process.env.YAPPY_ENV === 'produccion' ? 'produccion' : 'pruebas';
}

export function yappyConfigurado(): boolean {
  return Boolean(process.env.YAPPY_MERCHANT_ID && process.env.YAPPY_SECRET_KEY && process.env.YAPPY_DOMAIN);
}

type RespuestaYappy<T> = { status?: { code?: string; description?: string }; body?: T };

async function post<T>(path: string, body: unknown, token?: string): Promise<RespuestaYappy<T>> {
  const res = await fetch(`${API[entornoYappy()]}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: token } : {}) },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  return res.json();
}

export function nuevoOrderId(): string {
  // Yappy acepta de 1 a 15 caracteres alfanuméricos.
  const tiempo = Date.now().toString(36).toUpperCase();
  const azar = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `HG${tiempo}${azar}`.slice(0, 15);
}

export async function crearOrden(params: { orderId: string; telefono: string; total: number }) {
  const merchantId = process.env.YAPPY_MERCHANT_ID!;
  const domain = process.env.YAPPY_DOMAIN!.replace(/\/$/, '');

  const validacion = await post<{ token: string; epochTime: number }>('/payments/validate/merchant', {
    merchantId,
    urlDomain: domain,
  });
  if (!validacion.body?.token) {
    throw new Error(validacion.status?.description || 'No se pudo validar el comercio en Yappy');
  }

  const monto = params.total.toFixed(2);
  const orden = await post<{ transactionId: string; token: string; documentName: string }>(
    '/payments/payment-wc',
    {
      merchantId,
      orderId: params.orderId,
      domain,
      paymentDate: validacion.body.epochTime,
      aliasYappy: params.telefono,
      ipnUrl: `${domain}/api/yappy/ipn`,
      discount: '0.00',
      taxes: '0.00',
      subtotal: monto,
      total: monto,
    },
    validacion.body.token,
  );
  if (!orden.body?.transactionId) {
    throw new Error(orden.status?.description || 'Yappy no pudo crear la orden');
  }
  return orden.body;
}

// Firma del aviso de pago: HMAC-SHA256(orderId + status + domain) con la
// primera parte (antes del punto) de la clave secreta decodificada en base64.
export function firmaValida(orderId: string, status: string, domain: string, hash: string): boolean {
  const secreto = Buffer.from(process.env.YAPPY_SECRET_KEY || '', 'base64').toString('utf-8').split('.')[0];
  if (!secreto) return false;
  const esperado = createHmac('sha256', secreto).update(orderId + status + domain).digest('hex');
  const a = Buffer.from(esperado);
  const b = Buffer.from(hash.toLowerCase());
  return a.length === b.length && timingSafeEqual(a, b);
}
