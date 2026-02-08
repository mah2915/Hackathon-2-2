'use client';

import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, required, className, ...props }, ref) => {
    const hasError = !!error;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className={clsx('block text-sm font-medium mb-1', {
              'text-dark-error': hasError,
              'text-dark-text-secondary': !hasError,
            })}
          >
            {label}
            {required && <span className="text-dark-error ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-accent-primary focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            {
              'border-dark-error bg-dark-error/10 placeholder:text-dark-error': hasError,
              'border-dark-border-default bg-dark-bg-tertiary text-dark-text-primary placeholder:text-dark-text-muted': !hasError,
            },
            className
          )}
          {...props}
        />
        {helperText && !hasError && (
          <p className="mt-1 text-sm text-dark-text-muted">{helperText}</p>
        )}
        {error && <p className="mt-1 text-sm text-dark-error">{error}</p>
        }
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;