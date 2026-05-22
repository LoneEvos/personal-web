'use client';

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';
import { MagicBento } from '@/components/ui/magic-bento';
import { socialLinks } from '@/data/social-links';
import { profile } from '@/data/profile';
import { AnimatedWrapper } from '@/components/ui/animated-wrapper';
import { getSocialIcon } from '@/lib/social-icons';
import { cn } from '@/lib/utils';

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="border-t border-elevated/60">
      <AnimatedWrapper>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.7fr)] lg:items-stretch">
          <MagicBento
            className="min-h-[360px]"
            contentClassName="flex min-h-[360px] flex-col justify-between p-6 md:p-8"
          >
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                Contact
              </span>

              <h2 className="mt-8 max-w-2xl font-display text-[clamp(2.8rem,7vw,6.2rem)] font-normal leading-[0.94] text-off-white">
                Let&apos;s build something useful.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 border-t border-elevated pt-6 md:grid-cols-2">
              <p className="text-base leading-7 text-subtle">
                Open to software engineering opportunities, web projects, and conversations around
                full-stack development or AI.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  'group inline-flex min-h-16 items-center justify-between gap-5 rounded-card border border-elevated px-5',
                  'bg-deep text-off-white transition-colors duration-200 hover:border-muted hover:bg-surface-alt'
                )}
              >
                <span className="flex items-center gap-3 font-body text-sm font-semibold">
                  <Mail size={17} />
                  Email Teddy
                </span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </MagicBento>

          <div className="grid gap-3">
            <MagicBento contentClassName="h-full">
              <a href={`mailto:${profile.email}`} className="block p-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Email</p>
                    <p className="mt-3 break-all text-sm text-off-white">{profile.email}</p>
                  </div>
                  <Mail size={18} className="shrink-0 text-subtle transition-colors group-hover:text-off-white" />
                </div>
              </a>
            </MagicBento>

            <MagicBento contentClassName="h-full">
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`} className="block p-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Phone</p>
                    <p className="mt-3 text-sm text-off-white">{profile.phone}</p>
                  </div>
                  <Phone size={18} className="shrink-0 text-subtle transition-colors group-hover:text-off-white" />
                </div>
              </a>
            </MagicBento>

            <MagicBento contentClassName="p-5">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Location</p>
                  <p className="mt-3 text-sm text-off-white">{profile.location}</p>
                </div>
                <MapPin size={18} className="shrink-0 text-subtle" />
              </div>
            </MagicBento>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => {
                const Icon = getSocialIcon(link.icon);
                return (
                  <MagicBento key={link.name} contentClassName="h-full">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-24 flex-col justify-between p-5"
                      aria-label={link.name}
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={19} className="text-off-white" />
                        <ArrowUpRight size={15} className="text-subtle transition-colors group-hover:text-off-white" />
                      </div>
                      <span className="font-body text-sm font-semibold text-off-white">
                        {link.name}
                      </span>
                    </a>
                  </MagicBento>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </SectionContainer>
  );
}
