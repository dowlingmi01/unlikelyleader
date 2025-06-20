import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Unlikely Leader</title>
      </Head>

      <Navbar />

      <main className="bg-[#F0F2EB] text-[#333333] font-sans min-h-screen px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#1bae67] mb-6">Privacy Policy</h1>

          <p className="mb-4">
            At <strong>Unlikely Leader</strong>, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information you provide to us directly, such as your name, email address, and any messages you send via our contact form or quiz responses.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use your information to:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Respond to inquiries</li>
              <li>Provide quiz or assessment results</li>
              <li>Improve our website and offerings</li>
              <li>Send occasional updates or content you’ve opted into</li>
            </ul>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
          <p className="mb-4">
            We do not sell or share your personal information with third parties except:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>When required by law</li>
              <li>To trusted service providers who assist in our operations (e.g., Supabase)</li>
            </ul>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4">
            We take reasonable measures to protect your data, including encryption and access control. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information. To make a request, please<a href="/contact" className="hover:underline"> <strong>Contact Us</strong></a>.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <p className="mt-6 text-sm text-gray-600">Last updated: June 20, 2025</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
