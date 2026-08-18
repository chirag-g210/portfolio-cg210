export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Open Source';
  description: string[];
  skills: string[];
  logoUrl?: string;
}
