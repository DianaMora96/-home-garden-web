'use client';
import { useEffect, useRef, useState } from 'react';
import type { Arbol } from '@/lib/catalogo';
import { formatoBalboas, montoReserva, RESERVA_PORCENTAJE, WHATSAPP } from '@/lib/catalogo';

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
  const reserva = precio != null ? montoReserva(precio) : 0;
  const textoWa = encodeURIComponent(
    `Hola Home & Garden, me interesa la pieza ${arbol.nombre} (${arbol.altura} m) de la tienda en línea.`,
  );

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
        btn.eventPayment?.({ transactionId: data.transactionId, token: data.token, documentName: data.documentName });
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
        <strong>¡Pieza reservada!</strong>
        <p>Recibimos tu pago. Te escribiremos por WhatsApp para coordinar la entrega.</p>
      </div>
    );
  }

  const puedePagar = activo && precio != null && online;

  if (arbol.enlaceCuanto) {
    return (
      <div className="t-compra">
        {precio != null && (
          <div className="t-precio-fila">
            <span>Precio</span>
            <b>{formatoBalboas(precio)}</b>
          </div>
        )}
        <a className="t-btn-lleno" href={arbol.enlaceCuanto} target="_blank" rel="noopener noreferrer">
          Comprar
        </a>
        <p className="t-nota">Pago seguro con Yappy o tarjeta. La entrega se coordina por WhatsApp.</p>
        <a className="t-btn-linea" href={`https://wa.me/${WHATSAPP}?text=${textoWa}`} target="_blank" rel="noopener noreferrer">
          Preguntar por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="t-compra">
      {precio != null && (
        <div className="t-precio-fila">
          <span>Precio</span>
          <b>{formatoBalboas(precio)}</b>
        </div>
      )}

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
          <p className="t-nota">
            {RESERVA_PORCENTAJE < 100
              ? `Pagas hoy ${formatoBalboas(reserva)} (${RESERVA_PORCENTAJE}%) para reservar la pieza. El resto, al coordinar la entrega.`
              : 'La entrega se cotiza según tu zona.'}
          </p>
        </>
      ) : (
        <p className="t-nota">
          {precio == null
            ? 'Precio a consultar. Escríbenos y te enviamos fotos y disponibilidad.'
            : 'El pago en línea no está disponible en este momento. Reserva por WhatsApp.'}
        </p>
      )}

      {mensaje && (
        <p className={estado === 'error' ? 't-msg t-msg-error' : 't-msg'} role="status">
          {mensaje}
        </p>
      )}

      <a className="t-btn-linea" href={`https://wa.me/${WHATSAPP}?text=${textoWa}`} target="_blank" rel="noopener noreferrer">
        {precio == null ? 'Consultar por WhatsApp' : 'Preguntar por WhatsApp'}
      </a>
    </div>
  );
}
