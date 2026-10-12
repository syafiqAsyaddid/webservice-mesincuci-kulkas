import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'min-h-[40px] px-4 py-2 text-sm',
    md: 'min-h-[48px] px-5 py-2.5 text-base',
    lg: 'min-h-[52px] px-6 py-3 text-lg font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-800 active:bg-primary-900 focus-visible:ring-2 focus-visible:ring-focus shadow-sm',
    secondary:
      'bg-white text-text border border-border hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-2 focus-visible:ring-focus',
    whatsapp:
      'bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:ring-2 focus-visible:ring-focus font-medium shadow-sm',
    outline:
      'bg-transparent text-primary-700 border border-primary-600 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-focus',
  }[variant];

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-button transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if ('href' in props && props.href) {
    const { href, isExternal, ...rest } = props as ButtonAsLinkProps;
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonAsButtonProps)}>
      {children}
    </button>
  );
};
