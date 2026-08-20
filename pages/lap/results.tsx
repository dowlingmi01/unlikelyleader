import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';
import {
  formatLapDimensionInterpretation,
  getLapArchetypeDetail,
  LAP_DIMENSION_POLE_LABELS,
  LAP_RESULTS_SNAPSHOT_KEY,
  parseLapScoresSnapshot,
} from '../../lib/lap';
import type { LapArchetype, LapDimensionKey, LapScoresResult } from '../../lib/lap';

const RESULTS_SEO = (
  <Seo
    title="Your LAP Results | Unlikely Leader"
    description="Your Leadership Archetype Profile — primary and secondary archetypes in detail."
    path="/lap/results"
    noindex
  />
);

const LAP_DIMENSION_ORDER: LapDimensionKey[] = [
  'extroverted_introverted',
  'directive_collaborative',
  'decisive_reflective',
  'confident_humble',
  'certain_curious',
];

function ArchetypeSection({
  role,
  archetype,
  scores,
}: {
  role: 'Primary' | 'Secondary';
  archetype: LapArchetype;
  scores: LapScoresResult;
}) {
  const d = getLapArchetypeDetail(archetype);
  const fit = scores.lapArchetypeScores[archetype];
  const ranked = Object.entries(scores.lapArchetypeScores).sort((a, b) => b[1] - a[1]);
  const rank = ranked.findIndex(([k]) => k === archetype) + 1;

  return (
    <section
      className={`rounded-2xl border p-6 md:p-8 mb-8 ${
        role === 'Primary'
          ? 'border-[#1bae67]/40 bg-gradient-to-b from-[#1bae67]/[0.07] to-white'
          : 'border-gray-200 bg-white'
      }`}
      aria-labelledby={`lap-${role.toLowerCase()}-heading`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1bae67]">{role}</p>
        <p className="text-sm text-gray-500 tabular-nums">
          Fit score {Math.round(fit)} · Rank {rank} of 8
        </p>
      </div>
      <h2
        id={`lap-${role.toLowerCase()}-heading`}
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
      >
        {archetype}
      </h2>
      <p className="text-lg text-[#1bae67] font-medium mb-4">{d.tagline}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{d.overview}</p>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
        Signature strengths
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        {d.signatureStrengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
        How you tend to lead
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">{d.howYouLead}</p>

      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
        Watch-outs
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-2">
        {d.watchOuts.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </section>
  );
}

function AllArchetypeScores({ scores }: { scores: LapScoresResult }) {
  const entries = (Object.entries(scores.lapArchetypeScores) as [LapArchetype, number][]).sort(
    (a, b) => b[1] - a[1]
  );
  const max = Math.max(...entries.map(([, v]) => v), 1);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Fit across all eight archetypes</h2>
      <p className="text-sm text-gray-600 mb-6">
        Higher scores indicate stronger alignment with each profile. Use this to notice adjacent
        styles that may also describe you.
      </p>
      <ul className="space-y-4">
        {entries.map(([name, value]) => {
          const pct = Math.max(0, Math.min(100, (value / max) * 100));
          const isTop = name === scores.primaryLapArchetype || name === scores.secondaryLapArchetype;
          return (
            <li key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className={isTop ? 'font-semibold text-gray-900' : 'text-gray-700'}>
                  {name}
                  {name === scores.primaryLapArchetype && (
                    <span className="ml-2 text-xs font-normal text-[#1bae67]">primary</span>
                  )}
                  {name === scores.secondaryLapArchetype &&
                    name !== scores.primaryLapArchetype && (
                      <span className="ml-2 text-xs font-normal text-[#1bae67]">secondary</span>
                    )}
                </span>
                <span className="tabular-nums text-gray-500">{Math.round(value)}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    isTop ? 'bg-[#1bae67]' : 'bg-gray-400'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function LapResultsPage() {
  const [scores, setScores] = useState<LapScoresResult | null | undefined>(undefined);

  useEffect(() => {
    const raw =
      typeof window !== 'undefined' ? localStorage.getItem(LAP_RESULTS_SNAPSHOT_KEY) : null;
    setScores(parseLapScoresSnapshot(raw));
  }, []);

  if (scores === undefined) {
    return (
      <>
        {RESULTS_SEO}
        <Navbar />
        <main className="min-h-[50vh] flex items-center justify-center px-4">
          <p className="text-gray-600">Loading your profile…</p>
        </main>
        <Footer />
      </>
    );
  }

  if (scores === null) {
    return (
      <>
        {RESULTS_SEO}
        <Navbar />
        <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">No saved profile</h1>
          <p className="text-gray-600 mb-8">
            Take the Leadership Archetype Profile first—we&apos;ll save your results here so you can
            revisit them.
          </p>
          <Link
            href="/lap"
            className="inline-block bg-[#1bae67] hover:bg-[#15995a] text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Start the assessment
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const primaryDetail = getLapArchetypeDetail(scores.primaryLapArchetype);
  const secondaryDetail = getLapArchetypeDetail(scores.secondaryLapArchetype);

  return (
    <>
      {RESULTS_SEO}
      <Navbar />

      <main className="min-h-screen bg-[#fafafa] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-sm font-semibold text-[#1bae67] uppercase tracking-wide mb-2">
              Leadership Archetype Profile
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Your results</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Below is a deeper look at your <strong>primary</strong> and <strong>secondary</strong>{' '}
              archetypes—how you show up, what you do best, and what to watch for.
            </p>
            {scores.lapResultType === 'blended' && (
              <p className="mt-4 text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 inline-block">
                Your top two scores are very close—treat both profiles as equally informative.
              </p>
            )}
          </header>

          <ArchetypeSection role="Primary" archetype={scores.primaryLapArchetype} scores={scores} />

          <div className="rounded-xl border border-dashed border-[#1bae67]/30 bg-[#1bae67]/[0.04] px-4 py-4 mb-8 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-3">How your primary and secondary work together</p>
            <ul className="list-none space-y-2 mb-3">
              <li>
                <strong className="text-gray-900">{scores.primaryLapArchetype}:</strong>{' '}
                {primaryDetail.tagline}
              </li>
              <li>
                <strong className="text-gray-900">{scores.secondaryLapArchetype}:</strong>{' '}
                {secondaryDetail.tagline}
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">{primaryDetail.blendHint}</p>
          </div>

          <ArchetypeSection
            role="Secondary"
            archetype={scores.secondaryLapArchetype}
            scores={scores}
          />

          <h2 className="text-xl font-bold text-gray-900 mb-4">Dimension snapshot</h2>
          <p className="text-sm text-gray-600 mb-4">
            0 = full A-side, 50 = balanced, 100 = full B-side.
          </p>
          <ul className="space-y-3 mb-10">
            {LAP_DIMENSION_ORDER.map((dim) => {
              const n = scores.lapNormalizedDimensionScores[dim];
              const poles = LAP_DIMENSION_POLE_LABELS[dim];
              return (
                <li
                  key={dim}
                  className="flex flex-wrap justify-between gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3"
                >
                  <div>
                    <span className="font-medium text-gray-800">
                      {poles.poleA} / {poles.poleB}
                    </span>
                    <p className="text-sm text-gray-600">{formatLapDimensionInterpretation(dim, n)}</p>
                  </div>
                  <span className="text-[#1bae67] font-semibold tabular-nums">{n.toFixed(1)}</span>
                </li>
              );
            })}
          </ul>

          <AllArchetypeScores scores={scores} />

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center pb-8">
            <Link
              href="/lap"
              className="text-[#1bae67] font-semibold underline underline-offset-2"
            >
              Retake the assessment
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-[#1bae67] hover:bg-[#15995a] text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Connect with Michael
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
