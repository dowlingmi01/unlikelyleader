// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="ml-8 inline-block">
          <Image
            src="/images/UnlikelyLeaderLogoMark.png"
            alt="Unlikely Leader Logo"
            width={96}
            height={96}
            className="w-24 h-auto rounded-md"
            priority
          />
        </Link>

        <div className="space-x-6 text-sm md:text-base">
          <Link href="/" className="text-[#333333] hover:text-[#1bae67] transition">
            Home
          </Link>
          <Link href="/keynotes" className="text-[#333333] hover:text-[#1bae67] transition">
            Keynotes
          </Link>
          <Link href="/workshops" className="text-[#333333] hover:text-[#1bae67] transition">
            Workshops
          </Link>
          <Link href="/assessment" className="text-[#333333] hover:text-[#1bae67] transition">
            Assessment
          </Link>
        </div>
      </div>
    </nav>
  );
}
