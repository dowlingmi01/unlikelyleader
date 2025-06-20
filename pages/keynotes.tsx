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
          <p className="text-lg font-bold md:text-xl">
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
        <hr className="border-t-2 border-[#1bae67] w-48 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Core Promise</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Recognize and dismantle outdated leadership myths</li>
            <li>Identify and empower overlooked leadership potential</li>
            <li>Embrace a new model of leadership rooted in authenticity and growth</li>
            <li>Apply the <strong>Mindset-Behavior-Outcome (MBO) Model</strong> to unlock development</li>
            <li>Expand the definition of leadership within teams and organizations</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-48 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>The Leadership Illusion:</strong> The problem with how we evaluate leadership potential.</li>
            <li><strong>The Hidden Talent Crisis:</strong> Why organizations miss their most capable people.</li>
            <li><strong>The Leadership DNA:</strong> 16 traits that matter more than titles or volume.</li>
            <li><strong>The Five Limiting Mindsets:</strong> How to identify and reframe them.</li>
            <li><strong>The Five Unlikely Leader Archetypes:</strong> A new lens for understanding leadership diversity</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-48 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Keynote Includes</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>60–90 minute keynote (available virtual or in-person)</li>
            <li>Engaging, story-driven presentation with real-world application</li>
            <li>Case examples from real-life Unlikely Leaders</li>
            <li>Interactive moments for audience reflection and activation</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-48 mx-auto my-12" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Workshop Options</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Redefining Leadership Potential</strong> - Unlock Hidden Talent with a Better 9-Box Assessment.</li>
            <li><strong>Unlocking Leadership Potential</strong> – Introducing the Mindset-Behavior-Outcome Model.</li>
            <li><strong>Archetypes in Motion</strong> – Understand and Embrace Unique Leadership Approaches.</li>
          </ul>
        </section>
        <hr className="border-t-2 border-[#1bae67] w-48 mx-auto my-12" />
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
      <Link href="/contact">
        <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition cursor-pointer mt-4">
          Contact Us to Learn More
        </span>
      </Link>
       </main>
      <Footer />
    </div>
  );
}



