export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Freelance' | 'Contract';
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  tech: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer (Project)',
    company: 'AI Resume Evaluator',
    location: 'Personal Project',
    type: 'Freelance',
    startDate: 'Mar 2025',
    endDate: 'May 2025',
    current: false,
    description: [
      'Built an AI-powered resume analysis platform using Google Gemini API for intelligent parsing and feedback.',
      'Designed RESTful backend APIs in Node.js/Express.js for resume upload, evaluation, and result delivery.',
      'Implemented skill gap analysis and ATS keyword matching to provide actionable candidate recommendations.',
      'Integrated Gemini AI to generate personalized improvement suggestions based on job role requirements.',
    ],
    tech: ['Python', 'Node.js', 'Express.js', 'REST APIs', 'Gemini API', 'JavaScript'],
    logo: '🤖',
  },
  {
    id: 2,
    role: 'Frontend Developer (Project)',
    company: 'DAILYCORE E-Commerce',
    location: 'Personal Project',
    type: 'Freelance',
    startDate: 'Jan 2025',
    endDate: 'Feb 2025',
    current: false,
    description: [
      'Designed and developed a fully responsive e-commerce frontend with modern UI/UX principles.',
      'Built interactive product showcase pages with JavaScript-powered dynamic content rendering.',
      'Integrated Node.js/Express.js backend APIs for product data management and cart functionality.',
      'Ensured cross-browser compatibility and optimized page load performance.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs'],
    logo: '🛒',
  },
  {
    id: 3,
    role: 'Full Stack Developer (Project)',
    company: 'Smart Interview Tracker',
    location: 'Personal Project',
    type: 'Freelance',
    startDate: 'May 2025',
    endDate: 'Present',
    current: true,
    description: [
      'Developing a comprehensive interview preparation platform with application tracking and analytics.',
      'Built a dashboard to track interview stages, application statuses, and performance trends.',
      'Implemented data-driven insights to help candidates identify weak areas and improve success rates.',
      'Designed RESTful APIs for application CRUD operations and analytics data aggregation.',
    ],
    tech: ['Node.js', 'Express.js', 'JavaScript', 'REST APIs', 'HTML5', 'CSS3'],
    logo: '📊',
  },
  {
    id: 4,
    role: 'Competitive Programmer',
    company: 'LeetCode / Codeforces',
    location: 'Online',
    type: 'Contract',
    startDate: 'Aug 2024',
    endDate: 'Present',
    current: true,
    description: [
      'Achieved LeetCode rating of 1643 through consistent problem solving across DSA topics.',
      'Solved 300+ problems spanning arrays, dynamic programming, graphs, and trees.',
      'Participated in weekly and biweekly contests, improving algorithmic thinking and speed.',
      'Mastered C++ STL for competitive programming with focus on time/space optimization.',
    ],
    tech: ['C++', 'Python', 'Data Structures', 'Algorithms'],
    logo: '⚡',
  },
];
