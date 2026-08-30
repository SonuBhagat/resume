import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const roles = [
  'AI Automation',
  'Product Development',
  'Business Process Automation',
  'Full-Stack Development',
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
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 30);
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
      <div className="relative z-10 text-center px-6">
        <p className="text-sm md:text-base text-slate-400 tracking-widest uppercase mb-4 reveal">
          Digital Transformation & Full-Stack Developer
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 reveal delay-100">
          Hi, I am{' '}
          <span className="accent-text">Sonu Bhagat</span>
        </h1>

        {/* Typing Effect */}
        <div className="h-7 mb-8 flex items-center justify-center reveal delay-200">
          <span className="text-slate-400 font-mono text-sm md:text-base tracking-wide">
            {displayText}
            <span className="inline-block w-[2px] h-4 ml-1 bg-[var(--accent)] animate-pulse" />
          </span>
        </div>

        <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed mb-10 reveal delay-300">
          Full-Stack Developer with 5+ years of experience in software development,
          AI automation, digital product development, and business process automation.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 reveal delay-400">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-[var(--accent)] transition-colors"
        aria-label="Scroll down"
        style={{ animation: 'bounce-subtle 2s ease-in-out infinite' }}
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </header>
  );
}
