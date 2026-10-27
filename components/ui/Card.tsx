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
  const baseClasses = `bg-surface rounded-lg p-6 border transition-colors duration-150 ${
    highlighted
      ? 'border-primary-900 bg-[#F8FAFC]'
      : 'border-border hover:border-slate-300'
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
