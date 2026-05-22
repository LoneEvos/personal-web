export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'web-portfolio',
    title: 'Web Portfolio',
    description:
      'A responsive personal portfolio presenting software engineering projects, academic background, technical skills, and contact information in a polished single-page experience.',
    longDescription:
      'Built structured sections for featured projects, tech stack, education journey, experience, and direct contact links. The project was developed with a modern React and Next.js stack, then checked with production build and lint validation.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'React Bits'],
    image: '/projects/web-portfolio-landing.png',
    liveUrl: 'https://teddysteveng.vercel.app/',
    featured: true,
    gradient: 'from-teal/20 to-tech-cyan/10',
  },
];
