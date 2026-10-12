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
  const baseClasses = `bg-surface rounded-card p-6 border transition-all duration-200 ${
    highlighted
      ? 'border-primary-600/30 bg-gradient-to-b from-primary-50/40 to-surface shadow-card ring-1 ring-primary-600/10'
      : 'border-border/60 shadow-soft hover:shadow-card hover:border-border'
  }`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} block focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
};
