'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { LinkButton } from '@/components/ui/button';
import { SectionContainer } from '@/components/ui/section-container';
import { TechBadge } from '@/components/ui/tech-badge';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import { TextType } from '@/components/ui/text-type';
import { MagicBento } from '@/components/ui/magic-bento';
import { fadeUpVariants } from '@/lib/utils';

const focusItems = [
  'Full-stack development',
  'Artificial intelligence',
  'Practical software solutions',
];

const animatedKeywords = ['development', 'AI', 'solutions', 'learning'];

const typePhrases = [
  "Hi, I'm Teddy",
  'Software Engineering Student',
  'Full-stack development learner',
  'Building practical AI ideas',
];

export function HeroSection() {
  return (
    <SectionContainer
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden border-b border-elevated/60 pt-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-24 h-px bg-elevated/70"
        aria-hidden="true"
      />

      <div className="grid w-full gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
        <div className="max-w-4xl">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mb-7 inline-flex min-h-5 border-l border-teal pl-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal"
          >
            <TextType phrases={typePhrases} />
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="font-display text-[clamp(3.25rem,8vw,7.5rem)] font-normal leading-[0.95] text-off-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-8 grid gap-8 border-t border-elevated pt-8 md:grid-cols-[minmax(0,0.8fr)_minmax(280px,1fr)]"
          >
            <p className="font-display text-2xl font-normal leading-snug text-muted md:text-3xl">
              {profile.subtitle}
            </p>
            <div className="space-y-6">
              <p className="max-w-xl text-base leading-8 text-subtle">
                {profile.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <LinkButton href="#projects" icon={<ArrowRight size={16} />} iconPosition="right">
                  View selected work
                </LinkButton>
                <LinkButton href="#contact" variant="ghost" icon={<Mail size={16} />}>
                  Start a conversation
                </LinkButton>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MagicBento contentClassName="p-5">
            <div className="flex items-center gap-2 text-sm text-subtle">
              <MapPin size={15} className="text-teal" />
              {profile.location}
            </div>

            <div className="mt-7 border-t border-elevated pt-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                Current focus
              </p>
              <AnimatedFocusPanel />
            </div>

            <div className="mt-7 border-t border-elevated pt-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                Working with
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.heroBadges.map((badge) => (
                  <TechBadge key={badge} name={badge} size="sm" />
                ))}
              </div>
            </div>
          </MagicBento>
        </motion.div>
      </div>

      <ScrollIndicator />
    </SectionContainer>
  );
}

function AnimatedFocusPanel() {
  return (
    <div className="mt-4 overflow-hidden border border-elevated bg-deep p-4">
      <div className="flex flex-wrap gap-2">
        {animatedKeywords.map((keyword, index) => (
          <motion.span
            key={keyword}
            initial={{ opacity: 0, y: 14, rotate: -1 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0],
              rotate: [0, index % 2 === 0 ? 0.6 : -0.6, 0],
            }}
            transition={{
              opacity: { duration: 0.45, delay: 0.35 + index * 0.08 },
              y: {
                duration: 4 + index * 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              },
              rotate: {
                duration: 4.5 + index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.18,
              },
            }}
            className="inline-flex border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.14em] text-off-white"
          >
            {keyword}
          </motion.span>
        ))}
      </div>

      <ul className="mt-5 space-y-3">
        {focusItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.55 + index * 0.08 }}
            className="flex gap-3 text-sm leading-6 text-muted"
          >
            <span className="mt-2 h-px w-5 shrink-0 bg-teal" aria-hidden="true" />
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
