// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
      <footer className="text-center text-sm text-[#736B70] py-8 px-4 bg-white">
        © 2025 Unlikely Leader | 
        <Link href="/privacy" className="hover:underline"> Privacy Policy</Link> | 
        <Link href="/contact" className="hover:underline"> Contact</Link>
      </footer>

    );
}
