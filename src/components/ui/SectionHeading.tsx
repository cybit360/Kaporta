import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'center' | 'left';
  accentUnderline?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  accentUnderline = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 lg:mb-14',
        align === 'center' && 'text-center',
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-construction-yellow mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal">
        {title}
      </h2>
      {accentUnderline && (
        <div
          className={cn(
            'mt-3 h-1 w-16 rounded-full bg-construction-yellow',
            align === 'center' && 'mx-auto'
          )}
          aria-hidden="true"
        />
      )}
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-concrete-gray max-w-2xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
