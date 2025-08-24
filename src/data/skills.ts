import type { LucideIcon } from 'lucide-react';
import { BarChart, Target, Search, Paintbrush, Database, Share, Globe } from 'lucide-react';

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Digital Marketing Specialist',
    icon: BarChart,
    skills: [
      'Google Analytics',
      'Google Tag Manager',
      'Adobe Analytics',
      'HubSpot',
      'ActiveCampaign',
      'Mailchimp',
      'SEMrush',
      'Ahrefs',
      'SimilarWeb',
      'Meta Pixel'
    ]
  },
  {
    category: 'PPC Ads Specialist',
    icon: Target,
    skills: [
      'Google Ads',
      'Facebook Ads Manager',
      'LinkedIn Ads',
      'X Ads (formerly Twitter)'
    ]
  },
  {
    category: 'SEO/SEM Expert',
    icon: Search,
    skills: [
      'Ahrefs',
      'SEMrush',
      'Moz',
      'Screaming Frog',
      'Ubersuggest',
      'Keyword Planner',
      'AnswerThePublic',
      'Sitebulb',
      'DeepCrawl',
      'Off-page SEO',
      'On-page SEO'
    ]
  },
  {
    category: 'Graphic & UI/UX Designer',
    icon: Paintbrush,
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Corel Draw',
      'Canva',
      'Figma',
      'Adobe InDesign'
    ]
  },
  {
    category: 'CMS Developer (WordPress, etc.)',
    icon: Database,
    skills: [
      'WordPress',
      'Elementor',
      'Divi',
      'WPBakery',
      'Wix'
    ]
  },
  {
    category: 'Social Media Manager',
    icon: Share,
    skills: [
      'Buffer',
      'Hootsuite',
      'Later',
      'Sprout Social',
      'SocialBee',
      'Canva',
      'Adobe Express'
    ]
  },
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'Bootstrap-5', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'Tailwind CSS']
  }
];
