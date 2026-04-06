-- Leadership Archetype Profile (LAP) — separate from legacy unlikely_quiz.
-- Apply in Supabase SQL Editor or via Supabase CLI: supabase db push

CREATE TABLE IF NOT EXISTS public.lap_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lap_question_number smallint NOT NULL UNIQUE,
  lap_dimension_key text NOT NULL,
  prompt_a text NOT NULL,
  prompt_b text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT lap_questions_number_range CHECK (
    lap_question_number >= 1
    AND lap_question_number <= 20
  )
);

CREATE TABLE IF NOT EXISTS public.lap_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  email text,
  lap_responses jsonb NOT NULL,
  primary_lap_archetype text NOT NULL,
  secondary_lap_archetype text NOT NULL,
  lap_result_type text NOT NULL,
  lap_blend_gap double precision,
  lap_blend_percent double precision,
  lap_dimension_raw_scores jsonb,
  lap_normalized_dimension_scores jsonb NOT NULL,
  lap_trait_side_values jsonb,
  lap_archetype_scores jsonb NOT NULL,
  CONSTRAINT lap_results_type_check CHECK (
    lap_result_type IN ('dominant', 'blended')
  )
);

CREATE INDEX IF NOT EXISTS lap_results_created_at_idx ON public.lap_results (created_at DESC);

COMMENT ON TABLE public.lap_questions IS 'LAP assessment question catalog (Q1–Q20); mirrors lib/lap/questions.ts';
COMMENT ON TABLE public.lap_results IS 'LAP submissions; separate from legacy quiz tables';

ALTER TABLE public.lap_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lap_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read lap_questions"
  ON public.lap_questions
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert lap_results"
  ON public.lap_results
  FOR INSERT
  WITH CHECK (true);

-- Seed questions (must match lib/lap/questions.ts)
INSERT INTO public.lap_questions (lap_question_number, lap_dimension_key, prompt_a, prompt_b)
VALUES
  (1, 'extroverted_introverted', 'I tend to think out loud and shape my ideas through conversation.', 'I tend to think things through internally before I speak.'),
  (2, 'directive_collaborative', 'When a team is stuck, I’m usually comfortable stepping in and driving the next move.', 'When a team is stuck, I’m more likely to ask questions and involve others in finding the next move.'),
  (3, 'decisive_reflective', 'I usually feel most effective when I can move quickly and adjust as I go.', 'I usually feel most effective when I’ve had time to think through the implications before moving.'),
  (4, 'confident_humble', 'People often experience me as confident and self-assured.', 'People often experience me as grounded and low-ego.'),
  (5, 'extroverted_introverted', 'In group settings, I’m usually comfortable jumping in early.', 'In group settings, I’m more likely to contribute once I’ve had a chance to observe and process.'),
  (6, 'directive_collaborative', 'I’m often the person who helps create clarity and direction.', 'I’m often the person who helps people feel heard and aligned.'),
  (7, 'decisive_reflective', 'When I see an opportunity, my instinct is to move on it.', 'When I see an opportunity, my instinct is to explore it from a few angles first.'),
  (8, 'certain_curious', 'I’m more comfortable projecting certainty when leading others.', 'I’m more comfortable signaling openness and curiosity when leading others.'),
  (9, 'extroverted_introverted', 'When I’m energized and engaged, it tends to show outwardly.', 'When I’m energized and engaged, it tends to show more through focus than outward expression.'),
  (10, 'decisive_reflective', 'When decisions need to be made, I’d rather make the call and refine later if needed.', 'When decisions need to be made, I’d rather slow down long enough to improve the quality of the call.'),
  (11, 'directive_collaborative', 'I’m usually more comfortable asserting my perspective clearly and directly.', 'I’m usually more comfortable making space for multiple perspectives before asserting my own.'),
  (12, 'confident_humble', 'I naturally project a stronger sense of authority.', 'I naturally lead in a way that feels more understated.'),
  (13, 'certain_curious', 'When leading a discussion, I usually help create momentum.', 'When leading a discussion, I usually help create depth.'),
  (14, 'certain_curious', 'If something is unclear, I’m often comfortable acting before I have the full picture.', 'If something is unclear, I’m more likely to keep exploring before I commit.'),
  (15, 'directive_collaborative', 'I tend to lead best by setting the pace and helping others move.', 'I tend to lead best by drawing out others and helping them contribute.'),
  (16, 'decisive_reflective', 'When I’m under pressure, I often become more decisive and direct.', 'When I’m under pressure, I often become more thoughtful and measured.'),
  (17, 'confident_humble', 'Others would probably describe me as more bold than modest.', 'Others would probably describe me as more modest than bold.'),
  (18, 'confident_humble', 'I’m comfortable letting people know where I stand, even if it creates tension.', 'I’m more likely to hold my position lightly and stay open to being changed.'),
  (19, 'extroverted_introverted', 'In leadership settings, I’m usually more visible by default.', 'In leadership settings, I’m usually more quiet until there’s something meaningful to add.'),
  (20, 'certain_curious', 'I’m most comfortable leading from conviction.', 'I’m most comfortable leading from inquiry.')
ON CONFLICT (lap_question_number) DO NOTHING;
