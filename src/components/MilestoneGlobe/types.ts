export interface Milestone {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  t: number;
}

export interface ThemeConfig {
  name: string;
  primary: string;
  glow: string;
  accent: string;
}

export const themes: Record<string, ThemeConfig> = {
  rose: { name: 'Rose', primary: '#ff6b9d', glow: '#ff4081', accent: '#ff80ab' },
  sapphire: { name: 'Sapphire', primary: '#4a90d9', glow: '#2962ff', accent: '#82b1ff' },
  gold: { name: 'Gold', primary: '#ffd700', glow: '#ffab00', accent: '#ffe57f' },
  white: { name: 'White', primary: '#ffffff', glow: '#e0e0e0', accent: '#f5f5f5' },
};

export const milestones: Milestone[] = [
  {
    id: 0,
    year: '2019',
    category: 'Origin',
    title: 'Company Founded',
    description: 'Zendigitalz was born from a vision to redefine digital experiences with premium craftsmanship and strategic innovation.',
    t: 0,
  },
  {
    id: 1,
    year: '2020',
    category: 'Growth',
    title: 'First Enterprise Client',
    description: 'Secured our first Fortune 500 partnership, establishing credibility in high-stakes digital transformation.',
    t: 1 / 6,
  },
  {
    id: 2,
    year: '2021',
    category: 'Expansion',
    title: 'Global Team Formation',
    description: 'Assembled a world-class team of designers, engineers, and strategists across three continents.',
    t: 2 / 6,
  },
  {
    id: 3,
    year: '2022',
    category: 'Innovation',
    title: 'AI Integration Launch',
    description: 'Pioneered AI-driven design systems that reduced client time-to-market by 40% across verticals.',
    t: 3 / 6,
  },
  {
    id: 4,
    year: '2023',
    category: 'Recognition',
    title: 'Industry Awards',
    description: 'Recognized with multiple Webby and Awwwards for exceptional digital craftsmanship and innovation.',
    t: 4 / 6,
  },
  {
    id: 5,
    year: '2024',
    category: 'Scale',
    title: 'Platform Evolution',
    description: 'Launched proprietary platform serving 200+ enterprise clients with bespoke digital solutions.',
    t: 5 / 6,
  },
  {
    id: 6,
    year: '2025',
    category: 'Vision',
    title: 'Future Forward',
    description: 'Entering the next era with spatial computing, generative design, and immersive brand experiences.',
    t: 1,
  },
];

export const SPHERE_RADIUS = 2.2;
export const SPIRAL_TURNS = 2.5;
