import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'sms',
    title: 'Software Management System',
    description:
      'A responsive web application for managing student records, courses, grades, and academic information with local data persistence.',
    longDescription:
      'A lightweight and fully responsive Student Management System built with vanilla HTML, CSS, and JavaScript. It provides student CRUD operations, roll-number search, course tracking, grade analysis, dashboard statistics, theme switching, and LocalStorage-based data persistence.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'LocalStorage',
      'Font Awesome'
    ],
    image: '/src/assets/sms.jpeg',
    githubUrl: 'https://github.com/chirag-g210/student-management-system',
    liveUrl: 'N/A',
    featured: false,
    category: 'Web Development',
    metrics: 'Student CRUD & LocalStorage'
  },
  {
    id: 'chirag-g210',
    title: 'Portfolio-cg210',
    description:
      'Personal portfolio showcasing my projects, skills, experience, certifications, and achievements 🚀',
    longDescription:
      'A modern, responsive personal portfolio website built to showcase my software development projects, technical skills, certifications, and professional profile. It features dedicated sections for projects, skills, experience, certifications, resume, and contact, with a responsive UI and interactive animations designed for a smooth user experience.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Motion',
      'Responsive Design'
    ],
    image: '/src/assets/portfolio.png',
    githubUrl: 'https://github.com/chirag-g210/portfolio-cg210',
    liveUrl: 'N/A',
    featured: false,
    category: 'Web Development',
    metrics: 'Responsive Personal Portfolio'
  },
  {
    id: 'tracker',
    title: 'Project Tree Tracker',
    description:
      '🌳 AI-powered project structure analyzer that turns screenshots into interactive, trackable project trees. 🤖',
    longDescription:
      'An AI-powered project workspace that analyzes project structure screenshots and converts them into an interactive file and folder tree. It supports structure verification, data tracking, file-level tasks, search and filtering, progress monitoring, folder analytics, and local project persistence.',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Google Gemini',
      'Node.js'
    ],
    image: '/src/assets/tracker.png',
    githubUrl: 'https://github.com/chirag-g210/ProjectTree-Tracker',
    liveUrl: 'N/A',
    featured: false,
    category: 'AI & Data',
    metrics: 'AI-Powered Project Structure Analysis'
  },
  {
    id: 'a-clone',
    title: 'Amazon Clone',
    description:
      '🛒 A responsive Amazon-inspired e-commerce website built using HTML and CSS, featuring a familiar shopping homepage layout.',
    longDescription:
      'A frontend Amazon-inspired e-commerce clone created to practice responsive web development and UI implementation. It recreates the core shopping homepage experience with an Amazon-style header, search and navigation area, hero banner, product category cards, product imagery, pricing sections, and footer layout.',
    tags: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'E-Commerce UI'
    ],
    image: '/src/assets/a-clone.jpeg',
    githubUrl:
      'https://github.com/chirag-g210/amazon_clone',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Responsive E-Commerce UI'
  }
];
