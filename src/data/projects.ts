export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'web-portfolio',
    title: 'Web Portfolio',
    description:
      'A responsive personal portfolio presenting software engineering projects, academic background, technical skills, and contact information in a polished single-page experience.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'React Bits'],
    image: '/projects/web-portfolio-landing.png',
    liveUrl: 'https://teddysteveng.vercel.app/',
    featured: true,
  },
];
