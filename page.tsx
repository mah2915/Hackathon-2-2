'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/providers/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary flex flex-col">
      {/* Header */}
      <header className="flex justify-end p-6">
        <div className="flex gap-4 items-center">
          {/* Theme Toggle Button - positioned to the left of sign-in button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-light-text-primary dark:border-dark-text-primary text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>

          <Link href="/auth/login">
            <button className="px-4 py-2 border border-light-text-primary dark:border-dark-text-primary text-light-text-primary dark:text-dark-text-primary rounded-lg font-medium hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors duration-200">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="px-4 py-2 border border-light-text-primary dark:border-dark-text-primary text-light-text-primary dark:text-dark-text-primary rounded-lg font-medium hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl w-full space-y-5"> {/* Added consistent 20px spacing */}
          {/* Logo - Centered */}
          <div className="flex justify-center">
            <Image
              src="/images/image.png"
              alt="Todo Web App Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>

          {/* Slogan - Centered with consistent spacing */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold
            text-light-text-secondary dark:text-dark-text-secondary
            text-center px-4">
            Managing tasks is now easier than ever!
          </p>

          {/* Button - Centered below slogan with consistent spacing */}
          <div className="flex justify-center">
            <Link href="/auth/login">
              <button className="bg-light-accent-primary dark:bg-dark-accent-primary
                text-white px-8 py-4 rounded-lg text-lg font-semibold
                hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover
                transform hover:scale-105 transition-all duration-200
                shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer - Centered at bottom */}
      <footer className="py-6 text-center text-light-text-muted dark:text-dark-text-muted">
        <p>© 2026 Todo Web App. All rights reserved.</p>
      </footer>
    </div>
  );
}