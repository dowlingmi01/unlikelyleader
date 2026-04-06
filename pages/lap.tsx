import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  calculateLapScores,
  formatLapDimensionInterpretation,
  LAP_DIMENSION_POLE_LABELS,
  LAP_QUESTIONS,
  LAP_QUESTION_COUNT,
} from '../lib/lap';
import type { LapDimensionKey, LapResponseValue, LapScoresResult } from '../lib/lap';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const LAP_DIMENSION_ORDER: LapDimensionKey[] = [
  'extroverted_introverted',
  'directive_collaborative',
  'decisive_reflective',
  'confident_humble',
  'certain_curious',
];

const LAP_SCALE_OPTIONS: { value: LapResponseValue; label: string }[] = [
  { value: -2, label: 'Strongly A' },
  { value: -1, label: 'Slightly A' },
  { value: 0, label: 'Both / It depends' },
  { value: 1, label: 'Slightly B' },
  { value: 2, label: 'Strongly B' },
];

function isCompleteResponses(
  answers: (LapResponseValue | null)[]
): answers is LapResponseValue[] {
  return answers.every((a) => a !== null);
}

export default function LapPage() {
  const [answers, setAnswers] = useState<(LapResponseValue | null)[]>(() =>
    Array.from({ length: LAP_QUESTION_COUNT }, () => null)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState<'quiz' | 'summary' | 'email' | 'done'>('quiz');
  const [lapScores, setLapScores] = useState<LapScoresResult | null>(null);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const q = LAP_QUESTIONS[currentIndex];

  const handleSelect = (val: LapResponseValue) => {
    const next = [...answers];
    next[currentIndex] = val;
    setAnswers(next);
  };

  const goNext = () => {
    if (answers[currentIndex] === null) {
      alert('Please select a response before continuing.');
      return;
    }
    if (currentIndex >= LAP_QUESTION_COUNT - 1) {
      if (!isCompleteResponses(answers)) return;
      setLapScores(calculateLapScores(answers));
      setStep('summary');
      return;
    }
    setCurrentIndex((i) => i + 1);
  };

  const goBack = () => {
    if (step === 'email') {
      setStep('summary');
    } else if (step === 'summary') {
      setStep('quiz');
      setCurrentIndex(LAP_QUESTION_COUNT - 1);
    } else if (step === 'quiz' && currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleEmailSubmit = async () => {
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!lapScores || !isCompleteResponses(answers)) return;

    setSubmitting(true);
    try {
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lap',
          name: 'Anonymous',
          email,
          result: `${lapScores.primaryLapArchetype} (secondary: ${lapScores.secondaryLapArchetype}) — ${lapScores.lapResultType}`,
        }),
      });

      const { error } = await supabase.from('lap_results').insert({
        email,
        lap_responses: answers,
        primary_lap_archetype: lapScores.primaryLapArchetype,
        secondary_lap_archetype: lapScores.secondaryLapArchetype,
        lap_result_type: lapScores.lapResultType,
        lap_blend_gap: lapScores.blendGap,
        lap_blend_percent: lapScores.blendPercent,
        lap_dimension_raw_scores: lapScores.lapDimensionRawScores,
        lap_normalized_dimension_scores: lapScores.lapNormalizedDimensionScores,
        lap_trait_side_values: lapScores.lapTraitSideValues,
        lap_archetype_scores: lapScores.lapArchetypeScores,
      });

      if (error) throw error;

      localStorage.setItem('lap_email', email);
      localStorage.setItem('lap_results_snapshot', JSON.stringify(lapScores));

      setStep('done');
    } catch (e) {
      console.error(e);
      alert('There was a problem saving your results. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const progress = ((currentIndex + 1) / LAP_QUESTION_COUNT) * 100;

  return (
    <>
      <Head>
        <title>Leadership Archetype Profile | Unlikely Leader</title>
        <meta
          name="description"
          content="Twenty questions. Five dimensions. Your leadership archetype profile."
        />
      </Head>
      <Navbar />

      <main className="min-h-screen bg-[#fafafa] py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {step === 'quiz' && (
            <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Leadership Archetype Profile</p>
              <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                <span>
                  Question {currentIndex + 1} of {LAP_QUESTION_COUNT}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                  className="bg-[#1bae67] h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Question {q.lapQuestionNumber}
              </h1>

              <div className="space-y-4 mb-8 text-gray-800">
                <div className="rounded-lg bg-[#f0f7f4] border border-[#1bae67]/20 p-4">
                  <p className="text-xs font-semibold text-[#1bae67] uppercase tracking-wide mb-1">
                    A
                  </p>
                  <p>{q.promptA}</p>
                </div>
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    B
                  </p>
                  <p>{q.promptB}</p>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-700 mb-3">
                Where do you fall between A and B?
              </p>
              <div className="flex flex-col gap-2">
                {LAP_SCALE_OPTIONS.map(({ value, label }) => (
                  <label
                    key={value}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                      answers[currentIndex] === value
                        ? 'border-[#1bae67] bg-[#1bae67]/5 ring-1 ring-[#1bae67]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`lap-q-${currentIndex}`}
                      className="text-[#1bae67] focus:ring-[#1bae67]"
                      checked={answers[currentIndex] === value}
                      onChange={() => handleSelect(value)}
                    />
                    <span className="text-gray-800">{label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={currentIndex === 0}
                  className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="bg-[#1bae67] hover:bg-[#15995a] text-white font-semibold px-6 py-2.5 rounded-lg transition"
                >
                  {currentIndex === LAP_QUESTION_COUNT - 1 ? 'See my profile' : 'Next'}
                </button>
              </div>
            </div>
          )}

          {step === 'summary' && lapScores && (
            <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-100">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1bae67] text-center mb-2">
                Your Leadership Archetype Profile
              </h1>
              <p className="text-center text-gray-600 mb-8">
                Primary: <strong>{lapScores.primaryLapArchetype}</strong>
                {' · '}
                Secondary: <strong>{lapScores.secondaryLapArchetype}</strong>
              </p>

              {lapScores.lapResultType === 'blended' && (
                <p className="text-center text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mb-8">
                  Your top two archetypes are very close—read both as part of your profile.
                </p>
              )}

              <h2 className="text-lg font-semibold text-gray-900 mb-4">Dimension scores</h2>
              <p className="text-sm text-gray-500 mb-4">
                Scores run from 0 (A-side) to 100 (B-side). 50 is balanced.
              </p>
              <ul className="space-y-4 mb-10">
                {LAP_DIMENSION_ORDER.map((dim) => {
                  const n = lapScores.lapNormalizedDimensionScores[dim];
                  const poles = LAP_DIMENSION_POLE_LABELS[dim];
                  return (
                    <li
                      key={dim}
                      className="border border-gray-100 rounded-lg p-4 bg-[#fafafa]"
                    >
                      <div className="flex justify-between items-baseline gap-2 mb-1">
                        <span className="font-medium text-gray-800">
                          {poles.poleA} / {poles.poleB}
                        </span>
                        <span className="text-[#1bae67] font-semibold tabular-nums">
                          {n.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {formatLapDimensionInterpretation(dim, n)}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Save your results and get a copy on file—we&apos;ll follow up with resources
                  that fit your profile.
                </p>
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="bg-[#1bae67] hover:bg-[#15995a] text-white font-semibold px-8 py-3 rounded-lg transition"
                >
                  Email my results
                </button>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={goBack}
                    className="text-gray-500 text-sm underline"
                  >
                    Back to questions
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 'email' && lapScores && (
            <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-100 text-center">
              <h1 className="text-xl font-bold text-gray-900 mb-4">Save your profile</h1>
              <p className="text-gray-700 mb-6">
                Enter your email to store your Leadership Archetype Profile results.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 px-4 py-3 rounded-lg w-full max-w-sm mb-6 text-center"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={submitting}
                  className="bg-[#1bae67] hover:bg-[#15995a] text-white font-semibold px-6 py-2.5 rounded-lg disabled:opacity-60"
                >
                  {submitting ? 'Saving…' : 'Submit'}
                </button>
              </div>
            </div>
          )}

          {step === 'done' && lapScores && (
            <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-100 text-center">
              <h1 className="text-2xl font-bold text-[#1bae67] mb-2">Thank you</h1>
              <p className="text-gray-700 mb-6">
                Your Leadership Archetype Profile has been saved. Primary:{' '}
                <strong>{lapScores.primaryLapArchetype}</strong>, secondary:{' '}
                <strong>{lapScores.secondaryLapArchetype}</strong>.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#1bae67] hover:bg-[#15995a] text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Connect with Michael
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
