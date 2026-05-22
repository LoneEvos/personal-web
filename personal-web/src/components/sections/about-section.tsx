'use client';

import { GraduationCap, Target, Lightbulb, BookOpen } from 'lucide-react';
import { SectionContainer, SectionHeading } from '@/components/ui/section-container';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedWrapper, StaggerContainer, StaggerItem } from '@/components/ui/animated-wrapper';

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
      <SectionHeading
        label="About"
        title="Software engineering student focused on practical systems"
        description="Based in Kuala Lumpur, currently studying at APU Malaysia and pursuing a dual degree with De Montfort University."
        align="left"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimatedWrapper animation="fadeLeft">
          <div className="space-y-6">
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

        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((card) => (
            <StaggerItem key={card.title}>
              <Card className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-card border border-elevated bg-deep text-teal">
                  <card.icon size={20} />
                </div>
                <CardTitle className="text-lg mb-2">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionContainer>
  );
}
