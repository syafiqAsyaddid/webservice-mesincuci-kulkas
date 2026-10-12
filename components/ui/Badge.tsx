import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'info' | 'accent';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-primary-100 text-primary-900 border-border',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border-amber-200',
    info: 'bg-sky-50 text-sky-800 border-sky-200',
    accent: 'bg-accent-100 text-accent-700 border-accent-600/30 font-semibold',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
