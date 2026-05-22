import { Mail } from 'lucide-react';
import type { ReactNode, SVGProps } from 'react';
import type { SocialLink } from '@/data/social-links';

type SocialIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type SocialIcon = (props: SocialIconProps) => ReactNode;

function GitHubIcon({ size = 18, ...props }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.16 10.16 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, ...props }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v14H.36V8Zm7.74 0h4.1v1.91h.06c.57-1.08 1.97-2.22 4.05-2.22 4.33 0 5.13 2.85 5.13 6.56V22h-4.27v-6.87c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V22H8.1V8Z" />
    </svg>
  );
}

function MailIcon({ size = 18, ...props }: SocialIconProps) {
  return <Mail size={size} {...props} />;
}

const socialIconMap: Record<SocialLink['icon'], SocialIcon> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Mail: MailIcon,
  Twitter: MailIcon,
};

export function getSocialIcon(name: SocialLink['icon']): SocialIcon {
  return socialIconMap[name] ?? MailIcon;
}
