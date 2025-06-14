// pages/pdf-template.tsx
import { GetServerSideProps } from 'next';

interface Props {
  archetype: string;
  description: string;
  strengths: string[];
  watchOuts: string[];
  actions: string[];
  affirmations: string[];
}

export default function PDFTemplate({
  archetype,
  description,
  strengths,
  watchOuts,
  actions,
  affirmations,
}: Props) {
  return (
    <div className="min-h-screen bg-white p-10 font-sans text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">{archetype}</h1>
      <p className="text-lg text-center mb-6 italic">{description}</p>

      <Section title="Key Strengths" items={strengths} />
      <Section title="Watch-Outs" items={watchOuts} />
      <Section title="Key Actions to Take" items={actions} />
      <Section title="Affirmations" items={affirmations} />
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-green-800 mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 🔄 This example loads data via query string params for now.
// Later we can fetch from Supabase if needed.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    archetype = 'Humble Fire',
    description = '',
    strengths = [],
    watchOuts = [],
    actions = [],
    affirmations = [],
  } = context.query;

  return {
    props: {
      archetype,
      description,
      strengths: Array.isArray(strengths) ? strengths : [strengths],
      watchOuts: Array.isArray(watchOuts) ? watchOuts : [watchOuts],
      actions: Array.isArray(actions) ? actions : [actions],
      affirmations: Array.isArray(affirmations) ? affirmations : [affirmations],
    },
  };
};
