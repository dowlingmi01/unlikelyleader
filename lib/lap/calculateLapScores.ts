import { LAP_ARCHETYPE_WEIGHT_MATRIX } from './archetypeWeights';
import { LAP_QUESTIONS } from './questions';
import type {
  LapArchetype,
  LapDimensionKey,
  LapResponseValue,
  LapScoresResult,
  LapTraitKey,
} from './types';
import { LAP_ARCHETYPES, LAP_QUESTION_COUNT } from './types';

const DIMENSION_KEYS: LapDimensionKey[] = [
  'extroverted_introverted',
  'directive_collaborative',
  'decisive_reflective',
  'confident_humble',
  'certain_curious',
];

const TRAIT_PAIRS: { dimension: LapDimensionKey; a: LapTraitKey; b: LapTraitKey }[] = [
  { dimension: 'extroverted_introverted', a: 'extroverted', b: 'introverted' },
  { dimension: 'directive_collaborative', a: 'directive', b: 'collaborative' },
  { dimension: 'decisive_reflective', a: 'decisive', b: 'reflective' },
  { dimension: 'confident_humble', a: 'confident', b: 'humble' },
  { dimension: 'certain_curious', a: 'certain', b: 'curious' },
];

function assertValidResponses(responses: readonly LapResponseValue[]): void {
  if (responses.length !== LAP_QUESTION_COUNT) {
    throw new Error(
      `LAP requires exactly ${LAP_QUESTION_COUNT} responses; got ${responses.length}`
    );
  }
  for (let i = 0; i < responses.length; i++) {
    const v = responses[i];
    if (![-2, -1, 0, 1, 2].includes(v)) {
      throw new Error(`Invalid LAP response at index ${i}: ${v}`);
    }
  }
}

/** Raw sum per dimension (−8…+8 for four items at −2…+2). */
function computeLapDimensionRawScores(responses: readonly LapResponseValue[]): Record<
  LapDimensionKey,
  number
> {
  const sums: Record<LapDimensionKey, number> = {
    extroverted_introverted: 0,
    directive_collaborative: 0,
    decisive_reflective: 0,
    confident_humble: 0,
    certain_curious: 0,
  };

  for (let i = 0; i < LAP_QUESTION_COUNT; i++) {
    const q = LAP_QUESTIONS[i];
    if (q.lapQuestionNumber !== i + 1) {
      throw new Error('LAP_QUESTIONS order must match Q1…Q20');
    }
    sums[q.lapDimensionKey] += responses[i];
  }

  return sums;
}

/** 0 = full A-side, 50 = balanced, 100 = full B-side */
function lapNormalizeRaw(raw: number): number {
  return ((raw + 8) / 16) * 100;
}

function computeLapTraitSideValues(
  normalized: Record<LapDimensionKey, number>
): Record<LapTraitKey, number> {
  const traits = {} as Record<LapTraitKey, number>;
  for (const { dimension, a, b } of TRAIT_PAIRS) {
    const n = normalized[dimension];
    traits[a] = 100 - n;
    traits[b] = n;
  }
  return traits;
}

function lapArchetypeScoresFromTraits(
  traits: Record<LapTraitKey, number>
): Record<LapArchetype, number> {
  const out = {} as Record<LapArchetype, number>;
  for (const arch of LAP_ARCHETYPES) {
    const weights = LAP_ARCHETYPE_WEIGHT_MATRIX[arch];
    let score = 0;
    for (const key of Object.keys(weights) as LapTraitKey[]) {
      score += traits[key] * weights[key];
    }
    out[arch] = score;
  }
  return out;
}

const BLEND_THRESHOLD = 0.05;

/**
 * Computes full LAP results from 20 bipolar responses (−2…+2).
 * Independent from the legacy `/quiz` pipeline.
 */
export function calculateLapScores(responses: readonly LapResponseValue[]): LapScoresResult {
  assertValidResponses(responses);

  const lapDimensionRawScores = computeLapDimensionRawScores(responses);

  const lapNormalizedDimensionScores = {} as Record<LapDimensionKey, number>;
  for (const key of DIMENSION_KEYS) {
    lapNormalizedDimensionScores[key] = lapNormalizeRaw(lapDimensionRawScores[key]);
  }

  const lapTraitSideValues = computeLapTraitSideValues(lapNormalizedDimensionScores);
  const lapArchetypeScores = lapArchetypeScoresFromTraits(lapTraitSideValues);

  const ranked = (Object.entries(lapArchetypeScores) as [LapArchetype, number][])
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    });

  const primaryLapArchetype = ranked[0][0];
  const secondaryLapArchetype = ranked[1][0];
  const primaryScore = ranked[0][1];
  const secondaryScore = ranked[1][1];

  const blendGap = primaryScore - secondaryScore;
  const blendPercent =
    primaryScore === 0 ? null : blendGap / Math.abs(primaryScore);

  const lapResultType =
    blendPercent !== null && blendPercent <= BLEND_THRESHOLD ? 'blended' : 'dominant';

  return {
    lapDimensionRawScores,
    lapNormalizedDimensionScores,
    lapTraitSideValues,
    lapArchetypeScores,
    primaryLapArchetype,
    secondaryLapArchetype,
    lapResultType,
    blendGap,
    blendPercent,
  };
}
