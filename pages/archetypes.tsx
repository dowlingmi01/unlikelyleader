import { useState } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';


const archetypes = [
  {
    id: 'steady-anchor',
    name: 'The Steady Anchor',
    tagline: 'Calm, grounded, reliable under pressure',
    image: '/images/archetypes/steady-anchor.png',
    description: 'You bring a calm, grounding presence to teams. In moments of stress or change, people look to you for stability and reassurance.',
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
  {
    id: 'quiet-strategist',
    name: 'The Quiet Strategist',
    tagline: 'Focused, intentional, plays the long game',
    image: '/images/archetypes/quiet-strategist.png',
    description: 'You lead through clarity, intentionality, and focus. You’re always thinking 3 steps ahead.',
  },
  {
    id: 'humble-fire',
    name: 'The Humble Fire',
    tagline: 'Passionate, values-driven, leads by example',
    image: '/images/archetypes/humble-fire.png',
    description: 'You inspire by doing. Your passion runs deep, and people follow your example, not just your words.',
  },
];

export default function ArchetypesPage() {
  const [selected, setSelected] = useState<null | typeof archetypes[0]>(null);

  return (
    <>
      <Head>
        <title>Archetypes | Unlikely Leader</title>
      </Head>
      <Navbar />

      {/* HERO */}
      <section className="bg-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
          Meet the Archetypes
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[#333333]">
          Each Unlikely Leader archetype reflects a unique leadership style rooted in authenticity, emotional intelligence, and quiet strength.
        </p>
      </section>

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
                className="w-32 h-32 mx-auto mb-4 object-contain"
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
