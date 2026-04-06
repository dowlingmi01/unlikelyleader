import type { LapScoresResult } from './types';
import { LAP_ARCHETYPES } from './types';

function isLapArchetype(s: string): s is LapScoresResult['primaryLapArchetype'] {
  return (LAP_ARCHETYPES as readonly string[]).includes(s);
}

/** Parses and validates client-stored JSON from `LAP_RESULTS_SNAPSHOT_KEY`. */
export function parseLapScoresSnapshot(raw: string | null): LapScoresResult | null {
  if (raw == null || raw === '') return null;
  try {
    const o = JSON.parse(raw) as Partial<LapScoresResult>;
    if (
      !o ||
      typeof o.primaryLapArchetype !== 'string' ||
      typeof o.secondaryLapArchetype !== 'string' ||
      !isLapArchetype(o.primaryLapArchetype) ||
      !isLapArchetype(o.secondaryLapArchetype) ||
      !o.lapNormalizedDimensionScores ||
      !o.lapArchetypeScores
    ) {
      return null;
    }
    return o as LapScoresResult;
  } catch {
    return null;
  }
}
