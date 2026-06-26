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
    question: '¿Qué tan seguido recuerdas regar?',
    options: [
      { label: 'Todos los días', value: 'frecuente', icon: '💧' },
      { label: 'Cada semana', value: 'moderado', icon: '🚿' },
      { label: 'Me olvido seguido', value: 'poco', icon: '🏜️' },
    ],
  },
  {
    id: 'mascotas',
    question: '¿Tienes mascotas o niños en casa?',
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
      { label: 'Interior', value: 'interior', icon: '🏠' },
      { label: 'Exterior', value: 'exterior', icon: '🏡' },
      { label: 'Ambos', value: 'ambos', icon: '🌐' },
    ],
  },
  {
    id: 'presupuesto',
    question: '¿Cuál es tu presupuesto?',
    options: [
      { label: 'Menos de $20', value: 'bajo', icon: '💵' },
      { label: '$20 – $100', value: 'medio', icon: '💰' },
      { label: 'Más de $100', value: 'alto', icon: '💎' },
    ],
  },
];

interface PlantResult { name: string; emoji: string; description: string; care: string; }

function getResult(answers: Record<string, string>): PlantResult {
  const { luz, riego, mascotas } = answers;
  if (riego === 'poco' && luz === 'baja') return { name: 'Sansevieria', emoji: '🪴', description: 'La reina de las plantas fáciles. Aguanta poca luz y se olvida del agua sin quejarse.', care: 'Riega 1 vez cada 2–3 semanas.' };
  if (riego === 'poco') return { name: 'Cactus o Suculenta', emoji: '🌵', description: 'Perfectas para personas ocupadas. Resistentes, decorativas y casi inmortales.', care: 'Riega solo cuando la tierra esté completamente seca.' };
  if (luz === 'alta') return { name: 'Heliconia o Palma', emoji: '🌴', description: 'Ideal para jardines con pleno sol. Dan un toque tropical inigualable.', care: 'Riega regularmente, especialmente en verano.' };
  if (mascotas !== 'ninguno') return { name: 'Calathea', emoji: '🍃', description: 'Hermosa y segura para mascotas y niños. Sus hojas son un espectáculo visual.', care: 'Mantén la tierra húmeda y evita el sol directo.' };
  return { name: 'Pothos', emoji: '🌿', description: 'Una de las plantas de interior más fáciles y bonitas. Purifica el aire y crece en agua o tierra.', care: 'Riega cuando la tierra esté seca al tacto.' };
}

export default function PlantTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PlantResult | null>(null);

  function handleAnswer(questionId: string, value: string) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) setStep(step + 1);
    else setResult(getResult(newAnswers));
  }

  function reset() { setStep(0); setAnswers({}); setResult(null); }

  const current = questions[step];
  const progress = (step / questions.length) * 100;

  return (
    <section id="test" className="py-28 px-8 md:px-16" style={{ background: '#f7faf8' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1db87a' }}>Test de plantas</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight" style={{ color: '#0d1f17', letterSpacing: '-0.02em' }}>
            ¿Cuál es tu planta ideal?
          </h2>
          <p className="mt-4" style={{ color: '#7a9a8a' }}>5 preguntas y te decimos exactamente qué planta va contigo.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12" style={{ border: '1px solid #eaf2ec', boxShadow: '0 8px 40px rgba(15,110,86,0.07)' }}>
          {!result ? (
            <>
              {/* Progress */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-1.5 rounded-full" style={{ background: '#eaf2ec' }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: '#1db87a' }} />
                </div>
                <span className="text-sm font-medium" style={{ color: '#8aab99' }}>{step + 1}/{questions.length}</span>
              </div>

              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#0d1f17' }}>{current.question}</h3>

              <div className="flex flex-col gap-3">
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(current.id, opt.value)}
                    className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 hover:scale-[1.01] group"
                    style={{ border: '1.5px solid #eaf2ec', background: 'white' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0f6e56'; e.currentTarget.style.background = '#f4faf7'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#eaf2ec'; e.currentTarget.style.background = 'white'; }}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-medium" style={{ color: '#0d1f17' }}>{opt.label}</span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="mt-6 text-sm transition-colors" style={{ color: '#8aab99' }}>
                  ← Volver
                </button>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="text-7xl mb-5">{result.emoji}</div>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#1db87a' }}>Tu planta ideal es</div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#0d1f17' }}>{result.name}</h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#5a7a6a' }}>{result.description}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-10" style={{ background: '#eaf5f0', color: '#0f6e56' }}>
                💡 {result.care}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/50769999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
                  style={{ background: '#0f6e56' }}
                >
                  La quiero 🌿
                </a>
                <button
                  onClick={reset}
                  className="px-7 py-3.5 rounded-full font-medium transition-all hover:scale-105"
                  style={{ border: '1.5px solid #eaf2ec', color: '#3d5a4a' }}
                >
                  Intentar de nuevo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
