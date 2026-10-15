export interface Project {
  id: string
  number: string
  title: string
  category: 'automation' | 'ai' | 'enterprise' | 'hardware'
  categoryLabel: string
  organization: string
  period: string
  summary: string
  role: string
  stack: string[]
  featured: boolean
  visual: 'bom' | 'monitor' | 'ai' | 'serial' | 'enterprise' | 'knowledge'
  challenge: string
  approach: string[]
  outcome: string
  highlights: string[]
}

export const profile = {
  name: 'Raditya Rifqi Pratama',
  shortName: 'Raditya',
  role: 'Digital Transformation Developer',
  location: 'Indonesia',
  email: 'radityaprtm2002@gmail.com',
  github: 'https://github.com/radityaprtm',
  linkedin: null as string | null,
  summary: 'Electronics and Instrumentation graduate from Universitas Gadjah Mada, building enterprise applications and digital-transformation solutions. My work connects intuitive interfaces, AI-enabled workflows, operational data, and physical hardware.',
  cvUrl: '/files/Raditya-Pratama-CV.pdf',
}

export const projects: Project[] = [
  {
    id: 'bom-automation', number: '01', title: 'BOM Automation & Validation',
    category: 'automation', categoryLabel: 'Workflow automation',
    organization: 'LG Electronics R&D', period: 'April 2026 - Present',
    summary: 'From two working days to under ten minutes. Automated Bill of Materials verification for hundreds of TV models.',
    role: 'Full-stack developer', stack: ['Next.js', 'React', 'Jira', 'API integration'], featured: true, visual: 'bom',
    challenge: 'Verifying Bill of Materials data across hundreds of TV models required approximately two working days of manual checking.',
    approach: [
      'Developed a web application to support repeatable BOM validation across TV engineering datasets.',
      'Integrated Jira and engineering data sources to automate the manual verification workflow.',
      'Brought validation results into a browser-based interface for the engineering team.',
    ],
    outcome: 'Reduced verification time for hundreds of TV models from approximately two working days to under 10 minutes.',
    highlights: ['Hundreds of TV models', 'Under 10 minutes', 'Jira integration'],
  },
  {
    id: 'tv-model-monitoring', number: '02', title: 'TV Model Monitoring Platform',
    category: 'automation', categoryLabel: 'Engineering intelligence',
    organization: 'LG Electronics R&D', period: 'April 2026 - Present',
    summary: 'A shared view of TV model datasets, with change detection and notifications that keep engineers informed.',
    role: 'Full-stack developer', stack: ['Next.js', 'React', 'PostgreSQL', 'Prisma'], featured: true, visual: 'monitor',
    challenge: 'Engineering teams needed visibility into model datasets, newly added TV models, and changes to operational data.',
    approach: [
      'Built a full-stack monitoring platform and engineering dashboard with Next.js and React.',
      'Used PostgreSQL and Prisma ORM to manage and query model datasets.',
      'Implemented detection of newly added models and notifications for dataset changes.',
    ],
    outcome: 'Provided an engineering dashboard to track TV datasets and bring model additions and data changes to users\' attention.',
    highlights: ['Model change detection', 'Engineering dashboard', 'Database monitoring'],
  },
  {
    id: 'ai-sugarcane-inspection', number: '03', title: 'AI Sugarcane Inspection',
    category: 'ai', categoryLabel: 'AI-enabled applications',
    organization: 'TelkomSigma / SGN', period: 'September 2024 - April 2026',
    summary: 'A frontend and conversational interface for an AI-assisted sugarcane inspection platform.',
    role: 'Frontend developer', stack: ['Next.js', 'React', 'REST APIs', 'LLM integration'], featured: true, visual: 'ai',
    challenge: 'PT Sinergi Gula Nusantara needed an application interface for AI-assisted sugarcane inspection and conversational access to the platform.',
    approach: [
      'Developed the application frontend using Next.js and React.',
      'Built chatbot interfaces as part of the inspection application.',
      'Collaborated with the team on large language model integration.',
    ],
    outcome: 'Delivered frontend and chatbot features for an AI-enabled sugarcane-inspection application supporting SGN.',
    highlights: ['Inspection interface', 'Conversational experience', 'LLM collaboration'],
  },
  {
    id: 'tv-debugging-tool', number: '04', title: 'Browser-based TV Debugging',
    category: 'hardware', categoryLabel: 'Hardware meets software',
    organization: 'LG Electronics R&D', period: 'April 2026 - Present',
    summary: 'Direct TV hardware communication in the browser, built for engineering testing and troubleshooting.',
    role: 'Application developer', stack: ['Next.js', 'React', 'Web Serial API', 'RS-232'], featured: false, visual: 'serial',
    challenge: 'TV engineers needed a browser-based application to support direct hardware communication during testing and troubleshooting.',
    approach: [
      'Built the debugging application with Next.js and React.',
      'Integrated the Web Serial API to connect the browser to serial hardware.',
      'Used RS-232 communication to support TV engineering tests and troubleshooting.',
    ],
    outcome: 'Connected a browser-based engineering interface directly to TV hardware over serial communication.',
    highlights: ['Browser-to-device communication', 'Serial integration', 'Engineering troubleshooting'],
  },
  {
    id: 'risk-management-chatbot', number: '05', title: 'Risk Management AI Chatbot',
    category: 'ai', categoryLabel: 'Enterprise knowledge & AI',
    organization: 'TelkomSigma', period: 'September 2024 - April 2026',
    summary: 'Chat, conversation history, and document management for a RAG-based risk-management application.',
    role: 'Frontend developer', stack: ['Nuxt.js', 'Vue.js', 'Axios', 'OpenRouter', 'RAG'], featured: false, visual: 'ai',
    challenge: 'Multiple business units needed a conversational interface and document-management features for an internal risk-management chatbot.',
    approach: [
      'Developed Nuxt.js frontend features for chat and conversation history.',
      'Built document-upload and document-management interfaces for the RAG workflow.',
      'Assisted a backend developer with OpenRouter-based LLM API integration using Axios.',
    ],
    outcome: 'Delivered chat, history, and document-management features for an internal AI-enabled risk-management application.',
    highlights: ['RAG-based conversations', 'Document management', 'Multi-unit workflows'],
  },
  {
    id: 'enterprise-platforms', number: '06', title: 'Enterprise Platforms',
    category: 'enterprise', categoryLabel: 'Business applications',
    organization: 'TelkomSigma', period: 'September 2024 - April 2026',
    summary: 'Application features across CMDB, CRM, and risk-management systems supporting business operations.',
    role: 'Frontend developer', stack: ['Vue.js', 'Nuxt.js', 'Next.js', 'REST APIs', 'Axios'], featured: false, visual: 'enterprise',
    challenge: 'Internal and client applications needed reliable interfaces for infrastructure records, monitoring, documentation, and business workflows.',
    approach: [
      'Contributed features for CMDB, CRM, and risk-management applications.',
      'Supported interfaces for asset records, network and server monitoring, financial documentation, and legalization workflows.',
      'Integrated and tested REST APIs across multiple backend services using Axios, Postman, and Swagger UI.',
    ],
    outcome: 'Contributed frontend features and API integrations across enterprise applications supporting operational and administrative teams.',
    highlights: ['Infrastructure records', 'Business workflows', 'REST API integration'],
  },
  {
    id: 'knowledge-management', number: '07', title: 'Knowledge Management System',
    category: 'enterprise', categoryLabel: 'Knowledge & documentation',
    organization: 'TelkomSigma', period: 'September 2024 - April 2026',
    summary: 'A Vue.js application for managing institutional knowledge and documentation in a national data-center project.',
    role: 'Frontend developer', stack: ['Vue.js', 'JavaScript', 'REST APIs'], featured: false, visual: 'knowledge',
    challenge: 'An Indonesian national data-center project required a frontend for managing institutional knowledge and documentation.',
    approach: [
      'Developed the Knowledge Management System frontend using Vue.js.',
      'Implemented interfaces supporting the management of institutional knowledge and documents.',
      'Worked within the enterprise application development workflow at TelkomSigma.',
    ],
    outcome: 'Delivered a Vue.js knowledge-management frontend for the national data-center project.',
    highlights: ['Institutional knowledge', 'Documentation workflows', 'Vue.js frontend'],
  },
  {
    id: 'customer-relationship-mapping', number: '08', title: 'Customer Relationship Mapping',
    category: 'enterprise', categoryLabel: 'Stakeholder management',
    organization: 'TelkomSigma', period: 'September 2024 - April 2026',
    summary: 'A React application for managing stakeholders and tracking internal documents.',
    role: 'Frontend developer', stack: ['React', 'Ant Design', 'JavaScript'], featured: false, visual: 'enterprise',
    challenge: 'Business teams needed interfaces for maintaining stakeholder information and following internal documents.',
    approach: [
      'Developed the application frontend using React and Ant Design UI components.',
      'Built features for stakeholder management.',
      'Implemented interfaces to track internal documentation.',
    ],
    outcome: 'Delivered a customer-relationship mapping frontend supporting stakeholder records and internal document tracking.',
    highlights: ['Stakeholder records', 'Document tracking', 'Ant Design interface'],
  },
]

