export type PlaygroundItem = {
  title: string;
  description: string;
  type: string;
  status: string;
};

export const playgroundItems: PlaygroundItem[] = [
  {
    title: 'UI motion lab',
    description: 'A place for premium interaction ideas, hover studies, and scene transitions that are fun without becoming performance crimes.',
    type: 'Interaction design',
    status: 'Exploring',
  },
  {
    title: 'Deployment patterns',
    description: 'Short practical notes around VPS setup, Dockerized application flow, and cleaner CI/CD thinking.',
    type: 'Engineering notes',
    status: 'Useful',
  },
  {
    title: 'System design fragments',
    description: 'Compact explainers and visual notes for product architecture, scaling choices, and backend tradeoffs.',
    type: 'Architecture',
    status: 'Growing',
  },
  {
    title: 'Frontend experiments',
    description: 'Small interface ideas that test layout rhythm, readability, and premium-feeling interactions without overengineering.',
    type: 'Prototype work',
    status: 'Active',
  },
];
