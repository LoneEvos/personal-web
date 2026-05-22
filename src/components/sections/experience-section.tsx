'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Trophy,
  Milestone,
} from 'lucide-react';
import { timelineEntries } from '@/data/experience';
import { SectionContainer, SectionHeading } from '@/components/ui/section-container';
import { cn } from '@/lib/utils';
import type { TimelineEntry } from '@/data/experience';

const typeConfig = {
  education: { icon: GraduationCap, color: 'text-tech-cyan', bg: 'bg-tech-cyan/10' },
  certification: { icon: Award, color: 'text-ts-blue', bg: 'bg-ts-blue/10' },
  achievement: { icon: Trophy, color: 'text-pac-yellow', bg: 'bg-pac-yellow/10' },
  milestone: { icon: Milestone, color: 'text-teal', bg: 'bg-teal/10' },
};

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <SectionContainer id="experience">
      <SectionHeading
        label="Experience"
        title="Education & Activities"
        description="Academic background, leadership experience, and cloud community involvement."
      />

      <div ref={containerRef} className="relative mx-auto max-w-2xl">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-elevated md:left-1/2 md:-translate-x-px">
          <motion.div
            className="w-full bg-teal origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-12">
          {timelineEntries.map((entry, index) => (
            <TimelineItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const config = typeConfig[entry.type];
  const Icon = config.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'relative flex gap-8 pl-16 md:pl-0',
        isLeft ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'
      )}
    >
      <div
        className={cn(
          'absolute left-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-deep md:left-1/2 md:-translate-x-1/2',
          config.bg
        )}
      >
        <Icon size={14} className={config.color} />
      </div>

      <div className={cn('flex-1 md:w-[calc(50%-2rem)]', isLeft ? 'md:pr-8' : 'md:pl-8')}>
        <div
          className={cn(
            'rounded-card border border-elevated bg-surface p-6 card-hover',
            isLeft ? 'md:ml-auto' : ''
          )}
        >
          <span className="font-mono text-xs font-bold text-teal">{entry.date}</span>
          <h3 className="mt-2 font-display text-lg font-bold text-off-white">{entry.title}</h3>
          <p className="mt-1 text-sm font-medium text-subtle">{entry.institution}</p>
          <p className="mt-3 text-sm text-subtle leading-relaxed">{entry.description}</p>
        </div>
      </div>

      <div className="hidden flex-1 md:block" />
    </motion.div>
  );
}
