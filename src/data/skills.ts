export interface SkillCategory {
  id: string;
  label: string;
  skills: { name: string; level: number; icon: string; color: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'C++', level: 88, icon: 'SiCplusplus', color: '#00599C' },
      { name: 'C', level: 80, icon: 'SiC', color: '#A8B9CC' },
      { name: 'Python', level: 82, icon: 'SiPython', color: '#3776AB' },
      { name: 'JavaScript', level: 85, icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'SQL', level: 75, icon: 'SiMysql', color: '#4479A1' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90, icon: 'SiHtml5', color: '#E34F26' },
      { name: 'CSS3', level: 85, icon: 'SiCss3', color: '#1572B6' },
      { name: 'JavaScript', level: 85, icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Responsive Design', level: 82, icon: 'SiResponsively', color: '#06B6D4' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 80, icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express.js', level: 78, icon: 'SiExpress', color: '#ffffff' },
      { name: 'REST APIs', level: 82, icon: 'SiJsonwebtokens', color: '#6366F1' },
    ],
  },
  {
    id: 'cs',
    label: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', level: 88, icon: 'SiBinarycode', color: '#6366F1' },
      { name: 'Operating Systems', level: 78, icon: 'SiLinux', color: '#FCC624' },
      { name: 'OOP', level: 85, icon: 'SiCodepen', color: '#8B5CF6' },
      { name: 'DBMS', level: 76, icon: 'SiMysql', color: '#4479A1' },
      { name: 'Computer Networks', level: 74, icon: 'SiCisco', color: '#06B6D4' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', level: 85, icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', level: 85, icon: 'SiGithub', color: '#ffffff' },
      { name: 'VS Code', level: 90, icon: 'SiVscode', color: '#007ACC' },
      { name: 'Linux', level: 75, icon: 'SiLinux', color: '#FCC624' },
      { name: 'Postman', level: 78, icon: 'SiPostman', color: '#FF6C37' },
    ],
  },
];
