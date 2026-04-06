/** Bipolar response scale: Strongly A (−2) through Strongly B (+2). */
export type LapResponseValue = -2 | -1 | 0 | 1 | 2;

export const LAP_QUESTION_COUNT = 20;

/** Internal keys for the five bipolar dimensions (B-side = higher normalized score). */
export type LapDimensionKey =
  | 'extroverted_introverted'
  | 'directive_collaborative'
  | 'decisive_reflective'
  | 'confident_humble'
  | 'certain_curious';

/** Ten trait-side labels used in the archetype weight matrix. */
export type LapTraitKey =
  | 'extroverted'
  | 'introverted'
  | 'directive'
  | 'collaborative'
  | 'decisive'
  | 'reflective'
  | 'confident'
  | 'humble'
  | 'certain'
  | 'curious';

/** Eight Leadership Archetype Profile outcomes. */
export type LapArchetype =
  | 'Commander'
  | 'Trailblazer'
  | 'Standard-Bearer'
  | 'Catalyst'
  | 'Strategist'
  | 'Integrator'
  | 'Anchor'
  | 'Guide';

export const LAP_ARCHETYPES: readonly LapArchetype[] = [
  'Commander',
  'Trailblazer',
  'Standard-Bearer',
  'Catalyst',
  'Strategist',
  'Integrator',
  'Anchor',
  'Guide',
] as const;

export type LapResultType = 'dominant' | 'blended';

export type LapDimensionInterpretationBand =
  | 'strongly_a'
  | 'moderately_a'
  | 'balanced'
  | 'moderately_b'
  | 'strongly_b';

export type LapScoresResult = {
  lapDimensionRawScores: Record<LapDimensionKey, number>;
  /** 0 = full A-side, 50 = balanced, 100 = full B-side */
  lapNormalizedDimensionScores: Record<LapDimensionKey, number>;
  lapTraitSideValues: Record<LapTraitKey, number>;
  lapArchetypeScores: Record<LapArchetype, number>;
  primaryLapArchetype: LapArchetype;
  secondaryLapArchetype: LapArchetype;
  lapResultType: LapResultType;
  blendGap: number;
  /** null when primary score is 0 (avoid divide-by-zero) */
  blendPercent: number | null;
};
