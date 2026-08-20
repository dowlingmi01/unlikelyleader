import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export default function NsaContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const source = 'influence_2025';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setStatus('Something went wrong. Please try again.');
      console.error('Supabase is not configured.');
      return;
    }
    const { error } = await supabase.from('contact_messages').insert([
      { name, email, address, city, state, zip, message, source },
    ]);

    if (error) {
      setStatus('Something went wrong. Please try again.');
      console.error(error);
    } else {
      try {
        await fetch('/api/send-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'contact',
            name,
            email,
            address,
            city,
            state,
            zip,
            message,
            source,
          }),
        });
      } catch (notifyError) {
        console.error('Notification failed:', notifyError);
      }
      console.log({
        name, email, address, city, state, zip, message, source: 'influence_2025'
      });

      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setMessage('');
    }
  };

  return (
    <>
      <Seo
        title="NSA Connect | Unlikely Leader"
        description="Connect with Michael Dowling and Unlikely Leader — share your details to stay in touch after Influence."
        path="/nsa-connect"
        noindex
      />

      <Navbar />
      <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
        {/* HERO SECTION: TWO COLUMNS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#1bae67] mb-4">
                Great to Connect at 2025 Influence!
              </h1>
              <p className="text-lg md:text-xl max-w-xl">
                Enter your full address below for a copy of the book, or just your email if you want to connect.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/UL-Dowling-hardcover.png"
                alt="The Unlikely Leader book"
                width={384}
                height={512}
                className="rounded-xl w-full max-w-sm shadow-lg h-auto"
              />
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="bg-[#F0F2EB] py-16 px-6">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="flex-1 p-3 border border-gray-300 rounded-lg"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-20 p-3 border border-gray-300 rounded-lg"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-28 p-3 border border-gray-300 rounded-lg"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-40"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-[#1bae67] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#088f97] transition"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-center mt-2">{status}</p>}
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
