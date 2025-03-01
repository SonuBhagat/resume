import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Contact() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <a href={`mailto:${contactInfo.email}`} className="text-lg flex items-center gap-2 hover:text-blue-200 transition-colors">
        <Mail className="w-5 h-5" />
        <span>{contactInfo.email}</span>
      </a>
      <a href={`tel:${contactInfo.phone}`} className="flex text-lg items-center gap-2 hover:text-blue-200 transition-colors">
        <Phone className="w-5 h-5" />
        <span>{contactInfo.phone}</span>
      </a>
      <div className="flex items-center text-lg gap-2">
        <MapPin className="w-5 h-5" />
        <span>{contactInfo.address}</span>
      </div>
      <div className="flex text-lg gap-4">
        <a href={contactInfo.github} className="hover:text-blue-200 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={contactInfo.linkedin} className="hover:text-blue-200 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}