import React from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map(({ category, icon: Icon, skills }) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon className="w-6 h-6 text-blue-600" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}