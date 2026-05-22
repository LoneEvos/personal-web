import {
  BrainCircuit,
  Code2,
  Database,
  FolderGit2,
  Languages,
  Server,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

interface DevIconConfig {
  src: string;
  invert?: boolean;
}

const deviconBase =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const devIcons: Record<string, DevIconConfig> = {
  Python: { src: `${deviconBase}/python/python-original.svg` },
  'C#': { src: `${deviconBase}/csharp/csharp-original.svg` },
  JavaScript: { src: `${deviconBase}/javascript/javascript-original.svg` },
  Java: { src: `${deviconBase}/java/java-original.svg` },
  HTML: { src: `${deviconBase}/html5/html5-original.svg` },
  CSS: { src: `${deviconBase}/css3/css3-original.svg` },
  React: { src: `${deviconBase}/react/react-original.svg` },
  'Node.js': { src: `${deviconBase}/nodejs/nodejs-original.svg` },
  Git: { src: `${deviconBase}/git/git-original.svg` },
  GitHub: { src: `${deviconBase}/github/github-original.svg`, invert: true },
  'Next.js': { src: `${deviconBase}/nextjs/nextjs-original.svg`, invert: true },
  TypeScript: { src: `${deviconBase}/typescript/typescript-original.svg` },
  'Tailwind CSS': { src: `${deviconBase}/tailwindcss/tailwindcss-original.svg` },
};

type FallbackIcon = (props: { size?: number; className?: string }) => ReactNode;

const fallbackIcons: Record<string, FallbackIcon> = {
  SQL: Database,
  English: Languages,
  Malay: Languages,
  Indonesian: Languages,
  'Artificial Intelligence': BrainCircuit,
  'Full-Stack Development': Code2,
  'Personal Projects': FolderGit2,
  'React Bits': ReactBitsIcon,
  'Framer Motion': FramerMotionIcon,
  'Lucide React': Server,
};

function FramerMotionIcon({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 3h14v6H5V3Z" fill="#F3EFE4" />
      <path d="M5 9h7l7 6H5V9Z" fill="#A49B8D" />
      <path d="M5 15h7v6L5 15Z" fill="#D7A84F" />
    </svg>
  );
}

function ReactBitsIcon({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#D7A84F" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" fill="#F3EFE4" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" fill="#8FA386" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" fill="#7B93AD" />
    </svg>
  );
}

export function TechIcon({ name, size = 18, className }: TechIconProps): ReactNode {
  const icon = devIcons[name];

  if (icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={icon.src}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className={className}
        style={{
          height: size,
          width: size,
          filter: icon.invert ? 'brightness(0) invert(1)' : undefined,
        }}
      />
    );
  }

  const Icon = fallbackIcons[name] ?? Code2;

  return <Icon size={size} aria-hidden="true" className={className} />;
}
