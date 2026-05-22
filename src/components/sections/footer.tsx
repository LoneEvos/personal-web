'use client';

import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social-links';
import { getSocialIcon } from '@/lib/social-icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-elevated/50">
      <div className="mx-auto max-w-[1180px] px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-normal text-off-white">{profile.name}</p>
            <p className="mt-1 text-sm text-subtle">{profile.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = getSocialIcon(link.icon);
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-pill border border-elevated text-subtle transition-colors duration-200 hover:border-muted hover:text-off-white"
                  aria-label={link.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs text-subtle">
            (c) {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
