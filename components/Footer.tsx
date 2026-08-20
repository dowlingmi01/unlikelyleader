// components/Footer.tsx
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import EmailLink from './EmailLink';
import { CONTACT_EMAIL } from '../lib/site';

export default function Footer() {
  return (
    <footer className="bg-[#F0F2EB] border-t border-[#e5eadf] px-6 py-14">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-lg font-semibold text-[#333333]">The Unlikely Leader</p>
          <p className="mt-3 text-sm text-[#736B70] max-w-md leading-relaxed">
            Challenging outdated leadership myths and offering a more grounded,
            human vision of leadership.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-5">
          <SocialLinks colorClassName="text-[#736B70]" />

          <div className="flex flex-wrap gap-4 text-sm text-[#736B70]">
            <Link href="/privacy" className="hover:text-[#1bae67] transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#1bae67] transition">
              Contact
            </Link>
            <EmailLink
              location="footer"
              subject="Unlikely Leader Inquiry"
              className="hover:text-[#1bae67] transition"
              showAddress
            >
              {CONTACT_EMAIL}
            </EmailLink>
            <Link href="/keynotes" className="hover:text-[#1bae67] transition">
              Keynotes
            </Link>
          </div>

          <p className="text-xs text-[#736B70]">
            © 2026 TheUnlikely Leader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
