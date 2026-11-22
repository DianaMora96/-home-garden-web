'use client';
import { useEffect, useRef, useState } from 'react';
import type { Arbol } from '@/lib/catalogo';
import { CreditCard, Landmark, MessageCircle, Smartphone } from 'lucide-react';
import { ENTREGA, formatoBalboas, WHATSAPP } from '@/lib/catalogo';

type BtnYappy = HTMLElement & {
  isButtonLoading?: boolean;
  eventPayment?: (p: { transactionId: string; token: string; documentName: string }) => void;
};

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'btn-yappy': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        theme?: string;
        rounded?: string;
      };
    }
  }
}

let scriptCargado: Promise<void> | null = null;
function cargarScript(src: string) {
  if (!scriptCargado) {
    scriptCargado = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('No cargó Yappy'));
      document.head.appendChild(s);
    });
  }
  return scriptCargado;
}

type Estado = 'listo' | 'pagado' | 'error';

export default function CompraYappy({ arbol, cdn, activo }: { arbol: Arbol; cdn: string; activo: boolean }) {
  const btnRef = useRef<BtnYappy>(null);
  const telRef = useRef('');
  const [telefono, setTelefono] = useState('');
  const [estado, setEstado] = useState<Estado>('listo');
  const [mensaje, setMensaje] = useState('');
  const [online, setOnline] = useState(true);

  const precio = arbol.precio;
  const wa = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

  useEffect(() => {
    if (!activo || precio == null) return;
    const btn = btnRef.current;
    if (!btn) return;
    cargarScript(cdn).catch(() => setOnline(false));

    const alClic = async () => {
      setMensaje('');
      const numero = telRef.current.replace(/\D/g, '');
      if (!/^6\d{7}$/.test(numero)) {
        setEstado('error');
        setMensaje('Escribe tu número de celular de 8 dígitos para recibir la solicitud en Yappy.');
        return;
      }
      btn.isButtonLoading = true;
      try {
        const res = await fetch('/api/yappy/orden', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ arbolId: arbol.id, telefono: numero }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'No se pudo iniciar el pago.');
        btn.eventPayment?.({
          transactionId: data.transactionId,
          token: data.token,
          documentName: data.documentName,
        });
        setEstado('listo');
        setMensaje('Te enviamos la solicitud de pago. Ábrela en tu app de Yappy para confirmar.');
      } catch (e) {
        setEstado('error');
        setMensaje((e as Error).message);
      } finally {
        btn.isButtonLoading = false;
      }
    };
    const alExito = () => {
      setEstado('pagado');
      setMensaje('');
    };
    const alError = () => {
      setEstado('error');
      setMensaje('El pago no se completó. Puedes intentarlo de nuevo o escribirnos por WhatsApp.');
    };
    const alEstado = (e: Event) => setOnline((e as CustomEvent).detail !== false);

    btn.addEventListener('eventClick', alClic);
    btn.addEventListener('eventSuccess', alExito);
    btn.addEventListener('eventError', alError);
    btn.addEventListener('isYappyOnline', alEstado);
    return () => {
      btn.removeEventListener('eventClick', alClic);
      btn.removeEventListener('eventSuccess', alExito);
      btn.removeEventListener('eventError', alError);
      btn.removeEventListener('isYappyOnline', alEstado);
    };
  }, [activo, cdn, arbol.id, precio]);

  if (estado === 'pagado') {
    return (
      <div className="t-pagado" role="status">
        <strong>¡Pieza confirmada!</strong>
        <p>Recibimos tu pago. Te escribiremos por WhatsApp para coordinar la entrega del jueves o viernes.</p>
      </div>
    );
  }

  const puedePagar = activo && precio != null && online;

  return (
    <div className="t-compra">
      {precio != null && (
        <div className="t-precios">
          <div className="t-precio-fila">
            <span>Precio</span>
            <b>{formatoBalboas(precio)}</b>
          </div>
          <div className="t-precio-sub">
            <span>Entrega</span>
            <span>{formatoBalboas(ENTREGA)} · zonas aplican</span>
          </div>
        </div>
      )}

      {precio == null ? (
        <p className="t-nota">Precio a consultar. Escríbenos y te enviamos fotos y disponibilidad.</p>
      ) : (
        <div className="t-pagos">
          <span className="t-pagos-titulo">Elige cómo pagar</span>
          {puedePagar ? (
            <>
              <label className="t-campo" htmlFor={`tel-${arbol.id}`}>
                <span>Tu celular con Yappy</span>
                <input
                  id={`tel-${arbol.id}`}
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="6000-0000"
                  value={telefono}
                  onChange={(e) => {
                    telRef.current = e.target.value;
                    setTelefono(e.target.value);
                  }}
                />
              </label>
              <btn-yappy ref={btnRef} theme="darkBlue" rounded="true" />
            </>
          ) : (
            <a className="t-pago" href={wa(`Hola Home & Garden, quiero pagar con Yappy la pieza ${arbol.nombre} (${arbol.altura} m).`)} target="_blank" rel="noopener noreferrer">
              <Smartphone size={20} strokeWidth={2.4} aria-hidden="true" />
              <span>Pagar con Yappy</span>
            </a>
          )}
          <a
            className="t-pago"
            href={wa(`Hola Home & Garden, quiero pagar con tarjeta la pieza ${arbol.nombre} (${arbol.altura} m). ¿Me envían el enlace de pago?`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CreditCard size={20} strokeWidth={2.4} aria-hidden="true" />
            <span>Pagar con tarjeta</span>
          </a>
          <a
            className="t-pago"
            href={wa(`Hola Home & Garden, quiero pagar por ACH la pieza ${arbol.nombre} (${arbol.altura} m). ¿Me envían los datos de la cuenta?`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Landmark size={20} strokeWidth={2.4} aria-hidden="true" />
            <span>Pagar por ACH</span>
          </a>
          <p className="t-pagos-nota">
            <MessageCircle size={15} strokeWidth={2.5} aria-hidden="true" />
            Al elegir una opción te llevamos a WhatsApp para enviarte los datos de pago.
          </p>
        </div>
      )}

      {mensaje && (
        <p className={estado === 'error' ? 't-msg t-msg-error' : 't-msg'} role="status">
          {mensaje}
        </p>
      )}

      {precio == null && (
        <a className="t-btn-tarjeta" href={wa(`Hola Home & Garden, me interesa la pieza ${arbol.nombre} (${arbol.altura} m) de la tienda en línea.`)} target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp
        </a>
      )}
    </div>
  );
}
