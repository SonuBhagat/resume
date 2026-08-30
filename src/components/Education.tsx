import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

type AchievementItem = {
  title: string;
};

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly',
    period: '2021',
  },
  {
    degree: 'Class XII — CBSE',
    school: "Blooming Dales' Modern School, Rudrapur",
    period: '2017',
  },
  {
    degree: 'Class X — CBSE',
    school: "Blooming Dales' Modern School, Rudrapur",
    period: '2015',
  },
];

const achievements: AchievementItem[] = [
  { title: '1st Place — E-Poster Making Competition' },
  { title: 'Represented District — 15th Uttarakhand State Basketball Championship' },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Education & Achievements</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Education List */}
          <div className="lg:col-span-3 space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`glass-card-hover p-5 md:p-6 reveal delay-${(idx + 1) * 200}`}
              >
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 accent-text mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <p className="text-xs accent-text font-medium">{edu.school}</p>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="lg:col-span-2 reveal delay-400">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 accent-text" />
                Achievements
              </h3>

              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="glass-card-hover p-5 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded flex items-center justify-center bg-[var(--accent)] text-[#0a0a0f] flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {a.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
