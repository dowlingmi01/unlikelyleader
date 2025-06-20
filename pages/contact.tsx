import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase.from('contact_messages').insert([
    { name, email, message },
  ]);

  if (error) {
    setStatus('Something went wrong. Please try again.');
    console.error(error);
  } else {
    // Send notification
    try {
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name,
          email,
          message,
        }),
      });
    } catch (notifyError) {
      console.error('Notification failed:', notifyError);
    }

    setStatus('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  }
};



  return (
    <>
      <Head>
        <title>Contact | Unlikely Leader</title>
      </Head>

      <Navbar />
      <div className="bg-[#F0F2EB] text-[#333333] min-h-screen font-sans">
        <section className="text-center py-20 px-6 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1bae67] mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Have questions, ideas, or want to connect? We'd love to hear from you.
          </p>
        </section>

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
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-40"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
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
