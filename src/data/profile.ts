export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'dev' | 'mail';
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const profile = {
  fullName: 'Mahfuzur Rahman',
  shortName: 'Mahfuz',
  role: 'Software Engineer',
  headline:
    'Backend-leaning full-stack engineer building scalable SaaS, ERP, commerce, and media platforms with Laravel at the core and modern frontend systems where they actually help.',
  intro:
    '2.5+ years building production web applications across ERP, eCommerce, media, and content systems. I work across application architecture, frontend delivery, performance optimization, database design, deployment automation, and the kind of production details that decide whether software survives real users.',
  location: 'Dhaka, Bangladesh',
  email: 'mahfuz0rahman00@gmail.com',
  phone: '01735309804',
  github: 'https://github.com/mahfuz-rahman007',
  linkedin: 'https://www.linkedin.com/in/mahfuzur-rahman-44723728a/',
  devto: 'https://dev.to/devmahfuz',
  availability:
    'Open to thoughtful engineering opportunities, contract builds, and product work where reliability and speed both matter.',
  quickFacts: [
    { label: 'Experience', value: '2.5+ years' },
    { label: 'Focus', value: 'Laravel + scalable product engineering' },
    { label: 'Writing', value: 'DEV articles on backend + deployment' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/mahfuz-rahman007',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mahfuzur-rahman-44723728a/',
      icon: 'linkedin',
    },
    {
      label: 'DEV',
      href: 'https://dev.to/devmahfuz',
      icon: 'dev',
    },
    {
      label: 'Email',
      href: 'mailto:mahfuz0rahman00@gmail.com',
      icon: 'mail',
    },
  ] as SocialLink[],
  skillGroups: [
    {
      title: 'Backend',
      items: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Frontend',
      items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Data & Performance',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization'],
    },
    {
      title: 'DevOps & Delivery',
      items: ['AWS', 'Docker', 'Kubernetes', 'Nginx', 'GitHub Actions'],
    },
  ] as SkillGroup[],
  strengths: [
    'Shipping production applications, not just demos',
    'Balancing backend depth with polished frontend delivery',
    'Improving performance through caching, indexing, and better query paths',
    'Owning deployment flow, VPS setup, CI/CD, and zero-downtime releases',
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Bit Byte Technology',
      period: 'Feb 2024 – Present',
      location: 'Dhaka',
      summary:
        'Built and improved ERP, newspaper, and customer-facing platforms with strong emphasis on performance, reliability, and scalable delivery.',
      bullets: [
        'Migrated large Laravel + Vue systems to newer stacks and improved performance by up to 80% through query optimization, indexing, and caching.',
        'Designed NewBD architecture and schema with Redis-backed performance and automated zero-downtime deployment pipelines.',
        'Built frontend systems in Vue/Nuxt and React/Next while fixing security issues and improving rendering performance.',
        'Dockerized applications and configured VPS infrastructure for smoother CI/CD and lower deployment risk.',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Themelooks Ltd',
      period: 'Sep 2022 – Jan 2024',
      location: 'Dhaka',
      summary:
        'Developed SaaS and productized web applications for international customers with Laravel-heavy backend systems and custom builder flows.',
      bullets: [
        'Built CMSlooks, Newslooks, and Tlcommerce products with reusable product thinking instead of one-off builds.',
        'Implemented REST APIs, queues, schedules, email notifications, and package-level backend logic.',
        'Helped ship a dynamic page builder and supported end users directly, which sharpened product sense alongside engineering work.',
      ],
    },
  ] as ExperienceItem[],
  education: {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Sonargaon University',
    location: 'Dhaka',
  },
};
