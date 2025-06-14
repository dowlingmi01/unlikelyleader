import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Unlikely Leader</title>
      </Head>

      <Navbar />
      <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
        <section className="text-center py-20 px-6 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Have questions, ideas, or want to connect? We'd love to hear from you.
          </p>
        </section>

        <section className="bg-[#F0F2EB] py-16 px-6">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-40"
              ></textarea>
              <button
                type="submit"
                className="bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
