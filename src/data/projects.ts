import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'nexus-ai',
    title: 'Nexus AI Studio',
    description: 'An AI-powered web canvas for real-time generative workflow management and prompt engineering.',
    longDescription: 'Engineered a high-performance visual node canvas built with React, WebAssembly, and OpenAI APIs. Features streaming outputs, offline workspace caching, and team collaboration.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Zustand', 'Vite'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/example/nexus-ai-studio',
    liveUrl: 'https://example.com/nexus-ai',
    featured: true,
    category: 'AI & Data',
    stars: 480,
    metrics: 'Used by 12,000+ active creators'
  },
  {
    id: 'hyper-cloud',
    title: 'HyperCloud Dashboard',
    description: 'Real-time multi-cloud infrastructure monitoring platform with sub-millisecond metrics telemetry.',
    longDescription: 'Architected a reactive analytics dashboard monitoring Kubernetes clusters across AWS and GCP. Features custom webGL chart rendering and automated alerting pipelines.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'GraphQL', 'Recharts', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/example/hyper-cloud-dashboard',
    liveUrl: 'https://example.com/hyper-cloud',
    featured: true,
    category: 'Full Stack',
    stars: 320,
    metrics: 'Sub-50ms render latency'
  },
  {
    id: 'pulse-ui',
    title: 'Pulse UI Design System',
    description: 'Accessible, accessible, dark-mode first component library optimized for enterprise applications.',
    longDescription: 'Created a open-source headless UI library with 40+ accessible components, Radix primitives, and fluid Tailwind themes.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Radix UI'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/example/pulse-ui-system',
    liveUrl: 'https://example.com/pulse-ui',
    featured: true,
    category: 'Open Source',
    stars: 890,
    metrics: 'Over 50k monthly npm downloads'
  },
  {
    id: 'synth-flow',
    title: 'SynthFlow Audio Workstation',
    description: 'WebAudio browser-based synthesizer and sequencer with real-time audio spatialization.',
    longDescription: 'Browser DAW utilizing Web Audio API, Web Workers, and custom DSP effects for real-time electronic music composition.',
    tags: ['TypeScript', 'WebAudio API', 'React', 'Tailwind CSS', 'Canvas'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/example/synth-flow',
    liveUrl: 'https://example.com/synth-flow',
    featured: false,
    category: 'Frontend',
    stars: 210,
    metrics: 'Zero-latency audio synthesis'
  }
];
