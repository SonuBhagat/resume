import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="section-title reveal">Get In Touch</h2>

        <div>
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            <a
              href={`mailto:${contactInfo.email}`}
              className="service-card group reveal delay-100"
            >
              <div className="icon-wrap">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Email</p>
              <p className="text-xs text-slate-500">{contactInfo.email}</p>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="service-card group reveal delay-200"
            >
              <div className="icon-wrap">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Phone</p>
              <p className="text-xs text-slate-500">{contactInfo.phone}</p>
            </a>

            <div className="service-card group reveal delay-300">
              <div className="icon-wrap">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Location</p>
              <p className="text-xs text-slate-500">{contactInfo.address}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 reveal delay-400">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:border-[var(--accent-dark)] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:border-[var(--accent-dark)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-10 h-10 rounded bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-[var(--accent)] hover:border-[var(--accent-dark)] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}