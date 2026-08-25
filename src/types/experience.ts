export interface Experience {
  id: string;
  role: string;
  company?: string;
  location?: string;
  period: string;
  type?: string;
  status?: string;
  result?: string;
  description?: string[];
  skills?: string[];
  logoUrl?: string;
  iconType?: 'education' | 'work';
  current?: boolean;
}
