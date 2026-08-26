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
    image: '/project/sms.jpeg',
    githubUrl: 'https://github.com/chirag-g210/student-management-system',
    liveUrl: 'https://www.youtube.com/shorts/5xcSKbFwlqQ',
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
    image: '/project/portfolio.png',
    githubUrl: 'https://github.com/chirag-g210/portfolio-cg210',
    liveUrl: 'https://portfolio-cg210.vercel.app/',
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
    image: '/project/tracker.png',
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
    image: '/project/a-clone.jpeg',
    githubUrl:
      'https://github.com/chirag-g210/amazon_clone',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Responsive E-Commerce UI'
  },
  {
    id: 'n-clone',
    title: 'Netflix Clone',
    description:
      '🎬 A responsive Netflix-inspired streaming website built using HTML and CSS. 🍿✨',
    longDescription:
      'A responsive Netflix-inspired website built with pure HTML and CSS that recreates the look and feel of a streaming platform. It includes a Netflix-style landing page, movie and show sections, responsive layouts, video content, download-style UI, kids profiles section, FAQ section, and a dark streaming-themed interface.',
    tags: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Video Content'
    ],
    image: '/project/n-clone.jpeg',
    githubUrl:
      'https://github.com/chirag-g210/netflix-clone',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Responsive Streaming UI'
  },
  {
    id: 'CC',
    title: 'Currency Converter',
    description:
      '💱 A simple currency converter for converting between different currencies easily. 🌍✨',
    longDescription:
      'A responsive and lightweight currency converter built with HTML, CSS, and vanilla JavaScript. It allows users to convert between different currencies using real-time exchange rates, supports currency swapping, displays country flags, validates the entered amount, and provides a simple responsive interface for desktop and mobile devices.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Currency API',
      'Responsive Design'
    ],
    image: '/project/gen.png',
    githubUrl:
      'https://github.com/chirag-g210/currency-converter',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Real-Time Currency Conversion'
  }
];
