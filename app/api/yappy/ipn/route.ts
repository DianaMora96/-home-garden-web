import type { NextRequest } from 'next/server';
import { firmaValida } from '@/lib/yappy';

const ESTADOS: Record<string, string> = {
  E: 'pagado',
  R: 'rechazado',
  C: 'cancelado',
  X: 'expirado',
};

// Aviso de pago instantáneo (IPN). Yappy llama aquí con GET cuando el cliente
// paga, cancela o deja vencer la solicitud. El registro queda en los logs de
// Vercel y el pago también aparece en el panel de Yappy Comercial.
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams;
  const orderId = q.get('orderId') || '';
  const status = q.get('status') || '';
  const domain = q.get('domain') || '';
  const hash = q.get('hash') || '';

  if (!orderId || !status || !hash || !firmaValida(orderId, status, domain, hash)) {
    console.warn(`[yappy] aviso con firma inválida para orden ${orderId}`);
    return Response.json({ success: false }, { status: 400 });
  }

  console.log(`[yappy] orden ${orderId}: ${ESTADOS[status] || status}`);
  return Response.json({ success: true });
}
