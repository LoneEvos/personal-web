export interface SocialLink {
  name: string;
  url: string;
  icon: 'Github' | 'Linkedin' | 'Mail' | 'Twitter';
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/teddystevengotama',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/LoneEvos',
    icon: 'Github',
  },
];
