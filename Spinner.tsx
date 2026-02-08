'use client';

import React from 'react';
import clsx from 'clsx';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Spinner = ({ size = 'md', className }: SpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const borderSizeClasses = {
    sm: 'border-2',
    md: 'border-4',
    lg: 'border-4',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(
          'animate-spin rounded-full border-solid border-dark-accent-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
          sizeClasses[size],
          borderSizeClasses[size],
          className
        )}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Spinner;