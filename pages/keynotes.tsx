// pages/keynotes.tsx
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';

const signatureKeynotes = [
  {
    title: 'We Don’t Have a Leadership Problem. We Have a Recognition Problem.',
    theme: 'Leadership is being overlooked—not absent.',
    featured: true,
    concepts: [
      'Why organizations keep overlooking some of their most capable people',
      'How outdated leadership stereotypes distort hiring, promotion, and succession decisions',
      'The hidden strengths of “unlikely leaders,” including discernment, steadiness, and trust-building',
    ],
    gains: [
      'A new lens for recognizing leadership potential',
      'Greater awareness of leadership bias in talent decisions',
      'A more inclusive and future-ready understanding of what leadership looks like',
    ],
    audiences: [
      'Leadership conferences',
      'Executive teams',
      'HR / Talent / L&D',
      'Emerging leader programs',
    ],
  },
  {
    title: 'Stop Managing Time. Start Managing Pressure.',
    theme: 'Most dysfunction is not a time problem—it is a pressure problem.',
    featured: false,
    concepts: [
      'Why overwhelm is often self-generated through poor internal systems',
      'How reactive habits, unclear priorities, and decision friction create burnout',
      'What leaders can do to reduce pressure without lowering performance',
    ],
    gains: [
      'A practical framework for reducing reactivity',
      'Tools for identifying and removing unnecessary friction',
      'A better way to lead with clarity, focus, and steadiness',
    ],
    audiences: [
      'People managers',
      'Mid-level managers',
      'High-growth teams',
      'Operations and frontline leaders',
    ],
  },
  {
    title: 'The Confidence Illusion.',
    theme: 'We confuse visibility, certainty, and charisma with capability.',
    featured: false,
    concepts: [
      'Why confidence is one of the most overvalued traits in leadership',
      'How organizations mistake presence for substance',
      'The risks of rewarding certainty over judgment and character',
    ],
    gains: [
      'A sharper way to evaluate leadership effectiveness',
      'Language for challenging confidence bias in promotion decisions',
      'A more grounded model of executive presence and credibility',
    ],
    audiences: [
      'Senior leaders',
      'HR / Talent teams',
      'Promotion decision-makers',
      'Leadership development audiences',
    ],
  },
  {
    title: 'AI Is Changing Work. It Should Change Who Leads.',
    theme: 'Capability without integrity may be the biggest leadership risk of the next decade.',
    featured: false,
    concepts: [
      'Why AI is changing not just work, but the kind of leaders organizations need',
      'The widening gap between technical capability and ethical maturity',
      'Why judgment, discernment, and integrity are becoming strategic advantages',
    ],
    gains: [
      'A clearer view of leadership risk in an AI-shaped workplace',
      'A framework for thinking about ethical intelligence',
      'A stronger case for pairing innovation with responsibility',
    ],
    audiences: [
      'Executive teams',
      'Boards',
      'Innovation and strategy leaders',
      'Future-of-work and AI conference audiences',
    ],
  },
];

const audienceGroups = [
  'Executive Teams',
  'HR / Talent / L&D',
  'Emerging Leaders',
  'Women’s Leadership Events',
  'ERGs & Leadership Communities',
  'Future of Work Conferences',
  'Strategy & Innovation Teams',
  'Culture & Organizational Development',
];

const speakingFormats = [
  {
    title: '45–60 Minute Keynote',
    description:
      'For conferences, summits, and company-wide events.',
  },
  {
    title: '60–90 Minute Keynote',
    description:
      'For deeper storytelling and audience activation.',
  },
  {
    title: 'Leadership Offsite Session',
    description:
      'For smaller strategic conversations.',
  },
];

