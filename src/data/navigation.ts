export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Tech Stack', href: '#tech-stack', sectionId: 'tech-stack' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];
