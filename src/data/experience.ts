import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Full Stack Engineer',
    company: 'Apex Tech Labs',
    location: 'Remote / New Delhi',
    period: '2023 - Present',
    type: 'Full-time',
    description: [
      'Led architectural redesign of core enterprise React & Node.js microservices, cutting p99 load times by 42%.',
      'Mentored a team of 8 engineers and established clean component architecture and CI/CD best practices.',
      'Spearheaded integration of LLM generative workflows into the core SaaS platform, driving +25% user retention.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'AWS', 'GraphQL']
  },
  {
    id: 'exp-2',
    role: 'Senior UI/UX & Frontend Engineer',
    company: 'Vanguard Systems',
    location: 'Bangalore, India',
    period: '2021 - 2023',
    type: 'Full-time',
    description: [
      'Designed and built a unified glassmorphic design system used across 6 web applications.',
      'Optimized Web Vitals score from 68 to 98 through dynamic bundle splitting and image pipeline automation.'
    ],
    skills: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Innovate Digital',
    location: 'New Delhi, India',
    period: '2019 - 2021',
    type: 'Full-time',
    description: [
      'Developed responsive single-page applications and customer dashboards for fintech clients.',
      'Collaborated closely with product designers to implement pixel-perfect micro-interactions.'
    ],
    skills: ['JavaScript', 'React', 'CSS3', 'REST APIs', 'Git']
  }
];
