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
        <section className="mb-16 text-center background-white">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
            Keynotes
          </h1>
          <p className="text-lg font-bold md:text-xl">
            Redefining Leadership from the Inside Out
          </p>
        </section>

        <section className="mb-16">
          <blockquote className="italic text-xl text-center text-gray-600 border-l-4 border-[#1bae67] pl-4 mb-8">
            “Leadership isn’t about personality—it’s about presence. And presence begins with self-awareness.”
          </blockquote>
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Overview</h2>
          <p className="text-lg">
            Some of your most powerful leaders are being overlooked—not because they lack talent,
            but because they don’t fit the stereotypical mold. In this keynote and the workshops
            that follow, Michael Dowling challenges outdated leadership paradigms and introduces
            a transformational model designed to help “Unlikely Leaders” rise.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-6">Core Promise</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li><strong>Discover:</strong> What’s broken in our leadership filters—and how to fix them</li>
            <li><strong>Recognize:</strong> Hidden leadership traits in yourself and others</li>
            <li><strong>Learn:</strong> A repeatable model for leadership growth (the MBO Model)</li>
            <li><strong>Shift:</strong> From old definitions of leadership to future-ready ones</li>
            <li><strong>Apply:</strong> The MBO Model to individual, team, and org-level growth</li>
            <li><strong>Expand:</strong> How leadership is defined and recognized in your culture</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Key Concepts</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>The Leadership Illusion:</strong> The problem with how we evaluate leadership potential</li>
            <li><strong>The Hidden Talent Crisis:</strong> Why organizations miss their most capable people</li>
            <li><strong>The Leadership DNA:</strong> 16 traits that matter more than titles or volume</li>
            <li><strong>The Five Limiting Mindsets:</strong> How to identify and reframe them</li>
            <li><strong>The Five Unlikely Leader Archetypes:</strong> A new lens for understanding leadership diversity</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Keynote Includes</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>60–90 minute keynote (available virtual or in-person)</li>
            <li>Engaging, story-driven presentation with real-world application</li>
            <li>Case examples from real-life Unlikely Leaders</li>
            <li>Interactive moments for audience reflection and activation</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-6">Workshop Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Redefining Leadership Potential</h3>
              <p className="text-base">Unlock Hidden Talent with a Better 9-Box Assessment.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Unlocking Leadership Potential</h3>
              <p className="text-base">Introducing the Mindset-Behavior-Outcome Model.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Archetypes in Motion</h3>
              <p className="text-base">Understand and embrace unique leadership approaches.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1bae67] mb-4">Ideal For</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Corporate leadership teams</li>
            <li>Employee Resource Groups (ERGs)</li>
            <li>DEI initiatives</li>
            <li>HR & Organizational Development professionals</li>
            <li>Nonprofit and educational institutions</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <p className="text-xl mb-6">
            Ready to elevate your team’s leadership potential?<br />
            Let’s talk about how this keynote can spark a shift in your organization.
          </p>
          <Link href="/contact">
            <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition cursor-pointer">
              Contact Us to Learn More
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
