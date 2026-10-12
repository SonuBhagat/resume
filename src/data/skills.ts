import type { LucideIcon } from 'lucide-react';
import { Code2, Database, Bot, BarChart3, Palette } from 'lucide-react';

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  skills: string[];
  gradient: string;
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Full-Stack Development',
    icon: Code2,
    gradient: 'from-indigo-500 to-violet-500',
    skills: [
      'React',
      'React Native',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'Socket.IO',
      'Responsive Web Apps',
      'Android & iOS',
    ],
  },
  {
    category: 'Backend & Data',
    icon: Database,
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      'PostgreSQL',
      'SQL',
      'Redis',
      'Database Design',
      'Authentication & Authorization',
      'API Integration',
      'Real-time Communication',
    ],
  },
  {
    category: 'AI & Automation',
    icon: Bot,
    gradient: 'from-violet-500 to-purple-500',
    skills: [
      'Generative AI',
      'LLM API Integration',
      'AI-Assisted Coding',
      'RAG',
      'AI Chatbots',
      'WhatsApp AI',
      'OCR Automation',
      'ATS & Resume Screening',
      'AI IT Ticketing',
      'Workflow Automation',
      'Document Processing',
    ],
  },
  {
    category: 'Digital Marketing',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      'Google Ads',
      'Meta Ads',
      'LinkedIn Ads',
      'PPC',
      'SEO',
      'SEM',
      'Social Media Marketing',
      'CRO',
      'Google Analytics',
      'GTM',
      'Search Console',
      'A/B Testing',
    ],
  },
  {
    category: 'Product & Design',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      'Product Development',
      'UI/UX',
      'Figma',
      'Responsive Design',
      'Mobile-first Design',
      'WordPress',
      'Photoshop',
      'Illustrator',
      'Canva',
    ],
  },
];
