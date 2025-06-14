// pages/index.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Home | Unlikely Leader</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <Navbar />
      <div className="bg-[#F0F2EB] text-[#333333] font-sans">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-[#333333] text-white px-6 text-center" data-aos="slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="slide-up">There’s a stereotype about what a leader looks like.</h1>
          <p className="text-lg md:text-xl" data-aos="slide-up" data-aos-delay="150">Confident. Charismatic. Commanding. The kind of person who takes up space.</p>
        </section>

        {/* SECTION 2: THE MYTH */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center" data-aos="slide-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="slide-up">It’s a myth—shaped by noise and norms.</h2>
          <p className="text-lg md:text-xl" data-aos="slide-up" data-aos-delay="150">Loud voices get noticed. Quick hands get picked. But does that make them better leaders?</p>
        </section>

        {/* SECTION 3: THE COST */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-[#96CEA0] text-[#333333] px-6 text-center" data-aos="slide-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="slide-up">Here’s the cost.</h2>
          <p className="text-lg md:text-xl" data-aos="slide-up" data-aos-delay="150">Too many are overlooked. Others quietly disqualify themselves.<br />Not because they lack potential—<br />But because they don’t fit the mold.</p>
        </section>

        {/* SECTION 4: THE SHIFT */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center" data-aos="slide-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="slide-up">What if leadership isn’t a performance—<br />but a mindset?</h2>
          <p className="text-lg md:text-xl" data-aos="slide-up" data-aos-delay="150">Our beliefs shape our behaviors. Our behaviors shape our outcomes. Mindsets matter.</p>
        </section>

        {/* SECTION 5: THE FIVE MINDSETS */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-[#0AB0BD] text-white px-6 text-center" data-aos="slide-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8" data-aos="slide-up">These 5 mindsets quietly hold back Unlikely Leaders.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            <div className="bg-white text-[#333333] rounded-2xl p-6 shadow-md" data-aos="slide-up" data-aos-delay="100">I’m not enough</div>
            <div className="bg-white text-[#333333] rounded-2xl p-6 shadow-md" data-aos="slide-up" data-aos-delay="200">I have to be someone else</div>
            <div className="bg-white text-[#333333] rounded-2xl p-6 shadow-md" data-aos="slide-up" data-aos-delay="300">I can’t show emotion</div>
            <div className="bg-white text-[#333333] rounded-2xl p-6 shadow-md" data-aos="slide-up" data-aos-delay="400">I have to decide alone</div>
            <div className="bg-white text-[#333333] rounded-2xl p-6 shadow-md" data-aos="slide-up" data-aos-delay="500">I shouldn’t aim too high</div>
          </div>
        </section>

        {/* SECTION 6: THE RISE */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center" data-aos="slide-up">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="slide-up">Shifting your mindset is where leadership begins.</h2>
          <p className="text-lg md:text-xl mb-8" data-aos="slide-up" data-aos-delay="150">This is how Unlikely Leaders rise—<br />Not by changing who they are,<br />But by letting go of who they think they’re supposed to be.</p>
          <Link href="/quiz">
            <span className="inline-block bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition cursor-pointer" data-aos="slide-up" data-aos-delay="300">
              Take the Quiz
            </span>
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
}