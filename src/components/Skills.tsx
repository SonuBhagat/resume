import React from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Services & Skills</h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillsData.map(({ category, icon: Icon }, idx) => (
            <div
              key={category}
              className={`service-card reveal delay-${((idx % 3) + 1) * 100}`}
            >
              <div className="icon-wrap">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{category}</h3>
            </div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="reveal delay-400">
          <div className="glass-card p-6 md:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left: Text */}
              <div className="lg:w-2/5">
                <h3 className="text-xl font-bold text-white mb-3">My Skills</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  All the skills that I have in this field of work are mentioned.
                  I am always looking to learn and grow as a developer.
                </p>
              </div>

              {/* Right: Skill Bars */}
              <div className="lg:w-3/5 space-y-5">
                {skillsData.map(({ category, skills }) => (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-white">{category}</span>
                      <span className="text-xs text-slate-500">{skills.length} skills</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}