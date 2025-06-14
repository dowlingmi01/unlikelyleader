// pages/assessment.tsx
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function AssessmentPage() {
  return (
    <>
      <Head>
        <title>Assessment | Unlikely Leader</title>
      </Head>
      <Navbar />

      <section className="bg-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
          Discover Your Leadership DNA
        </h1>
        <p className="text-2xl max-w-2xl mx-auto text-[#333333] mb-8">
          You don’t have to fit the mold to be a great leader. You just need to understand your strengths. 
        </p>
      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-lg font-bold text-[#333333] mb-0">
          Most leadership quizzes tell you who you should become.
        </p>
        <p className="text-lg text-[#333333]">
          This one shows you the power of who you already are.
        </p>
      </div>
        <p className="text-lg max-w-2xl mx-auto text-[#333333] mb-4">
          Take the Unlikely Leader Quiz to discover your leadership archetype—and unlock the power of how you naturally lead.
        </p>
      <Link href="/quiz">
        <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition cursor-pointer mt-4">
          Start the Quiz
        </span>
      </Link>

      <p className="mt-4">
        <Link href="/archetypes">
          <span className="text-[#1bae67] font-semibold hover:underline cursor-pointer">
            Learn More About the Archetypes
          </span>
        </Link>
      </p>
      </section>
    <Footer />
    </>
  );
}
