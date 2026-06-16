export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  logo: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    credentialId: 'AWS-SAA-C03-XXXX',
    url: 'https://aws.amazon.com/certification/',
    logo: '☁️',
    color: '#FF9900',
  },
  {
    id: 2,
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: 'December 2023',
    credentialId: 'META-FED-YYYY',
    url: 'https://coursera.org/professional-certificates/meta-front-end-developer',
    logo: '🔵',
    color: '#0668E1',
  },
  {
    id: 3,
    title: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'October 2023',
    credentialId: 'GCP-ACE-ZZZZ',
    url: 'https://cloud.google.com/certification/cloud-engineer',
    logo: '🌐',
    color: '#4285F4',
  },
  {
    id: 4,
    title: 'MongoDB Certified Developer Associate',
    issuer: 'MongoDB University',
    date: 'July 2023',
    credentialId: 'MDB-DEV-AAAA',
    url: 'https://university.mongodb.com/certification',
    logo: '🍃',
    color: '#47A248',
  },
  {
    id: 5,
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'April 2023',
    credentialId: 'DCA-BBBB',
    url: 'https://training.mirantis.com/certification/dca-certification-exam/',
    logo: '🐳',
    color: '#2496ED',
  },
  {
    id: 6,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'January 2023',
    credentialId: 'FCC-JSADS-CCCC',
    url: 'https://freecodecamp.org/certification/',
    logo: '🔥',
    color: '#F1BE32',
  },
];
