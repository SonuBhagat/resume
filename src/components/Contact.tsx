import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, CheckCircle2, FileDown } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Senior Engineering Role Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = contactInfo.phone.replace(/[^0-9]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Sonu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Interested in discussing full-stack engineering, enterprise AI automation, or leadership roles?
            Drop a message or reach out directly.
          </p>
        </div>

        {/* 4 Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a
            href={`mailto:${contactInfo.email}`}
            className="service-card group reveal delay-100 border border-white/10 hover:border-[var(--accent)]/40 p-5"
          >
            <div className="icon-wrap mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-400 mb-0.5">Email Me</p>
            <p className="text-xs font-bold text-white truncate">{contactInfo.email}</p>
          </a>

          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="service-card group reveal delay-200 border border-white/10 hover:border-emerald-500/40 p-5"
          >
            <div className="icon-wrap mb-3">
              <Phone className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs font-semibold text-slate-400 mb-0.5">Direct Call</p>
            <p className="text-xs font-bold text-white">{contactInfo.phone}</p>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Sonu, I reviewed your portfolio and would like to connect.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card group reveal delay-300 border border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/60 p-5"
          >
            <div className="icon-wrap mb-3 bg-emerald-500/20 text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-emerald-400 mb-0.5">WhatsApp Quick Chat</p>
            <p className="text-xs font-bold text-white">Instant Response</p>
          </a>

          <div className="service-card group reveal delay-400 border border-white/10 p-5">
            <div className="icon-wrap mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-400 mb-0.5">Current Location</p>
            <p className="text-xs font-bold text-white">{contactInfo.address}</p>
          </div>
        </div>

        {/* Contact Form & Quick Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 border border-white/10 reveal delay-200">
            <h3 className="text-lg font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to Sonu's inbox.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Message Ready!</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Your mail client has been opened with your message details. You can also chat directly on WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[var(--accent)] font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0e16] border border-white/10 text-xs text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="Senior Engineering Role Opportunity">Senior Engineering Role Opportunity</option>
                    <option value="AI Automation / RAG Consultation">AI Automation / RAG Consultation</option>
                    <option value="Full-Stack / Mobile Project">Full-Stack / Mobile Project</option>
                    <option value="Leadership / AGM Role Discussion">Leadership / AGM Role Discussion</option>
                    <option value="General Inquiries">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Sonu about the role, team, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 text-xs py-3"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Info & Resume Download Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card p-6 sm:p-8 border border-white/10 reveal delay-300">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
                Recruiter Direct Access
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-3">
                Looking for a Complete Candidate Dossier?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                You can download the full, ATS-compliant PDF resume detailing Sonu's 5+ years of experience across
                full-stack development, Kisaan Sampatti, enterprise CRM, and corporate AI automation.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="/Sonu_Bhagat_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-xs font-semibold text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-4 h-4 text-[var(--accent)] group-hover:scale-110 transition-transform" />
                    <span>Download Sonu Bhagat Resume (PDF)</span>
                  </span>
                  <span className="text-[10px] text-slate-400">133 KB</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-between text-xs font-semibold text-emerald-300 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Connect directly on WhatsApp</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">Online</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] text-slate-400 mb-3 text-center sm:text-left">Connect across platforms:</p>
              <div className="flex items-center gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-xs text-slate-400 hover:text-white hover:border-[var(--accent)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-[var(--accent)]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-xs text-slate-400 hover:text-white hover:border-[var(--accent)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[var(--accent)]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}