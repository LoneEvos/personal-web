'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, SectionHeading } from '@/components/ui/section-container';
import { MagicBento } from '@/components/ui/magic-bento';
import { techStack, techCategories } from '@/data/tech-stack';
import { TechIcon } from '@/lib/tech-icons';
import { cn } from '@/lib/utils';
import type { TechItem } from '@/data/tech-stack';

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>('languages');

  const filteredTech = techStack.filter((tech) => tech.category === activeCategory);

  return (
    <SectionContainer id="tech-stack">
      <SectionHeading
        label="Tech Stack"
        title="Skills & Interests"
        description="Programming languages, development tools, spoken languages, and areas of interest from my CV."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {techCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              'rounded-pill px-4 py-2.5 font-body text-sm font-medium transition-colors duration-200',
              'border focus-visible:outline-2 focus-visible:outline-teal',
              activeCategory === cat.id
                ? 'border-teal bg-surface-alt text-off-white'
                : 'border-elevated bg-surface text-subtle hover:border-muted hover:text-off-white'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredTech.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={i} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative"
    >
      <MagicBento contentClassName="flex items-center gap-4 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card border border-elevated bg-deep text-muted">
          <TechIcon name={tech.name} size={22} />
        </div>
        <span className="font-body text-sm font-medium text-muted transition-colors group-hover:text-off-white">
          {tech.name}
        </span>
      </MagicBento>
    </motion.div>
  );
}
