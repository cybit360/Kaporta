export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'industry-news' | 'sustainability' | 'company-updates' | 'tips';
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-logistics-west-africa',
    title: 'The Future of Logistics in West Africa',
    excerpt: 'Exploring how modern fleet management and infrastructure development are transforming logistics across the region.',
    category: 'industry-news',
    author: 'Mohamed Kaporta',
    date: '2024-12-15',
    readTime: '5 min read',
  },
  {
    slug: 'sustainable-concrete-africa',
    title: 'Sustainable Concrete for Africa: Building Green',
    excerpt: 'How African construction companies are adopting eco-friendly concrete production methods without compromising on quality.',
    category: 'sustainability',
    author: 'Ibrahim Conteh',
    date: '2024-11-28',
    readTime: '7 min read',
  },
  {
    slug: 'why-local-equipment-rental-saves-money',
    title: 'Why Local Equipment Rental Saves Time and Money in Construction Projects',
    excerpt: 'Discover the benefits of sourcing construction equipment locally versus importing, and how it impacts your project timeline and budget.',
    category: 'tips',
    author: 'Fatmata Kamara',
    date: '2024-11-10',
    readTime: '4 min read',
  },
  {
    slug: 'kaporta-expands-fleet-2024',
    title: 'Kaporta Group Expands Fleet with New Heavy Equipment',
    excerpt: 'We are excited to announce the addition of 10 new heavy-duty vehicles and earth-moving equipment to our growing fleet.',
    category: 'company-updates',
    author: 'Mohamed Kaporta',
    date: '2024-10-20',
    readTime: '3 min read',
  },
  {
    slug: 'safety-standards-construction-sierra-leone',
    title: 'Raising Safety Standards in Sierra Leone\'s Construction Industry',
    excerpt: 'How Kaporta Investment is leading the way in implementing international safety protocols across all project sites.',
    category: 'industry-news',
    author: 'Aminata Sesay',
    date: '2024-09-15',
    readTime: '6 min read',
  },
];

export const blogCategories = [
  { value: 'all', label: 'All Posts' },
  { value: 'industry-news', label: 'Industry News' },
  { value: 'sustainability', label: 'Sustainability & CSR' },
  { value: 'company-updates', label: 'Company Updates' },
  { value: 'tips', label: 'Construction Tips' },
];