export default function KeynotesPage() {
  const featuredKeynote = signatureKeynotes.find((k) => k.featured);
  const supportingKeynotes = signatureKeynotes.filter((k) => !k.featured);

  return (
    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      <Head>
        <title>Keynotes | Unlikely Leader</title>
        <meta
          name="description"
          content="Michael Dowling delivers practical, thought-provoking keynote talks on leadership, pressure, confidence bias, and ethical intelligence in an AI-driven world."
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-5">
                Keynote Speaker • Leadership • Future of Work
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#333333]">
                Redefining Leadership for a World That Keeps Overlooking Its Best People
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#4a4a4a] max-w-xl">
                Michael Dowling delivers practical, thought-provoking keynotes that
                challenge outdated leadership assumptions and help organizations
                recognize, develop, and elevate the leaders they’ve been missing.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                    Request Speaking Info
                  </span>
                </Link>

                <a href="#signature-keynotes">
                  <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-6 py-3 rounded-xl hover:bg-white transition cursor-pointer">
                    Explore Keynotes
                  </span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {['Conferences', 'Corporate Events', 'Leadership Offsites', 'HR / Talent / L&D'].map(
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
                <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-[#1bae67] via-[#96CEA0] to-[#0AB0BD] p-8 flex flex-col justify-between text-white overflow-hidden">
                  <div className="w-16 h-16 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/85 mb-3">
                      The Question We Need to Be Asking
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                    Why do we keep missing some of the best leaders in the room? 
                    </h2>
                    <h2 className="text-xl md:text-2xl font-semibold leading-tight text-[#333333]">
                    And why do so many of them struggle to see it in themselves?
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                      <p className="text-sm text-white/80">Recognition Shift</p>
                      <p className="font-semibold">Practical Tools</p>
                    </div>
                    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                      <p className="text-sm text-white/80">See leadership differently</p>
                      <p className="font-semibold">Turn insight into action</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-6 -left-6 bg-[#333333] text-white rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-sm uppercase tracking-[0.16em] text-white/70">Overall Theme</p>
                <p className="font-semibold mt-1">
                  Leadership is not absent. It is being unrecognized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why this matters now */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] shadow-sm p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Why These Talks Matter Now
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                Organizations do not just have a leadership pipeline problem. They have a {' '} 
              <span className="text-3xl md:text-4xl font-bold leading-tight mb-5 text-[#1bae67]">
                recognition problem.
              </span>
              </h2>
              <p className="text-lg leading-relaxed text-[#555]">
                In a workplace shaped by burnout, complexity, and AI-driven change,
                companies need leaders with judgment, steadiness, self-awareness,
                and integrity—not just visibility, certainty, or charisma.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="rounded-2xl bg-[#F0F2EB] p-6">
                <h3 className="text-xl font-semibold mb-3">Recognition Bias</h3>
                <p className="text-[#555] leading-relaxed">
                  We often overlook capable leaders because they do not match the stereotype of what leadership is supposed to look like.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F0F2EB] p-6">
                <h3 className="text-xl font-semibold mb-3">Pressure Overload</h3>
                <p className="text-[#555] leading-relaxed">
                  Many leadership and performance issues are not about time. They are about poorly managed pressure, friction, and reactivity.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F0F2EB] p-6">
                <h3 className="text-xl font-semibold mb-3">Ethical Complexity</h3>
                <p className="text-[#555] leading-relaxed">
                  As AI increases capability and speed, discernment, integrity, and values-aligned judgment matter more than ever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signature keynotes */}
        <section id="signature-keynotes" className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-4">
                Signature Keynotes
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Talks designed to challenge assumptions and create meaningful momentum
              </h2>
            </div>

            {featuredKeynote && (
              <div className="bg-white text-[#333333] rounded-[2rem] shadow-2xl p-8 md:p-10 mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex px-3 py-1 rounded-full bg-[#1bae67] text-white text-sm font-semibold">
                    Flagship Keynote
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full bg-[#F0F2EB] text-[#333333] text-sm font-medium">
                    {featuredKeynote.theme}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                  {featuredKeynote.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#1bae67]">
                      What this keynote explores
                    </h4>
                    <ul className="space-y-3 text-[#555] leading-relaxed">
                      {featuredKeynote.concepts.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#1bae67]">
                      What audiences gain
                    </h4>
                    <ul className="space-y-3 text-[#555] leading-relaxed">
                      {featuredKeynote.gains.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#1bae67]">
                      Best for
                    </h4>
                    <ul className="space-y-3 text-[#555] leading-relaxed">
                      {featuredKeynote.audiences.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
              {supportingKeynotes.map((keynote) => (
                <div
                  key={keynote.title}
                  className="bg-white/8 border border-white/10 rounded-[1.75rem] p-7 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.14em] text-[#96CEA0] font-semibold mb-3">
                    {keynote.theme}
                  </p>
                  <h3 className="text-2xl font-semibold leading-snug mb-5">
                    {keynote.title}
                  </h3>

                  <div className="space-y-5 text-white/88">
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">
                        Core concepts
                      </h4>
                      <ul className="space-y-2 text-sm leading-relaxed">
                        {keynote.concepts.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">
                        Audience gains
                      </h4>
                      <ul className="space-y-2 text-sm leading-relaxed">
                        {keynote.gains.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">
                        Best for
                      </h4>
                      <p className="text-sm leading-relaxed">
                        {keynote.audiences.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience fit */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Who These Talks Are For
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Designed for audiences navigating growth, change, and leadership complexity
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                These talks resonate with organizations that want to rethink leadership,
                reduce unproductive pressure, and better prepare people to lead in a more
                complex future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audienceGroups.map((group) => (
                <div
                  key={group}
                  className="bg-white border border-[#e5eadf] rounded-2xl px-5 py-6 shadow-sm"
                >
                  <p className="font-semibold text-lg">{group}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Speaking Formats
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Flexible formats for conferences, offsites, and leadership events
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                Available in person or virtual, with options designed to fit keynote stages,
                company gatherings, leadership retreats, and deeper development experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {speakingFormats.map((format) => (
                <div
                  key={format.title}
                  className="rounded-[1.5rem] border border-[#e5eadf] bg-[#F0F2EB] p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                  <p className="text-[#555] leading-relaxed">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Workshop bridge */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] p-8 md:p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
            Go Deeper
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Turn the keynote into practice
          </h2>
          <p className="text-lg text-[#555] leading-relaxed max-w-3xl">
            Keynotes create the shift. Workshops help leaders practice it. For organizations
            that want to go deeper, MBOS-based workshops help participants apply the ideas
            to real leadership challenges.
          </p>

          <div className="mt-8">
            <Link href="/workshops">
              <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                Explore Workshops
              </span>
            </Link>
          </div>
        </div>
      </section>
        {/* What to expect */}
        <section className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-5">
              What to Expect
            </p>
            <blockquote className="text-2xl md:text-4xl font-semibold leading-relaxed">
              "A compelling blend of insight, story, and practical application that challenges
              people to rethink what leadership looks like—and what better leadership requires."
            </blockquote>
            <p className="mt-6 text-white/70 text-sm md:text-base">
              Thoughtful, research-backed ideas delivered with energy and purpose
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center bg-white border border-[#e5eadf] rounded-[2rem] p-10 md:p-14 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
              Booking & Inquiries
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Bring a keynote that challenges assumptions and changes how people lead
            </h2>
            <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-3xl mx-auto">
              Whether you’re planning a conference, leadership summit, offsite, or team
              development experience, these talks are designed to provoke fresh thinking
              and create lasting momentum.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                  Request Speaking Info
                </span>
              </Link>

              <Link href="/contact">
                <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-7 py-3 rounded-xl hover:bg-[#F0F2EB] transition cursor-pointer">
                  Contact Michael
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}