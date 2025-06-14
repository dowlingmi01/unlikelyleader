// pages/index.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Unlikely Leader</title>
      </Head>

    <Navbar/>
    <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
          Redefining What It Means to Lead
        </h1>
        <p className="text-lg md:text-2xl font-bold max-w-2xl mx-auto mb-6 text-[#333333]">
          We’ve been told who gets to lead—and who doesn’t. 
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-[#333333]">
        <em>Unlikely Leader</em> flips the script on outdated myths and empowers the overlooked to rise by leading from who they truly are, not by performing someone else’s version of leadership. 
        </p>
      </section>

      {/* THREE PROMO PANELS */}
      <section className="bg-[#F0F2EB] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* QUIZ */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">Discover Your Leadership Archetype</h2>
            <p className="text-[#333333] mb-4">
              The <em>Unlikely Leader</em> Archetypes celebrate the diverse ways people lead from within, offering clarity, confidence, and a fresh lens on your leadership potential. Whether you're a Steady Anchor or a Quiet Strategist, your leadership style deserves to be seen, valued, and elevated. Take the assessment and discover your archetype and unlock the mindset that makes you powerful.
            </p>
            <Link href="/quiz">
              <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition cursor-pointer">
                Take the Assessment
              </span>
            </Link>
          </div>

          {/* BOOK */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src="/images/UL-Dowling-hardcover.png"
              alt="Unlikely Leader Book Cover"
              className="mx-auto mb-6 w-56 h-auto rounded-md shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">Read the Book</h2>
            <p className="text-[#333333] mb-4">
              <em>Unlikely Leader</em> offers a new model of leadership for a new era—grounded, authentic, and deeply human.
            </p>
            <Link href="/book">
              <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">Explore the Book →</span>
            </Link>
          </div>

          {/* KEYNOTES */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">Book a Keynote</h2>
            <p className="text-[#333333] mb-4">
              Engaging, provocative, and grounded in real stories—book Michael for your next conference or leadership event.
            </p>
            <Link href="/keynotes">
              <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="text-center py-10 px-6 bg-[#F0F2EB]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
          The story we've been told
        </h1>
        <p className="text-lg md:text-2xl font-bold max-w-2xl mx-auto mb-6 text-[#333333]">
          What if everything we've been taught about leadership is wrong? 
        </p>
      </section>

        <section className="relative bg-[#F0F2EB] py-20">
          <div className="border-l-4 border-[#1bae67] absolute left-1/2 top-0 h-full -ml-px"></div>
          <div className="max-w-6xl mx-auto space-y-48">
            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like. Confident. Charismatic. Commanding. The kind of person who takes up space.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like. Confident. Charismatic. Commanding. The kind of person who takes up space.</p>
              </div>
            </div>

            {/* Right Block */}
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms. Loud voices get noticed. Quick hands get picked. But does that make them better leaders?</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms. Loud voices get noticed. Quick hands get picked. But does that make them better leaders?</p>
              </div>
            </div>
            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Cost</h3>
                <p className="mt-2 text-[#333]">Here’s the cost. Too many are overlooked. Others quietly disqualify themselves. Not because they lack potential—But because they don’t fit the mold.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Cost</h3>
                <p className="mt-2 text-[#333]">Here’s the cost. Too many are overlooked. Others quietly disqualify themselves. Not because they lack potential—But because they don’t fit the mold.</p>
              </div>
            </div>

            <div className="relative flex items-start flex-row-reverse">
              {/* Desktop Version */}
              <div className="w-1/2 pl-10 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The 5 Mindsets</h3>
                <p className="mt-2 text-[#333] font-bold">These 5 mindsets quietly hold back Unlikely Leaders.</p>
                <ul className="mt-4 space-y-0 list-none">
                  <li className="text-[#333]">The Mindset of Potential says I’m not a natural born leader</li>
                  <li className="text-[#333]">The Mindset of Character says I have to be someone else</li>
                  <li className="text-[#333]">The Mindset of Emotion says emotions make me weak</li>
                  <li className="text-[#333]">The Mindset of Decision-Making says I have to be quick and decisive</li>
                  <li className="text-[#333]">The Mindset of Impact says I need to rule with authority</li>
                </ul>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>

              {/* Mobile Version */}
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The 5 Mindsets</h3>
                <p className="mt-2 text-xl text-black font-bold">These 5 mindsets quietly hold back Unlikely Leaders.</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-[#333]">
                  <li>The Mindset of Potential says I’m not a natural born leader</li>
                  <li>The Mindset of Character says I have to be someone else</li>
                  <li>The Mindset of Emotion says emotions make me weak</li>
                  <li>The Mindset of Decision-Making says I have to be quick and decisive</li>
                  <li>The Mindset of Impact says I need to rule with authority</li>
                </ul>
              </div>
            </div>
            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Mindset-Behavior-Outcome-Shift</h3>
                <p className="mt-2 text-[#333]">What if leadership isn’t a performance—but a mindset? Our beliefs shape our behaviors. Our behaviors shape our outcomes. Mindsets matter.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Shift</h3>
                <p className="mt-2 text-[#333]">What if leadership isn’t a performance—but a mindset? Our beliefs shape our behaviors. Our behaviors shape our outcomes. Mindsets matter.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              {/* Desktop Version */}
              <div className="w-1/2 pl-10 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">Reframe Your Mindsets</h3>
                <ul className="mt-4 space-y-0 list-none">
                  <li className="text-[#333]"><strong>Potential</strong> is not a birthright. It's about <em>what</em> you do.</li>
                  <li className="text-[#333]"><strong>Character</strong> is not about performance. It's about authenticity.</li>
                  <li className="text-[#333]"><strong>Emotions</strong> don't make you weak. They enable you to see what others miss.</li>
                  <li className="text-[#333]"><strong>Decision-Making</strong> isn't about impulse. It's about clarity and intention.</li>
                  <li className="text-[#333]"><strong>Impact</strong> isn't about control. It's about connection.</li>
                </ul>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>

              {/* Mobile Version */}
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">Reframe Your Mindsets</h3>
                <p className="mt-2 text-xl text-black font-bold"></p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-[#333]">
                  <li><strong>Potential</strong> is not a birthright. It's about what you do.</li>
                  <li><strong>Character</strong> is not about performance. It's about authenticity.</li>
                  <li><strong>Emotions</strong> don't make you weak. They enable you to see what others miss.</li>
                  <li><strong>Decision-Making</strong> isn't about impulse. It's about clarity and intention.</li>
                  <li><strong>Impact</strong> isn't about control. It's about connection.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </div>
    </>
  );
}
