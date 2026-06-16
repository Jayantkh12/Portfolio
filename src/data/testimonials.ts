export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Faculty Mentor',
    role: 'Professor, CSE Department',
    company: 'Delhi Technological University',
    avatar: 'FM',
    text: 'Jayant consistently demonstrates exceptional problem-solving skills and a strong commitment to learning new technologies. His analytical approach to complex problems sets him apart from his peers.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Project Teammate',
    role: 'B.Tech CSE Student',
    company: 'Delhi Technological University',
    avatar: 'PT',
    text: 'An enthusiastic developer with excellent analytical thinking and a passion for building impactful projects. Jayant brings great ideas to the table and always delivers quality code.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Senior Developer',
    role: 'Open Source Collaborator',
    company: 'GitHub Community',
    avatar: 'SD',
    text: "Quick learner, reliable teammate, and dedicated software engineer. Jayant's ability to pick up new technologies and integrate them effectively is truly impressive.",
    rating: 5,
  },
];
