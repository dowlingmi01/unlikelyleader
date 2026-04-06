import type { LapDimensionInterpretationBand, LapDimensionKey } from './types';

/** A-side / B-side labels for dimension interpretation copy (Formula Sheet §11). */
export const LAP_DIMENSION_POLE_LABELS: Record<LapDimensionKey, { poleA: string; poleB: string }> =
  {
    extroverted_introverted: { poleA: 'Extroverted', poleB: 'Introverted' },
    directive_collaborative: { poleA: 'Directive', poleB: 'Collaborative' },
    decisive_reflective: { poleA: 'Decisive', poleB: 'Reflective' },
    confident_humble: { poleA: 'Confident', poleB: 'Humble' },
    certain_curious: { poleA: 'Certain', poleB: 'Curious' },
  };

export function lapDimensionInterpretationBand(
  normalizedScore: number
): LapDimensionInterpretationBand {
  if (normalizedScore <= 24) return 'strongly_a';
  if (normalizedScore <= 39) return 'moderately_a';
  if (normalizedScore <= 60) return 'balanced';
  if (normalizedScore <= 75) return 'moderately_b';
  return 'strongly_b';
}

/** Short phrase for UI, e.g. "Moderately Humble" for confident_humble when B-leaning. */
export function formatLapDimensionInterpretation(
  dimensionKey: LapDimensionKey,
  normalizedScore: number
): string {
  const { poleA, poleB } = LAP_DIMENSION_POLE_LABELS[dimensionKey];
  const band = lapDimensionInterpretationBand(normalizedScore);

  switch (band) {
    case 'strongly_a':
      return `Strongly ${poleA}`;
    case 'moderately_a':
      return `Moderately ${poleA}`;
    case 'balanced':
      return 'Balanced';
    case 'moderately_b':
      return `Moderately ${poleB}`;
    case 'strongly_b':
      return `Strongly ${poleB}`;
    default:
      return 'Balanced';
  }
}
