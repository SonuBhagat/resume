import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  summary: string;
  bullets: string[];
  keyProjects: { name: string; tag: string; link?: string }[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Assistant Manager – Digital Marketing, AI & Technology',
    company: 'Manikaran Power Limited',
    period: 'Dec 2023 – Present',
    location: 'Delhi, India',
    badge: '12 Sister Firms',
    summary:
      'Directing and executing digital transformation, full-stack software development, AI automation, and multi-channel digital initiatives across 12 sister corporate firms within the Manikaran Power Group.',
    bullets: [
      'Lead and contribute to digital transformation, software engineering, AI automation, and growth marketing across 12 group companies.',
      'Contributed extensively to Kisaan Sampatti, an agricultural digital platform (Android & iOS) serving 21,000+ farmers, manufacturers, and commodity traders with real-time mandi prices and commerce.',
      'Designed and deployed an internal CRM and client onboarding platform for Power & Solar Solutions, streamlining multi-step KYC verification, document ingestion, and compliance workflows.',
      'Architected and integrated an AI-powered WhatsApp chatbot utilizing Retrieval-Augmented Generation (RAG) to provide natural-language querying of corporate SOPs, regulatory documents, and policies.',
      'Automated repetitive manual Excel-based data entry, reconciliation, and reporting workflows using LLM and OCR pipelines, drastically reducing manual processing time across departments.',
      'Engineered an AI-powered HRMS and operations suite incorporating OCR & LLM-based ATS resume screening, paperless employee onboarding, comprehensive IT hardware/software asset inventory, and an AI-enabled IT helpdesk ticketing tool with an employee self-service portal.',
      'Leveraged AI-assisted development methodologies to accelerate prototyping, code refactoring, API integration, debugging, and software delivery while enforcing high code quality standards.',
      'Full-stack engineering across modern web and mobile stacks: React, React Native, Node.js, Express, PostgreSQL, Redis, REST APIs, WebSockets, and secure role-based access control.',
      'Planned and executed performance digital marketing campaigns across Google Ads, Meta Ads, and LinkedIn Ads; engineered SEO, SEM, CRO, and analytics tracking with GTM and Google Analytics.'
    ],
    keyProjects: [
      { name: 'Kisaan Sampatti (21K+ Users)', tag: 'Agri Mobile Ecosystem' },
      { name: 'CRM Onboarding Portal', tag: 'Enterprise CRM' },
      { name: 'Corporate WhatsApp RAG Assistant', tag: 'Generative AI' },
      { name: 'Document OCR Automation', tag: 'Workflow Automation' },
      { name: 'AI HRMS & IT Operations Suite', tag: 'ATS & Helpdesk AI' }
    ]
  },
  {
    title: 'Digital Marketing & Graphic Designer',
    company: 'Vinayak Ply Industries',
    period: 'Aug 2021 – Nov 2023',
    location: 'Uttarakhand / Delhi, India',
    badge: 'Growth & Web',
    summary:
      'Spearheaded organic search optimization, social media marketing, digital brand visual design, and website development.',
    bullets: [
      'Managed end-to-end SEO, SEM, social media marketing, and digital advertising campaigns to elevate brand visibility and inbound B2B lead generation.',
      'Executed thorough keyword research, technical SEO audits, on-page optimization, and content strategy to improve organic search rankings.',
      'Developed, customized, and maintained high-converting WordPress websites, ensuring mobile-first responsive design, fast load performance, and seamless navigation.',
      'Designed high-impact advertising banners, product catalogues, brochures, social creatives, and website graphics using Photoshop, Illustrator, and Canva.',
      'Implemented Google Analytics conversion tracking, event pixels, and A/B testing to refine ad creative performance and maximize marketing ROI.'
    ],
    keyProjects: [
      { name: 'B2B WordPress Portal', tag: 'Web Dev & CMS' },
      { name: 'Multi-Channel Ad Campaigns', tag: 'PPC & Lead Gen' },
      { name: 'Brand Creative Suite', tag: 'UI & Graphic Design' }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Professional Experience</h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 md:p-8 reveal delay-${(idx + 1) * 200} border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base md:text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    {exp.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="flex items-center gap-2 text-sm accent-text font-semibold">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                    <span className="text-slate-500 font-normal">| {exp.location}</span>
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-5 italic border-l-2 border-[var(--accent)] pl-3">
                {exp.summary}
              </p>

              {/* Key Initiatives / Projects Pills */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Key Systems & Initiatives
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.keyProjects.map((kp, kIdx) => (
                    <div
                      key={kIdx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2"
                    >
                      <span className="font-semibold text-white">{kp.name}</span>
                      <span className="text-[10px] text-[var(--accent)] bg-black/40 px-1.5 py-0.5 rounded">
                        {kp.tag}
                      </span>
                      {kp.link && (
                        <a
                          href={kp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] underline text-cyan-400 hover:text-cyan-300 ml-1"
                        >
                          Visit
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-400 leading-relaxed flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
