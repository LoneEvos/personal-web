'use client';

import { GitBranch, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionContainer, SectionHeading } from '@/components/ui/section-container';
import { LinkButton } from '@/components/ui/button';
import { TechBadge } from '@/components/ui/tech-badge';

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionHeading
        label="Projects"
        title="Featured Work"
        description="Project work that demonstrates web development, structure, and presentation skills."
      />

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group grid border-t border-elevated pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12"
    >
      <div className="border border-elevated bg-surface p-5 transition-colors duration-200 group-hover:border-muted">
        <div className="flex items-start justify-between gap-6 border-b border-elevated pb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Project {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-right font-mono text-xs text-subtle">
            {project.featured ? 'Featured case' : 'Lab note'}
          </span>
        </div>
        <div className="flex min-h-48 flex-col justify-end pt-10">
          <p className="max-w-sm text-sm leading-7 text-subtle">
            {project.longDescription}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5 lg:mt-0">
        <h3 className="font-display text-3xl font-normal text-off-white md:text-4xl">
          {project.title}
        </h3>
        <p className="max-w-2xl text-base leading-8 text-subtle">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          {project.githubUrl && (
            <LinkButton
              href={project.githubUrl}
              variant="ghost"
              external
              icon={<GitBranch size={16} />}
            >
              Source
            </LinkButton>
          )}
          {project.liveUrl && (
            <LinkButton
              href={project.liveUrl}
              variant="primary"
              external
              icon={<ExternalLink size={16} />}
              iconPosition="right"
            >
              Live Demo
            </LinkButton>
          )}
        </div>
      </div>
    </motion.article>
  );
}