export const experiences = [
  {
    organization: 'LG Electronics R&D Center Indonesia',
    role: 'Junior Research Engineer - Digital Transformation Developer',
    period: 'April 2026 - Present', location: 'Cikarang, West Bekasi, Indonesia',
    description: 'Leading assigned DX/AX initiatives within TV R&D, connecting engineering workflows, operational data, and full-stack applications.',
    highlights: [
      'Built a BOM validation tool with Next.js, React, and Jira integration, reducing checks for hundreds of TV models from approximately two working days to under 10 minutes.',
      'Developed a TV model monitoring system with Next.js, PostgreSQL, and Prisma, including new-model detection and change notifications.',
      'Integrated Jira, internal APIs, databases, and engineering sources to automate validation and data monitoring.',
      'Built a browser-based TV debugging application using the Web Serial API and RS-232 communication.',
    ],
  },
  {
    organization: 'TelkomSigma', role: 'Junior Programmer',
    period: 'September 2024 - April 2026', location: 'Sleman, Yogyakarta, Indonesia',
    description: 'Developed enterprise web applications and AI-enabled business interfaces across internal and client projects.',
    highlights: [
      'Developed Next.js and React frontend features and chatbot interfaces for an AI-assisted sugarcane-inspection application for PT Sinergi Gula Nusantara.',
      'Built Nuxt.js chat, conversation history, and document-management features for a RAG-based enterprise risk-management chatbot.',
      'Contributed to CMDB, CRM, risk-management, and knowledge-management applications using Vue.js, Nuxt.js, Next.js, and React.',
      'Integrated and tested REST APIs using Axios, Postman, and Swagger UI, including connections to Python FastAPI services.',
      'Used Git, GitHub, GitLab, Jenkins, and GitLab CI/CD for collaboration and deployment.',
      'Gained introductory exposure to SAP L1 managed operations, ABAP, and SAP Fiori through discussions with support and development practitioners.',
    ],
  },
  {
    organization: 'Madrasah Mu’allimin Muhammadiyah', role: 'Part-time ICT Teacher',
    period: 'June 2024 - September 2024', location: 'Sedayu, Bantul, Indonesia',
    description: 'Introduced students to programming, networks, and web technology through practical learning.',
    highlights: [
      'Taught programming fundamentals, algorithms, Industry 4.0 concepts, computer networking, and web technology.',
      'Mentored hands-on coding activities using Code.org and Scratch.',
    ],
  },
  {
    organization: 'Geoseismal Research Center / Upstream Innovation / Pertamina Hulu Energi',
    role: 'Hardware and Instrumentation Developer',
    period: 'July 2022 - December 2022', location: 'Bulaksumur, Yogyakarta, Indonesia',
    description: 'Developed instrumentation for geophysical self-potential measurements and field data acquisition.',
    highlights: [
      'Designed signal-conditioning circuits, sensor integrations, and data-collection systems.',
      'Programmed SBC and microcontroller platforms with C, C++, and Python for automation and measurement control.',
      'Calibrated and tested instruments and porous pot electrodes for resistivity and impedance measurements.',
      'Developed multiplexing relay switching systems for automated self-potential data extraction.',
    ],
  },
]

