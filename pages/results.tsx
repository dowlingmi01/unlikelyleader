import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
      const [email, setEmail] = useState('');
      const [submitted, setSubmitted] = useState(false);
      const [archetype, setArchetype] = useState('');
      const [spectrum, setSpectrum] = useState('');
      const [spectrumScore, setSpectrumScore] = useState(0);
      const [modifierScore, setModifierScore] = useState(0);
      const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
      const storedArchetype = localStorage.getItem('dominantArchetype');
      const storedSpectrum = localStorage.getItem('spectrumType');
      const storedSpectrumScore = localStorage.getItem('spectrumScore');
      const storedModifierScore = localStorage.getItem('modifierScore');
      const storedTotalScore = localStorage.getItem('totalScore');

      if (storedArchetype) setArchetype(storedArchetype);
      if (storedSpectrum) setSpectrum(storedSpectrum);
      if (storedSpectrumScore) setSpectrumScore(parseInt(storedSpectrumScore));
      if (storedModifierScore) setModifierScore(parseInt(storedModifierScore));
      if (storedTotalScore) setTotalScore(parseInt(storedTotalScore));

      console.log("Loaded from localStorage:", {
        storedArchetype,
        storedSpectrum,
        storedSpectrumScore,
        storedModifierScore,
        storedTotalScore
      });
    }, []);

    const handleSubmit = async () => {
      if (!email.includes('@')) return alert('Enter a valid email.');

      // Pull fresh values directly from localStorage
      const storedQuizAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '[]');
      const storedArchetype = localStorage.getItem('dominantArchetype') || '';
      const storedSpectrum = localStorage.getItem('spectrumType') || '';
      const storedSpectrumScore = parseInt(localStorage.getItem('spectrumScore') || '0', 10);
      const storedModifierScore = parseInt(localStorage.getItem('modifierScore') || '0', 10);
      const storedTotalScore = parseInt(localStorage.getItem('totalScore') || '0', 10);

      console.log("Submitting values (fresh from localStorage):", {
        email,
        answers: storedQuizAnswers,
        storedArchetype,
        storedSpectrum,
        storedSpectrumScore,
        storedModifierScore,
        storedTotalScore
      });

      const { error } = await supabase.from('unlikely_quiz').insert({
        email,
        answers: storedQuizAnswers,
        dominant_archetype: storedArchetype,
        spectrum_type: storedSpectrum,
        spectrum_score: storedSpectrumScore,
        modifier_score: storedModifierScore,
        total_score: storedTotalScore
      });

      if (error) {
        console.error("Supabase insert error:", error);
        alert('There was an error submitting your results.');
      } else {
        setSubmitted(true);
      }
    };

const handleDownloadPDF = async () => {
  const details = archetypeDescriptions[archetype];

  const res = await fetch('/api/generate-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: email || 'Unlikely Leader',
      archetype,
      description: details?.description || '',
      strengths: details?.strengths || [],
      watchOuts: details?.watchOuts || [],
      actions: details?.actions || [],
      affirmations: details?.affirmations || []
    })
  });

  if (!res.ok) {
    alert('Failed to generate PDF. Please try again.');
    return;
  }

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `UnlikelyLeader_Report_${archetype.replace(/\s+/g, '')}.pdf`;
  link.click();
  window.URL.revokeObjectURL(url);
};

  const details = archetypeDescriptions[archetype];

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">You are a {archetype}</h1>
      <p className="text-center text-gray-700 mb-6">{details?.description}</p>

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

      <div className="text-center mb-4">
        <p className="text-gray-700">Leadership Spectrum: <strong>{spectrum}</strong></p>
        <p className="text-sm text-gray-500">Score: {totalScore} (Quiz: {spectrumScore}, Reflection: {modifierScore})</p>
      </div>

      {!submitted ? (
        <div className="text-center">
          <input
            className="border border-gray-300 rounded px-4 py-2 mr-2 w-64"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded font-semibold"
            onClick={handleSubmit}
          >
            Get My Report
          </button>
        </div>
      ) : (
        <p className="text-green-700 text-center font-semibold">Thanks! Your results have been saved.</p>
      )}
      {submitted && (
      <div className="text-center mt-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold"
        >
          Download My Personalized PDF
        </button>
      </div>
    )}

    </div>
  );
}
