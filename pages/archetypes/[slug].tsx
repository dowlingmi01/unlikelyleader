// pages/archetypes/[slug].tsx
import { useRouter } from 'next/router';

const archetypeContent: Record<string, {
  name: string;
  description: string;
  videoUrl?: string;
  strengths?: string[];
  watchOuts: string[];
  actions?: string[];
  tips?: string[];
  quote?: string;
}> = {
  'steady-anchor': {
    name: 'Steady Anchor',
    description: 'You bring a quiet steadiness to every space you enter. In moments of chaos or uncertainty, people naturally turn to you—not because you’re the loudest, but because you help others feel safe, grounded, and steady. Your presence alone builds trust. While others may scramble to be heard, your strength lies in listening, staying composed, and creating emotional stability for those around you.',
    videoUrl: 'https://www.youtube.com/embed/qMG1BXo8Asg?si=O8ofq4nz6GGtqdNx',
    strengths: [
      'Emotional regulation.',
      'Reliability and consistency',
      'Grounded presence under pressure',
      'Trust-building through actions, not noise.'
    ],
    watchOuts: [
      'Withholding input when your voice is needed',
      'Staying silent in moments that call for courage',
      'Undervaluing the steady influence your bring'
    ],
    actions: [
      'Speak early in meetings to signal your presence and build confidence in your contributions.',
      'Use emotional awareness tools (like journaling or stress-mapping) to track when your silence comes from wisdom-and when it comes from self-doubt',
      'Pair your calm with clarity by explicitly naming what others are feeling and offering a steady next step.'
    ],
    tips: [
      'Schedule regular check-ins with yourself to reflect on how your calm presence is impacting the team—positively and where you might be too reserved.',
      'Practice assertive communication by preparing a few key phrases you can use to share your ideas with confidence.',
      'When emotions run high in a group, don’t just absorb—name the emotion or ask a clarifying question to create space for resolution.',
      'Find a trusted peer or mentor to practice expressing opinions, even (especially) when you’re unsure how they will land.',
      'Remember: Consistency is your superpower—but clarity makes that consistency meaningful to others.'
    ],
    quote: 'Your calm gives others courage.'  
  },
  'insightful-observer': {
    name: 'Insightful Observer',
    description: 'You lead through perception, not performance. Highly attuned to nuance and unspoken dynamics, you have a natural ability to read situations deeply and spot patterns others overlook. Your insights help teams anticipate challenges, ask better questions, and make wiser decisions. While you may not always speak first, when you do, your words have weight.',
    videoUrl: 'https://www.youtube.com/embed/qMG1BXo8Asg?si=O8ofq4nz6GGtqdNx',
    strengths: [
      'Nuanced perspective-taking',
      'Strategic foresight',
      'Emotional and environmental intuition',
      'Reflective decision-making'
    ],
    watchOuts: [
      'Overanalyzing instead of acting',
      'Fading into the background when clarity is needed',
      'Assuming others know what you’re thinking'
    ],
    actions: [
      'Set a “speak up” trigger—commit to sharing at least one insight per meeting or discussion.',
      'Use “I noticed…” language to bring in your observations without needing a dramatic entry.',
      'Shift from observer to activator by pairing insights with suggestions: “I wonder if we tried…”'
    ],
    tips: [
      'Keep a daily “pattern journal” to jot down repeated dynamics or undercurrents you notice—then revisit weekly for strategic insights.',
      'Share your perspective early—even if it is not fully polished. Your partial view is often more valuable than others’ certainty.',
      'Use curiosity as a bridge: start with “Have we considered…” or “What might happen if…” to open dialogue.',
      'Don’t wait for the perfect moment—practice acting on 70% clarity rather than overthinking into silence.'
      'Let people know how you process. Say, “I tend to reflect before I speak,” so your pauses build trust, not confusion.'
    ],
    quote: 'Your power is in how deeply you understand.'  
  },

  'relational-bridge': {
    name: 'Relational Bridge',
    description: 'You lead by making people feel seen, heard, and valued. Your empathy creates psychological safety, and your ability to foster genuine relationships makes you the go-to person for support and trust. You don’t just bring people together—you help them feel like they belong. That human-first approach? It’s what makes you unforgettable as a leader.',
    videoUrl: 'https://www.youtube.com/embed/qMG1BXo8Asg?si=O8ofq4nz6GGtqdNx',
    strengths: [
      'Empathy and relational intelligence',
      'Psychological safety',
      'Inclusion and team harmony',
      'Active listening and compassionate feedback'
    ],
    watchOuts: [
      'People-pleasing',
      'Saying yes too often to maintain harmony',
      'Absorbing others’ emotions at the cost of your own',
      'Avoiding conflict or tough truths',
      'Avoiding tough feedback'
    ],
    actions: [
      'Set boundaries around emotional labor by distinguishing between being supportive and being responsible.',
      'Practice compassionate directness—use phrases like, “Because I care, I want to be honest about…”',
      'Reflect after emotionally intense interactions: What did you take on? What’s yours to carry?'
    ],
    tips: [
      'Before saying yes, ask yourself: “Am I the right person to hold this, or am I just the safe one?”',
      'Create micro-boundaries like scheduling “emotional buffer time” after high-intensity meetings.',
      'Practice giving feedback in supportive ways, like pairing care with clarity: “I noticed ___, and I believe you’re capable of ___.”',
      'Use your gift for connection to mediate conflict—not avoid it. You can say hard things with a soft edge.',
      'Anchor yourself before anchoring others. A quick check-in—“How am I doing emotionally right now?”—can prevent overload. Name it.'
    ],
    quote: 'You don’t need a title to lead. Your care is the catalyst.'  
    },


  'quiet-strategist': {
    name: 'Quiet Strategist',
    description: 'Thoughtful, focused, and quietly driven—you’re the one who keeps things moving with purpose. You’re not here for ego or attention; you’re here to solve problems and build things that matter. Your strategic mindset brings order to chaos and helps others see the path forward. You don’t shout to be heard—your clarity speaks volumes.',
    videoUrl: 'https://www.youtube.com/embed/qMG1BXo8Asg?si=O8ofq4nz6GGtqdNx',
    strengths: [
      'Long-term thinking and vision',
      'Intentional execution',
      'Deep focus and discipline',
      'Problem-solving through structure'
    ],
    watchOuts: [
      'Over-controlling the process or outcome',
      'Forgetting to communicate your thinking',
      'Under-celebrating team wins or collaboration',
      'Reluctance to share credit',
      'Assuming others understand your plan'
    ],
    actions: [
      'Externalize your roadmap—use visuals, whiteboards, or one-pagers to let others into your process.',
      'Delegate with clarity, not just tasks but the ‘why’ behind them.',
      'Practice public recognition: intentionally highlight the work of others in visible forums.'
    ],
    tips: [
      'Share early-stage thinking, not just finished strategies—people want to understand your path, not just your product.',
      'Schedule regular “visibility pulses”: a monthly email, update, or shoutout that keeps others looped in.',
      'Delegate with intention—explain not just the what but the why behind each piece of the puzzle.',
      'Resist the urge to over-plan. Leave room for others’ contributions to shape the outcome.',
      'Celebrate progress, not just perfection. Pause to acknowledge small wins—yours and the team’s.'
    ],
    quote: 'You don’t need the spotlight. You set the direction.'  
  },
  
  'humble-fire': {
    name: 'Humble Fire',
    description: 'You carry a quiet intensity—a deep conviction rooted in your values. You may not always show it on the surface, but there’s a fire in you that burns bright for what matters. You lead with integrity, persistence, and purpose, even when no one’s watching. People may underestimate you—but that only makes your rise more powerful.',
    videoUrl: 'https://www.youtube.com/embed/qMG1BXo8Asg?si=O8ofq4nz6GGtqdNx',
    strengths: [
      'Moral clarity and deep purpose',
      'Courageous consistency',
      'Resilience through setbacks',
      'Leading by example, not ego'
    ],
    watchOuts: [
      'Staying invisible when your convictions should be voiced',
      'Dismissing your influence because it’s not loud',
      'Burning out from carrying too much, too quietly'
    ],
    actions: [
      'Own your story—share what drives you and why it matters, even briefly.',
      'Set visibility goals—speak at a town hall, write an internal post, or mentor others.',
      'Build a support circle—you don’t have to hold the torch alone.'
    ],
    tips: [
      'Set a “speak up” moment each week where you share something meaningful—an insight, belief, or value you’re acting on.',
      'Use storytelling to convey your conviction—people resonate with emotion wrapped in experience.',
      'Let others see your fire: describe not just what you’re doing, but what’s fueling it.',
      'Watch for signs of burnout: rest is part of resilience, not its opposite.',
      'When advocating for change, connect it to values and people—not just problems. That’s where your quiet power shines.'
    ],
    quote: 'Your calm gives others courage.'  
    },
  };

export default function ArchetypePage() {
  const router = useRouter();
  const { slug } = router.query;

  const content = archetypeContent[slug as string];

  if (!content) {
    return <p className="p-4 text-center">Archetype not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1bae67] mb-4">{content.name}</h1>
      {content.quote && (
        <blockquote className="italic border-l-4 border-[#1bae67] pl-4 text-gray-600 my-6">
          “{content.quote}”
        </blockquote>
      )}
      <p className="text-lg mb-6">{content.description}</p>

      {content.videoUrl && (
        <div className="aspect-video mb-6">
          <iframe
            className="w-full h-full"
            src={content.videoUrl}
            title={content.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {content.strengths && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Strengths</h2>
          <ul className="list-disc list-inside text-gray-700">
            {content.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
      {content.watchOuts && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Watch Out For</h2>
          <ul className="list-disc list-inside text-gray-700">
            {content.watchOuts.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
      {content.actions && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Recommended Actions</h2>
          <ul className="list-disc list-inside text-gray-700">
            {content.actions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
      {content.tips && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tips for Growth</h2>
          <ul className="list-disc list-inside text-gray-700">
            {content.tips.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
      <p className="text-md text-gray-600">More resources coming soon...</p>
    </div>
  );
}
