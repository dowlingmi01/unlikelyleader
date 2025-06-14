import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';
import TwoColumnSection from '../components/TwoColumnSection';

export default function AboutPage() {
  return (
    <>
    <Head>
    	<title>Book | Unlikely Leader</title>
    </Head>

	<Navbar />
      <TwoColumnSection
        heading="The Power of Quiet Leadership"
        imageSrc="/images/UL-Dowling-hardcover.png"
        imageAlt="A calm, confident leader"
        imageOnLeft={false}
        textLeft={
          <>
            <p>
              Many of today’s most impactful leaders aren’t the loudest in the room—
              they’re the most intentional. <strong>Quiet strength</strong> builds trust,
              clarity, and results.
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Lead with grounded confidence</li>
              <li>Earn trust through consistency</li>
              <li>Elevate others without ego</li>
            </ul>
          </>
        }
        textRight={
          <p>
            Explore how our programs support this emerging leadership style—and help
            you grow it from within.
          </p>
        }
      />
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
	</>
	);
}