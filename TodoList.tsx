'use client';

import React from 'react';
import { Todo } from '@/lib/types';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';
import Spinner from '../ui/Spinner';

interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  onToggleComplete: (todoId: string) => void;
  onEdit: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

const TodoList = ({
  todos,
  loading,
  error,
  onToggleComplete,
  onEdit,
  onDelete,
}: TodoListProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg" role="status" aria-label="Loading todos">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-light-error/10 dark:bg-dark-error/10 border-l-4 border-light-error dark:border-dark-error p-4 rounded-md" role="alert">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-light-error dark:text-dark-error"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-light-error dark:text-dark-error">
              <span className="font-medium">Error:</span> {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (todos.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-lg overflow-hidden sm:rounded-md border border-light-border-default dark:border-dark-border-default" role="region" aria-label="List of todos">
      <ul className="divide-y divide-light-border-default dark:divide-dark-border-default">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;