export const education = [
  {
    institution: 'Universitas Gadjah Mada', qualification: 'B.Sc. in Electronics and Instrumentation',
    period: 'September 2020 - May 2024', location: 'Sleman, Yogyakarta, Indonesia',
    detail: 'GPA 3.75 / 4.00. Coursework in instrumentation, industrial automation, robotics, control systems, embedded systems, networking, electronics, programming, SCADA, and DCS.',
  },
  {
    institution: 'EMURGO Academy', qualification: 'Cardano Developer Associate Program',
    period: 'June 2022 - December 2022', location: 'Singapore',
    detail: 'Study abroad coursework in blockchain development.',
  },
  {
    institution: 'Newton British Academy, Barwa City', qualification: 'IGCSE, AS and A Levels',
    period: 'September 2014 - June 2020', location: 'Doha, Qatar',
    detail: 'British curriculum secondary education.',
  },
]

export const certifications = [
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google', date: 'February 2026' },
  { name: 'Microsoft Azure AI-900', issuer: 'Microsoft', date: 'September 2025' },
  { name: 'Web Development and JavaScript Programming Basics', issuer: 'Dicoding', date: 'January 2025' },
  { name: 'AI Fundamentals', issuer: 'Dicoding Academy', date: 'January 2025' },
  { name: 'Writing Code Securely Awareness', issuer: 'PT SGI Asia', date: 'January 2025' },
  { name: 'Fundamental Cyber Security', issuer: 'TelkomSigma', date: 'October 2024' },
  { name: 'Millennial Career Evolution: ISO Quality Management (ISO 9001:2015)', issuer: 'PT Beniso Maju Bersama', date: 'November 2023' },
  { name: 'Cardano Developer Associate', issuer: 'EMURGO Academy', date: 'December 2022' },
]

