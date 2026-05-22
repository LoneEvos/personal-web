'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/use-active-section';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { cn } from '@/lib/utils';

const sectionIds = navItems.map((item) => item.sectionId);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-elevated"
        aria-hidden="true"
      >
        <motion.div
          className="h-full bg-teal origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </motion.div>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass-strong shadow-nav py-3' : 'bg-transparent py-4'
        )}
      >
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 md:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="font-display text-xl font-normal text-off-white transition-colors hover:text-teal"
          >
            {profile.name}
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'relative px-3 py-2 font-body text-sm font-medium transition-colors duration-200',
                    activeSection === item.sectionId
                      ? 'text-off-white'
                      : 'text-subtle hover:text-off-white'
                  )}
                >
                  {item.label}
                  {activeSection === item.sectionId && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-px bg-teal"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-pill border border-elevated text-off-white transition-colors hover:border-muted lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-deep/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(320px,85vw)] flex-col glass-strong pt-20 lg:hidden"
            >
              <ul className="flex flex-col gap-2 px-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.sectionId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        'block rounded-card px-4 py-3 font-body text-base font-medium transition-colors',
                        activeSection === item.sectionId
                          ? 'bg-teal/10 text-teal'
                          : 'text-subtle hover:bg-elevated/50 hover:text-off-white'
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
