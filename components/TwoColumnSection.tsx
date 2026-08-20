import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TwoColumnSectionProps = {
  heading: string;
  /** Defaults to h2. Use h1 for primary page titles. */
  headingAs?: 'h1' | 'h2';
  textLeft: ReactNode;
  textRight?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function TwoColumnSection({
  heading,
  headingAs = 'h2',
  textLeft,
  textRight,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  ctaHref = '/book',
  ctaLabel = 'Learn More →',
  onCtaClick,
}: TwoColumnSectionProps) {
  const HeadingTag = headingAs;
  const ctaClassName =
    'text-[#1bae67] font-semibold underline hover:text-[#088f97] mt-6 inline-block';

  return (
    <section className="bg-white py-20 px-6">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          imageOnLeft ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div>
          <div className="text-lg text-gray-700 leading-relaxed mb-4">{textLeft}</div>
          {textRight && (
            <div className="text-lg text-gray-700 leading-relaxed mb-4">{textRight}</div>
          )}
          {ctaHref.startsWith('http') ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
              onClick={onCtaClick}
            >
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaHref} className={ctaClassName} onClick={onCtaClick}>
              {ctaLabel}
            </Link>
          )}
        </div>

        <div className="text-center md:text-left">
          <div className="relative w-full max-w-md mx-auto md:mx-0 mb-6 md:mb-4 aspect-[3/4]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
          <HeadingTag className="text-3xl font-bold text-[#1bae67]">{heading}</HeadingTag>
        </div>
      </div>
    </section>
  );
}
