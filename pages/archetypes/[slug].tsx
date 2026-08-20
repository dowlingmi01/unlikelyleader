import Image from 'next/image';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Seo from '../../components/Seo';
import {
  ARCHETYPE_SLUGS,
  getArchetypePageContent,
  type ArchetypePageContent,
} from '../../lib/archetypePages';

type Props = {
  slug: string;
  content: ArchetypePageContent;
};

export default function ArchetypePage({ slug, content }: Props) {
  const description =
    content.description.length > 155
      ? `${content.description.slice(0, 155)}…`
      : content.description;

  return (
    <>
      <Seo
        title={`${content.name} | Unlikely Leader`}
        description={description}
        path={`/archetypes/${slug}`}
      />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1bae67] mb-2">{content.name}</h1>
          {content.quote && (
            <p className="text-lg text-gray-600 italic">&ldquo;{content.quote}&rdquo;</p>
          )}
        </div>

        {content.photoUrl && (
          <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden">
            <Image
              src={content.photoUrl}
              alt={`${content.name} illustration`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <p className="text-lg text-gray-800 mb-8 leading-relaxed">{content.description}</p>

        {[
          { title: 'Key Strengths', items: content.strengths },
          { title: 'Watch Out For', items: content.watchOuts },
          { title: 'Recommended Actions', items: content.actions },
          { title: 'Tips for Growth', items: content.tips },
        ].map(
          ({ title, items }) =>
            items &&
            items.length > 0 && (
              <div
                key={title}
                className="mb-10 bg-white rounded-xl shadow-md p-6 border-l-4 border-[#1bae67]"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
                <ul className="list-disc list-outside text-gray-700 space-y-2">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )
        )}

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Want to go deeper with your leadership journey?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#1bae67] hover:bg-[#0a9c5d] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Connect With Me
          </a>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          More resources coming soon...
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ARCHETYPE_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== 'string') {
    return { notFound: true };
  }

  const content = getArchetypePageContent(slug);
  if (!content) {
    return { notFound: true };
  }

  return {
    props: { slug, content },
  };
};
