import { ServiceItem } from '../types/service';

export const services: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, responsive, and user-friendly websites.',
    description:
      'Modern, responsive, and user-friendly websites for individuals, portfolios, personal brands, and businesses.',
    iconName: 'Globe',
    features: [
      'Custom Responsive Layouts',
      'Mobile-First Design',
      'Cross-Browser Compatibility',
      'Clean Semantic HTML & CSS'
    ],
    deliverables: 'Complete, responsive, and ready-to-deploy website'
  },
  {
    id: 'react-frontend-development',
    title: 'React Frontend Development',
    shortDescription: 'Interactive frontend apps with React & modern web tech.',
    description:
      'Interactive and responsive frontend applications built using React and modern web technologies.',
    iconName: 'Code2',
    features: [
      'Component-Based Architecture',
      'Interactive State Management',
      'REST API Integration',
      'Smooth UI Transitions & Micro-Animations'
    ],
    deliverables: 'Modular, scalable React frontend codebase'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDescription: 'Modern visual and UX upgrades for existing websites.',
    description:
      'Improve outdated or basic websites with a cleaner, more modern, and user-friendly interface.',
    iconName: 'Sparkles',
    features: [
      'Modern UI/UX Visual Refresh',
      'Enhanced Mobile Experience',
      'Better Typography & Color Palettes',
      'Intuitive Layout & Navigation'
    ],
    deliverables: 'Refreshed modern interface with enhanced UX'
  },
  {
    id: 'website-fixes-improvements',
    title: 'Website Fixes & Improvements',
    shortDescription: 'Fix responsive bugs, UI issues, and improve performance.',
    description:
      'Fix responsive layout issues, frontend bugs, UI problems, and improve the overall user experience of an existing website.',
    iconName: 'Wrench',
    features: [
      'Mobile & Tablet Layout Fixes',
      'Frontend Bug & Script Resolution',
      'UI Alignment & Styling Corrections',
      'Performance & Load Speed Tuning'
    ],
    deliverables: 'Tested, polished, and bug-free website experience'
  }
];
