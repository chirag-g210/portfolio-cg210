export type SkillCategory =
  | 'Programming'
  | 'Core CS'
  | 'Frontend'
  | 'Tools & Development'
  | 'APIs & AI';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconName?: string;
  description?: string;
  highlight?: boolean;
}
