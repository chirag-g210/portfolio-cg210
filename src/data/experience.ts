import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 'edu-btech',
    role: 'B.Tech — Computer Science & Engineering',
    company: 'G.L. Bajaj Group of Institutions, Mathura',
    period: '2023 – 2027',
    status: 'Currently Pursuing',
    result: 'Current SGPA: 7.2',
    iconType: 'education',
    current: true
  },
  {
    id: 'exp-internship',
    role: 'Software Development & AIML Intern',
    company: 'Trianxyx',
    period: '20 January 2026 – 21 July 2026',
    status: 'Internship',
    iconType: 'work',
    description: [
      'Worked on AI/ML-based software solutions, scalable web applications, machine learning models, RESTful APIs, and database operations during the internship.'
    ]
  },
  {
    id: 'edu-class-12',
    role: 'Class XII',
    company: 'John Milton Public School, Agra',
    period: '2022 – 2023',
    status: '71% Result',
    result: '71% Result',
    iconType: 'education'
  },
  {
    id: 'edu-class-10',
    role: 'Class X',
    company: 'S.M.K English Medium School, Firozabad',
    period: '2021 – 2022',
    status: '86% Result',
    result: '86% Result',
    iconType: 'education'
  }
];
