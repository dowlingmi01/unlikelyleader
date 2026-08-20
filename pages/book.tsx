import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import TwoColumnSection from '../components/TwoColumnSection';
import { bookJsonLd } from '../lib/jsonLd';
import { BOOK_AMAZON_URL } from '../lib/site';
import { trackEvent } from '../lib/analytics';

export default function BookPage() {
  return (
    <>
      <Seo
        title="Book | Unlikely Leader"
        description="The Unlikely Leader by Michael Dowling — available now. A book about overlooked leaders, outdated leadership myths, and a more grounded path forward."
        path="/book"
        ogType="book"
        jsonLd={bookJsonLd()}
      />

      <Navbar />
      <main>
        <TwoColumnSection
          heading="The Unlikely Leader"
          headingAs="h1"
          imageSrc="/images/UL-Dowling-hardcover.png"
          imageAlt="The Unlikely Leader hardcover book by Michael Dowling"
          imageOnLeft={false}
          ctaHref={BOOK_AMAZON_URL}
          ctaLabel="Available Now on Amazon →"
          onCtaClick={() => trackEvent('book_click', { location: 'book_page' })}
          textLeft={
            <>
              <p>
                Many of today&apos;s most impactful leaders aren&apos;t the loudest in the room—
                they&apos;re the most intentional. <strong>Quiet strength</strong> builds trust,
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
              <span className="italic">The Unlikely Leader</span> explores how outdated leadership
              ideas shape who gets seen, who gets chosen, and who gets left behind—and offers a more
              honest path forward.
            </p>
          }
        />

        <section className="bg-[#F0F2EB] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">Continue the Journey</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore more ways to grow leadership from the inside out—whether you&apos;re just
              beginning or looking to deepen your impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1bae67] mb-2">Custom Keynotes</h3>
              <p className="text-gray-700 mb-4">
                Book Michael for an inspiring, story-driven keynote tailored to your audience and
                leadership goals.
              </p>
              <a href="/keynotes" className="text-[#1bae67] font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1bae67] mb-2">Workshops</h3>
              <p className="text-gray-700 mb-4">
                Bring Unlikely Leader ideas into your organization through practical workshops and
                leadership development experiences.
              </p>
              <a href="/workshops" className="text-[#1bae67] font-semibold hover:underline">
                Explore Workshops →
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1bae67] mb-2">Leadership Assessment</h3>
              <p className="text-gray-700 mb-4">
                Not sure where to start? Discover your leadership archetype with the Leadership
                Archetype Profile.
              </p>
              <a href="/lap" className="text-[#1bae67] font-semibold hover:underline">
                Take the Assessment →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
