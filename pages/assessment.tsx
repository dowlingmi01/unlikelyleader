// pages/assessment.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Link from 'next/link';
import { ASSESSMENT_FAQS, faqJsonLd } from '../lib/jsonLd';
import { trackEvent } from '../lib/analytics';

const insightCards = [
  {
    title: 'Your Leadership Tendencies',
    description:
      'See how you naturally approach leadership, including where you tend to show strength, caution, and consistency.',
  },
  {
    title: 'Your Hidden Strengths',
    description:
      'Uncover qualities that may be easy to miss in traditional leadership models, but matter deeply in real-world leadership.',
  },
  {
    title: 'Your Growth Edges',
    description:
      'Identify patterns that may limit your impact so you can lead more intentionally and confidently.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Complete the Assessment',
    description:
      'Answer a short series of questions designed to surface your leadership patterns and tendencies.',
  },
  {
    number: '02',
    title: 'Get Your Result',
    description:
      'Receive a profile that helps you better understand your style, strengths, and how you tend to show up.',
  },
  {
    number: '03',
    title: 'Reflect and Apply',
    description:
      'Use the insight to better understand yourself, grow your leadership, and see your impact more clearly.',
  },
];

const audience = [
  'Emerging leaders',
  'Managers and people leaders',
  'Professionals exploring their leadership identity',
  'Individuals who have felt overlooked by traditional leadership definitions',
];

export default function AssessmentPage() {
  return (
    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      <Seo
        title="Leadership Assessment | Unlikely Leader"
        description="Take the Leadership Assessment to better understand your leadership style, hidden strengths, and growth opportunities."
        path="/assessment"
        jsonLd={faqJsonLd(ASSESSMENT_FAQS)}
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-6 py-24 md:py-28">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-5">
                Leadership Assessment
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] text-[#333333] max-w-4xl">
                See your leadership more clearly
              </h1>

              <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#4a4a4a] max-w-2xl">
                This assessment helps you explore your leadership tendencies,
                uncover hidden strengths, and better understand how you show up,
                decide, relate, and lead.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/lap" onClick={() => trackEvent('lap_start', { location: 'assessment_hero' })}>
                  <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                    Take the Assessment
                  </span>
                </Link>

                <a href="/how-it-works">
                  <span className="inline-block border border-[#1bae67] text-[#1bae67] font-semibold px-6 py-3 rounded-xl hover:bg-white transition cursor-pointer">
                    Learn How It Works
                  </span>
                </a>
              </div>

              <p className="mt-6 text-sm text-[#666666]">
                Designed to reveal leadership patterns that traditional models often overlook.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white border border-[#e5eadf] shadow-lg p-4">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-[#dfe8db] p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-[#1bae67] font-semibold mb-3">
                      What You’ll Explore
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                      Strengths, patterns, blind spots, and the way you naturally lead
                    </h2>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                      <p className="text-sm text-[#666]">Insight</p>
                      <p className="font-semibold">A clearer understanding of your style</p>
                    </div>
                    <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                      <p className="text-sm text-[#666]">Outcome</p>
                      <p className="font-semibold">A stronger foundation for growth</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="hidden md:block absolute -bottom-6 -left-6 bg-[#333333] text-white rounded-2xl px-5 py-4 shadow-lg max-w-xs">
                <p className="text-sm uppercase tracking-[0.16em] text-white/70">Core Idea</p>
                <p className="font-semibold mt-1">
                  You may be leading more than you realize.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto bg-white border border-[#e5eadf] rounded-[2rem] shadow-sm p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Why Take It
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                Leadership is often misunderstood before it is ever developed.
              </h2>
              <p className="text-lg leading-relaxed text-[#555]">
                Many people assume leadership belongs to those who are loudest,
                most visible, or most certain. This assessment offers a different
                lens. It helps you better understand how your strengths, instincts,
                and patterns shape the way you lead.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {insightCards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-[#F0F2EB] p-6">
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-[#555] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-6 py-20 bg-[#333333] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#96CEA0] font-semibold mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                A simple process designed to create real insight
              </h2>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                The assessment is straightforward, reflective, and designed to help
                you better understand the leader you already are becoming.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[1.75rem] bg-white/8 border border-white/10 p-7"
                >
                  <p className="text-sm uppercase tracking-[0.14em] text-[#96CEA0] font-semibold mb-3">
                    {step.number}
                  </p>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
                Who It’s For
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                For people who want a better understanding of how they lead
              </h2>
              <p className="text-lg text-[#555] leading-relaxed">
                Whether you already lead a team, are growing into leadership, or are
                simply trying to better understand your strengths, this assessment
                gives you a meaningful place to begin.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {audience.map((item) => (
                <div
                  key={item}
                  className="bg-white border border-[#e5eadf] rounded-2xl px-5 py-6 shadow-sm"
                >
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center bg-white border border-[#e5eadf] rounded-[2rem] p-10 md:p-14 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-[#1bae67] font-semibold mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Discover your leadership with a clearer lens
            </h2>
            <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-3xl mx-auto">
              Take the assessment to better understand your leadership style,
              uncover hidden strengths, and begin leading with greater clarity and intention.
            </p>

            <div className="mt-8">
              <Link href="/lap" onClick={() => trackEvent('lap_start', { location: 'assessment_footer' })}>
                <span className="inline-block bg-[#1bae67] text-white font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm">
                  Take the Assessment
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