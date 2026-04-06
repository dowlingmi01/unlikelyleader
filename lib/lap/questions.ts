import type { LapDimensionKey } from './types';

export type LapQuestion = {
  lapQuestionNumber: number;
  lapDimensionKey: LapDimensionKey;
  promptA: string;
  promptB: string;
};

/** Canonical LAP question bank (Q1–Q20). */
export const LAP_QUESTIONS: readonly LapQuestion[] = [
  {
    lapQuestionNumber: 1,
    lapDimensionKey: 'extroverted_introverted',
    promptA: 'I tend to think out loud and shape my ideas through conversation.',
    promptB: 'I tend to think things through internally before I speak.',
  },
  {
    lapQuestionNumber: 2,
    lapDimensionKey: 'directive_collaborative',
    promptA:
      'When a team is stuck, I’m usually comfortable stepping in and driving the next move.',
    promptB:
      'When a team is stuck, I’m more likely to ask questions and involve others in finding the next move.',
  },
  {
    lapQuestionNumber: 3,
    lapDimensionKey: 'decisive_reflective',
    promptA: 'I usually feel most effective when I can move quickly and adjust as I go.',
    promptB:
      'I usually feel most effective when I’ve had time to think through the implications before moving.',
  },
  {
    lapQuestionNumber: 4,
    lapDimensionKey: 'confident_humble',
    promptA: 'People often experience me as confident and self-assured.',
    promptB: 'People often experience me as grounded and low-ego.',
  },
  {
    lapQuestionNumber: 5,
    lapDimensionKey: 'extroverted_introverted',
    promptA: 'In group settings, I’m usually comfortable jumping in early.',
    promptB:
      'In group settings, I’m more likely to contribute once I’ve had a chance to observe and process.',
  },
  {
    lapQuestionNumber: 6,
    lapDimensionKey: 'directive_collaborative',
    promptA: 'I’m often the person who helps create clarity and direction.',
    promptB: 'I’m often the person who helps people feel heard and aligned.',
  },
  {
    lapQuestionNumber: 7,
    lapDimensionKey: 'decisive_reflective',
    promptA: 'When I see an opportunity, my instinct is to move on it.',
    promptB: 'When I see an opportunity, my instinct is to explore it from a few angles first.',
  },
  {
    lapQuestionNumber: 8,
    lapDimensionKey: 'certain_curious',
    promptA: 'I’m more comfortable projecting certainty when leading others.',
    promptB: 'I’m more comfortable signaling openness and curiosity when leading others.',
  },
  {
    lapQuestionNumber: 9,
    lapDimensionKey: 'extroverted_introverted',
    promptA: 'When I’m energized and engaged, it tends to show outwardly.',
    promptB:
      'When I’m energized and engaged, it tends to show more through focus than outward expression.',
  },
  {
    lapQuestionNumber: 10,
    lapDimensionKey: 'decisive_reflective',
    promptA:
      'When decisions need to be made, I’d rather make the call and refine later if needed.',
    promptB:
      'When decisions need to be made, I’d rather slow down long enough to improve the quality of the call.',
  },
  {
    lapQuestionNumber: 11,
    lapDimensionKey: 'directive_collaborative',
    promptA: 'I’m usually more comfortable asserting my perspective clearly and directly.',
    promptB:
      'I’m usually more comfortable making space for multiple perspectives before asserting my own.',
  },
  {
    lapQuestionNumber: 12,
    lapDimensionKey: 'confident_humble',
    promptA: 'I naturally project a stronger sense of authority.',
    promptB: 'I naturally lead in a way that feels more understated.',
  },
  {
    lapQuestionNumber: 13,
    lapDimensionKey: 'certain_curious',
    promptA: 'When leading a discussion, I usually help create momentum.',
    promptB: 'When leading a discussion, I usually help create depth.',
  },
  {
    lapQuestionNumber: 14,
    lapDimensionKey: 'certain_curious',
    promptA: 'If something is unclear, I’m often comfortable acting before I have the full picture.',
    promptB: 'If something is unclear, I’m more likely to keep exploring before I commit.',
  },
  {
    lapQuestionNumber: 15,
    lapDimensionKey: 'directive_collaborative',
    promptA: 'I tend to lead best by setting the pace and helping others move.',
    promptB: 'I tend to lead best by drawing out others and helping them contribute.',
  },
  {
    lapQuestionNumber: 16,
    lapDimensionKey: 'decisive_reflective',
    promptA: 'When I’m under pressure, I often become more decisive and direct.',
    promptB: 'When I’m under pressure, I often become more thoughtful and measured.',
  },
  {
    lapQuestionNumber: 17,
    lapDimensionKey: 'confident_humble',
    promptA: 'Others would probably describe me as more bold than modest.',
    promptB: 'Others would probably describe me as more modest than bold.',
  },
  {
    lapQuestionNumber: 18,
    lapDimensionKey: 'confident_humble',
    promptA:
      'I’m comfortable letting people know where I stand, even if it creates tension.',
    promptB: 'I’m more likely to hold my position lightly and stay open to being changed.',
  },
  {
    lapQuestionNumber: 19,
    lapDimensionKey: 'extroverted_introverted',
    promptA: 'In leadership settings, I’m usually more visible by default.',
    promptB:
      'In leadership settings, I’m usually more quiet until there’s something meaningful to add.',
  },
  {
    lapQuestionNumber: 20,
    lapDimensionKey: 'certain_curious',
    promptA: 'I’m most comfortable leading from conviction.',
    promptB: 'I’m most comfortable leading from inquiry.',
  },
];
