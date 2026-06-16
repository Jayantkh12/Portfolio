export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  description: string;
  icon: string;
  current: boolean;
}

export const educationList: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology — Computer Science Engineering',
    institution: 'Delhi Technological University (DTU)',
    location: 'New Delhi, India',
    period: '2024 – 2028',
    score: '8.0 / 10.0',
    scoreLabel: 'CGPA',
    description: 'Pursuing B.Tech in CSE with focus on Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks. Actively building full-stack and AI-powered projects alongside coursework.',
    icon: '🎓',
    current: true,
  },
  {
    id: 2,
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'Central Board of Secondary Education (CBSE)',
    location: 'India',
    period: '2023 – 2024',
    score: '85.80%',
    scoreLabel: 'Score',
    description: 'Completed Class 12 with focus on Physics, Chemistry, Mathematics and Computer Science.',
    icon: '🏫',
    current: false,
  },
  {
    id: 3,
    degree: 'Secondary Education (Class X)',
    institution: 'Central Board of Secondary Education (CBSE)',
    location: 'India',
    period: '2021 – 2022',
    score: '94.00%',
    scoreLabel: 'Score',
    description: 'Completed Class 10 with distinction, demonstrating strong academic foundation in science and mathematics.',
    icon: '📚',
    current: false,
  },
];
