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
  const baseClasses = `bg-surface rounded-card p-5 sm:p-6 border transition-all duration-150 ${
    highlighted
      ? 'border-primary-600 bg-primary-50/40'
      : 'border-border shadow-card'
  }`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} block hover:border-primary-600 hover:shadow-hover focus-visible:ring-2 focus-visible:ring-focus ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
};
