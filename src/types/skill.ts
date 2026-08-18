export type SkillCategory = 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Databases & Tools' | 'AI & Architecture';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  iconName: string;
  description: string;
  highlight?: boolean;
}
