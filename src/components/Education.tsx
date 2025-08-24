import React from 'react';

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  description?: string;
  url?: string;
  highlight?: boolean;
};

type ExtraItem = {
  activity: string;
  year?: string;
};

type Props = {
  education?: EducationItem[];
  extracurricular?: ExtraItem[];
  className?: string;
};

const defaultEducation: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Application',
    school: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly',
    period: 'Jul 2018 — Jul 2021',
    description:
      'Focused on software engineering fundamentals, data structures, and modern web technologies; collaborated on cross‑functional team projects. Built production-ready applications with React, Node.js and TypeScript. Self-taught in digital marketing (SEO, analytics and content strategy).',
    highlight: true,
  },
  {
    degree: '12th (CBSE)',
    school: "Blooming Dales' Modern School, Rudrapur",
    period: 'Apr 2016 — Mar 2017',
    description: 'Graduated with a strong foundation in math and science.',
  },
  {
    degree: '10th (CBSE)',
    school: "Blooming Dales' Modern School, Rudrapur",
    period: 'Mar 2015',
    description: 'Completed secondary education with consistent academic performance.',
  },
];

const defaultExtras: ExtraItem[] = [
  { activity: '1st place — E-Poster Making', year: '2019' },
  { activity: 'Participant — 15th Uttarakhand State Basketball Championship', year: '2018' },
];

function SchoolIcon() {
  return (
    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
      <path d="M11 13.3V22h2v-8.7L12 12l-1 .3z" />
    </svg>
  );
}

export default function Education({
  education = defaultEducation,
  extracurricular = defaultExtras,
  className = '',
}: Props) {
  return (
    <section id="education" className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Education & Achievements</h2>
            <p className="text-sm text-gray-500">Selected academic milestones and activities</p>
          </header>

          <div className="relative border-l border-gray-200 ml-2">
            {education.map((edu, idx) => (
              <article
                key={idx}
                className={`mb-8 pl-8 relative transition-transform transform hover:scale-[1.01]`}
                aria-labelledby={`edu-${idx}-title`}
              >
                <span
                  className={`absolute -left-5 top-1 w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-white ${
                    edu.highlight ? 'bg-yellow-400 ring-yellow-100' : 'bg-blue-600 ring-white'
                  }`}
                  aria-hidden
                >
                  <SchoolIcon />
                </span>

                <h3 id={`edu-${idx}-title`} className="text-xl font-semibold">
                  {edu.degree}
                </h3>

                <p className="text-blue-600 font-medium">
                  {edu.url ? (
                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {edu.school}
                    </a>
                  ) : (
                    edu.school
                  )}
                </p>

                <time className="block text-sm text-gray-500 mb-2">{edu.period}</time>

                {edu.description && <p className="text-gray-700">{edu.description}</p>}

                {edu.highlight && (
                  <span className="inline-block mt-3 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                    Highlight
                  </span>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Extra‑curricular</h3>
            <ul className="space-y-3 text-gray-700">
              {extracurricular.map((ex, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 w-4 h-4 text-gray-400 mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l3 7h7l-5.7 4.2L20 22l-8-5-8 5 2.7-8.8L1 9h7z" />
                  </svg>
                  <div>
                    <div className="text-gray-800">{ex.activity}</div>
                    {ex.year && <div className="text-xs text-gray-500">{ex.year}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
