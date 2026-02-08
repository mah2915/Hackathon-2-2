'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface TodoCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

const TodoCheckbox: React.FC<TodoCheckboxProps> = ({ checked, onChange, id }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="form-checkbox h-5 w-5 text-light-accent-primary dark:text-dark-accent-primary rounded
                 border-light-border-default dark:border-dark-border-default bg-light-bg-secondary dark:bg-dark-bg-secondary
                 focus:ring-light-accent-primary dark:focus:ring-dark-accent-primary
                 transition-colors duration-200 cursor-pointer"
    />
  );
};

export default TodoCheckbox;
