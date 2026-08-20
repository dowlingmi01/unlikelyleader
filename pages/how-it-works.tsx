// pages/how-it-works.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Link from 'next/link';
import {
    Target,
    Compass,
    Flag,
    Sparkles,
    Brain,
    Network,
    Anchor,
    MapPinned,
  } from 'lucide-react';
import { faqJsonLd, HOW_IT_WORKS_FAQS } from '../lib/jsonLd';
import { trackEvent } from '../lib/analytics';

const archetypes = [
        {
          name: 'The Commander',
          summary: 'Decisive, directive, and ready to move.',
          icon: Target,
        },
        {
          name: 'The Trailblazer',
          summary: 'Bold, pioneering, and energized by possibility.',
          icon: Compass,
        },
        {
          name: 'The Standard-Bearer',
          summary: 'Values-driven, principled, and committed to excellence.',
          icon: Flag,
        },
        {
          name: 'The Catalyst',
          summary: 'Sparks momentum, energy, and change.',
          icon: Sparkles,
        },
        {
          name: 'The Strategist',
          summary: 'Thoughtful, analytical, and future-oriented.',
          icon: Brain,
        },
        {
          name: 'The Integrator',
          summary: 'Connects people, priorities, and perspectives.',
          icon: Network,
        },
        {
          name: 'The Anchor',
          summary: 'Grounded, steady, and trusted in uncertainty.',
          icon: Anchor,
        },
        {
          name: 'The Guide',
          summary: 'Supportive, insightful, and focused on growth.',
          icon: MapPinned,
        },
      ];
      const topRow = archetypes.slice(0, 4);
      const bottomRow = archetypes.slice(4, 8);

export default function HowItWorksPage() {
  return (
    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      <Seo
        title="How It Works | Leadership Assessment"
        description="Explore the eight archetypes behind the Leadership Assessment and understand how the model helps reveal different ways of leading."
        path="/how-it-works"
        jsonLd={faqJsonLd(HOW_IT_WORKS_FAQS)}
      />

      <Navbar />

      <main>
        <section className="px-6 py-24 md:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-5">
              Leadership Assessment • How It Works
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] text-[#333333]">
              Eight archetypes. One broader view of leadership.
            </h1>

            <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#4a4a4a] max-w-3xl mx-auto">
              The Leadership Assessment helps surface patterns in how people naturally lead.
              Rather than forcing people into narrow stereotypes, it highlights different
              archetypes that reflect distinct forms of leadership strength.
            </p>

            <div className="mt-8">
              <Link href="/lap" onClick={() => trackEvent('lap_start', { location: 'how_it_works' })}>
                <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                  Take the Assessment
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] shadow-sm p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                    The Archetype Model
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                    Eight different expressions of leadership
                </h2>
                <p className="text-lg leading-relaxed text-[#555]">
                    The assessment reveals patterns across eight archetypes, each representing
                    a different way leadership can show up. These are not rigid boxes. They are
                    lenses that help people better understand their natural strengths and style.
                </p>
                </div>

                <div className="space-y-8">
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {topRow.map((type) => {
                    const Icon = type.icon;

                    return (
                        <div
                        key={type.name}
                        className="rounded-[1.75rem] bg-[#EEF2E9] border border-[#e3e8de] px-6 py-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                        >
                        <div className="w-12 h-12 rounded-2xl bg-white border border-[#dce5d8] flex items-center justify-center mb-5">
                            <Icon className="w-5 h-5 text-[#1bae67]" />
                        </div>

                        <h3 className="text-2xl font-semibold leading-tight mb-3">
                            {type.name}
                        </h3>

                        <p className="text-[#555] leading-relaxed">
                            {type.summary}
                        </p>
                        </div>
                    );
                    })}
                </div>

                <div className="flex items-center justify-center">
                    <div className="h-px w-16 bg-[#cfd8cb]" />
                    <span className="mx-4 text-xs uppercase tracking-[0.18em] text-[#8a9488]">
                    8 Archetypes
                    </span>
                    <div className="h-px w-16 bg-[#cfd8cb]" />
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {bottomRow.map((type) => {
                    const Icon = type.icon;

                    return (
                        <div
                        key={type.name}
                        className="rounded-[1.75rem] bg-[#EEF2E9] border border-[#e3e8de] px-6 py-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                        >
                        <div className="w-12 h-12 rounded-2xl bg-white border border-[#dce5d8] flex items-center justify-center mb-5">
                            <Icon className="w-5 h-5 text-[#1bae67]" />
                        </div>

                        <h3 className="text-2xl font-semibold leading-tight mb-3">
                            {type.name}
                        </h3>

                        <p className="text-[#555] leading-relaxed">
                            {type.summary}
                        </p>
                        </div>
                    );
                    })}
                </div>
                </div>

                <div className="mt-12 text-center">
                <p className="text-sm text-[#666666] max-w-2xl mx-auto leading-relaxed">
                    Most people will see themselves in more than one archetype. Your result highlights
                    a dominant pattern, but the goal is not to reduce you to a type. It is to give you
                    a richer language for understanding how you lead.
                </p>
                </div>
            </div>
            </section>

        <section className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-white/8 border border-white/10 p-7">
              <h3 className="text-2xl font-semibold mb-3">Not a Box</h3>
              <p className="text-white/80 leading-relaxed">
                Your result is not meant to limit you. It is meant to help you better name
                your current tendencies and strengths.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/8 border border-white/10 p-7">
              <h3 className="text-2xl font-semibold mb-3">A Starting Point</h3>
              <p className="text-white/80 leading-relaxed">
                The assessment is designed to begin reflection, not end it. It gives you
                language for understanding how you lead today.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/8 border border-white/10 p-7">
              <h3 className="text-2xl font-semibold mb-3">Built for Growth</h3>
              <p className="text-white/80 leading-relaxed">
                The real value comes from how you use the insight to lead more intentionally,
                confidently, and effectively over time.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center bg-white border border-[#e5eadf] rounded-[2rem] p-10 md:p-14 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
              Ready to Explore Yours?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Take the Leadership Assessment
            </h2>
            <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-3xl mx-auto">
              Discover the archetypes, strengths, and patterns that may be shaping how you lead.
            </p>

            <div className="mt-8">
              <Link href="/assessment">
                <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                  Start the Assessment
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