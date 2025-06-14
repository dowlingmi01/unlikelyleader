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
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN – Image + Heading */}

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1bae67]">
              Your Bold Heading Here
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This is where you add descriptive content that supports the image and heading.
              Use this space to explain what the section is about, why it matters, or how the
              viewer should engage with it.
            </p>
{/*            <img
              src="/images/UL-Dowling-hardcover.png"
              alt="Descriptive alt text"
              className="w-full max-w-md mx-auto md:mx-0 mb-6 md:mb-4"
            />
*/}
          </div>

          {/* RIGHT COLUMN – Supporting Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1bae67]">
              Your Bold Heading Here
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This is where you add descriptive content that supports the image and heading.
              Use this space to explain what the section is about, why it matters, or how the
              viewer should engage with it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              You can also break it into multiple paragraphs for readability or add a call to
              action link or button below.
            </p>
          </div>
        </div>
      </section>

        <Footer />
    </>
  );
}
