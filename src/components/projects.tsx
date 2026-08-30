import React, { useState } from 'react';
import { ExternalLink, Smartphone, Bot, Server, Globe, Cpu, Workflow } from 'lucide-react';

type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: 'full-stack' | 'ai' | 'web';
  icon: React.ReactNode;
  liveLink?: string;
};

const projects: Project[] = [
  {
    name: 'Kisaan Sampatti',
    description:
      'Android and iOS agricultural digital platform serving 50,000+ farmers, manufacturers, and traders. Contributed to product development, application functionality, integrations, and delivery.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'REST APIs', 'Android', 'iOS'],
    category: 'full-stack',
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    name: 'AI-Powered WhatsApp RAG Assistant',
    description:
      'Built and integrated a conversational AI solution using Retrieval-Augmented Generation (RAG) to provide context-aware access to organizational information through WhatsApp.',
    technologies: ['Generative AI', 'RAG', 'LLM API', 'WhatsApp API', 'Node.js'],
    category: 'ai',
    icon: <Bot className="w-5 h-5" />,
  },
  {
    name: 'Internal CRM Platform',
    description:
      'Developed a full-stack internal CRM to centralize business and customer information and streamline internal workflows across the organization.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Authentication'],
    category: 'full-stack',
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: 'IT Asset Management System',
    description:
      'Developed a web application for digital IT asset records, allocation, tracking, and internal operational management.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'CRUD', 'Dashboard'],
    category: 'full-stack',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    name: 'OCR Automation',
    description:
      'Implemented document and image OCR workflows to automate information extraction and reduce repetitive manual data processing tasks.',
    technologies: ['OCR', 'Python', 'Automation', 'Document Processing'],
    category: 'ai',
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    name: 'Business Process Automation',
    description:
      'Built software and AI-assisted workflows to automate repetitive organizational tasks and improve operational efficiency across departments.',
    technologies: ['AI Workflows', 'Automation', 'Integration', 'Node.js'],
    category: 'ai',
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    name: 'Malgudi Junction Restaurant',
    description:
      'A responsive, single-page website for Malgudi Junction restaurant in Dwarka, Delhi. Modern and visually appealing design showcasing their diverse menu and story.',
    technologies: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript'],
    category: 'web',
    icon: <Globe className="w-5 h-5" />,
    liveLink: 'https://malgudijunction.in/',
  },
  {
    name: 'DayAhead Inc. — Energy Forecasting',
    description:
      'Professional corporate website for DayAhead Inc., specializing in renewable energy forecasting. Clean, credible, and informative platform built for all devices.',
    technologies: ['ReactJS', 'Tailwind CSS', 'JavaScript'],
    category: 'web',
    icon: <Globe className="w-5 h-5" />,
    liveLink: 'https://dayaheadinc.com/in-en',
  },
  {
    name: 'Electrovault Power',
    description:
      'High-performance website for Electrovault Power, a leader in battery storage solutions. Built with Next.js for SSR, fast performance, and strong SEO.',
    technologies: ['Next.js', 'Tailwind CSS'],
    category: 'web',
    icon: <Globe className="w-5 h-5" />,
    liveLink: 'https://www.electrovault.in/',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'AI & Automation', value: 'ai' },
  { label: 'Web', value: 'web' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Projects</h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal delay-100">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-[var(--accent)] text-[#0a0a0f] shadow-lg'
                  : 'text-slate-500 bg-white/5 border border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <article
              key={project.name}
              className={`service-card text-left reveal delay-${((idx % 3) + 1) * 100}`}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded flex items-center justify-center text-[var(--accent)] bg-white/5 border border-white/5">
                  {project.icon}
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">{project.name}</h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded bg-white/3 text-slate-500 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs accent-text hover:text-[var(--accent-light)] transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live Site
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
