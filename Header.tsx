'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface HeaderProps {
  user?: {
    email: string;
  };
  onLogout?: () => void;
  isAuthenticated?: boolean;
}

const Header = ({ user, onLogout, isAuthenticated = false }: HeaderProps) => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <header className="bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-sm border-b border-light-border-default dark:border-dark-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-light-accent-primary dark:text-dark-accent-primary">Todo App</span>
            </Link>
            {isAuthenticated && (
              <nav className="hidden md:flex ml-6 space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'px-3 py-2 rounded-md text-sm font-medium',
                      pathname === link.href
                        ? 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-accent-primary dark:text-dark-accent-primary'
                        : 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary hidden sm:block truncate max-w-xs">
                  Welcome, {user?.email}
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onLogout}
                  className="text-sm"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;