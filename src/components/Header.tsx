import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, FileDown, MessageSquare, Briefcase } from 'lucide-react';
import { contactInfo } from '../data/contact';

const roles = [
  'AI Automation & Corporate Workflows',
  'Product Development — Kisaan Sampatti',
  'Enterprise CRM & Onboarding Platforms',
  'Full-Stack & Mobile Development',
  'Digital Transformation across 12 Sister Firms',
];

export default function Header() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 25);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappNumber = contactInfo.phone.replace(/[^0-9]/g, '');

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Video */}
      <div className="hero-bg">
        <video
          src="/video.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-12">
        {/* Recruiter Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4 reveal">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Senior / Lead Full-Stack & AI Engineering Roles</span>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-4 reveal">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Transformation & Full-Stack Developer</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 reveal delay-100 text-white">
          Hi, I am <span className="gradient-text">Sonu Bhagat</span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-8 mb-5 flex items-center justify-center reveal delay-200">
          <span className="text-slate-300 font-mono text-sm sm:text-base md:text-lg tracking-wide font-medium bg-black/40 px-3 py-1 rounded-lg border border-white/10">
            {displayText}
            <span className="inline-block w-[2px] h-4 ml-1 bg-[var(--accent)] animate-pulse" />
          </span>
        </div>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8 reveal delay-300">
          5+ years building scalable mobile & web ecosystems like <strong className="text-white">Kisaan Sampatti</strong> (21K+ users),
          enterprise CRM & onboarding portals, and corporate <span className="text-[var(--accent)]">LLM + OCR powered automation</span> replacing
          manual Excel workflows across <strong className="text-white">12 sister corporate firms</strong>.
        </p>

        {/* High-Impact CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 reveal delay-400">
          <a
            href="/Sonu_Bhagat_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-[var(--accent)]/20"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <a href="#projects" className="btn-secondary">
            View Projects & Case Studies
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>

        {/* Recruiter Quick Credibility Strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-white/10 pt-6 reveal delay-500">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[11px] text-slate-400">Experience</p>
            <p className="text-base font-bold text-white">5+ Years</p>
            <p className="text-[10px] text-slate-500">Full-Stack & Systems</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[11px] text-slate-400">Production Scale</p>
            <p className="text-base font-bold text-emerald-400">21K+ Users</p>
            <p className="text-[10px] text-slate-500">Kisaan Sampatti</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[11px] text-slate-400">Corporate Reach</p>
            <p className="text-base font-bold text-violet-400">12 Sister Firms</p>
            <p className="text-[10px] text-slate-500">Digital Transformation</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[11px] text-slate-400">AI in Production</p>
            <p className="text-base font-bold text-amber-400">RAG & OCR</p>
            <p className="text-[10px] text-slate-500">WhatsApp & Excel Auto</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-[var(--accent)] transition-colors"
        aria-label="Scroll down"
        style={{ animation: 'bounce-subtle 2s ease-in-out infinite' }}
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </header>
  );
}
