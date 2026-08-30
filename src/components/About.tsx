import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">About Me</h2>

        {/* About Card */}
        <div className="glass-card p-6 md:p-10 reveal delay-100">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="about-photo w-48 h-56 md:w-56 md:h-64">
                <img
                  src="/sonu-bhagat.jpg"
                  alt="Sonu Bhagat"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-1">Hi There! I'm</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Sonu Bhagat</h3>
              <p className="accent-text font-semibold text-sm mb-4">
                Digital Transformation & Full-Stack Developer
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {contactInfo.summary}
              </p>

              {/* Contact Details */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-slate-500 mb-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {contactInfo.email}
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {contactInfo.phone}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {contactInfo.address}
                </span>
              </div>

              {/* Social + CTA */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:border-[var(--accent-dark)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:border-[var(--accent-dark)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-9 h-9 rounded bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:border-[var(--accent-dark)] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
