export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Full Stack' | 'Frontend' | 'Web Development' | 'AI & Data' | 'Open Source';
  stars?: number;
  metrics?: string;
  whatIBuilt?: string[];
}

