import React, { useState } from 'react';
import {
  ExternalLink,
  Smartphone,
  Bot,
  Server,
  Globe,
  Cpu,
  Workflow,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle2,
  Layers,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { projectsData, ProjectDetail } from '../data/projectsData';

const categoryFilters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Featured Case Studies', value: 'featured' },
  { label: 'AI & Automation', value: 'ai' },
  { label: 'Full-Stack & Mobile', value: 'full-stack' },
  { label: 'Corporate & Web', value: 'web' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return projectsData;
    if (activeFilter === 'featured') return projectsData.filter((p) => p.featured);
    return projectsData.filter((p) => p.category === activeFilter);
  };

  const filtered = getFilteredProjects();

  const getProjectIcon = (type: ProjectDetail['iconType']) => {
    switch (type) {
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'server':
        return <Server className="w-5 h-5 text-amber-400" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-violet-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'workflow':
        return <Workflow className="w-5 h-5 text-rose-400" />;
      case 'globe':
      default:
        return <Globe className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            Portfolio Showcase
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects & Case Studies
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Production-grade systems ranging from high-scale mobile platforms serving 21K+ rural users,
            to enterprise onboarding CRMs, and generative AI corporate automation pipelines across 12 sister firms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-[var(--accent)] text-[#0a0a0f] shadow-lg shadow-[var(--accent)]/20 scale-105'
                  : 'text-slate-400 bg-white/5 border border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured Top Spotlights: Kisaan Sampatti & CRM Onboarding */}
        {activeFilter === 'all' && (
          <div className="mb-14 space-y-8">
            {/* Spotlight 1: Kisaan Sampatti */}
            <div className="relative rounded-2xl p-6 md:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[#0e0e16] to-[#0a0a0f] backdrop-blur-md shadow-2xl transition-all hover:border-emerald-500/50">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      Flagship Mobile Platform
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Kisaan Sampatti — Agricultural Digital Ecosystem
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    21K+ Farmers & Traders
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    Android & iOS
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                A large-scale agricultural digital transformation application connecting 21,000+ farmers,
                manufacturers, and bulk commodity traders across India. Sonu contributed directly to the cross-platform
                mobile application engineering (React Native), high-throughput REST APIs, PostgreSQL relational data models,
                and real-time spot price aggregator.
              </p>

              {/* Key Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <p className="text-[11px] text-slate-400">Total User Base</p>
                  <p className="text-lg font-bold text-emerald-400">21K+</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Platforms</p>
                  <p className="text-lg font-bold text-white">Android & iOS</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Real-time Data</p>
                  <p className="text-lg font-bold text-emerald-400">Mandi Spot Rates</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Architecture</p>
                  <p className="text-lg font-bold text-white">Offline-Friendly</p>
                </div>
              </div>

              {/* Highlights & Tech */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {['React Native', 'Android', 'iOS', 'Node.js', 'PostgreSQL', 'Redis', 'REST APIs', 'UI/UX'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(projectsData[0])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all self-start md:self-auto border border-emerald-500/30"
                >
                  View Full Specs & Architecture
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Spotlight 2: CRM Onboarding */}
            <div className="relative rounded-2xl p-6 md:p-8 border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-[#0e0e16] to-[#0a0a0f] backdrop-blur-md shadow-2xl transition-all hover:border-amber-500/50">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Server className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Corporate Enterprise CRM & Onboarding
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Manikaran Power PSS Onboarding Platform
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Enterprise CRM Portal
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Engineered a comprehensive full-stack client onboarding portal and internal CRM for Power & Solar
                Solutions (PSS) at Manikaran Power Limited. The system digitizes lead ingestion, multi-stage KYC verification,
                document approvals, and corporate handoffs across group entities, accelerating corporate client onboarding by 60%.
              </p>

              {/* Key Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <p className="text-[11px] text-slate-400">Type</p>
                  <p className="text-sm font-bold text-amber-400 truncate">Enterprise CRM</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Onboarding Velocity</p>
                  <p className="text-lg font-bold text-emerald-400">60% Faster</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Security & Roles</p>
                  <p className="text-lg font-bold text-white">RBAC & Audit Log</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Adoption</p>
                  <p className="text-lg font-bold text-amber-400">12 Sister Firms</p>
                </div>
              </div>

              {/* Highlights & Tech */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Node.js', 'PostgreSQL', 'Express.js', 'REST APIs', 'RBAC', 'Document Uploads', 'Enterprise CRM'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(projectsData[1])}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold transition-all border border-amber-500/30"
                  >
                    View Case Study Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Spotlight 3: AI Corporate Automation & WhatsApp RAG */}
            <div className="relative rounded-2xl p-6 md:p-8 border border-violet-500/30 bg-gradient-to-br from-violet-950/20 via-[#0e0e16] to-[#0a0a0f] backdrop-blur-md shadow-2xl transition-all hover:border-violet-500/50">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-violet-400">
                      Corporate AI Transformation
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Enterprise AI Automation & WhatsApp RAG Assistant
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Deployed across 12 Sister Firms
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    RAG + LLM APIs
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Spearheaded corporate generative AI adoption by building a WhatsApp conversational assistant powered by
                Retrieval-Augmented Generation (RAG). Allows staff and executives across 12 group entities to query corporate
                SOPs, energy policies, and regulatory guidelines in real-time. Complemented with OCR document data extraction
                and automated business workflows.
              </p>

              {/* Key Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <p className="text-[11px] text-slate-400">Integration</p>
                  <p className="text-lg font-bold text-violet-400">WhatsApp API</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">AI Technique</p>
                  <p className="text-lg font-bold text-white">RAG + Vector Search</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Document Processing</p>
                  <p className="text-lg font-bold text-violet-400">Automated OCR</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Corporate Reach</p>
                  <p className="text-lg font-bold text-white">12 Sister Firms</p>
                </div>
              </div>

              {/* Highlights & Tech */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {['Generative AI', 'RAG', 'LLM API', 'WhatsApp Business API', 'Python OCR', 'Vector Search', 'Node.js', 'Workflows'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(projectsData[2])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 text-xs font-semibold transition-all self-start md:self-auto border border-violet-500/30"
                >
                  View AI Architecture Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Spotlight 4: AI HRMS, ATS & IT Ticketing */}
            <div className="relative rounded-2xl p-6 md:p-8 border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-950/20 via-[#0e0e16] to-[#0a0a0f] backdrop-blur-md shadow-2xl transition-all hover:border-fuchsia-500/50">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-fuchsia-400">
                      Enterprise AI HRMS & Operations Platform
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      AI-Powered HRMS, ATS & IT Operations Suite
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30">
                    OCR & LLM ATS
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    IT Ticketing & Assets
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Unified enterprise workforce platform engineered to automate the complete employee lifecycle:
                featuring an intelligent ATS with OCR & LLM-based resume parsing, paperless digital joining and onboarding,
                comprehensive IT hardware and software asset inventory tracking of all kinds, an AI-enabled IT helpdesk ticketing tool with
                smart routing, and a dedicated employee self-service portal.
              </p>

              {/* Key Metrics row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <p className="text-[11px] text-slate-400">Resume Screening</p>
                  <p className="text-lg font-bold text-fuchsia-400">70% Faster ATS</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">IT Inventory</p>
                  <p className="text-lg font-bold text-white">100% Tracking</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">IT Helpdesk</p>
                  <p className="text-lg font-bold text-fuchsia-400">AI-Enabled Triage</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Employee Portal</p>
                  <p className="text-lg font-bold text-white">Self-Service</p>
                </div>
              </div>

              {/* Highlights & Tech */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Node.js', 'Python OCR', 'LLM APIs', 'ATS Screening', 'IT Asset Inventory', 'AI Ticketing', 'PostgreSQL', 'RBAC'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(projectsData[3])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold transition-all self-start md:self-auto border border-fuchsia-500/30"
                >
                  View HRMS & AI Operations Specs
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300 group"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.iconType)}
                  </div>
                  {project.badge && (
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        project.badgeColor || 'border-white/10 text-slate-400 bg-white/5'
                      }`}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Company / Context */}
                <p className="text-[11px] text-[var(--accent)] font-semibold uppercase tracking-wider mb-1">
                  {project.companyOrContext}
                </p>

                {/* Project Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-[var(--accent)] hover:text-[var(--accent-light)] font-semibold transition-colors"
                >
                  Details & Specs
                  <ChevronRight className="w-3 h-3" />
                </button>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{project.linkText || 'Live Site'}</span>
                    <ExternalLink className="w-3 h-3 text-[var(--accent)]" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Comprehensive Deep-Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e0e16] border border-white/15 rounded-2xl p-6 sm:p-8 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {getProjectIcon(selectedProject.iconType)}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
                  {selectedProject.companyOrContext}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.name}
                </h3>
              </div>
            </div>

            {selectedProject.badge && (
              <div className="mt-2 mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    selectedProject.badgeColor || 'border-white/10 text-slate-300 bg-white/5'
                  }`}
                >
                  {selectedProject.badge}
                </span>
              </div>
            )}

            {/* Subtitle / Tagline */}
            <p className="text-sm text-slate-300 font-medium italic mb-6 border-l-2 border-[var(--accent)] pl-3">
              {selectedProject.tagline}
            </p>

            {/* Metrics if any */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i}>
                    <p className="text-[11px] text-slate-400">{m.label}</p>
                    <p className="text-sm sm:text-base font-bold text-[var(--accent)]">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[var(--accent)]" />
                Project Overview & Role
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.detailedOverview}
              </p>
            </div>

            {/* Key Features */}
            {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Capabilities & Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Highlights */}
            {selectedProject.architectureHighlights && selectedProject.architectureHighlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Architecture & Engineering
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architectureHighlights.map((arch, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Business Impact */}
            {selectedProject.impactHighlights && selectedProject.impactHighlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  Business Impact
                </h4>
                <ul className="space-y-2">
                  {selectedProject.impactHighlights.map((imp, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Link Button */}
            {selectedProject.liveLink && (
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Visit {selectedProject.linkText || 'Live Site'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
