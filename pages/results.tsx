// pages/results.tsx
import { useEffect, useState } from 'react';

const archetypeDescriptions: Record<string, {
  description: string;
  strengths: string[];
  watchOuts: string[];
  actions: string[];
  affirmations: string[];
}> = {
  'Steady Anchor': {
    description: 'You are the calm in the storm...',
    strengths: [
      'Emotional steadiness',
      'Trust-building through consistency',
      'Grounded under pressure',
      'Supportive and calming presence'
    ],
    watchOuts: [
      'Withholding input',
      'Staying too silent',
      'Undervaluing your impact'
    ],
    actions: [
      'Speak early in meetings to build presence',
      'Use emotional awareness tools to spot self-silencing',
      'Pair calm with clarity by naming tension and offering a path forward'
    ],
    affirmations: [
      'Your calm gives others courage.'
    ]  
  },
  'Insightful Observer': {
    description: 'You lead by seeing what others don’t. With a deep capacity for reflection and perception, you bring nuance, wisdom, and unexpected insight to complex problems or dynamics.',
    strengths: [
      'Deep listening',
      'Subtle but powerful insights',
      'Ability to spot patterns and blind spots',
      'Wisdom beyond surface-level analysis'
    ],
    watchOuts: [
      'Withholding input',
      'Staying too silent',
      'Undervaluing your impact'
    ],
    actions: [
      'Speak early in meetings to build presence',
      'Use emotional awareness tools to spot self-silencing',
      'Pair calm with clarity by naming tension and offering a path forward'
    ],
    affirmations: [
      'Your power is in how deeply you understand.'
    ]  
  },
  'Rational Bridge': {
    description: 'You blend logic and empathy—serving as the thoughtful connector between strategy and people. You bring clarity to conflict and are often the person who can help others find common ground.',
    strengths: [
      'Balanced, thoughtful decision-making',
      'Bridging opposing views',
      'Clear communicator with depth',
      'Respected for fairness and reason'
    ],
    watchOuts: [
      'Withholding input',
      'Staying too silent',
      'Undervaluing your impact'
    ],
    actions: [
      'Speak early in meetings to build presence',
      'Use emotional awareness tools to spot self-silencing',
      'Pair calm with clarity by naming tension and offering a path forward'
    ],
    affirmations: [
      'You don’t need a title to lead. Your care is the catalyst.'
    ]  
  },
  'Quiet Strategist': {
    description: 'You lead with focus, foresight, and intentionality. Your power lies in seeing the big picture and calmly guiding others toward it, often without the need for attention or fanfare.',
    strengths: [
      'Vision with precision',
      'Tactical thinking without ego',
      'Calm execution under pressure',
      'Intentional, long-term orientation'
    ],
    watchOuts: [
      'Withholding input',
      'Staying too silent',
      'Undervaluing your impact'
    ],
    actions: [
      'Speak early in meetings to build presence',
      'Use emotional awareness tools to spot self-silencing',
      'Pair calm with clarity by naming tension and offering a path forward'
    ],
    affirmations: [
      'You don’t need the spotlight. You set the direction.'
    ]  
  },
  'Humble Fire': {
    description: 'You lead from purpose and principle, fueled by a quiet but unshakable conviction. You don’t seek attention—you seek meaning. Your strength lies in authenticity, courage, and values-driven action.',
    strengths: [
      'Purpose-driven leadership',
      'Courage to act from values',
      'Quiet confidence and heart',
      'Inspiring without performance'
    ],
    watchOuts: [
      'Withholding input',
      'Staying too silent',
      'Undervaluing your impact'
    ],
    actions: [
      'Speak early in meetings to build presence',
      'Use emotional awareness tools to spot self-silencing',
      'Pair calm with clarity by naming tension and offering a path forward'
    ],
    affirmations: [
      'Your quiet conviction is your power.'
    ]
  }
};

export default function ResultsPage() {
  const [archetype, setArchetype] = useState('');
  const [spectrum, setSpectrum] = useState('');
  const [spectrumScore, setSpectrumScore] = useState(0);
  const [modifierScore, setModifierScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setArchetype(localStorage.getItem('dominantArchetype') || '');
    setSpectrum(localStorage.getItem('spectrumType') || '');
    setSpectrumScore(parseInt(localStorage.getItem('spectrumScore') || '0', 10));
    setModifierScore(parseInt(localStorage.getItem('modifierScore') || '0', 10));
    setTotalScore(parseInt(localStorage.getItem('totalScore') || '0', 10));
  }, []);

  const details = archetypeDescriptions[archetype];

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
        You are a {archetype}
      </h1>
      <p className="text-center text-gray-700 mb-6">{details?.description}</p>

      <div className="text-center mb-4">
        <p className="text-gray-700">
          Leadership Spectrum: <strong>{spectrum}</strong>
        </p>
        <p className="text-sm text-gray-500">
          Score: {totalScore} (Quiz: {spectrumScore}, Reflection: {modifierScore})
        </p>
      </div>

      {details?.strengths && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Strengths</h2>
          <ul className="list-disc list-inside text-gray-600">
            {details.strengths.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      {details?.watchOuts && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Watch-Outs</h2>
          <ul className="list-disc list-inside text-gray-600">
            {details.watchOuts.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      {details?.actions && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Actions to Take</h2>
          <ul className="list-disc list-inside text-gray-600">
            {details.actions.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      {details?.affirmations && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Affirmation</h2>
          <p className="italic text-gray-700">{details.affirmations[0]}</p>
        </div>
      )}
    </div>
  );
}

