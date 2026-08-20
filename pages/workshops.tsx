// pages/workshops.tsx
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const workshopTracks = [
  {
    title: 'Emerging Leader Track',
    eyebrow: 'For new and rising leaders',
    bestFor:
      'New managers, high-potential employees, first-time leaders, and people moving from individual contributor to leader.',
    positioning:
      'Helps emerging leaders shift from doing the work to leading the work.',
    sessions: [
      'MBOS: The Leader Operating System',
      'Moving from Peer to Leader',
      'Giving Difficult Feedback',
      'Delegating Without Losing Control',
    ],
    outcomes: [
      'Navigate the identity shift from contributor to leader',
      'Give clearer feedback without avoiding discomfort',
      'Delegate with trust, structure, and accountability',
      'Recognize the hidden stories that keep them over-functioning',
    ],
  },
  {
    title: 'Communication Under Pressure Track',
    eyebrow: 'For teams navigating tension',
    bestFor:
      'Teams experiencing tension, avoidance, misalignment, unclear expectations, or trust breakdowns.',
    positioning:
      'Helps leaders have clearer, more courageous conversations when the stakes are high.',
    sessions: [
      'MBOS: The Leader Operating System',
      'Conflict',
      'Giving and Receiving Feedback',
      'Holding People Accountable',
    ],
    outcomes: [
      'Recognize default responses to tension',
      'Separate facts from stories',
      'Communicate with clarity and care',
      'Strengthen trust through direct, grounded conversations',
    ],
  },
  {
    title: 'Operational Clarity Track',
    eyebrow: 'For overwhelmed teams',
    bestFor:
      'Managers and teams navigating overwhelm, competing priorities, ambiguity, and decision friction.',
    positioning:
      'Helps leaders reduce reactivity, create clarity, and make better decisions under pressure.',
    sessions: [
      'MBOS: The Leader Operating System',
      'Prioritizing Under Pressure',
      'Decision-Making',
      'Navigating Ambiguity',
    ],
    outcomes: [
      'Identify where pressure is driving reactive behavior',
      'Make decisions with clarity instead of certainty-seeking',
      'Prioritize what matters most',
      'Reduce friction for themselves and their teams',
    ],
  },
];

const additionalTracks = [
  {
    title: 'Visibility & Influence Track',
    description:
      'For capable leaders who need to make their substance, voice, and contribution more visible without feeling like they have to become someone they are not.',
    sessions: ['Speaking Up', 'Being Overlooked', 'Self-Advocacy'],
  },
  {
    title: 'Resilient Leader Track',
    description:
      'For leaders who need to stay grounded, adaptive, and intentional during pressure, change, and setbacks.',
    sessions: ['Leading Through Change', 'Burnout or Overextension', 'Handling Disappointment'],
  },
];

const formats = [
  {
    title: 'Single Workshop',
    bestFor: 'Teams focused on one urgent leadership challenge',
    structure: '90–120 minutes',
  },
  {
    title: 'MBOS Practice Series',
    bestFor: 'Organizations wanting sustained behavior change',
    structure: '90–120 min foundation + three 120-min monthly labs',
  },
  {
    title: 'Keynote + Workshop',
    bestFor: 'Conferences, offsites, summits, and leadership events',
    structure: 'Keynote followed by facilitated application',
  },
];

const mbosModel = [
  {
    label: 'Mindset',
    description:
      'The belief, assumption, or internal story shaping how you interpret the moment.',
  },
  {
    label: 'Behavior',
    description:
      'The action, reaction, avoidance, or communication pattern that follows.',
  },
  {
    label: 'Outcome',
    description:
      'The result that behavior creates for you, your team, or the relationship.',
  },
  {
    label: 'Shift',
    description:
      'The intentional pause that helps you interrupt the default pattern and choose a better response.',
  },
];

