import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Assistant General Manager – Digital Marketing, AI & Technology',
    company: 'Manikaran Power Limited',
    period: 'Dec 2023 – Present',
    bullets: [
      'Lead and contribute to digital transformation, software development, AI automation, and digital marketing initiatives across 12 sister firms.',
      'Translate business and operational requirements into full-stack web applications, mobile products, APIs, databases, automated workflows, and AI-enabled solutions.',
      'Use AI-assisted development to accelerate coding, debugging, refactoring, prototyping, API integration, testing, and delivery while reviewing and validating implementation.',
      'Contributed to the development and enhancement of Kisaan Sampatti, an Android and iOS agricultural platform serving 50,000+ farmers, manufacturers, and traders.',
      'Develop and maintain internal business applications, including an internal CRM platform for structured customer/business information and workflow management.',
      'Developed a web-based IT Asset Management application for digital asset records, allocation, tracking, and operational management.',
      'Developed/integrated an AI-powered WhatsApp chatbot using Retrieval-Augmented Generation (RAG) to enable natural-language access to organizational information.',
      'Implemented OCR-based automation to extract and process information from documents and images, reducing repetitive manual data processing.',
      'Identify repetitive internal processes and build software/AI workflows to automate information retrieval, document processing, and operational tasks.',
      'Work across frontend and backend development, including application interfaces, business logic, APIs, database integration, authentication, and real-time functionality.',
      'Plan, execute, monitor, and optimize digital campaigns across Google, Meta, and LinkedIn, focusing on lead generation, conversions, audience targeting, and ROI.',
      'Develop SEO, SEM, social media, analytics, and conversion optimization strategies and use Google Analytics, GTM, and Search Console for performance measurement.',
    ],
  },
  {
    title: 'Digital Marketing & Graphic Designer',
    company: 'Vinayak Ply Industries',
    period: 'Aug 2021 – Nov 2023',
    bullets: [
      'Managed SEO, SEM, social media marketing, and digital advertising initiatives to improve online visibility, website traffic, and lead generation.',
      'Conducted keyword research, on-page SEO, technical optimization, and content optimization to improve organic search performance.',
      'Developed, customized, and maintained WordPress websites, including responsive design, theme customization, content management, and performance optimization.',
      'Designed advertising banners, social media creatives, promotional graphics, and website layouts for digital campaigns.',
      'Implemented conversion tracking and A/B testing to evaluate campaign performance and improve lead quality.',
      'Used analytics and campaign data to identify optimization opportunities across websites and digital marketing channels.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Experience</h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`glass-card-hover p-6 md:p-8 reveal delay-${(idx + 1) * 200}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm accent-text font-semibold">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-white/5 px-3 py-1 rounded">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-400 leading-relaxed pl-3 border-l border-white/10">
                    {bullet}
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
