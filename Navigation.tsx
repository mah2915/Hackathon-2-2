'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Todos', href: '/dashboard/todos' },
    { name: 'Profile', href: '/dashboard/profile' },
  ];

  return (
    <nav className={className}>
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                'group flex items-center px-4 py-2 text-sm font-medium rounded-md',
                pathname === item.href
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;