const workshopApplicationLayers = [
  {
    label: 'Event',
    question: 'What actually happened?',
  },
  {
    label: 'Emotion',
    question: 'What did it activate?',
  },
  {
    label: 'Default Behavior',
    question: 'What did I do automatically?',
  },
  {
    label: 'Hidden Story',
    question: 'What was I telling myself?',
  },
  {
    label: 'Outcome',
    question: 'What did that pattern create?',
  },
  {
    label: 'Shift',
    question: 'What mindset or behavior would create a better result?',
  },
];

const practiceArc = [
  {
    segment: 'Reconnect to MBOS',
    purpose: 'Reinforce the model and connect it to real workplace moments',
  },
  {
    segment: 'Define the Challenge',
    purpose: 'Name the specific leadership situation and why it matters',
  },
  {
    segment: 'Group MBOS Breakdown',
    purpose: 'Identify the common emotions, default behaviors, hidden stories, and outcomes',
  },
  {
    segment: 'Personal Pattern Diagnosis',
    purpose: 'Participants map their own leadership loop',
  },
  {
    segment: 'Intentional Shift',
    purpose: 'Introduce a better mindset and behavior',
  },
  {
    segment: 'Practice Rep',
    purpose: 'Participants rehearse a phrase, action, or conversation',
  },
  {
    segment: 'Peer Coaching',
    purpose: 'Apply the framework to a real situation',
  },
  {
    segment: 'Field Commitment',
    purpose: 'Choose one behavior to practice before the next session',
  },
];

