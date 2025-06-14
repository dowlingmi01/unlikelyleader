// pages/programs.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const sections = [
  {
    id: 'half-day',
    title: 'HALF DAY',
    subtitle: 'WORKSHOPS',
    heading: 'Immediate Impact',
    content:
      'Insert your half-day description here. Describe the purpose, outcomes, and who it’s for.',
  },
  {
    id: 'full-day',
    title: 'FULL DAY',
    subtitle: 'WORKSHOPS',
    heading: 'Deep Dive',
    content:
      'Full-day workshop details go here. This may include agenda, topics covered, and duration.',
  },
  {
    id: '9-month',
    title: '9 Month',
    subtitle: 'FULLY MANAGED',
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

      {/* MAIN INTERACTIVE SECTION */}
      <div className="bg-[#F0F2EB] text-[#333333] font-sans px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT MENU */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setSelected(section.id)}
                className={`cursor-pointer ${
                  selected === section.id
                    ? 'text-[#1bae67] font-bold'
                    : 'hover:text-[#1bae67] transition'
                }`}
              >
                <div className="uppercase tracking-wide">{section.title}</div>
                <div className="text-sm">{section.subtitle}</div>
              </div>
            ))}
          </div>

          {/* VERTICAL DIVIDER + TRIANGLE */}
          <div className="hidden md:flex justify-center relative">
            <div className="w-px bg-red-600 h-full"></div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold italic mb-4">
              {activeSection?.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {activeSection?.content}
            </p>
            <a
              href="/contact"
              className="text-red-600 underline hover:text-red-800"
            >
              Contact us to find out more
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
