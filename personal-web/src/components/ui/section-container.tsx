'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function SectionContainer({
  id,
  children,
  className,
  fullWidth = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-14 md:py-20 lg:py-28',
        !fullWidth && 'px-6 md:px-8',
        className
      )}
    >
      {!fullWidth && (
        <div className="mx-auto max-w-[1180px]">{children}</div>
      )}
      {fullWidth && children}
    </section>
  );
}

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'mb-10 md:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <span className="mb-3 inline-block font-mono text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        {label}
      </span>
      <h2 className="max-w-3xl font-display text-3xl font-normal text-off-white md:text-4xl lg:text-[46px] lg:leading-[50px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-subtle leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