const customChallengeGroups = [
  {
    title: 'Communication & Trust',
    topics: [
      'Conflict',
      'Giving Difficult Feedback',
      'Receiving Critical Feedback',
      'Holding Someone Accountable',
      'Collaborating Across Functions',
    ],
  },
  {
    title: 'Pressure & Execution',
    topics: [
      'Decision-Making',
      'Prioritizing Under Pressure',
      'Navigating Ambiguity',
      'Delegating Work',
      'Leading Through Change',
    ],
  },
  {
    title: 'Visibility & Growth',
    topics: [
      'Speaking Up in a Meeting',
      'Being Overlooked',
      'Self-Advocacy',
      'Feeling Impostor Syndrome',
      'Transitioning into a New Role',
    ],
  },
  {
    title: 'Resilience & Self-Regulation',
    topics: [
      'Making a Mistake',
      'Handling Disappointment',
      'Recovering from Burnout or Overextension',
      'Asking for Help',
      'Building Trust with a New Team',
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      <Seo
        title="Workshops | Unlikely Leader"
        description="MBOS leadership workshops and practice series help leaders recognize default patterns, interrupt reactive behavior, and practice more intentional responses to real workplace challenges."
        path="/workshops"
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-5">
                Leadership Workshops • MBOS Practice Labs • Team Development
              </p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#333333]">
              Tools Don't Fail Because They're Bad. They Fail Because People Don't Understand Why They Keep Getting Stuck.
              </h1>

              <p className="mt-6 text-lg md:text-lg leading-relaxed text-[#4a4a4a] max-w-xl">
              Communication scripts, feedback models, prioritization tools, and decision frameworks can all help. 
              But in real leadership moments, people don’t respond from a neutral place. 
              They respond from pressure, emotion, fear, urgency, defensiveness, or the need to prove themselves.
              The MBOS Framework helps leaders recognize the mindset driving their behavior, interrupt automatic reactions, 
              and practice more intentional responses that create better outcomes.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#workshop-tracks">
                  <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                    Explore Workshop Tracks
                  </span>
                </a>

                <Link href="/contact">
                  <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-6 py-3 rounded-xl hover:bg-white transition cursor-pointer">
                    Ask About Custom Workshops
                  </span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {['Leadership Teams', 'New & Emerging Managers', 'High-Potential Employees', 'HR / Talent / L&D'].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-white border border-[#d9e3d6] px-4 py-2 rounded-full text-[#555]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white shadow-xl border border-[#e8ece3] p-8 md:p-10">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-3">
                    Mindset-Behavior-Outcome-Shift
                  </p>
                  <h2 className="text-2xl md:text-2xl font-bold leading-tight">
                    Mindset drives behavior. Behavior creates outcomes. Shift changes the loop. {' '}
                    {/* <span className="text-2xl md:text-2xl leading-tight">To use a tool effectively, leaders first need to understand the internal pattern driving their response.</span> */}
                  </h2>
                </div>

                <div className="space-y-3">
                  {mbosModel.map((layer, index) => (
                    <div
                      key={layer.label}
                      className="relative flex gap-4 items-start rounded-2xl bg-[#F0F2EB] border border-[#e5eadf] p-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1bae67] text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#333333]">{layer.label}</h3>
                        <p className="text-sm text-[#555] leading-relaxed">{layer.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#d9e3d6] bg-white p-5">
                  <p className="text-sm font-semibold text-[#333333] leading-relaxed">
                    MBOS helps leaders move from automatic reaction to intentional leadership behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why workshops */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Why Workshops
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Insight is the beginning. Practice is where leadership changes.
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                Most leadership training gives people new language. MBOS workshops help people use
                that language in the moments when leadership gets difficult: conflict, feedback,
                pressure, ambiguity, accountability, and visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Recognize the Pattern',
                  description:
                    'Participants learn to see the automatic loops that shape their behavior under pressure.',
                },
                {
                  title: 'Name the Hidden Story',
                  description:
                    'They identify the assumptions, fears, and filters driving their default response.',
                },
                {
                  title: 'Practice the Shift',
                  description:
                    'They rehearse more intentional behaviors they can apply immediately at work.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-[#e5eadf] bg-[#F0F2EB] p-7"
                >
                  <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-[#555] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop method */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                  How MBOS Becomes Practice
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  The model becomes practical when leaders apply it to real moments
                </h2>
                <p className="text-lg text-[#555] leading-relaxed">
                  Each workshop uses a common workplace challenge to help participants identify the
                  event, emotion, default behavior, hidden story, outcome, and shift inside their own
                  leadership patterns.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] shadow-sm border border-[#e5eadf] p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {workshopApplicationLayers.map((layer) => (
                    <div key={layer.label} className="rounded-2xl bg-[#F0F2EB] p-5 border border-[#e5eadf]">
                      <h3 className="font-semibold text-lg mb-2">{layer.label}</h3>
                      <p className="text-[#555] leading-relaxed text-sm">{layer.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Workshop Formats
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Available as a single workshop or a multi-session leadership practice series
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                Workshops can stand alone, extend a keynote, or become a structured development
                experience over several months.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {formats.map((format) => (
                <div
                  key={format.title}
                  className="rounded-[1.75rem] border border-[#e5eadf] bg-[#F0F2EB] p-7"
                >
                  <h3 className="text-2xl font-semibold mb-3">{format.title}</h3>
                  <p className="text-sm uppercase tracking-[0.14em] text-[#1bae67] font-semibold mb-3">
                    {format.structure}
                  </p>
                  <p className="text-[#555] leading-relaxed">{format.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended tracks */}
        <section id="workshop-tracks" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Recommended Package Structure
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Choose a focused leadership track — or customize one around your organization’s needs
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                Most organizations start with one of these recommended MBOS tracks. Each combines a
                foundational MBOS session with three monthly practice labs focused on the leadership
                challenges most relevant to the audience.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {workshopTracks.map((track) => (
                <div
                  key={track.title}
                  className="bg-white rounded-[2rem] shadow-sm border border-[#e5eadf] p-7 flex flex-col"
                >
                  <p className="text-sm uppercase tracking-[0.16em] text-[#1bae67] font-semibold mb-4">
                    {track.eyebrow}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{track.title}</h3>
                  <p className="text-[#555] leading-relaxed mb-5">{track.positioning}</p>

                  <div className="rounded-2xl bg-[#F0F2EB] border border-[#e5eadf] p-5 mb-6">
                    <p className="text-sm font-semibold text-[#333333] mb-2">Best for</p>
                    <p className="text-sm text-[#555] leading-relaxed">{track.bestFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Session sequence</h4>
                    <div className="space-y-3">
                      {track.sessions.map((session, index) => (
                        <div key={session} className="flex gap-3 items-start">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1bae67] text-white text-xs font-bold">
                            {index === 0 ? 'F' : index}
                          </div>
                          <p className="text-sm text-[#555] leading-relaxed">{session}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold mb-3">Participants learn to</h4>
                    <ul className="space-y-2">
                      {track.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2 text-sm text-[#555] leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1bae67]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional tracks */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Additional Tracks
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Other focused tracks are available for specific leadership development goals
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalTracks.map((track) => (
                <div key={track.title} className="rounded-[2rem] bg-[#F0F2EB] border border-[#e5eadf] p-7">
                  <h3 className="text-2xl font-bold mb-3">{track.title}</h3>
                  <p className="text-[#555] leading-relaxed mb-5">{track.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {track.sessions.map((session) => (
                      <span key={session} className="bg-white border border-[#d9e3d6] px-3 py-2 rounded-full text-sm text-[#555]">
                        {session}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice lab arc */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                  120-Minute Practice Lab
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Every session follows a practical behavior-change arc
                </h2>
                <p className="text-lg text-[#555] leading-relaxed">
                  The structure stays consistent so participants build real fluency with the MBOS
                  model. The topic changes, but the leadership habit deepens with each practice rep.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] shadow-sm border border-[#e5eadf] p-6 md:p-8">
                <div className="space-y-4">
                  {practiceArc.map((item, index) => (
                    <div key={item.segment} className="grid gap-3 sm:grid-cols-[44px_1fr] items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333333] text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="rounded-2xl bg-[#F0F2EB] border border-[#e5eadf] p-4">
                        <h3 className="font-semibold mb-1">{item.segment}</h3>
                        <p className="text-sm text-[#555] leading-relaxed">{item.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-4">
                Custom MBOS Tracks
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Need something more tailored? Build a custom MBOS track.
              </h2>
              <p className="text-lg text-white/75 leading-relaxed">
                Organizations can customize a workshop series by selecting the leadership challenges
                most relevant to their people, culture, and current business context.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {customChallengeGroups.map((group) => (
                <div key={group.title} className="rounded-[1.75rem] bg-white/8 border border-white/15 p-6">
                  <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.topics.map((topic) => (
                      <li key={topic} className="flex gap-2 text-sm text-white/75 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#96CEA0]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Choose the Right Leadership Development Path
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                Need a focused workshop series or a more comprehensive leadership platform?
              </h2>
              <p className="text-lg md:text-xl text-[#555] leading-relaxed">
                The Unlikely Leader Operating System is designed for organizations that want
                practical, customizable workshops around specific leadership challenges. For a deeper,
                cohort-based leadership development experience, explore The Collective Rise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#e5eadf] rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col">
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                  Focused & Flexible
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  The MBOS Operating System
                </h3>
                <p className="text-[#555] leading-relaxed mb-6">
                  A flexible workshop experience for teams that want to apply MBOS to the specific
                  leadership moments they are facing right now — conflict, feedback, pressure,
                  decision-making, visibility, accountability, and more.
                </p>
                <ul className="space-y-3 mb-8 text-[#555]">
                  {[
                    'Single workshops or short workshop series',
                    'Customized around current team or organizational challenges',
                    'Built for practical application and immediate behavior change',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1bae67]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href="/contact">
                    <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                      Discuss a Workshop Track
                    </span>
                  </Link>
                </div>
              </div>

              <div className="bg-[#333333] text-white border border-[#333333] rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col">
                <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-4">
                  Comprehensive Leadership Development
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  The Collective Rise
                </h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  A broader leadership development platform for organizations that want a structured,
                  cohort-based journey combining in-person learning, virtual reinforcement, practical
                  tools, and ongoing leadership practice.
                </p>
                <ul className="space-y-3 mb-8 text-white/75">
                  {[
                    'Multi-month leadership development experience',
                    'Cohort-based learning and reinforcement',
                    'Integrated tools, practice, and leadership intelligence modules',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#96CEA0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://thecollectiverise.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#333333] font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm"
                  >
                    Explore The Collective Rise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
