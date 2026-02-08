'use client';

import React, { useState } from 'react';
import { TodoFormProps, CreateTodoRequest, UpdateTodoRequest } from '@/lib/types';
import Input from '../ui/Input';
import Button from '../ui/Button';

const TodoForm = ({ initialData, onSubmit, onCancel, submitLabel = 'Save', isSubmitting = false }: TodoFormProps) => {
  const [formData, setFormData] = useState<Partial<CreateTodoRequest>>({
    title: initialData?.title || '',
    description: initialData?.description || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length > 255) {
      newErrors.title = 'Title must be 255 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit(formData as CreateTodoRequest | UpdateTodoRequest);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        name="title"
        value={formData.title || ''}
        onChange={handleChange}
        error={errors.title}
        required
        placeholder="Enter todo title"
      />

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-dark-text-secondary mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          rows={3}
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-dark-border-default bg-dark-bg-tertiary text-dark-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-accent-primary focus-visible:ring-offset-2"
          placeholder="Enter todo description (optional)"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-dark-error">{errors.description}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-3 sm:pt-2 space-y-2 sm:space-y-0">
        <Button
          type="submit"
          isLoading={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Saving...' : submitLabel}
        </Button>

        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;