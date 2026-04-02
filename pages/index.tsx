// pages/index.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import SocialLinks from '../components/SocialLinks';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const problemCards = [
  {
    title: 'The Stereotype',
    description:
      'We have been taught to associate leadership with visibility, charisma, certainty, and command. The people who take up space are often assumed to be the ones best equipped to lead.',
  },
  {
    title: 'The Myth',
    description:
      'That image of leadership has been reinforced by culture, systems, and bias. It shapes who gets noticed, promoted, trusted, and encouraged to rise.',
  },
  {
    title: 'The Cost',
    description:
      'Organizations miss capable people. Individuals doubt their potential. Too many future leaders either perform their way into belonging or quietly opt out altogether.',
  },
  {
    title: 'The Better Way',
    description:
      'Leadership is not about performance. It is about substance, judgment, self-awareness, resilience, and the ability to elevate others. It is time to widen the lens.',
  },
];

const engagementPaths = [
  {
    title: 'The Book',
    description:
      'Explore the ideas behind The Unlikely Leader and follow the path to the July 2026 launch.',
    cta: 'About the Book',
    href: '/contact',
  },
  {
    title: 'Keynotes',
    description:
      'Bring these ideas to your conference, leadership event, or company gathering through signature keynote talks.',
    cta: 'View Keynotes',
    href: '/keynotes',
  },
  // {
  //   title: 'The Collective Rise',
  //   description:
  //     'Go deeper through leadership development experiences designed to build foundational mindsets and skills.',
  //   cta: 'Learn More',
  //   href: 'https://www.thecollectiverise.com',
  //   external: true,
  // },
  {
    title: 'Follow the Conversation',
    description:
      'Engage with Michael on social media for leadership insights, book updates, and behind-the-scenes reflections.',
    social: true,
  },
];

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      return;
    }

    setStatus('loading');

    try {
      // Save to Supabase
      const { error } = await supabase.from('email_subscribers').insert([
        { email, source: 'homepage' },
      ]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      <Head>
        <title>Unlikely Leader</title>
        <meta
          name="description"
          content="The Unlikely Leader redefines what it means to lead by challenging outdated leadership myths and helping overlooked leaders rise from who they truly are."
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-6 py-24 md:py-28">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-5">
                Book Launching July 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] text-[#333333] max-w-4xl">
                Some of our best leaders have been overlooked.
                <span className="block mt-2">It’s time to change the story.</span>
              </h1>

              <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#4a4a4a] max-w-2xl">
                <span className="italic">The Unlikely Leader</span> challenges the outdated myths that shape
                who gets seen, trusted, and promoted—and offers a more grounded, human
                vision of leadership rooted in self-awareness, resilience, character, and impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#vision">
                  <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                    Explore the Vision
                  </span>
                </a>

                <Link href="/keynotes">
                  <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-6 py-3 rounded-xl hover:bg-white transition cursor-pointer">
                    View Keynotes
                  </span>
                </Link>
              </div>

              <p className="mt-6 text-sm text-[#666666]">
                By Michael Dowling — Author, Speaker, Leadership Advisor
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white border border-[#e5eadf] shadow-lg p-4">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-[#dfe8db] overflow-hidden relative">
                  {/* Replace this placeholder with your real image */}
                <img
                  src="/images/MDBookPhoto.jpeg"
                  alt="Michael Dowling"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                  <div className="absolute bottom-6 left-6 bg-white/92 rounded-2xl px-5 py-4 shadow-md max-w-xs">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#1bae67] font-semibold mb-1">
                      Unlikely Leader
                    </p>
                    <p className="font-semibold text-[#333333]">Coming July 2026</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-6 -left-6 bg-[#333333] text-white rounded-2xl px-5 py-4 shadow-lg max-w-xs">
                <p className="text-sm uppercase tracking-[0.16em] text-white/70">The Core Belief</p>
                <p className="font-semibold mt-1">
                  Leadership is not absent. It is being overlooked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The leadership story we've been told */}
        <section id="vision" className="px-6 pb-20">
          <div className="max-w-6xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] shadow-sm p-8 md:p-12">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                The Leadership Story We’ve Been Told
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                We have been taught to look for leadership in the wrong places.
              </h2>
              <p className="text-lg leading-relaxed text-[#555]">
                For generations, leadership has been associated with confidence, charisma,
                certainty, dominance, and visibility. The people who speak first, take up
                space, and project authority are often assumed to be the ones best equipped
                to lead.
              </p>
              <p className="text-lg leading-relaxed text-[#555] mt-5">
                But that definition is too narrow for the complexity of modern work—and too
                shallow for the kind of leadership the future requires. It shapes who gets
                recognized, who gets promoted, and who quietly concludes that leadership must
                belong to someone else.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-[#F0F2EB] p-6">
                <h3 className="text-xl font-semibold mb-3">The Stereotype</h3>
                <p className="text-[#555] leading-relaxed">
                  We confuse leadership with presence, polish, certainty, and volume.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F0F2EB] p-6">
                <h3 className="text-xl font-semibold mb-3">The Blind Spot</h3>
                <p className="text-[#555] leading-relaxed">
                  When the definition is too narrow, capable leaders are overlooked before they ever have the chance to rise.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F0F2EB] p-6">
                <h3 className="text-xl font-semibold mb-3">The Consequence</h3>
                <p className="text-[#555] leading-relaxed">
                  Organizations miss talent. People doubt themselves. Leadership pipelines become distorted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A wider lens */}
        <section className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-4">
                A Wider Lens on Leadership
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Leadership is not about performing a role. It is about how you build, regulate, decide, and elevate others.
              </h2>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                <span className="italic">The Unlikely Leader</span> offers a different vision—one that values
                self-awareness over self-promotion, steadiness over spectacle, substance over performance,
                and impact over image.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mt-5 max-w-2xl">
                This is not a softer definition of leadership. It is a more accurate one.
                And in a world shaped by burnout, complexity, and AI-driven change, it may also be the more necessary one.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-white/10 border border-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">Rooted In</p>
                <p className="text-xl font-semibold">Self-awareness, resilience, character, and impact</p>
              </div>

              <div className="rounded-[1.5rem] bg-white/10 border border-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">Challenges</p>
                <p className="text-xl font-semibold">Outdated myths about who looks like a leader</p>
              </div>

              <div className="rounded-[1.5rem] bg-white/10 border border-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">Invites</p>
                <p className="text-xl font-semibold">A more grounded, human, future-ready way to lead</p>
              </div>
            </div>
          </div>
        </section>

        {/* Book launch */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] shadow-sm p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                  Book Launch • July 2026
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                  A new book for people who have felt underestimated by traditional leadership narratives
                </h2>
                <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-2xl">
                  <span className="italic">The Unlikely Leader</span> explores how outdated leadership ideas shape
                  who gets seen, who gets chosen, and who gets left behind. It offers
                  a more honest path forward—one rooted in self-awareness, resilience,
                  character, and impact.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
                  <div className="rounded-2xl bg-[#F0F2EB] p-5">
                    <p className="text-sm text-[#666] mb-1">What it challenges</p>
                    <p className="font-semibold">The myth that leaders must look a certain way</p>
                  </div>
                  <div className="rounded-2xl bg-[#F0F2EB] p-5">
                    <p className="text-sm text-[#666] mb-1">What it offers</p>
                    <p className="font-semibold">A more inclusive, grounded vision of leadership</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                      Inquire About the Book
                    </span>
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#333333] text-white p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.14em] text-[#96CEA0] font-semibold mb-3">
                  Coming Soon
                </p>
                <h3 className="text-3xl font-semibold mb-4 italic">
                  The Unlikely Leader: Breaking the Bias That Keeps Greater Leaders Invisible
                </h3>
                <p className="text-white/85 leading-relaxed mb-6">
                  A book about the people who have been underestimated, the myths that have held them back, and the leadership the future actually needs.
                </p>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.14em] text-white/60 mb-2">
                    Expected Release
                  </p>
                  <p className="font-semibold">July 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Email signup */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] shadow-sm p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                  Stay Connected
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Be the first to hear about the launch of <span className="italic">The Unlikely Leader</span>
                </h2>
                <p className="text-lg text-[#555] leading-relaxed max-w-2xl">
                  Get updates on the July 2026 book launch, keynote appearances, leadership insights,
                  and new ways to engage with the ideas behind <span className="italic">The Unlikely Leader</span>.
                </p>
              </div>

              <div className="bg-[#F0F2EB] rounded-[1.5rem] p-6 border border-[#e5eadf]">
                <form className="space-y-4" onSubmit={handleEmailSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#333333]">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-[#cfd8cb] bg-white px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#1bae67]"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition shadow-sm disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Get Launch Updates'}
                  </button>
                </form>

                {status === 'success' && (
                  <p className="mt-4 text-sm text-[#1bae67] font-medium leading-relaxed">
                    Thank you! You're on the list.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-sm text-red-600 leading-relaxed">
                    Something went wrong. Please try again.
                  </p>
                )}
                {status === 'idle' && (
                  <p className="mt-4 text-sm text-[#666666] leading-relaxed">
                    Occasional updates only. No spam.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Problem / reframe
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                The Story We’ve Been Told
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                We do not just have a leadership myth. We have a leadership blind spot.
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                The Unlikely Leader names the false narrative many people have absorbed:
                that leadership belongs to a certain kind of person. The book and this
                body of work exist to challenge that belief.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {problemCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-[#e5eadf] rounded-[1.75rem] p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-[#555] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Meet Michael */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-[2rem] bg-[#F0F2EB] border border-[#e5eadf] overflow-hidden">
              <img
                src="/images/MD2.jpeg"
                alt="Michael Dowling - Author and Speaker"
                className="w-full h-full object-cover min-h-[420px]"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Meet Michael
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                A career spent recognizing human potential in places others might miss
              </h2>
              <p className="text-lg text-[#555] leading-relaxed mb-5">
                Michael Dowling is an author, speaker, and leadership advisor whose work
                challenges traditional assumptions about what leadership looks like and who
                gets recognized. Drawing from his experience as a former talent agent,
                founder, CEO, and executive coach, he helps audiences rethink leadership
                through the lenses of self-awareness, resilience, character, and impact.
              </p>
              <p className="text-lg text-[#555] leading-relaxed mb-8">
                His message is both deeply personal and broadly relevant: some of our best
                leaders have been overlooked not because they lack capability, but because
                we have been using the wrong yardstick.
              </p>

              <Link href="/keynotes">
                <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-6 py-3 rounded-xl hover:bg-[#F0F2EB] transition cursor-pointer">
                  Explore Michael’s Speaking
                </span>
              </Link>
            </div>
          </div>
        </section>

          {/* Ways to engage */}
          <section className="px-6 pt-24 pb-28 md:pt-28 md:pb-32">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mb-10">
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                  Continue the Journey
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Multiple ways to engage with the ideas behind The Unlikely Leader
                </h2>
                <p className="text-lg text-[#555] leading-relaxed">
                  Whether you are following the book launch, looking for a keynote,
                  exploring deeper leadership development, or connecting through social
                  media, this work is designed to meet people at different points in
                  their journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {engagementPaths.map((item) => {
                  if (item.social) {
                    return (
                      <div
                        key={item.title}
                        className="bg-white border border-[#e5eadf] rounded-[1.75rem] p-7 shadow-sm h-full"
                      >
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-[#555] leading-relaxed mb-6">{item.description}</p>

                        <div className="mt-4">
                          <p className="text-sm uppercase tracking-[0.14em] text-[#666666] mb-3">
                            Connect on
                          </p>

                          <SocialLinks colorClassName="text-[#1bae67]" />
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link key={item.title} href={item.href!}>
                      <div className="bg-white border border-[#e5eadf] rounded-[1.75rem] p-7 shadow-sm h-full hover:shadow-md transition">
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-[#555] leading-relaxed mb-6">{item.description}</p>
                        <span className="text-[#1bae67] font-semibold">{item.cta} →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

        {/* Speaking bridge */}
        <section className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-4">
              Signature Keynotes
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Bring these ideas to your audience through story-driven, high-impact speaking
            </h2>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto">
              Michael’s keynote talks challenge outdated leadership assumptions, explore
              why we keep overlooking some of our best people, and offer practical,
              memorable ideas for the future of leadership.
            </p>

            <div className="mt-8">
              <Link href="/keynotes">
                <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                  View Signature Keynotes
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center bg-white border border-[#e5eadf] rounded-[2rem] p-10 md:p-14 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
              Stay Connected
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              A new vision of leadership is coming into focus
            </h2>
            <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-3xl mx-auto">
              Follow the journey to the July 2026 launch of The Unlikely Leader, explore keynote
              opportunities, or begin by discovering your own leadership archetype.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/assessment">
                <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                  Take the Quiz
                </span>
              </Link>

              <Link href="/contact">
                <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-7 py-3 rounded-xl hover:bg-[#F0F2EB] transition cursor-pointer">
                  Contact Michael
                </span>
              </Link>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}