// components/SocialLinks.tsx
import { Instagram, Linkedin, Youtube } from 'lucide-react';

type SocialLinksProps = {
  className?: string;
  colorClassName?: string;
  iconOnly?: boolean;
};

export default function SocialLinks({
  className = '',
  colorClassName = 'text-[#736B70]',
  iconOnly = false,
}: SocialLinksProps) {
  const links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dowlingmichael/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/michaeldowling440',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@michaeldowling9437',
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={`${colorClassName} hover:text-[#1bae67] transition flex items-center gap-2`}
        >
          {iconOnly ? link.icon : <span className="font-medium">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}