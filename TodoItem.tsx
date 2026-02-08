'use client';

import React, { useState } from 'react';
import { TodoItemProps } from '@/lib/types';
import Button from '../ui/Button';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

const TodoItem = ({ todo, onToggleComplete, onEdit, onDelete }: TodoItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    // Use the onEdit callback passed from parent
    onEdit(todo.id);
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${todo.title}"?`)) {
      setIsDeleting(true);
      try {
        onDelete(todo.id);
      } catch (error) {
        console.error('Error deleting todo:', error);
        setIsDeleting(false);
      }
    }
  };

  return (
    <li className="hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-all border-b border-light-border-default dark:border-dark-border-default last:border-b-0" role="listitem">
      <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-start sm:items-center min-w-0 flex-1 w-full">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            className="h-5 w-5 text-light-success dark:text-dark-success rounded focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary mt-0.5 sm:mt-0 bg-light-bg-secondary dark:bg-dark-bg-secondary border-light-border-default dark:border-dark-border-default"
            aria-label={`Mark ${todo.title} as ${todo.completed ? 'incomplete' : 'complete'}`}
          />
          <div className="ml-3 sm:ml-4 min-w-0 flex-1 w-full">
            <p
              className={clsx(
                'text-sm font-medium truncate transition-all duration-200',
                todo.completed
                  ? 'text-light-success dark:text-dark-success line-through'
                  : 'text-light-text-primary dark:text-dark-text-primary'
              )}
              aria-label={todo.completed ? `${todo.title}, completed` : `${todo.title}, not completed`}
            >
              {todo.title}
            </p>
            {todo.description && (
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary truncate mt-1">
                {todo.description}
              </p>
            )}
            <div className="mt-1 sm:mt-2 flex items-center">
              <span className="inline-flex items-center text-xs text-light-text-muted dark:text-dark-text-muted">
                <svg
                  className="mr-1.5 h-4 w-4 text-light-text-muted dark:text-dark-text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {new Date(todo.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-end w-full sm:w-auto mt-2 sm:mt-0">
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEdit}
              className="text-sm whitespace-nowrap"
              aria-label={`Edit ${todo.title}`}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={handleDelete}
              isLoading={isDeleting}
              className="text-sm whitespace-nowrap"
              aria-label={`Delete ${todo.title}`}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;