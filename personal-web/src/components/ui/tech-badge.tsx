'use client';

import { motion } from 'framer-motion';
import { TechIcon } from '@/lib/tech-icons';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  color?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function TechBadge({
  name,
  size = 'sm',
  className,
}: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill font-body font-medium',
        'border border-elevated bg-surface text-muted',
        'transition-colors duration-200',
        'hover:border-muted hover:bg-surface-alt hover:text-off-white',
        size === 'sm' && 'px-3 py-1 text-xs',
        size === 'md' && 'px-4 py-1.5 text-sm',
        className
      )}
    >
      <TechIcon name={name} size={size === 'sm' ? 14 : 16} className="shrink-0 text-teal" />
      {name}
    </motion.span>
  );
}
