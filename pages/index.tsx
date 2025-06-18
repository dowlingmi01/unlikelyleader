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
      <section className="bg-[#F0F2EB] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* BOOK */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
{/*            <img
              src="/images/UL-Dowling-hardcover.png"
              alt="Unlikely Leader Book Cover"
              className="mx-auto mb-6 w-32 h-auto rounded-md"
            />
*/}         <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">About the Book</h2>
            <p className="text-[#333333] mb-4">
              The world is changing. So are the people we look to for guidance. Today’s most effective leaders aren’t defined by their job titles or how many people report to them. They’re defined by their substance. By the values they embody, the questions they ask, and the space they create for others to grow. And often, they’re the people you least expect. These are the <em>Unlikely Leaders</em>.
            </p>
            <img
              src="/images/UL-Dowling-hardcover.png"
              alt="Unlikely Leader Book Cover"
              className="mx-auto mb-6 w-56 h-auto rounded-md shadow-lg"
            />
{/*            <p className="mt-4">
              <Link href="/book">
                <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">Learn More →</span>
              </Link>
              </p>
*/}
            <h3 className="text-2xl font-bold mb-2 text-[#1bae67]">Coming Soon</h3>
          </div>

          {/* KEYNOTES */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2 text-[#1bae67]">About the Author</h2>
            <p className="text-[#333333] mb-4">
              From Hollywood red carpets to high-growth startups, Michael Dowling spent years chasing leadership myths—until he discovered a better way. A former talent agent, start-up founder, and CEO, he’s led teams across industries and helped others rise by turning their differences into their greatest leadership strengths. Today, he helps aspiring leaders unlock the mindsets and skills to lead with confidence.
            </p>
            <img
              src="/images/MD.jpeg"
              alt="Unlikely Leader Book Cover"
              className="mx-auto mb-6 w-56 h-auto rounded-md shadow-lg"
            />
            <a
              href="https://www.linkedin.com/in/dowlingmichael/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1bae67] font-semibold hover:underline"
            >
              Learn More About Michael →
            </a>          
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
          <div className="max-w-6xl mx-auto space-y-56">
            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like. Confident. Charismatic. Commanding. Highly educated, street-smart, or both. The kind of person who takes up space.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 px-6 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like. Confident. Charismatic. Commanding. Highly educated, street-smart, or both. The kind of person who takes up space.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms. Systemic bias has reinforced it. Loud voices get noticed. Quick hands get picked.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms. Systemic bias has reinforced it. Loud voices get noticed. Quick hands get picked.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Societal Cost</h3>
                <p className="mt-2 text-[#333]">Too many capable people are not getting seen, and as a result, society is deprived of some its greatest leaders.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Societal Cost</h3>
                <p className="mt-2 text-[#333]">Too many capable people are not getting seen, and as a result, society is deprived of some its greatest leaders.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Individual Cost</h3>
                <p className="mt-2 text-[#333]">And those who don't fit this stereotypical <em>mold?</em> They face a choice: adapt or be overlooked.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Individual Cost</h3>
                <p className="mt-2 text-[#333]">And those who don't fit this stereotypical <em>mold?</em> They face a choice: adapt or be overlooked.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">Social Media Impact</h3>
                <p className="mt-2 text-[#333]">Social media further amplifies the myth. It distorts reality and rewards those who can perform for their cameras over authenticity.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">Social Media Impact</h3>
                <p className="mt-2 text-[#333]">Social media further amplifies the myth. It distorts reality and rewards those who can perform for their cameras over authenticity.</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">Weaponization of Perception</h3>
                <p className="mt-2 text-[#333]">The deception is relentless, causing too many to doubt their value, mute their instincts, and perform inauthentic versions of themselves.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">Weaponization of Perception</h3>
                <p className="mt-2 text-[#333]">The deception is relentless, causing too many to doubt their value, mute their instincts, and perform inauthentic versions of themselves.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 px-6 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">Are We Using the Right Yardstick?</h3>
                <p className="mt-2 text-[#333]">Do visibility, loudness, and fitting in make someone a better leader?</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">Are We Using the Right Yardstick?</h3>
                <p className="mt-2 text-[#333]">Do visibility, loudness, and fitting in make someone a better leader?</p>
              </div>
            </div>
            <div className="relative flex items-start flex-row-reverse">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 px-6 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">It's time to flip the script</h3>
                <p className="mt-2 text-[#333] font-bold">What if leadership... </p>
                <ul className="mt-4 space-y-0 list-none">
                  <li className="text-[#333]">Isn't about putting on a show but about lasting impact?</li>
                  <li className="text-[#333]">Isn't about dominance but about connection?</li>
                  <li className="text-[#333]">Isn't about attracting attention but about elevating others?</li>
                  <li className="text-[#333]">Isn't about unattainable popular ideas but about true understanding?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    <section className="bg-[#F0F2EB] py-10 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1bae67] mb-4">
          There is a better way
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          With the right mindset and tools, those who’ve been overlooked or underestimated can rise—and not just lead, but lead well.
        </p>
      </div>
    </section>
    <hr className="border-t-2 border-[#1bae67] w-24 mx-auto my-12" />

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
            <a
              href="https://www.thecollectiverise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1bae67] font-semibold hover:underline"
            >
              Learn More →
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
