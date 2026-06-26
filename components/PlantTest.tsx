'use client';
import { useState } from 'react';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; icon: string }[];
}

const questions: Question[] = [
  {
    id: 'luz',
    question: '¿Cuánta luz natural tiene tu espacio?',
    options: [
      { label: 'Mucha luz directa', value: 'alta', icon: '☀️' },
      { label: 'Luz indirecta', value: 'media', icon: '🌤️' },
      { label: 'Poca o ninguna', value: 'baja', icon: '🌑' },
    ],
  },
  {
    id: 'riego',
    question: '¿Qué tan seguido recuerdas regar tus plantas?',
    options: [
      { label: 'Todos los días', value: 'frecuente', icon: '💧' },
      { label: 'Cada semana', value: 'moderado', icon: '🚿' },
      { label: 'Me olvido seguido', value: 'poco', icon: '🏜️' },
    ],
  },
  {
    id: 'mascotas',
    question: '¿Tienes mascotas o niños pequeños en casa?',
    options: [
      { label: 'Sí, mascotas', value: 'mascotas', icon: '🐾' },
      { label: 'Sí, niños', value: 'ninos', icon: '👶' },
      { label: 'No', value: 'ninguno', icon: '✅' },
    ],
  },
  {
    id: 'lugar',
    question: '¿Dónde va la planta?',
    options: [
      { label: 'Interior (sala, oficina)', value: 'interior', icon: '🏠' },
      { label: 'Exterior (jardín, terraza)', value: 'exterior', icon: '🏡' },
      { label: 'Ambos', value: 'ambos', icon: '🌐' },
    ],
  },
  {
    id: 'presupuesto',
    question: '¿Cuál es tu presupuesto aproximado?',
    options: [
      { label: 'Menos de $20', value: 'bajo', icon: '💵' },
      { label: '$20 – $100', value: 'medio', icon: '💰' },
      { label: 'Más de $100', value: 'alto', icon: '💎' },
    ],
  },
];

interface PlantResult {
  name: string;
  emoji: string;
  description: string;
  care: string;
}

function getResult(answers: Record<string, string>): PlantResult {
  const { luz, riego, mascotas, lugar, presupuesto } = answers;

  if (riego === 'poco' && luz === 'baja') {
    return {
      name: 'Sansevieria (Lengua de suegra)',
      emoji: '🪴',
      description: 'La planta perfecta para quien se olvida de regar. Aguanta poca luz y necesita muy poco cuidado.',
      care: 'Riega 1 vez cada 2–3 semanas.',
    };
  }
  if (riego === 'poco' && luz !== 'baja') {
    return {
      name: 'Cactus o Suculenta',
      emoji: '🌵',
      description: 'Perfectas para espacios con luz y personas ocupadas. Son resistentes y muy decorativas.',
      care: 'Riega solo cuando la tierra esté completamente seca.',
    };
  }
  if (luz === 'alta' && lugar === 'exterior') {
    return {
      name: 'Heliconia o Palma',
      emoji: '🌴',
      description: 'Ideal para jardines exteriores con pleno sol. Crecen vigorosas y dan un toque tropical inigualable.',
      care: 'Riega regularmente, especialmente en verano.',
    };
  }
  if (luz === 'baja' && lugar === 'interior') {
    return {
      name: 'Pothos',
      emoji: '🌿',
      description: 'Una de las plantas de interior más fáciles y bonitas. Crece en agua o tierra y purifica el aire.',
      care: 'Riega cuando la tierra esté seca al tacto.',
    };
  }
  if (mascotas !== 'ninguno') {
    return {
      name: 'Calathea',
      emoji: '🍃',
      description: 'Hermosa, no tóxica para mascotas ni niños. Sus hojas con patrones son un espectáculo visual.',
      care: 'Mantén la tierra húmeda y evita el sol directo.',
    };
  }
  if (presupuesto === 'alto') {
    return {
      name: 'Árbol ornamental o Palma de lujo',
      emoji: '🌳',
      description: 'Con tu presupuesto podemos diseñarte un jardín o espacio completamente personalizado.',
      care: 'Nuestro equipo te asesora personalmente.',
    };
  }
  return {
    name: 'Croton',
    emoji: '🌺',
    description: 'Una planta con colores espectaculares que se adapta a diferentes condiciones. Perfecta para dar vida a cualquier espacio.',
    care: 'Luz indirecta y riego moderado.',
  };
}

export default function PlantTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PlantResult | null>(null);

  function handleAnswer(questionId: string, value: string) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(getResult(newAnswers));
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  return (
    <section id="test" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0a3d2e 0%, #0f6e56 100%)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a8f0c6' }}>
            Test de plantas
          </span>
          <h2 className="text-4xl font-bold mt-3 text-white">
            ¿Cuál es tu planta ideal? 🌱
          </h2>
          <p className="mt-4 text-white/60">
            Responde 5 preguntas y te decimos exactamente qué planta va contigo.
          </p>
        </div>

        <div
          className="rounded-3xl p-8"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)' }}
        >
          {!result ? (
            <>
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, background: '#1db87a' }}
                  />
                </div>
                <span className="text-white/50 text-sm whitespace-nowrap">{step + 1} / {questions.length}</span>
              </div>

              {/* Question */}
              <h3 className="text-white text-xl font-semibold mb-6 text-center">
                {current.question}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(current.id, opt.value)}
                    className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'white',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(29,184,122,0.2)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(29,184,122,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    }}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-white/40 hover:text-white/70 text-sm transition-colors"
                >
                  ← Volver
                </button>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="text-7xl mb-4">{result.emoji}</div>
              <div className="text-white/60 text-sm mb-2 uppercase tracking-wider">Tu planta ideal es</div>
              <h3 className="text-white text-2xl font-bold mb-4">{result.name}</h3>
              <p className="text-white/70 leading-relaxed mb-4">{result.description}</p>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
                style={{ background: 'rgba(29,184,122,0.15)', color: '#a8f0c6', border: '1px solid rgba(29,184,122,0.3)' }}
              >
                <span>💡</span>
                <span>{result.care}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/50769999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105"
                  style={{ background: '#1db87a', boxShadow: '0 4px 20px rgba(29,184,122,0.4)' }}
                >
                  La quiero 🌿
                </a>
                <button
                  onClick={reset}
                  className="px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  Volver a intentar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
