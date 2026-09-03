export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: 'Globe' | 'Code2' | 'Sparkles' | 'Wrench' | 'Layout' | 'Layers';
  features: string[];
  deliverables?: string;
}
