export interface TechItem {
  name: string;
  color: string;
  category: 'languages' | 'frameworks-tools' | 'spoken' | 'interests';
}

export const techCategories = [
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks-tools', label: 'Frameworks & Tools' },
  { id: 'spoken', label: 'Spoken Languages' },
  { id: 'interests', label: 'Interests' },
] as const;

export const techStack: TechItem[] = [
  { name: 'Python', color: '#D7A84F', category: 'languages' },
  { name: 'C#', color: '#8FA386', category: 'languages' },
  { name: 'JavaScript', color: '#E0C86F', category: 'languages' },
  { name: 'Java', color: '#B86B4B', category: 'languages' },
  { name: 'HTML', color: '#C96F4D', category: 'languages' },
  { name: 'CSS', color: '#7B93AD', category: 'languages' },
  { name: 'SQL', color: '#C9C0B2', category: 'languages' },

  { name: 'React', color: '#8FA386', category: 'frameworks-tools' },
  { name: 'Node.js', color: '#8FA386', category: 'frameworks-tools' },
  { name: 'Git', color: '#D7A84F', category: 'frameworks-tools' },
  { name: 'GitHub', color: '#F3EFE4', category: 'frameworks-tools' },

  { name: 'English', color: '#D7A84F', category: 'spoken' },
  { name: 'Malay', color: '#8FA386', category: 'spoken' },
  { name: 'Indonesian', color: '#7B93AD', category: 'spoken' },

  { name: 'Artificial Intelligence', color: '#D7A84F', category: 'interests' },
  { name: 'Full-Stack Development', color: '#8FA386', category: 'interests' },
  { name: 'Personal Projects', color: '#7B93AD', category: 'interests' },
];
