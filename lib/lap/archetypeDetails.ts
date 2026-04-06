import type { LapArchetype } from './types';

export type LapArchetypeDetail = {
  tagline: string;
  overview: string;
  signatureStrengths: string[];
  howYouLead: string;
  watchOuts: string[];
  /** Short line on how primary + secondary interact (shown when both are present). */
  blendHint: string;
};

export const LAP_ARCHETYPE_DETAILS: Record<LapArchetype, LapArchetypeDetail> = {
  Commander: {
    tagline: 'Direction, pace, and clarity—without apology.',
    overview:
      'You lead by taking the wheel when ambiguity is costly. You are energized by momentum, visible ownership, and crisp calls. People experience you as someone who reduces chaos by naming the objective, assigning the path, and driving follow-through. Your presence says: we are moving—and I will not let us drift.',
    signatureStrengths: [
      'Cuts through noise to set direction and expectations',
      'Comfortable owning the room and the decision',
      'Pushes teams past stuck with decisive action',
      'Projects confidence that steadies others in uncertainty',
    ],
    howYouLead:
      'You show up with intent: you speak early, frame the stakes, and translate goals into next steps. You reward execution and clarity, and you are willing to be the person who absorbs discomfort so the team can ship. Your leadership is felt as structure, pace, and accountability.',
    watchOuts: [
      'Moving so fast that quieter voices or dissent are missed',
      'Equating certainty with correctness—closing exploration too soon',
      'Directive energy landing as control when people need co-creation',
      'Underestimating the repair work needed after hard calls',
    ],
    blendHint:
      'Your secondary archetype softens the edges: use it to invite input at the right moments without giving up the clarity only you provide.',
  },
  Trailblazer: {
    tagline: 'Forward motion, curiosity, and visible leadership.',
    overview:
      'You lead by opening new paths—testing ideas, rallying energy, and staying hungry for what is next. You combine decisiveness with exploration: you are willing to act before the map is perfect, and you pull others toward possibility. People feel your optimism and drive; you make progress feel exciting, not reckless.',
    signatureStrengths: [
      'Energizes groups and sparks momentum for new initiatives',
      'Comfortable with risk when the upside matters',
      'Connects vision to action with infectious urgency',
      'Balances conviction with openness to better information',
    ],
    howYouLead:
      'You model initiative: you go first, name the bet, and invite others into the experiment. You use questions to open doors, not to stall. You are at your best when the mission is unclear and someone needs to say, “Let’s try this and learn fast.”',
    watchOuts: [
      'Chasing novelty at the expense of follow-through',
      'Overloading people with parallel experiments',
      'Visibility that crowds out others’ ownership',
      'Impatience with slower, reflective contributors',
    ],
    blendHint:
      'Your secondary archetype can ground your experiments—use it to decide what to sustain once the spark has lit the fire.',
  },
  'Standard-Bearer': {
    tagline: 'Principle-led presence with unmistakable authority.',
    overview:
      'You lead by embodying the standard others are measured against. Integrity, courage, and clarity of conviction show up in how you speak, decide, and show up under pressure. You are not performing leadership—you are modeling it. People look to you when values and performance must align.',
    signatureStrengths: [
      'Holds a visible bar for ethics, quality, and courage',
      'Speaks with moral weight without needing volume',
      'Unifies people around shared principles and expectations',
      'Stays composed when stakes and scrutiny are high',
    ],
    howYouLead:
      'You signal what “good” looks like in real time: you name non-negotiables, model the behavior you expect, and refuse to outsource integrity to policy alone. You make abstract values concrete through choices people can see and follow.',
    watchOuts: [
      'Principled stance reading as rigidity or judgment',
      'Difficulty tolerating messiness that precedes growth',
      'Authority that unintentionally suppresses dissent',
      'Carrying the weight of the standard alone—burnout risk',
    ],
    blendHint:
      'Your secondary archetype adds flexibility: let it help you translate standards into invitations, not only expectations.',
  },
  Catalyst: {
    tagline: 'Connection, energy, and movement through people.',
    overview:
      'You lead by accelerating trust and collaboration. You draw people in, weave perspectives together, and help groups find shared momentum without forcing a single voice to dominate. You are socially and emotionally intelligent in motion—you make participation feel possible and outcomes feel shared.',
    signatureStrengths: [
      'Builds psychological safety and inclusive dialogue',
      'Turns friction into alignment without avoiding hard topics',
      'Sparks participation from people who usually hold back',
      'Balances warmth with enough structure to get somewhere',
    ],
    howYouLead:
      'You work the room with intention: you notice who is quiet, you ask questions that unlock honesty, and you translate different views into a coherent next step. You lead as a host and a partner—someone who makes “we” real, not rhetorical.',
    watchOuts: [
      'Absorbing group tension as your personal job to fix',
      'Avoiding a decisive call when closure is kindness',
      'Over-collaborating when speed or clarity is the real need',
      'Saying yes to keep energy high—then overcommitting',
    ],
    blendHint:
      'Your secondary archetype can sharpen the when and how of closure—use it so your gift for inclusion still produces outcomes.',
  },
  Strategist: {
    tagline: 'Depth, pattern, and patience as a competitive advantage.',
    overview:
      'You lead by seeing further and calibrating better. You prefer reflection to reflex, synthesis to slogans, and you are willing to slow the room down so the decision is right—not just fast. You are energized by complexity and the discipline to think it through.',
    signatureStrengths: [
      'Connects dots across time, data, and human dynamics',
      'Anticipates second- and third-order effects',
      'Brings rigor without theatrics',
      'Creates clarity through frameworks, scenarios, and questions',
    ],
    howYouLead:
      'You intervene with insight: you reframe the problem, surface assumptions, and offer a path that feels inevitable once seen. You lead from the side of the whiteboard as much as the front of the room—your authority is cognitive and earned.',
    watchOuts: [
      'Analysis delay when a good-enough move would unlock progress',
      'Underestimating the emotional need for visible decisiveness',
      'Complexity that overwhelms people seeking simple next steps',
      'Staying in observation when your voice must name the decision',
    ],
    blendHint:
      'Your secondary archetype adds relational or directional heat—use it to time when insight becomes action.',
  },
  Integrator: {
    tagline: 'Bridging worlds—people, ideas, and pace.',
    overview:
      'You lead by weaving what does not naturally connect: functions, personalities, and timelines. You are low-ego, high-attunement, and motivated by coherence. You make systems feel human and make humans work inside systems. People trust you to hold the whole without needing the spotlight.',
    signatureStrengths: [
      'Translates between stakeholders who speak different languages',
      'Reduces silos with patient, persistent connection',
      'Holds space for nuance while moving work forward',
      'Builds trust through reliability and emotional intelligence',
    ],
    howYouLead:
      'You orchestrate: you listen widely, summarize fairly, and propose integrations that honor real constraints. You are the person who turns “both/and” from a slogan into a plan—with owners, timelines, and empathy baked in.',
    watchOuts: [
      'Mediating so long that accountability diffuses',
      'Avoiding conflict that actually needs naming',
      'Taking responsibility for harmony at your own expense',
      'Slowing integration into endless process',
    ],
    blendHint:
      'Your secondary archetype can supply edge: clearer tradeoffs, firmer boundaries, or a bolder push when integration needs a finish line.',
  },
  Anchor: {
    tagline: 'Steadiness, care, and quiet strength others lean on.',
    overview:
      'You lead by stabilizing the human system. When pressure rises, you become more grounded, not more reactive. People experience you as humble, dependable, and emotionally intelligent. You do not need to dominate to matter—you protect trust, dignity, and calm when it matters most.',
    signatureStrengths: [
      'Regulates emotional temperature in tense moments',
      'Creates safety for honesty without performative vulnerability',
      'Shows up consistently—your word is a kind of leadership',
      'Balances humility with quiet moral courage',
    ],
    howYouLead:
      'You lead through presence: you listen before you label, you acknowledge what is unsaid, and you help people find their footing. You often elevate others’ voices while ensuring the room does not spiral. Your influence is cumulative—it compounds because people trust you.',
    watchOuts: [
      'Staying so calm that urgency is under-communicated',
      'Carrying emotional labor without naming limits',
      'Avoiding hard calls that would protect the team long-term',
      'Being underestimated because strength shows up as softness',
    ],
    blendHint:
      'Your secondary archetype can add direction or edge—use it when steadiness needs a sharper point.',
  },
  Guide: {
    tagline: 'Inquiry, humility, and development as leadership.',
    overview:
      'You lead by drawing out insight rather than imposing it. Questions, reflection, and genuine curiosity are your tools. You believe people grow when they feel seen, not steered—and you are willing to hold power lightly to build capability in others. You are especially strong when learning matters as much as performance.',
    signatureStrengths: [
      'Asks questions that shift thinking without shaming',
      'Models humility that makes it safe to not know yet',
      'Develops people through inquiry, feedback, and patience',
      'Balances conviction with openness to being changed',
    ],
    howYouLead:
      'You create developmental space: you slow down to understand, mirror back what you hear, and help others find their own answers—while still offering a point of view when it helps. You lead as a partner in growth, not a hero with answers.',
    watchOuts: [
      'Inquiry read as indecision when people need a clear owner',
      'Avoiding assertiveness when boundaries are required',
      'Over-investing in others’ growth at the cost of your own energy',
      'Letting exploration continue past the moment to decide',
    ],
    blendHint:
      'Your secondary archetype can add structure or pace—use it when inquiry must still produce movement.',
  },
};

export function getLapArchetypeDetail(archetype: LapArchetype): LapArchetypeDetail {
  return LAP_ARCHETYPE_DETAILS[archetype];
}
