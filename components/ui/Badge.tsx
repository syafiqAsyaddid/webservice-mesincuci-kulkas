import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'info' | 'accent' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  icon,
}) => {
  const variantClasses = {
    default: 'bg-slate-50 text-primary-900 border-border',
    success: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    warning: 'bg-amber-50 text-amber-950 border-amber-200',
    info: 'bg-sky-50 text-sky-950 border-sky-200',
    accent: 'bg-amber-50 text-amber-950 border-amber-200',
    neutral: 'bg-slate-50 text-slate-700 border-border',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm border ${variantClasses} ${className}`}
    >
      {icon && <span className="flex-shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