export const skillGroups = [
  { name: 'Frontend', skills: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Data & APIs', skills: ['PostgreSQL', 'Prisma ORM', 'pgAdmin', 'FastAPI', 'REST APIs', 'Axios', 'API integration'] },
  { name: 'Engineering & hardware', skills: ['Python', 'C++', 'Web Serial API', 'RS-232', 'Arduino', 'Raspberry Pi'] },
  { name: 'Delivery & collaboration', skills: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'GitLab CI/CD', 'Jira', 'Confluence'] },
  { name: 'Systems & networking', skills: ['Linux (Ubuntu / Fedora)', 'Bash', 'SSH', 'TCP/IP', 'DNS', 'DHCP', 'VPN'] },
  { name: 'Security foundations', skills: ['SIEM fundamentals', 'Security monitoring', 'Incident response', 'Network security'] },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Indonesian', level: 'Fluent' },
  { name: 'French', level: 'Intermediate' },
  { name: 'Arabic', level: 'Beginner' },
  { name: 'Japanese', level: 'Beginner' },
]

export const activities = [
  { organization: 'LG Olympics', role: 'Master of Ceremony', period: 'June 2026', description: 'Volunteered as a master of ceremony during the corporate social activity program in Cikarang.' },
  { organization: 'Sigma Mengajar', role: 'Teaching Volunteer', period: 'August 2025', description: 'Supported a CSR education program for children from underprivileged backgrounds, encouraging confidence, communication, and creativity.' },
  { organization: 'Gimbalabs Indonesia', role: 'Blockchain Facilitator & Developer', period: 'June 2024 - February 2025', description: 'Co-facilitated Cardano and Web3 workshops covering tokenization, NFTs, smart contracts, wallets, secure data logging, and traceability.' },
  { organization: 'ELINS Research Club', role: 'Robotics Project Contributor', period: 'June 2024 - December 2024', description: 'Supported research on autonomous mobile robot navigation, literature review, ROS libraries, and introductory SLAM concepts.' },
  { organization: 'MESAMADA UGM', role: 'Head of Research Department', period: 'October 2021 - January 2024', description: 'Organized seminars introducing Indonesian higher education to Middle Eastern students and promoted cultural and academic collaboration.' },
  { organization: 'KKN-PPM UGM', role: 'Student Cluster Coordinator', period: 'June 2023 - August 2023', description: 'Coordinated a 50-day community program in Bambanglipuro, supporting MSMEs, nutrition and stunting-prevention education, and village solar lighting.' },
  { organization: 'Universitas Gadjah Mada', role: 'Digital & Analogue Electronics Lab Assistant', period: 'August - November 2022; March - June 2023', description: 'Supervised practical sessions and exams; co-authored practicum material on signal processing, logic gates, oscilloscopes, and semiconductor circuits. Used Cisco Packet Tracer in electronics and networking practicum.' },
]

export const awards = [
  { name: 'Level 1 Japanese Language Course (N3-N4)', issuer: 'Sun Asterisk / ANC Japan Kebun Tech', date: 'July 2025' },
  { name: 'Highest Achievement in French', issuer: 'Newton British Academy', date: 'June 2017' },
  { name: 'Outstanding Progress in Arabic', issuer: 'Newton British Academy', date: 'June 2015' },
  { name: 'Lego EV3 Mindstorm Robotics Competition - 2nd Place', issuer: 'The Little Engineer Qatar', date: 'November 2015' },
]
