'use client';

import { cn } from '@/lib/utils';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'badge' | 'large';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  variant = 'primary',
  children,
  className,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-body font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: cn(
      'bg-off-white text-deep rounded-pill px-5 py-3 h-11 text-sm',
      'border border-off-white hover:bg-muted active:bg-[#E8E8E8]'
    ),
    ghost: cn(
      'bg-transparent text-off-white rounded-pill h-10 w-10 p-0',
      'border border-elevated',
      'hover:bg-deep/80 hover:border-teal'
    ),
    badge: cn(
      'bg-surface text-off-white rounded-pill px-3 py-1.5 h-[30px] text-xs',
      'border border-elevated',
      'hover:bg-surface-alt hover:border-muted'
    ),
    large: cn(
      'bg-off-white text-deep rounded-pill px-6 py-4 h-[52px] w-full text-sm',
      'border border-off-white hover:bg-muted'
    ),
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'ghost' | 'badge' | 'large';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
}

export function LinkButton({
  href,
  variant = 'primary',
  children,
  className,
  icon,
  iconPosition = 'left',
  external = false,
}: LinkButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-body font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2';

  const variants = {
    primary: cn(
      'bg-off-white text-deep rounded-pill px-5 py-3 h-11 text-sm',
      'border border-off-white hover:bg-muted active:bg-[#E8E8E8]'
    ),
    ghost: cn(
      'bg-transparent text-off-white rounded-pill px-5 py-3 h-11 text-sm',
      'border border-elevated',
      'hover:bg-surface hover:border-muted'
    ),
    badge: cn(
      'bg-surface text-off-white rounded-pill px-3 py-1.5 h-[30px] text-xs',
      'border border-elevated',
      'hover:bg-surface-alt hover:border-muted'
    ),
    large: cn(
      'bg-off-white text-deep rounded-pill px-6 py-4 h-[52px] w-full text-sm',
      'border border-off-white hover:bg-muted'
    ),
  };

  return (
    <a
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </a>
  );
}
