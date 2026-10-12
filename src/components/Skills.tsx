import React from 'react';
import { skillsData } from '../data/skills';
import { Sparkles, Code2, Cpu, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Technical Skills & Expertise</h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillsData.map(({ category, icon: Icon }, idx) => (
            <div
              key={category}
              className={`service-card reveal delay-${((idx % 3) + 1) * 100} border border-white/10 hover:border-[var(--accent)]/40`}
            >
              <div className="icon-wrap">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{category}</h3>
              <p className="text-xs text-slate-400">
                Enterprise engineering, modern architectural standards, and automated delivery.
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="reveal delay-400">
          <div className="glass-card p-6 md:p-10 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left: Text */}
              <div className="lg:w-2/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Technical Arsenal</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Core Competencies</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  A comprehensive toolkit spanning enterprise full-stack engineering, cross-platform mobile
                  systems (Android & iOS), corporate AI automation & WhatsApp RAG architectures, scalable databases,
                  and performance growth marketing.
                </p>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  <p className="font-semibold text-white mb-1">AI-Assisted Development</p>
                  Accelerating coding, testing, debugging, refactoring, and prototype-to-production workflows while maintaining rigorous software quality and code review.
                </div>
              </div>

              {/* Right: Skill Bars */}
              <div className="lg:w-3/5 space-y-6">
                {skillsData.map(({ category, skills }) => (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">{category}</span>
                      <span className="text-[11px] text-[var(--accent)] font-mono">{skills.length} skills</span>
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