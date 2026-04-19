export type Article = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  date: string;
  readTime: string;
  href: string;
};

export const articles: Article[] = [
  {
    slug: 'laravel-queue-jobs-async',
    title: 'PHP is a Single-Threaded Language, So How Does Laravel Handle Queue Jobs Asynchronously?',
    summary:
      'A practical explanation of how Laravel queue workers make asynchronous job handling possible even though PHP itself is single-threaded.',
    topic: 'Laravel / Backend internals',
    date: 'Nov 28, 2024',
    readTime: '4 min read',
    href: 'https://dev.to/devmahfuz/php-is-a-single-threaded-language-so-how-does-laravel-handle-queue-jobs-asynchronously-5dgc',
  },
  {
    slug: 'mysql-full-text-search-laravel',
    title: 'Exploring MySQL Full-Text Search and Its Implementation in Laravel',
    summary:
      'A concise look at where full-text search fits, how to implement it in Laravel, and what it gives you over simpler query matching.',
    topic: 'MySQL / Search / Laravel',
    date: 'Feb 2, 2025',
    readTime: '2 min read',
    href: 'https://dev.to/devmahfuz/exploring-mysql-full-text-search-and-its-implementation-in-laravel-4icl',
  },
  {
    slug: 'docker-multi-container-deployment',
    title: 'Docker Multi-Container Deployment with GitHub Actions in Laravel',
    summary:
      'Deployment-focused writing around running Laravel with multi-container Docker setups and automating delivery with GitHub Actions.',
    topic: 'Deployment / CI-CD',
    date: 'Jan 20, 2025',
    readTime: 'Practical note',
    href: 'https://dev.to/devmahfuz/docker-multi-container-docker-multi-container-deployment-with-github-actions-1jko',
  },
];
