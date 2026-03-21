import React from 'react';
import { cn } from '@/lib/utils';

type SkeletonVariant = 'text' | 'heading' | 'card' | 'avatar' | 'image';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
}

const variantDefaults: Record<
  SkeletonVariant,
  { className: string; defaultWidth?: string; defaultHeight?: string }
> = {
  text: { className: 'rounded', defaultWidth: '100%', defaultHeight: '1rem' },
  heading: {
    className: 'rounded',
    defaultWidth: '60%',
    defaultHeight: '2rem',
  },
  card: {
    className: 'rounded-xl',
    defaultWidth: '100%',
    defaultHeight: '12rem',
  },
  avatar: {
    className: 'rounded-full',
    defaultWidth: '3rem',
    defaultHeight: '3rem',
  },
  image: {
    className: 'rounded-lg',
    defaultWidth: '100%',
    defaultHeight: '14rem',
  },
};

export function Skeleton({
  variant = 'text',
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) {
  const defaults = variantDefaults[variant];

  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200',
        defaults.className,
        className
      )}
      style={{
        width: width ?? defaults.defaultWidth,
        height: height ?? defaults.defaultHeight,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
