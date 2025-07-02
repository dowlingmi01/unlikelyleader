// pages/workshops.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const sections = [
  {
    id: 'half-day',
    title: 'HALF DAY',
    subtitle: 'Workshop',
    heading: 'Immediate Impact',
    content:
      'Insert your half-day description here. Describe the purpose, outcomes, and who it’s for.',
  },
  {
    id: 'full-day',
    title: 'FULL DAY',
    subtitle: 'Workshop',
    heading: 'Deep Dive',
    content:
      'Full-day workshop details go here. This may include agenda, topics covered, and duration.',
  },
  {
    id: '9-month',
    title: '9 MONTH',
    subtitle: 'Leadership Development Program',
    heading: 'Sustained Growth',
    content:
      'Describe the 9-month integrated program. Emphasize ongoing learning and application.',
  },
];

export default function ProgramsPage() {
  const [selected, setSelected] = useState('half-day');
  const activeSection = sections.find((s) => s.id === selected);

  return (
    <>
      <Head>
        <title>Workshops | Unlikely Leader</title>
      </Head>    
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
          Leadership Workshops & Programs
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#333333]">
          Empower your team with experiences designed to ignite leadership potential and drive real impact—from half-day intensives to long-term culture change.
        </p>
      </section>
      {/*<hr className="border-t border-gray-300 my-8" />*/}

      <section className="programs-section bg-[#f7f8f3] py-12 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Leadership Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">

          {/* Half-Day Workshop */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-green-600 text-2xl font-semibold mb-2">Kickstart Clarity</div>
            <div className="text-sm font-medium text-gray-500 mb-4">Half-Day Workshop</div>
            <p className="mb-4">
              A focused, high-impact session for individuals or teams who need immediate insight and tools to move forward with confidence.
            </p>
            <p className="text-sm mb-6">
              <strong>Ideal for:</strong> New managers or intact teams navigating change.
            </p>
            <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">Contact Us to Learn More →</a>
          </div>

          {/* Full-Day Workshop */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-green-600 text-2xl font-semibold mb-2">Elevate Your Team</div>
            <div className="text-sm font-medium text-gray-500 mb-4">Full-Day Workshop</div>
            <p className="mb-4">
              A full-day deep dive into leadership fundamentals, emotional intelligence, and team dynamics.
            </p>
            <p className="text-sm mb-6">
              <strong>Ideal for:</strong> Teams looking to level up leadership capability and cohesion.
            </p>
            <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">Contact Us to Learn More →</a>
          </div>

          {/* 9-Month Program */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-green-600 text-2xl font-semibold mb-2">Transform Your Culture</div>
            <div className="text-sm font-medium text-gray-500 mb-4">9-Month Program</div>
            <p className="mb-4">
              A transformative leadership development journey with monthly training, peer support, and real-world application.
            </p>
            <p className="text-sm mb-6">
              <strong>Ideal for:</strong> Companies ready to grow internal talent and build a coaching culture.
            </p>
            <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">Contact Us to Learn More →</a>
          </div>

        </div>
      </section>

      <section className="bg-[#f7f8f3] py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Where Are You on Your Leadership Journey?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800">

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-white bg-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <span className="uppercase text-sm font-semibold text-gray-500">Step 1</span>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Spark Insight</h3>
            <p className="text-sm text-gray-700 mb-4">
              Kickstart growth with a powerful, focused session that uncovers blind spots and builds foundational awareness.
            </p>
            <p className="text-sm mb-6"><strong>Format:</strong> Half-Day Workshop</p>
            <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">Contact Us to Learn More →</a>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-white bg-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <span className="uppercase text-sm font-semibold text-gray-500">Step 2</span>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Deepen Skill</h3>
            <p className="text-sm text-gray-700 mb-4">
              Strengthen emotional intelligence, decision-making, and leadership presence in an immersive, team-based experience.
            </p>
            <p className="text-sm mb-6"><strong>Format:</strong> Full-Day Workshop</p>
            <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">Contact Us to Learn More →</a>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-white bg-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <span className="uppercase text-sm font-semibold text-gray-500">Step 3</span>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Lead the Change</h3>
            <p className="text-sm text-gray-700 mb-4">
              Cultivate leadership across your organization through an integrated curriculum and ongoing support system.
            </p>
            <p className="text-sm mb-6"><strong>Format:</strong> 9-Month Leadership Program</p>
            <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">Contact Us to Learn More →</a>
          </div>

        </div>
      </section>

<section className="programs-section bg-[#f7f8f3] py-16 px-6 md:px-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Explore Our Leadership Programs
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800">

    {/* Kickstart Clarity */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🧠</span>
        <div>
          <div className="text-green-600 text-2xl font-semibold">Kickstart Clarity</div>
          <div className="text-sm font-medium text-gray-500">Half-Day Workshop</div>
        </div>
      </div>
      <p className="mb-4">
        A focused, high-impact session for individuals or teams who need immediate insight and tools to move forward with confidence.
      </p>
      <p className="text-sm mb-6"><strong>Ideal for:</strong> New managers or intact teams navigating change.</p>
      <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">
        Contact Us to Learn More →
      </a>
    </div>

    {/* Elevate Your Team */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🚀</span>
        <div>
          <div className="text-green-600 text-2xl font-semibold">Elevate Your Team</div>
          <div className="text-sm font-medium text-gray-500">Full-Day Workshop</div>
        </div>
      </div>
      <p className="mb-4">
        A full-day deep dive into leadership fundamentals, emotional intelligence, and team dynamics.
      </p>
      <p className="text-sm mb-6"><strong>Ideal for:</strong> Teams looking to level up leadership capability and cohesion.</p>
      <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">
        Contact Us to Learn More →
      </a>
    </div>

    {/* Transform Your Culture */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🌱</span>
        <div>
          <div className="text-green-600 text-2xl font-semibold">Transform Your Culture</div>
          <div className="text-sm font-medium text-gray-500">9-Month Program</div>
        </div>
      </div>
      <p className="mb-4">
        A transformative leadership development journey with monthly training, peer support, and real-world application.
      </p>
      <p className="text-sm mb-6"><strong>Ideal for:</strong> Companies ready to grow internal talent and build a coaching culture.</p>
      <a href="/contact" className="text-green-600 font-semibold underline hover:text-green-800">
        Contact Us to Learn More →
      </a>
    </div>

  </div>
</section>


      <Footer />
    </>
  );
}
