// pages/keynotes.tsx
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function KeynotesPage() {
  return (

    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      <Head>
        <title>Keynotes | Unlikely Leader</title>
      </Head>

      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
            Keynotes
          </h1>
          <p className="text-lg md:text-xl">
            Redefining Leadership from the Inside Out
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Overview</h2>
          <p className="text-lg">
            Some of your most powerful leaders are being overlooked—not because they lack talent, 
            but because they don’t fit the stereotypical mold. In this keynote and the workshops 
            that follow, Michael Dowling challenges outdated leadership paradigms and introduces 
            a transformational model designed to help “Unlikely Leaders” rise.
          </p>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-24 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Core Promise</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Recognize and dismantle outdated leadership myths</li>
            <li>Identify and empower overlooked leadership potential</li>
            <li>Embrace a new model of leadership rooted in authenticity and growth</li>
            <li>Apply the <strong>Mindset-Behavior-Outcome (MBO) Model</strong> to unlock development</li>
            <li>Expand the definition of leadership within their teams and organizations</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-24 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>The Leadership Illusion</strong> – Why charisma and visibility aren’t enough</li>
            <li><strong>The Five Limiting Mindsets</strong> – And how to reframe them for growth</li>
            <li><strong>The Hidden Talent Crisis</strong> – Why organizations miss their most capable people</li>
            <li><strong>Leadership DNA</strong> – 16 traits that matter more than titles or volume</li>
            <li><strong>The Five Unlikely Leader Archetypes</strong> – A new lens for understanding leadership diversity</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-24 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Keynote Includes</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>60–90 minute keynote (available virtual or in-person)</li>
            <li>Engaging, story-driven presentation with real-world application</li>
            <li>Case examples from real-life Unlikely Leaders</li>
            <li>Interactive moments for audience reflection and activation</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-24 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Workshop Options</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Redefining Leadership Potential</strong> – Introducing the MBO Model</li>
            <li><strong>Quiet Strength in Action</strong> – Activating the Leadership DNA</li>
            <li><strong>The 3x3 Grid & Leadership Capital</strong> – From invisible to influential</li>
            <li><strong>Archetypes in Motion</strong> – Interactive growth through peer coaching</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-24 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Ideal For</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Corporate leadership teams</li>
            <li>Employee Resource Groups (ERGs)</li>
            <li>DEI initiatives</li>
            <li>HR & Organizational Development professionals</li>
            <li>Nonprofit and educational institutions</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}



