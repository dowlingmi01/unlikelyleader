// pages/workshops.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';


const archetypes = [
  {
    id: 'half-day',
    name: 'HALF DAY',
    tagline: 'Immediate Impact',
    image: '/images/archetypes/steady-anchor.png',
    description:
      'Insert your half-day description here. Describe the purpose, outcomes, and who it’s for.',
  },
  {
    id: 'insightful-observer',
    name: 'The Insightful Observer',
    tagline: 'Thoughtful, perceptive, listens deeply',
    image: '/images/archetypes/insightful-observer.png',
    description: 'You notice what others miss. Your quiet insights often unlock solutions no one else saw coming.',
  },
  {
    id: 'rational-bridge',
    name: 'The Rational Bridge',
    tagline: 'Clear, practical, trusted in tough moments',
    image: '/images/archetypes/rational-bridge.png',
    description: 'You’re the one people trust when decisions get tough. You see the path forward and help others follow it with clarity and calm.',
  },
];
export default function ProgramPage() {
  const [selected, setSelected] = useState<null | typeof archetypes[0]>(null);

  return (
    <>
      <Head>
        <title>Archetypes | Unlikely Leader</title>
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

      {/* CARDS */}
      <section className="bg-[#F0F2EB] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {archetypes.map((archetype) => (
            <button
              key={archetype.id}
              onClick={() => setSelected(archetype)}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center focus:outline-none"
            >
              <img
                src={archetype.image}
                alt={`${archetype.name} illustration`}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h2 className="text-xl font-bold text-[#1bae67] mb-2">{archetype.name}</h2>
              <p className="text-[#333333]">{archetype.tagline}</p>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl font-bold"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center text-[#1bae67] mb-2">{selected.name}</h2>
            <p className="text-center text-gray-600 italic mb-4">{selected.tagline}</p>
            <p className="text-gray-700 text-sm text-center">{selected.description}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}