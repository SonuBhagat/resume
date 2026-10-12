export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  badgeColor?: string;
  category: 'all' | 'featured' | 'full-stack' | 'ai' | 'web';
  featured: boolean;
  shortDescription: string;
  detailedOverview: string;
  companyOrContext: string;
  keyFeatures: string[];
  architectureHighlights: string[];
  impactHighlights: string[];
  metrics?: ProjectMetric[];
  technologies: string[];
  liveLink?: string;
  linkText?: string;
  iconType: 'smartphone' | 'server' | 'bot' | 'cpu' | 'workflow' | 'globe';
};

export const projectsData: ProjectDetail[] = [
  {
    id: 'kisaan-sampatti',
    name: 'Kisaan Sampatti — Digital Agri Platform',
    tagline: 'High-Scale Agricultural Mobile & Ecosystem Platform serving 21,000+ Farmers & Traders',
    badge: '21K+ Farmers & Traders',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    category: 'featured',
    featured: true,
    iconType: 'smartphone',
    companyOrContext: 'Manikaran Agri-Digital Ecosystem',
    shortDescription:
      'Production-grade cross-platform mobile ecosystem (Android & iOS) connecting 21,000+ farmers, agricultural manufacturers, and traders with real-time mandi prices, direct marketplace commerce, and digital advisory services.',
    detailedOverview:
      'Kisaan Sampatti is an agricultural digital transformation platform designed to eliminate intermediaries and deliver fair market access to over 21,000 farmers and commodity traders across India. Sonu contributed directly to core product development, cross-platform mobile architecture, high-throughput REST API integrations, and robust database models. The system addresses rural low-bandwidth challenges with resilient caching, real-time pricing feeds, and a simplified multi-lingual UX.',
    keyFeatures: [
      'Multi-sided Digital Marketplace connecting farmers, bulk buyers, traders, and agri-input manufacturers.',
      'Live mandi rate aggregator & agricultural commodity price trackers updated in real time.',
      'Farmer-centric multi-lingual interface engineered for low-literacy and rural usability.',
      'Trader verification, KYC workflows, purchase ledgers, and invoice generation.',
      'Offline-first caching and lightweight payload delivery for low-connectivity rural environments.',
      'Push notification engine for price alerts, weather forecasts, and agronomic advisories.'
    ],
    architectureHighlights: [
      'React Native cross-platform engine with native Android & iOS optimizations.',
      'Node.js & Express.js microservice APIs orchestrated for high concurrent read loads.',
      'PostgreSQL relational schema optimized for geo-location commodity lookups and transactions.',
      'Redis cache layers for rapid retrieval of real-time mandi spot rates and cached catalogues.'
    ],
    impactHighlights: [
      '21,000+ registered farmers and trading participants empowered across agricultural belts.',
      'Drastically reduced middleman commissions through direct-to-buyer transactions.',
      'Over 99.8% crash-free mobile session stability across diverse entry-level Android devices.'
    ],
    metrics: [
      { label: 'Active Reach', value: '21K+ Users' },
      { label: 'Platforms', value: 'Android & iOS' },
      { label: 'Architecture', value: 'Mobile + Node + Postgres' },
      { label: 'Core Focus', value: 'Agri-Tech Commerce' }
    ],
    technologies: ['React Native', 'Android', 'iOS', 'Node.js', 'PostgreSQL', 'Redis', 'REST APIs', 'WebSockets', 'UI/UX']
  },
  {
    id: 'crm-onboarding',
    name: 'Enterprise CRM & Client Onboarding Platform',
    tagline: 'End-to-End Enterprise Client Onboarding & CRM for Manikaran Power Limited (PSS)',
    badge: 'Live Enterprise System',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    category: 'featured',
    featured: true,
    iconType: 'server',
    companyOrContext: 'Manikaran Power Limited — PSS Portal',

    shortDescription:
      'Full-stack enterprise CRM and digital onboarding portal developed for Power & Solar Solutions (PSS), automating client intake, multi-stage KYC compliance, audit trails, and internal corporate workflows across group businesses.',
    detailedOverview:
      'This internal and client-facing onboarding platform was engineered to replace fragmented email and paper trails with a unified digital gateway. The system orchestrates client inquiries, multi-step KYC verification, legal document uploads, approval chains, and executive tracking dashboards across 12 sister corporate entities.',
    keyFeatures: [
      'Multi-tier Role-Based Access Control (RBAC) supporting sales reps, verification officers, legal teams, and clients.',
      'Interactive multi-step digital onboarding funnel with dynamic form validation and document intake.',
      'Automated KYC verification, compliance checks, and secure cloud document storage.',
      'Real-time onboarding lifecycle tracker showing application status, review blockers, and audit histories.',
      'Executive analytics dashboard tracking onboarding velocity, lead conversion, and department turnaround metrics.',
      'Centralized client database integrating with corporate ERP and backend power trading workflows.'
    ],
    architectureHighlights: [
      'React frontend engineered with modular state management and responsive enterprise layout.',
      'Node.js & Express RESTful services with strict JWT authentication and encrypted data transport.',
      'PostgreSQL database designed with relational constraints, immutable audit logs, and status triggers.',
      'Production deployment on enterprise domain with SSL/TLS, CORS policies, and high-availability configuration.'
    ],
    impactHighlights: [
      'Cut end-to-end client onboarding turnaround time by over 60%.',
      '100% digital auditability with zero lost onboarding compliance records.',
      'Adopted across Manikaran Power’s corporate power and solar operations.'
    ],
    metrics: [
      { label: 'Type', value: 'Enterprise CRM' },
      { label: 'Turnaround Gain', value: '60% Faster' },
      { label: 'Security', value: 'RBAC & Audit Trail' },
      { label: 'Role', value: 'Full-Stack Architecture' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'REST APIs', 'RBAC', 'Enterprise Security', 'Tailwind CSS']
  },
  {
    id: 'ai-corporate-automation',
    name: 'Corporate AI Automation Suite & WhatsApp RAG Assistant',
    tagline: 'Enterprise Generative AI, RAG Knowledge Base & Automated Operations across 12 Sister Firms',
    badge: 'Generative AI & RAG in Production',
    badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-500/10',
    category: 'featured',
    featured: true,
    iconType: 'bot',
    companyOrContext: 'Manikaran Power Limited & 12 Sister Entities',
    shortDescription:
      'Architected and integrated conversational AI solutions using Retrieval-Augmented Generation (RAG) over WhatsApp, alongside OCR document pipelines, LLM-powered Excel data automation, and automated business workflows to digitize corporate knowledge access and eliminate manual spreadsheet processing.',
    detailedOverview:
      'As part of Manikaran Power Limited’s digital transformation roadmap covering 12 sister firms, Sonu engineered a corporate AI automation infrastructure. The centerpiece is an AI-powered WhatsApp assistant utilizing RAG: employees, field agents, and partners can converse in natural language to query complex organizational knowledge, regulatory circulars, and power industry policies. This is paired with automated OCR document pipelines and business process workflows.',
    keyFeatures: [
      'WhatsApp Conversational AI Gateway powered by LLMs and Retrieval-Augmented Generation (RAG).',
      'Context-aware knowledge base ingesting corporate SOPs, policy guidelines, power tariffs, and technical manuals.',
      'OCR Extraction Engine for automatic digitizing of printed invoices, contracts, utility bills, and energy telemetry reports.',
      'LLM-powered automation of repetitive manual Excel workflows — transforming raw data entry, reconciliation, and reporting tasks into intelligent automated pipelines.',
      'Intelligent Business Process Automation (BPA) triggering notifications, status updates, and departmental handoffs.',
      'Natural-language query routing that summarizes long regulatory documents into actionable answers within seconds.'
    ],
    architectureHighlights: [
      'Vector database embeddings and semantic search pipeline integrated with modern LLM APIs.',
      'WhatsApp Business Cloud API integration handling multi-turn user dialogues with fallback logic.',
      'Python OCR automation microservice for tabular data extraction and automated validation.',
      'Node.js orchestration layer managing rate limits, prompt templates, and security guardrails.'
    ],
    impactHighlights: [
      'Eliminated hours of manual internal information search for corporate staff across 12 firms.',
      '24/7 instant corporate assistance directly on WhatsApp without requiring VPN or complex portals.',
      'Accelerated document extraction accuracy and eliminated manual transcription errors.',
      'Replaced hours of manual Excel data entry and reconciliation with LLM + OCR automated workflows.'
    ],
    metrics: [
      { label: 'Corporate Scope', value: '12 Sister Firms' },
      { label: 'Interface', value: 'WhatsApp AI' },
      { label: 'Architecture', value: 'RAG + Vector Search' },
      { label: 'Efficiency', value: 'Instant Access' }
    ],
    technologies: ['Generative AI', 'RAG', 'LLM APIs', 'WhatsApp Business API', 'Python', 'OCR', 'Vector Search', 'Node.js', 'Excel Automation']
  },
  {
    id: 'ai-hrms-operations',
    name: 'AI-Powered HRMS, ATS & Enterprise IT Operations Suite',
    tagline: 'End-to-End Enterprise HRMS with OCR & LLM Resume Screening (ATS), Digital Onboarding, IT Asset Inventory & AI Helpdesk Ticketing',
    badge: 'AI ATS • Onboarding • IT Ticketing',
    badgeColor: 'border-fuchsia-500/40 text-fuchsia-400 bg-fuchsia-500/10',
    category: 'ai',
    featured: true,
    iconType: 'workflow',
    companyOrContext: 'Enterprise Group Operations',
    shortDescription:
      'Unified enterprise platform combining an intelligent ATS with OCR & LLM-based resume screening, digital joining/onboarding workflows, comprehensive IT asset inventory tracking, AI-enabled IT ticketing & helpdesk automation, and a self-service employee portal.',
    detailedOverview:
      'Architected and delivered an integrated AI HRMS & Operations ecosystem that streamlines the entire employee lifecycle—from talent acquisition to IT offboarding. The platform replaces disjointed tools with a cohesive system featuring an intelligent ATS that uses OCR and LLMs for semantic resume parsing and candidate ranking, paperless onboarding with automated compliance verification, complete IT asset inventory management across all hardware and software, AI-powered IT service desk ticketing with automated resolution routing, and a modern employee self-service portal.',
    keyFeatures: [
      'OCR & LLM-Powered ATS: Automated resume parsing from scanned PDFs, Word docs, and portfolios, extracting skills, experience, and scoring candidates against job descriptions using semantic matching.',
      'Paperless Joining & Digital Onboarding: Automated employee dossier creation, document verification, policy sign-offs, and multi-department joining approval chains.',
      'Comprehensive IT Asset Inventory: End-to-end tracking of all hardware (laptops, desktops, monitors, peripherals), software licenses, cloud accounts, warranty cycles, and digital asset allocation acknowledgements.',
      'AI-Enabled IT Ticketing & Service Desk: Natural-language ticket submission where LLMs categorize issues, detect urgency, auto-suggest self-help fixes, and route complex escalations to IT engineers.',
      'Employee Self-Service (ESS) Portal: Centralized dashboard for employees to access profiles, check assigned IT assets, raise service tickets, view organizational updates, and submit requests.',
      'Role-Based Access Control (RBAC): Strict permission boundaries for HR administrators, IT asset managers, department heads, and employees.'
    ],
    architectureHighlights: [
      'React & Tailwind CSS frontend engineered with responsive dashboards, interactive candidate pipelines, and real-time ticket monitors.',
      'Node.js & Express microservices orchestrating business workflows, authentication, and service desk queues.',
      'Python OCR & LLM pipeline using vision/document parsers and LLM embeddings for structured JSON resume extraction and candidate scoring.',
      'PostgreSQL database schema with relational models for candidate profiles, employees, assets, tickets, and audit trails.',
      'Redis cache & real-time notification engine for instant ticket updates and onboarding status alerts.'
    ],
    impactHighlights: [
      'Cut candidate resume screening and shortlist turnaround time by over 70% using OCR + LLM parsing.',
      'Accelerated employee joining and equipment provisioning from days to under 4 hours.',
      '100% real-time accountability across company-wide IT hardware inventory and software licenses.',
      'Automated resolution of ~40% of routine IT support queries through AI-assisted troubleshooting.'
    ],
    metrics: [
      { label: 'Screening Gain', value: '70% Faster ATS' },
      { label: 'Asset Tracking', value: '100% IT Inventory' },
      { label: 'Ticketing', value: 'AI-Powered Triage' },
      { label: 'Platform Scope', value: 'Unified HRMS & IT' }
    ],
    technologies: [
      'React',
      'Node.js',
      'Python',
      'LLM APIs',
      'OCR Pipelines',
      'PostgreSQL',
      'Redis',
      'REST APIs',
      'RBAC',
      'Tailwind CSS'
    ]
  },
  {
    id: 'dayahead-inc',
    name: 'DayAhead Inc. — Energy Forecasting Platform',
    tagline: 'Professional Corporate Web Presence for Renewable Energy Analytics & Forecasting Leader',
    badge: 'Production Web App',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    category: 'web',
    featured: false,
    iconType: 'globe',
    companyOrContext: 'DayAhead Inc. (Energy Sector)',
    liveLink: 'https://dayaheadinc.com/in-en',
    linkText: 'dayaheadinc.com/in-en',
    shortDescription:
      'Modern, highly responsive corporate website showcasing renewable energy forecasting services, algorithm capabilities, and industry insights built with React and Tailwind CSS.',
    detailedOverview:
      'Built a clean, credible web platform for DayAhead Inc., a company specializing in advanced renewable energy forecasting. Designed with modern typography, smooth interactive layouts, and high performance across all devices.',
    keyFeatures: [
      'Interactive energy forecasting presentation and service offerings.',
      'High-speed responsive design optimized for international corporate audiences.',
      'Clean typography and component architecture for effortless content updates.'
    ],
    architectureHighlights: [
      'ReactJS component architecture styled with modern Tailwind CSS.',
      'Optimized asset loading and mobile-first responsive grid.'
    ],
    impactHighlights: [
      'Established high credibility web presence for institutional energy clients.'
    ],
    technologies: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'SEO']
  },
  {
    id: 'electrovault-power',
    name: 'Electrovault Power — Battery Storage Solutions',
    tagline: 'Next.js High-Performance Portal for Advanced Clean Energy Storage Systems',
    badge: 'Next.js & SSR',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    category: 'web',
    featured: false,
    iconType: 'globe',
    companyOrContext: 'Electrovault Power',
    liveLink: 'https://www.electrovault.in/',
    linkText: 'electrovault.in',
    shortDescription:
      'High-performance website for Electrovault Power, delivering battery storage engineering specs, project portfolios, and high SEO visibility built using Next.js.',
    detailedOverview:
      'Engineered an enterprise clean-tech website utilizing Next.js for server-side rendering, ultra-fast page speeds, and technical SEO structure to drive lead generation for commercial energy storage installations.',
    keyFeatures: [
      'Server-Side Rendered (SSR) performance for maximum search visibility.',
      'Interactive battery storage specification displays and capability showcase.',
      'Conversion-focused inquiry funnels.'
    ],
    architectureHighlights: [
      'Next.js SSR framework integrated with Tailwind CSS.',
      'Structured meta tags and OpenGraph optimization for search engine indexing.'
    ],
    impactHighlights: [
      'Sub-second load times and high organic ranking for clean-tech battery solutions.'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SSR', 'SEO Optimization']
  },
  {
    id: 'malgudi-junction',
    name: 'Malgudi Junction Restaurant',
    tagline: 'Interactive Single-Page Digital Experience for Premium Delhi Restaurant',
    badge: 'Commercial Web',
    badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-500/10',
    category: 'web',
    featured: false,
    iconType: 'globe',
    companyOrContext: 'Malgudi Junction (Dwarka, Delhi)',
    liveLink: 'https://malgudijunction.in/',
    linkText: 'malgudijunction.in',
    shortDescription:
      'Responsive, visually appealing single-page culinary web application showcasing menu categories, ambient dining visuals, and location reservation details.',
    detailedOverview:
      'Created an engaging web destination for Malgudi Junction in Dwarka, Delhi. Designed with rich imagery, mobile menu navigation, and integrated direct customer booking contact points.',
    keyFeatures: [
      'Interactive food & beverage menu showcase.',
      'Location, directions, and direct customer reservation inquiry integration.',
      'Optimized imagery and fast loading on mobile networks.'
    ],
    architectureHighlights: [
      'Modular HTML5, CSS3, Bootstrap 5, and JavaScript interaction handlers.'
    ],
    impactHighlights: [
      'Consistent organic discovery and customer visit conversion in Dwarka, Delhi.'
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Responsive UI']
  }
];
