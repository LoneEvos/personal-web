'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GlowEffectProps {
  children: ReactNode;
  className?: string;
  color?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  animated?: boolean;
  borderRadius?: string;
}

export function GlowEffect({
  children,
  className,
  color = 'rgba(36, 219, 201, 0.4)',
  intensity = 'medium',
  animated = true,
  borderRadius = '12px',
}: GlowEffectProps) {
  const glowSize = {
    subtle: { blur: 20, spread: 10 },
    medium: { blur: 40, spread: 20 },
    strong: { blur: 60, spread: 30 },
  };

  const { blur } = glowSize[intensity];

  return (
    <div className={cn('relative', className)}>
      <motion.div
        className="absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          borderRadius,
        }}
        animate={
          animated
            ? {
                opacity: [0.3, 0.6, 0.3],
              }
            : undefined
        }
        transition={
          animated
            ? {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
  borderRadius?: string;
}

export function AnimatedBorderCard({
  children,
  className,
  borderRadius = '12px',
}: AnimatedBorderCardProps) {
  return (
    <div
      className={cn('animated-border p-[2px]', className)}
      style={{ borderRadius }}
    >
      <div
        className="h-full w-full bg-surface"
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </div>
  );
}
