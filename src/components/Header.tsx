import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

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

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-5 reveal">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Digital Transformation & Full-Stack Developer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 reveal delay-100 text-white">
          Hi, I am <span className="gradient-text">Sonu Bhagat</span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-8 mb-6 flex items-center justify-center reveal delay-200">
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

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 reveal delay-400">
          <a href="#projects" className="btn-primary">
            View Projects & Case Studies
          </a>
          <a href="#experience" className="btn-secondary">
            Experience & Journey
          </a>
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
