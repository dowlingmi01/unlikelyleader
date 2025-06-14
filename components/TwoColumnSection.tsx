import { ReactNode } from 'react';

type TwoColumnSectionProps = {
  heading: string;
  textLeft: ReactNode;
  textRight?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
};

export default function TwoColumnSection({
  heading,
  textLeft,
  textRight,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
}: TwoColumnSectionProps) {
  return (
    <section className="bg-white py-20 px-6">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          imageOnLeft ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* TEXT COLUMN */}
        <div>
          <div className="text-lg text-gray-700 leading-relaxed mb-4">{textLeft}</div>
          {textRight && (
            <div className="text-lg text-gray-700 leading-relaxed mb-4">{textRight}</div>
          )}
          <a
            href="/learn-more"
            className="text-[#1bae67] font-semibold underline hover:text-[#088f97] mt-6 inline-block"
          >
            Learn More →
          </a>
        </div>

        {/* IMAGE + HEADING COLUMN */}
        <div className="text-center md:text-left">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-md mx-auto md:mx-0 mb-6 md:mb-4"
          />
          <h2 className="text-3xl font-bold text-[#1bae67]">{heading}</h2>
        </div>
      </div>
    </section>
  );
}
