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