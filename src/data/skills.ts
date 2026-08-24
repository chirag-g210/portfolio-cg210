import { Skill } from '../types/skill';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'Programming', iconName: 'Coffee', description: 'Object-oriented programming, core Java fundamentals & robust logic', highlight: true },
  { name: 'Python', category: 'Programming', iconName: 'Terminal', description: 'Scripting, algorithmic problem solving & automation workflows', highlight: true },
  { name: 'JavaScript', category: 'Programming', iconName: 'FileCode', description: 'Modern ES6+, asynchronous programming & DOM manipulation', highlight: true },
  { name: 'TypeScript', category: 'Programming', iconName: 'Code2', description: 'Strong typing, interfaces, generic types & scalable codebases', highlight: true },

  // Core Computer Science
  { name: 'Data Structures & Algorithms', category: 'Core CS', iconName: 'Binary', description: 'Algorithm design, optimization, time & space complexity analysis', highlight: true },
  { name: 'Object-Oriented Programming (OOP)', category: 'Core CS', iconName: 'Boxes', description: 'Encapsulation, inheritance, polymorphism & modular design' },
  { name: 'DBMS', category: 'Core CS', iconName: 'Database', description: 'Database management systems, relational modeling & SQL fundamentals' },
  { name: 'Operating Systems', category: 'Core CS', iconName: 'Cpu', description: 'Process synchronization, memory management & file systems' },
  { name: 'Computer Networks', category: 'Core CS', iconName: 'Network', description: 'Network architectures, OSI model, TCP/IP & HTTP/HTTPS protocols' },

  // Frontend Development
  { name: 'HTML5', category: 'Frontend', iconName: 'Globe', description: 'Semantic HTML markup, web accessibility & modern web structure' },
  { name: 'CSS3', category: 'Frontend', iconName: 'Palette', description: 'Responsive layouts, modern CSS Grid, Flexbox & styling' },
  { name: 'React.js', category: 'Frontend', iconName: 'Atom', description: 'Component-driven UI, state management, hooks & SPAs', highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'Sparkles', description: 'Utility-first styling, rapid responsive design & fluid aesthetics', highlight: true },

  // Tools & Development
  { name: 'Git', category: 'Tools & Development', iconName: 'GitBranch', description: 'Distributed version control, branching strategies & history management', highlight: true },
  { name: 'GitHub', category: 'Tools & Development', iconName: 'Github', description: 'Collaborative development, repository hosting & open-source workflows' },
  { name: 'VS Code', category: 'Tools & Development', iconName: 'Code', description: 'Code editing, debugging workflows, extensions & developer tooling' },
  { name: 'Vite', category: 'Tools & Development', iconName: 'Zap', description: 'Fast build tooling, instant HMR & optimized production bundling' },

  // APIs & AI
  { name: 'REST APIs', category: 'APIs & AI', iconName: 'Webhook', description: 'HTTP client integration, endpoint communication & JSON data exchange', highlight: true },
  { name: 'Google Gemini API', category: 'APIs & AI', iconName: 'Bot', description: 'LLM multimodal integration, prompt structuring & AI workflows', highlight: true },
  { name: 'AI Integration', category: 'APIs & AI', iconName: 'Sparkles', description: 'Leveraging AI capabilities to build intelligent, interactive applications' }
];

