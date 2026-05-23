'use client';

import { GraduationCap, Target, Lightbulb, BookOpen } from 'lucide-react';
import { SectionContainer, SectionHeading } from '@/components/ui/section-container';
import { AnimatedWrapper, StaggerContainer, StaggerItem } from '@/components/ui/animated-wrapper';
import { MagicBento } from '@/components/ui/magic-bento';

const aboutCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'BSc (Hons) Software Engineering at Asia Pacific University of Technology & Innovation with a dual degree programme through De Montfort University.',
  },
  {
    icon: Lightbulb,
    title: 'Interests',
    description:
      'Artificial intelligence, full-stack development, and personal software projects.',
  },
  {
    icon: Target,
    title: 'Goals',
    description:
      'Apply and further develop software engineering and AI development skills in a professional environment.',
  },
  {
    icon: BookOpen,
    title: 'Coursework',
    description:
      'Object-Oriented Programming and Database Systems, supported by continuous learning through projects and certifications.',
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:items-start lg:gap-12">
        <div>
          <SectionHeading
            label="About"
            title="Software engineering student focused on practical systems"
            description="Based in Kuala Lumpur, currently studying at APU Malaysia and pursuing a dual degree with De Montfort University."
            align="left"
            className="mb-8"
          />

          <AnimatedWrapper animation="fadeLeft">
            <div className="max-w-2xl space-y-6">
              <p className="text-base text-subtle leading-relaxed">
                I&apos;m Teddy Steven Gotama, a motivated software engineering student at{' '}
                <span className="text-off-white font-medium">Asia Pacific University of Technology & Innovation</span>,
                pursuing a <span className="text-teal font-medium">dual degree with De Montfort University</span>.
              </p>
              <p className="text-base text-subtle leading-relaxed">
                My academic focus includes Object-Oriented Programming and Database Systems, supported by
                hands-on learning through web development, technical certifications, and personal projects.
              </p>
              <p className="text-base text-subtle leading-relaxed">
                I&apos;m interested in full-stack development and artificial intelligence, with the goal of
                building practical software solutions while continuing to grow in a professional environment.
              </p>
            </div>
          </AnimatedWrapper>
        </div>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:pt-10">
          {aboutCards.map((card) => (
            <StaggerItem key={card.title}>
              <MagicBento className="h-full" contentClassName="p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center border-b border-teal/60 text-teal">
                  <card.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-normal text-off-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-subtle leading-relaxed">{card.description}</p>
              </MagicBento>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionContainer>
  );
}
