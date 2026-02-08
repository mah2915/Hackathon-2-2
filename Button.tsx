'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-accent-primary dark:focus-visible:ring-dark-accent-primary focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      {
        // Variants
        'bg-light-accent-primary dark:bg-dark-accent-primary text-white hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover': variant === 'primary',
        'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary border border-light-border-default dark:border-dark-border-default': variant === 'secondary',
        'bg-light-error dark:bg-dark-error text-white hover:bg-light-error/70 dark:hover:bg-dark-error/70': variant === 'danger',
        'bg-transparent text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary border border-transparent': variant === 'ghost',

        // Sizes
        'h-9 px-3 text-sm': size === 'sm',
        'h-10 px-4 py-2 text-base': size === 'md',
        'h-12 px-6 text-lg': size === 'lg',

        // Width
        'w-full': fullWidth,

        // Loading state
        'cursor-not-allowed': isLoading,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;