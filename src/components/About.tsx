import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Award, Briefcase } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">About Me</h2>

        {/* About Card */}
        <div className="glass-card p-6 md:p-10 reveal delay-100 border border-white/10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="about-photo w-48 h-56 md:w-56 md:h-64 shadow-xl">
                <img
                  src="/sonu.jpeg"
                  alt="Sonu Bhagat"
                />
              </div>

              {/* Quick Stat badge below photo */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <p className="text-[11px] text-slate-400">Current Role</p>
                <p className="text-xs font-bold text-[var(--accent)]">
                  Assistant Manager — Digital Marketing, AI & Tech
                </p>
                <p className="text-[10px] text-slate-500">Manikaran Power Limited</p>
              </div>
            </div>

            {/* Text & Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                Engineering & Transformation
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                Sonu Bhagat
              </h3>
              <p className="accent-text font-semibold text-sm mb-4">
                Digital Transformation & Full-Stack Developer
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {contactInfo.summary}
              </p>

              {/* Key Impact Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                {contactInfo.stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-lg font-extrabold text-[var(--accent)]">{stat.value}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Target Roles */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Specializations & Target Roles
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {contactInfo.targetRoles.map((role) => (
                    <span
                      key={role}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-slate-400 mb-6 pt-4 border-t border-white/10">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {contactInfo.email}
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {contactInfo.phone}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {contactInfo.address}
                </span>
              </div>

              {/* Social + Actions */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="ml-2 text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-light)] inline-flex items-center gap-1 transition-colors"
                >
                  Explore Projects <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
