import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

export default function Test() {
 return (
    <>
      <Head>
        <title>Test | Unlikely Leader</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <Navbar />
 

        <section className="relative bg-[#F0F2EB] py-20">
          <div className="border-l-4 border-[#1bae67] absolute left-1/2 top-0 h-full -ml-px"></div>

          <div className="max-w-6xl mx-auto space-y-24">

            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like...</p>
              </div>
            </div>

            {/* Right Block */}
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms...</p>
              </div>
            </div>

            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like...</p>
              </div>
            </div>

            {/* Right Block */}
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms...</p>
              </div>
            </div>
            {/* Left Block */}
            <div className="relative flex items-start">
              <div className="w-1/2 pr-10 text-right hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pl-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Stereotype</h3>
                <p className="mt-2 text-[#333]">There’s a stereotype about what a leader looks like...</p>
              </div>
            </div>

            {/* Right Block */}
            <div className="relative flex items-start flex-row-reverse">
              <div className="w-1/2 pl-10 text-left hidden md:block">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms...</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1bae67] rounded-full z-10"></div>
              <div className="w-1/2 pr-10 md:hidden">
                <h3 className="text-2xl font-bold text-[#1bae67]">The Myth</h3>
                <p className="mt-2 text-[#333]">It’s a myth shaped by noise and norms...</p>
              </div>
            </div>
            {/* Repeat for each section */}
          </div>
        </section>
        <Footer />
    </>
  );
}
