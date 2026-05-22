'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MagicBentoProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  as?: 'div' | 'article';
}

export function MagicBento({
  children,
  className,
  contentClassName,
  as = 'div',
}: MagicBentoProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, oklch(76% 0.124 82 / 0.15), oklch(84% 0.066 275 / 0.08) 34%, transparent 68%)`;
  const Component = as === 'article' ? motion.article : motion.div;

  return (
    <Component
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-card border border-elevated bg-surface/86 shadow-[0_18px_60px_oklch(0%_0_0_/_0.24)]',
        'transition-colors duration-300 hover:border-muted',
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="pointer-events-none absolute inset-px rounded-[7px] border border-off-white/[0.03]" />
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </Component>
  );
}
