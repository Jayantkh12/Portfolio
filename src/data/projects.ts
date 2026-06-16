export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  category: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Resume Evaluator',
    description: 'An AI-powered resume analysis platform that evaluates resumes, provides detailed feedback, and helps candidates improve their chances of getting shortlisted.',
    longDescription: 'Built using the Gemini API for intelligent resume parsing and evaluation. The platform performs skill gap analysis, identifies missing keywords for ATS compatibility, and provides actionable recommendations tailored to the job role.',
    image: '/images/project1.jpg',
    tech: ['Python', 'Node.js', 'Express.js', 'REST APIs', 'Gemini API', 'JavaScript'],
    category: ['Fullstack', 'AI/ML'],
    github: 'https://github.com/Jayantkh12/Ai-Resume-Evaluator',
    live: 'https://ai-resume-evaluator.demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'DAILYCORE',
    description: 'A modern e-commerce frontend website designed with responsive UI principles and seamless user experience for daily essentials.',
    longDescription: 'A fully responsive e-commerce storefront featuring product showcasing, interactive UI components, and a modern design system. Built with vanilla web technologies ensuring fast load times and cross-browser compatibility.',
    image: '/images/project2.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs'],
    category: ['Frontend', 'Fullstack'],
    github: 'https://github.com/Jayantkh12',
    live: 'https://dailycore.demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Interview Tracker & Analyzer',
    description: 'A comprehensive interview preparation platform that helps candidates track applications, analyze performance, and improve success rates through data-driven insights.',
    longDescription: 'Features an interview tracking dashboard, application status management, performance analytics, and personalized improvement insights. Helps candidates stay organized and identify patterns in their interview performance.',
    image: '/images/project3.jpg',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
    category: ['Fullstack', 'Backend'],
    github: 'https://github.com/Jayantkh12',
    live: 'https://interview-tracker.demo.com',
    featured: true,
  },
];
