import React from 'react';
import { cn } from '@/lib/utils';

const cardVariants = {
  default: 'bg-white shadow-sm',
  elevated: 'bg-white shadow-lg',
  bordered: 'bg-white border border-gray-200',
} as const;

type CardVariant = keyof typeof cardVariants;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

export function Card({
  variant = 'default',
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden',
        cardVariants[variant],
        hoverable && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardSectionProps) {
  return (
    <div className={cn('px-5 py-4 sm:px-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ className, children, ...props }: CardSectionProps) {
  return (
    <div className={cn('px-5 py-4 sm:px-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: CardSectionProps) {
  return (
    <div
      className={cn('px-5 py-4 sm:px-6 border-t border-gray-100', className)}
      {...props}
    >
      {children}
    </div>
  );
}
