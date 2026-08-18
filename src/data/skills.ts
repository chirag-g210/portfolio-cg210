import { Skill } from '../types/skill';

export const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', category: 'Frontend', level: 95, iconName: 'Code', description: 'Server components, SSR, hooks architecture', highlight: true },
  { name: 'TypeScript', category: 'Frontend', level: 92, iconName: 'FileCode', description: 'Strict typing, generic abstractions, AST transformations', highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend', level: 96, iconName: 'Palette', description: 'Utility-first design systems, custom plugins, fluid typography', highlight: true },
  { name: 'Vue.js / Nuxt', category: 'Frontend', level: 85, iconName: 'Layers', description: 'Composition API, Pinia state management' },
  { name: 'HTML5 & CSS3 / SASS', category: 'Frontend', level: 98, iconName: 'Layout', description: 'Semantic HTML, CSS grid, keyframe animations' },

  // Backend
  { name: 'Node.js & Express', category: 'Backend', level: 90, iconName: 'Server', description: 'Async event loop, REST APIs, microservices', highlight: true },
  { name: 'GraphQL / gRPC', category: 'Backend', level: 84, iconName: 'Cpu', description: 'Schema stitching, subscriptions, protobuf specifications' },
  { name: 'Python & FastApi', category: 'Backend', level: 82, iconName: 'Terminal', description: 'Async endpoints, Pydantic validation, AI pipeline integration' },

  // Databases & Cloud
  { name: 'PostgreSQL & Redis', category: 'Databases & Tools', level: 88, iconName: 'Database', description: 'Indexing strategies, pub/sub caching layers' },
  { name: 'Docker & AWS', category: 'Cloud & DevOps', level: 84, iconName: 'Cloud', description: 'ECS, S3, CloudFront, CI/CD pipelines', highlight: true },
  { name: 'Git & GitHub Actions', category: 'Cloud & DevOps', level: 92, iconName: 'GitBranch', description: 'Automated release workflows, conventional commits' },

  // AI & Architecture
  { name: 'OpenAI & LangChain', category: 'AI & Architecture', level: 86, iconName: 'Bot', description: 'RAG pipelines, vector embeddings, fine-tuning', highlight: true },
  { name: 'System Architecture', category: 'AI & Architecture', level: 88, iconName: 'Workflow', description: 'Distributed systems, event-driven design' }
];
