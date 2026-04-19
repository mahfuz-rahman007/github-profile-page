export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  stack: string[];
  role: string;
  impact: string;
  challenge: string;
  solution: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
  featured: boolean;
  heroTone: 'accent' | 'pink' | 'aqua' | 'gold';
};

export const projects: Project[] = [
  {
    slug: 'erp-performance-overhaul',
    title: 'ERP Performance Overhaul',
    tagline:
      'Modernized a large ERP codebase, improved speed, and made complex business modules more maintainable.',
    category: 'Business systems',
    period: 'Bit Byte Technology',
    stack: ['Laravel', 'Vue', 'MySQL', 'Tailwind', 'Vite'],
    role: 'Software Engineer',
    impact:
      'Improved application performance by up to 80% while supporting inventory, purchase, accounts, and sales workflows.',
    challenge:
      'The system carried legacy framework choices, heavier queries, and feature complexity across multiple business modules that needed to keep working while being improved.',
    solution: [
      'Migrated large Laravel and Vue code paths to newer foundations without breaking critical business flows.',
      'Applied query optimization, indexing, and caching strategies to reduce load and improve response speed.',
      'Worked across requirements analysis, implementation, and delivery so technical improvements aligned with business usage.',
    ],
    outcomes: [
      'Faster application experience across core ERP modules.',
      'Better maintainability for future feature work.',
      'Lower backend load through improved data access patterns.',
    ],
    featured: true,
    heroTone: 'accent',
  },
  {
    slug: 'newbd-newspaper-platform',
    title: 'NewBD Newspaper Platform',
    tagline:
      'Led architecture and delivery for an online newspaper product with strong uptime and performance requirements.',
    category: 'Media platform',
    period: 'Bit Byte Technology',
    stack: ['Laravel', 'Redis', 'Vue', 'Nuxt', 'Tailwind', 'Docker'],
    role: 'Software Engineer',
    impact:
      'Built the application architecture and schema for a high-traffic content platform while maintaining 100% API uptime.',
    challenge:
      'Media systems need fast reads, stable APIs, and backend decisions that still hold under publication and traffic pressure.',
    solution: [
      'Designed the database schema and application architecture around performance and reliability.',
      'Used Redis caching and automated deployment workflows to keep the system responsive and stable.',
      'Handled both the development flow and the DevOps side for a cleaner release path.',
    ],
    outcomes: [
      'Reliable API behavior for content delivery.',
      'Faster response paths through caching and architecture decisions.',
      'Zero-downtime style delivery flow for safer releases.',
    ],
    featured: true,
    heroTone: 'pink',
  },
  {
    slug: 'mypremo-video-platform',
    title: 'MyPremo Video Platform',
    tagline:
      'Improved a video content selling platform with better frontend presentation, faster APIs, and scheduled system behaviors.',
    category: 'Content commerce',
    period: 'Bit Byte Technology',
    stack: ['Laravel', 'MySQL', 'Vue', 'Nuxt', 'Tailwind', 'Docker'],
    role: 'Software Engineer',
    impact:
      'Redesigned the homepage, improved API performance, and added system tasks and notifications for a smoother product experience.',
    challenge:
      'The platform needed better customer-facing presentation and stronger system behavior behind the scenes.',
    solution: [
      'Redesigned the home experience with Nuxt for a cleaner and more modern frontend flow.',
      'Improved backend performance and added scheduled tasks for recurring system behavior.',
      'Implemented email notifications and operational improvements for more reliable product behavior.',
    ],
    outcomes: [
      'Better customer-facing frontend experience.',
      'Faster API behavior.',
      'More complete product workflow with automation and notifications.',
    ],
    featured: true,
    heroTone: 'aqua',
  },
  {
    slug: 'tlcommerce-page-builder',
    title: 'Tlcommerce Page Builder',
    tagline:
      'Built builder-style product customization and improved the frontend performance of a multivendor eCommerce platform.',
    category: 'eCommerce platform',
    period: 'Themelooks Ltd',
    stack: ['Laravel', 'MySQL', 'Vue', 'Tailwind'],
    role: 'Junior Software Engineer',
    impact:
      'Added page-builder style flexibility, theme settings, and frontend loading improvements for a multivendor commerce product.',
    challenge:
      'Commerce products need configurability and performance without turning the interface into a sluggish admin nightmare.',
    solution: [
      'Built page-builder capabilities and theme settings that improved product flexibility.',
      'Improved frontend loading performance to keep the storefront experience lighter.',
      'Worked within a reusable product context instead of a one-off client build.',
    ],
    outcomes: [
      'More flexible storefront customization.',
      'Improved frontend responsiveness.',
      'Better product utility for broader user adoption.',
    ],
    featured: true,
    heroTone: 'gold',
  },
  {
    slug: 'newslooks-product-suite',
    title: 'Newslooks Product Suite',
    tagline:
      'Handled full application and frontend development for a blog, magazine, and newspaper product line.',
    category: 'Publishing product',
    period: 'Themelooks Ltd',
    stack: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
    role: 'Junior Software Engineer',
    impact:
      'Built the application and database design for a reusable publishing product that served multiple editorial use cases.',
    challenge:
      'Publishing products demand manageable admin flows, flexible content handling, and practical frontend design.',
    solution: [
      'Managed application development end to end, including database and frontend design.',
      'Built reusable product thinking into a content-focused software package.',
      'Balanced product usability with straightforward engineering execution.',
    ],
    outcomes: [
      'Reusable productized publishing system.',
      'Improved editorial flexibility.',
      'A strong foundation for content-heavy product work.',
    ],
    featured: false,
    heroTone: 'accent',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
