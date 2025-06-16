import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';
import TwoColumnSection from '../components/TwoColumnSection';


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Unlikely Leader</title>
      </Head>
      <Navbar />
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
          <div className="max-w-6xl mx-auto space-y-56">
            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like. Confident. Charismatic. Commanding. The kind of person who takes up space.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 px-6 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like. Confident. Charismatic. Commanding. The kind of person who takes up space.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise, norms and systemic bias. Loud voices get noticed. Quick hands get picked.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise, norms and systemic bias. Loud voices get noticed. Quick hands get picked.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Societal Cost</h3>
                <p className="mt-2 text-[#333]">Too many capable people are overlooked, depriving society of some its greatest leaders.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Societal Cost</h3>
                <p className="mt-2 text-[#333]">Too many capable people are overlooked, depriving society of some its greatest leaders.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Individual Cost</h3>
                <p className="mt-2 text-[#333]">Others quietly disqualify themselves. Not because they lack potential-But because they don't fit a predetermined <em>mold</em>.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Individual Cost</h3>
                <p className="mt-2 text-[#333]">Others quietly disqualify themselves. Not because they lack potential-But because they don't fit a predetermined <em>mold</em>.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">Weaponization of Perception</h3>
                <p className="mt-2 text-[#333]">Social media takes this distortion and cranks it up to an extreme.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">Weaponization of Perception</h3>
                <p className="mt-2 text-[#333]">Social media takes this distortion and cranks it up to an extreme.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">What if we redefine the yardstick?</h3>
                <p className="mt-2 text-[#333] font-bold">What if leadership... </p>
                <ul className="mt-4 space-y-0 list-none">
                  <li className="text-[#333]">Isn't about putting on a show but about lasting impact?</li>
                  <li className="text-[#333]">Isn't about dominance but about connection?</li>
                  <li className="text-[#333]">Isn't about attracting attention but about elevating others?</li>
                  <li className="text-[#333]">Isn't about unattainable popular ideas but about true understanding?</li>
                </ul>
              </div>
{/*              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">What if we redfine the yardstick?</h3>
                <p className="mt-2 text-xl text-black font-bold">What if leadership isn't about...</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-[#333]">
                  <li>The Mindset of Potential says I’m not a natural born leader</li>
                  <li>Dominance but about connection?</li>
                  <li>Attracting attention but about elevating others?</li>
                  <li>Unattainable popular ideas but about true understanding?</li>
                </ul>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Mindset-Behavior-Outcome-Shift</h3>
                <p className="mt-2 text-[#333]">The most lasting change happens from the inside out. At the heart of that transformation is a simple framework highlights a critical truth: <em>Our mindset shapes our behavior, and our behavior determines our outcomes.</em></p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Shift</h3>
                <p className="mt-2 text-[#333]">The most lasting change happens from the inside out.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
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
            <div className="relative flex items-start flex-row-reverse">
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
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
              </div>*/}
            </div>
          </div>
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
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">Book a Workshop</h2>
            <p className="text-[#333333] mb-4">
              Engaging, provocative, and grounded in real stories—book Michael for your next conference or leadership event.
            </p>
            <Link href="/keynotes">
              <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
        <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="text-center py-8 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
          About 
        </h1>
{/*        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-[#333333]">
          Discover the power of quiet strength, overlooked potential, and authentic leadership.
          Based on the bestselling book <em>Unlikely Leader</em>.
        </p>
*/}      </section>

      <section className="bg-[#F0F2EB] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* QUIZ */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">About the Author</h2>
            <p className="text-[#333333] mb-4">
              From Hollywood red carpets to high-growth startups, Michael Dowling spent years chasing leadership myths—until he discovered a better way. A former talent agent, start-up founder, and CEO, he’s led teams across industries and helped others rise by turning their differences into their greatest leadership strengths. Today, he helps aspiring leaders unlock the mindsets and skills to lead with confidence.
            </p>
          </div>

          {/* BOOK */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
{/*            <img
              src="/images/UL-Dowling-hardcover.png"
              alt="Unlikely Leader Book Cover"
              className="mx-auto mb-6 w-32 h-auto rounded-md"
            />
*/}            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">About the Book</h2>
            <p className="text-[#333333] mb-4">
              The world is changing. So are the people we look to for guidance. Today’s most effective leaders aren’t defined by their job titles or how many people report to them. They’re defined by their substance. By the values they embody, the questions they ask, and the space they create for others to grow. And often, they’re the people you least expect. These are the <em>Unlikely Leaders</em>.
            </p>
            <p className="mt-4">
              <Link href="/book">
                <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">Learn More →</span>
              </Link>
              </p>
          </div>

          {/* KEYNOTES */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">Keynotes & Workshops</h2>
            <p className="text-[#333333] mb-4">
              Some of your most powerful leaders are being overlooked—not because they lack talent, but because they don’t fit the stereotypical “mold.” In this keynote and accompanying workshops, Michael Dowling challenges conventional leadership paradigms and introduces a transformational model that empowers "Unlikely Leaders" to rise. Engaging, provocative, and grounded in real stories.
            </p>
            <p className="mt-8">
              <Link href="/keynotes">
                <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">Learn More →</span>
              </Link>
              </p>
          </div>
        </div>
      </section>
    {/* EXPANDED BOTTOM SECTION WITH CARDS */}
    <section className="bg-[#F0F2EB] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">
          Continue the Journey
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore more ways to grow leadership from the inside out—whether you're just beginning or looking to deepen your impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-[#1bae67] mb-2">Custom Keynotes</h3>
          <p className="text-gray-700 mb-4">
            Book Michael for an inspiring, story-driven keynote tailored to your audience and leadership goals.
          </p>
          <a href="/keynotes" className="text-[#1bae67] font-semibold hover:underline">
            Learn More →
          </a>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-[#1bae67] mb-2">The Collective Rise</h3>
          <p className="text-gray-700 mb-4">
            Join our leadership development cohorts for a 9-month experience that builds foundational leadership mindsets and skills.
          </p>
          <a href="/collective-rise" className="text-[#1bae67] font-semibold hover:underline">
            Join the Program →
          </a>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-[#1bae67] mb-2">Start with a Quiz</h3>
          <p className="text-gray-700 mb-4">
            Not sure where to start? Discover your leadership archetype with our 2-minute Unlikely Leader Quiz.
          </p>
          <a href="/quiz" className="text-[#1bae67] font-semibold hover:underline">
            Take the Quiz →
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </div>
    </>
  );
}