import React from 'react';

const education = [
  {
    degree: 'Bachelor of Computer Application',
    school: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly',
    period: 'July 2021',
    description: 'In 2021, I completed my BCA with a mark of 62.64 percent.',
  },
  {
    degree: '12th',
    school: "Blooming Dales' Modern School, Rudrapur",
    period: 'March 2017',
    description: 'In 2017, I completed my CBSE intermediate with a mark of 63 percent.',
  },
  {
    degree: '10th',
    school: "Blooming Dales' Modern School, Rudrapur",
    period: 'March 2015',
    description: 'In 2015, I completed my CBSE High School with a mark of 74 percent.',
  },
];

const extracurricular = [
  {
    activity: 'Participated in “E-Poster Making” and secured 1st place.',
  },
  {
    activity: 'Participated at 15th Uttarakhand State Basketball Championship sports.',
  },
];

export default function Education() {
  return (
    <section className="py-16 bg-white" id="education">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.school}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Extracurricular Activities Section */}
          <h2 className="text-3xl font-bold mt-12 mb-8">Extra-curricular Activities</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4">
            {extracurricular.map((extra, index) => (
              <li key={index}>{extra.activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
