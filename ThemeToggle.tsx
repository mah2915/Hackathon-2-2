'use client';

import React from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary focus:outline-none focus:ring-2 focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-light-text-secondary dark:text-dark-text-secondary" />
      ) : (
        <SunIcon className="h-6 w-6 text-light-text-secondary dark:text-dark-text-secondary" />
      )}
    </button>
  );
};

export default ThemeToggle;
