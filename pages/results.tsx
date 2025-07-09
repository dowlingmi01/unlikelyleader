// pages/results.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';


const archetypeDescriptions: Record<string, {
  description: string;
  strengths: string[];
  watchOuts: string[];
  actions: string[];
  affirmations: string[];
}> = {
  'Steady Anchor': {
    description: 'Grounded, calming, and emotionally consistent. You create stability for others—even in chaos.',
    strengths: [
      'Emotional steadiness',
      'Trust-building through consistency',
      'Grounded under pressure',
      'Supportive and calming presence'
    ],
    affirmations: [
      'Your calm gives others courage. You don’t need to raise your voice to raise the bar.'
    ]  
  },
  'Insightful Observer': {
    description: 'You lead by seeing what others don’t. With a deep capacity for reflection and perception, you bring nuance, wisdom, and unexpected insight to complex problems or dynamics.',
    strengths: [
      'Perceptive and reflective',
      'Deep listening',
      'Subtle but powerful insights',
      'Ability to spot patterns and blind spots',
      'Wisdom beyond surface-level analysis'
    ],
    affirmations: [
      'Your power isn’t in how often you speak—it’s in how deeply you understand.'
    ]  
  },
  'Relational Bridge': {
    description: 'You blend logic and empathy—serving as the thoughtful connector between strategy and people. You bring clarity to conflict and are often the person who can help others find common ground.',
    strengths: [
      'Balanced, thoughtful decision-making',
      'Bridging opposing views',
      'Clear communicator with depth',
      'Respected for fairness and reason'
    ],
    affirmations: [
      'You don’t need a title to lead. Your care is the catalyst.'
    ]  
  },
  'Quiet Strategist': {
    description: 'You’re focused, composed, and purpose-driven. Your leadership shows up in how you organize complexity, make thoughtful decisions, and move work forward with minimal noise.',
    strengths: [
      'Planning, decision-making, long-term thinking without ego',
      'Vision with precision',
      'Calm execution under pressure',
      'Intentional, long-term orientation'
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
      'Moral clarity',
      'Inspiring without performance'
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
  const [emailAvailable, setEmailAvailable] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmailAvailable(!!storedEmail);

    setArchetype(localStorage.getItem('dominantArchetype') || '');
    setSpectrum(localStorage.getItem('spectrumType') || '');
    setSpectrumScore(parseInt(localStorage.getItem('spectrumScore') || '0', 10));
    setModifierScore(parseInt(localStorage.getItem('modifierScore') || '0', 10));
    setTotalScore(parseInt(localStorage.getItem('totalScore') || '0', 10));
  }, []);
  if (!archetype) {
    return <p className="text-center mt-12">Loading your archetype...</p>;
  }

  const details = archetypeDescriptions[archetype];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* HERO HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1bae67] mb-2">
          Your Archetype: {archetype}
        </h1>
        <p className="text-lg text-gray-700 mb-2">{details?.description}</p>
      </div>

      {!emailAvailable ? (
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Ready to go deeper into your leadership strengths and spectrum?
          </p>
          <Link href="/quiz">
            <a className="bg-[#1bae67] hover:bg-[#0a9c5d] text-white font-semibold px-6 py-3 rounded-lg transition">
              Unlock Full Report
            </a>
          </Link>
        </div>
      ) : (
        <>
          {/* FULL REPORT SECTIONS */}
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

            {details?.affirmations && (
              <div className="bg-[#f0f2eb] rounded-xl shadow-md p-6 border-l-4 border-[#1bae67]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Affirmation</h2>
                <p className="italic text-[#333] text-lg">{details.affirmations[0]}</p>
              </div>
            )}

            <Link href={`/archetypes/${archetype.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="text-[#1bae67] underline cursor-pointer font-semibold">
                Learn more about your Archetype →
              </span>
            </Link>
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
        </>
      )}
    </div>
  )};

