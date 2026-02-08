'use client';

import React from 'react';
import Link from 'next/link';

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <svg
        className="mx-auto h-12 w-12 text-light-text-muted dark:text-dark-text-muted"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary">No todos</h3>
      <p className="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        Ready to tackle some tasks?
      </p>
      <div className="mt-6">
        <Link
          href="/dashboard/todos/new"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-accent-primary dark:bg-dark-accent-primary hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary"
        >
          <svg
            className="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          New Todo
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;