import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  highlighted?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  href,
  highlighted = false,
}) => {
  const baseClasses = `bg-surface rounded-card p-5 sm:p-6 border transition-all duration-200 ${
    highlighted
      ? 'border-primary-600/70 bg-gradient-to-b from-primary-50/60 to-surface shadow-highlight'
      : 'border-border/70 shadow-card hover:shadow-hover hover:border-primary-600/40'
  }`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} block focus-visible:ring-2 focus-visible:ring-focus ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
};
