// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            src="/images/UL-Logo.jpg"
            alt="Unlikely Leader Book Cover"
            className="ml-8 mx-auto mb-0 w-14 h-auto rounded-md"
          />        
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm md:text-base">
          <Link href="/" className="text-[#333333] hover:text-[#1bae67] transition">
            Home
          </Link>
          <Link href="/about" className="text-[#333333] hover:text-[#1bae67] transition">
            About
          </Link>
          <Link href="/services" className="text-[#333333] hover:text-[#1bae67] transition">
            Services
          </Link>
          <Link href="/assessment" className="text-[#333333] hover:text-[#1bae67] transition">
            Assessments
          </Link>
          <Link href="/archetypes" className="text-[#333333] hover:text-[#1bae67] transition">
            Archetypes
          </Link>
        </div>
      </div>
    </nav>
  );
}
