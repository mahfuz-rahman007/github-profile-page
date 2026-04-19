export type GalleryImage = {
  title: string;
  caption: string;
  src: string;
  ratio: 'portrait' | 'square' | 'landscape' | 'wide';
};

export const galleryImages: GalleryImage[] = [
  {
    title: 'Control room mood',
    caption: 'A behind-the-scenes visual lane for workspace atmosphere, process, and product energy.',
    src: '/gallery/placeholder-1.svg',
    ratio: 'portrait',
  },
  {
    title: 'System map',
    caption: 'A visual space for architecture, interface fragments, and product exploration frames.',
    src: '/gallery/placeholder-2.svg',
    ratio: 'landscape',
  },
  {
    title: 'Signal grid',
    caption: 'A stylized frame for screenshots, diagrams, or environmental photography.',
    src: '/gallery/placeholder-3.svg',
    ratio: 'square',
  },
  {
    title: 'Interface fragment',
    caption: 'A slot for refined UI details, product surfaces, and small visual stories.',
    src: '/gallery/placeholder-4.svg',
    ratio: 'wide',
  },
  {
    title: 'Atmosphere study',
    caption: 'Curated imagery that reinforces tone, craft, and the mood around the work.',
    src: '/gallery/placeholder-5.svg',
    ratio: 'landscape',
  },
  {
    title: 'Future showcase',
    caption: 'A flexible frame for screenshots, mockups, and process-driven visual detail.',
    src: '/gallery/placeholder-6.svg',
    ratio: 'portrait',
  },
];
