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
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* HERO HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1bae67] mb-2">
          Your Archetype: {archetype}
        </h1>
        <p className="text-lg text-gray-700 mb-2">{details?.description}</p>
{/*        <p className="text-sm text-gray-500">
          <strong>Leadership Spectrum:</strong> {spectrum} • Score: {totalScore} (Quiz: {spectrumScore}, Reflection: {modifierScore})
        </p>
*/}      </div>

      {/* STYLED INFO CARDS */}
      <div className="grid gap-6">
        {details?.strengths && (
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Strengths</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {details.strengths.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {details?.watchOuts && (
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Watch-Outs</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {details.watchOuts.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {details?.actions && (
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Actions to Take</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {details.actions.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {details?.affirmations && (
          <div className="bg-[#f0f2eb] rounded-xl shadow-md p-6 border-l-4 border-[#1bae67]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Affirmation</h2>
            <p className="italic text-[#333] text-lg">{details.affirmations[0]}</p>
          </div>
        )}
      </div>

      {/* OPTIONAL CTA */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">
          Want to go deeper with your leadership journey? Let's design something together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#1bae67] hover:bg-[#0a9c5d] text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Connect With Me
        </a>
      </div>
    </div>
  );
}
