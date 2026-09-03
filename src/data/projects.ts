import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'tracker',
    title: 'Project Tree Tracker',
    description:
      'An interactive developer workspace and structure analyzer that converts project screenshots into interactive, trackable file trees.',
    longDescription:
      'An interactive project workspace that analyzes project structure screenshots and converts them into an interactive file and folder tree. Built with React and TypeScript, it supports structure verification, file-level task tracking, search and filtering, progress monitoring, and local project persistence.',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Google Gemini API',
      'Interactive UI'
    ],
    image: '/project/tracker.png',
    githubUrl: 'https://github.com/chirag-g210/ProjectTree-Tracker',
    liveUrl: '',
    featured: true,
    category: 'AI & Data',
    metrics: 'Interactive Workspace & Task Tracking',
    whatIBuilt: [
      'Interactive File Tree Visualizer',
      'AI Screenshot Structure Analyzer',
      'File-Level Task & Progress Tracking',
      'Search & Filtering Tools',
      'Local Data Persistence'
    ]
  },
  {
    id: 'sms',
    title: 'Student Management System',
    description:
      'A responsive web application for managing student records, course tracking, grades, and academic analytics with local data persistence.',
    longDescription:
      'A lightweight and fully responsive Student Management System built with vanilla HTML, CSS, and JavaScript. It provides full student CRUD operations, roll-number search, course tracking, grade analysis, dashboard statistics, theme switching, and LocalStorage-based data persistence.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'LocalStorage',
      'Dashboard UI',
      'Responsive Design'
    ],
    image: '/project/sms.jpeg',
    githubUrl: 'https://github.com/chirag-g210/student-management-system',
    liveUrl: '',
    featured: true,
    category: 'Web Development',
    metrics: 'Full CRUD & Local Persistence',
    whatIBuilt: [
      'Student Record CRUD Management',
      'Quick Search & Filter by Roll Number',
      'Dashboard Analytics & Statistics',
      'Clean Responsive Interface',
      'LocalStorage Client Persistence'
    ]
  },
  {
    id: 'chirag-g210',
    title: 'Portfolio-cg210',
    description:
      'A modern, high-performance freelance developer portfolio featuring responsive design, interactive animations, and direct client inquiry handling.',
    longDescription:
      'A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Motion. It showcases web development services, featured projects, technical skills, and includes a fully functional EmailJS contact form, smooth glassmorphism styling, and mobile bottom navigation.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Motion',
      'EmailJS'
    ],
    image: '/project/portfolio.png',
    githubUrl: 'https://github.com/chirag-g210/portfolio-cg210',
    liveUrl: 'https://portfolio-cg210.vercel.app/',
    featured: true,
    category: 'Web Development',
    metrics: 'Modern Responsive Freelance UI',
    whatIBuilt: [
      'Modern Glassmorphism UI & Motion Animations',
      'Interactive Services & Capabilities Showcase',
      'Live EmailJS Contact Form Integration',
      'Fully Responsive Layout & Mobile Navigation',
      'Client-Focused Freelance Presentation'
    ]
  },
  {
    id: 'a-clone',
    title: 'Amazon Clone',
    description:
      'A responsive e-commerce shopping interface recreating core navigation, product grids, promotional hero banners, and checkout visual layouts.',
    longDescription:
      'A frontend Amazon-inspired e-commerce clone created with pure HTML and CSS to demonstrate structured UI implementation and responsive grid systems. It recreates the core shopping homepage experience with an Amazon-style header, search area, product category cards, pricing sections, and footer layout.',
    tags: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'E-Commerce UI',
      'Grid & Flexbox'
    ],
    image: '/project/a-clone.jpeg',
    githubUrl: 'https://github.com/chirag-g210/amazon_clone',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Responsive E-Commerce Layout',
    whatIBuilt: [
      'E-Commerce Navigation & Search Header',
      'Hero Carousel & Promotional Banners',
      'Multi-Category Product Card Grid',
      'Pricing, Ratings, and Deals UI',
      'Responsive Desktop & Mobile Viewports'
    ]
  },
  {
    id: 'n-clone',
    title: 'Netflix Clone',
    description:
      'A sleek, responsive streaming platform landing page featuring hero video displays, media galleries, interactive FAQ accordions, and dark mode UI.',
    longDescription:
      'A responsive Netflix-inspired website built with HTML and CSS that recreates the cinematic look and feel of a modern streaming platform. It includes a hero showcase, media rows, responsive device previews, an interactive FAQ section, and a dark streaming-themed interface.',
    tags: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Dark UI Theme',
      'Media Layouts'
    ],
    image: '/project/n-clone.jpeg',
    githubUrl: 'https://github.com/chirag-g210/netflix-clone',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Cinematic Dark UI & Responsive Layout',
    whatIBuilt: [
      'Cinematic Hero Section with CTA Callouts',
      'Responsive Media & Device Preview Grid',
      'Interactive FAQ Accordion Layout',
      'Dark Glassmorphic Streaming Theme',
      'Cross-Device Mobile-Friendly Styling'
    ]
  },
  {
    id: 'CC',
    title: 'Currency Converter',
    description:
      'A fast, responsive web tool that performs real-time currency conversions with dynamic exchange rate API integration, flag indicators, and amount validation.',
    longDescription:
      'A responsive and lightweight currency converter built with HTML, CSS, and vanilla JavaScript. It allows users to convert between different global currencies using real-time exchange rates, supports instant currency swapping, displays country flags, validates user input, and works smoothly on mobile and desktop devices.',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'REST API',
      'Real-Time Exchange',
      'Responsive UI'
    ],
    image: '/project/gen.png',
    githubUrl: 'https://github.com/chirag-g210/currency-converter',
    liveUrl: '',
    featured: false,
    category: 'Frontend',
    metrics: 'Real-Time API & Dynamic Conversion',
    whatIBuilt: [
      'Real-Time Currency Exchange API Integration',
      'Instant From/To Currency Swapping',
      'Dynamic Country Flag Visual Indicators',
      'Client-Side Input Validation & Error Handling',
      'Clean Mobile-First Responsive Interface'
    ]
  }
];
