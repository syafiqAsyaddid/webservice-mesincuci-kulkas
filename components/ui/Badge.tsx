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
    default: 'bg-[#EBF3FC] text-primary-800 border-transparent',
    success: 'bg-[#F0FDF4] text-emerald-800 border-transparent',
    warning: 'bg-[#FFFBEB] text-amber-800 border-transparent',
    info: 'bg-[#F0F9FF] text-sky-800 border-transparent',
    accent: 'bg-[#FEF3C7] text-amber-900 border-transparent',
    neutral: 'bg-surface-tint text-text-muted border-transparent',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-badge border ${variantClasses} ${className}`}
    >
      {icon && <span className="flex-shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
