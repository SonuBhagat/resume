import React from 'react';
import { contactInfo } from '../data/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-container">
        <div>
          {/* Target Roles */}
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-3 font-semibold">
              Target Roles
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {contactInfo.targetRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs px-3 py-1.5 rounded bg-white/3 text-slate-500 border border-white/5"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <p className="text-xs text-slate-600">
              &copy; {currentYear} {contactInfo.name}
            </p>

            <div className="flex items-center gap-6">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-[var(--accent)] transition-colors"
              >
                GitHub
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-600 hover:text-[var(--accent)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-xs text-slate-600 hover:text-[var(--accent)] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
