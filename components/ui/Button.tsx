// components/ui/Button.tsx
'use client';

import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

// Pre-computed styles 
const BUTTON_STYLES = [
  'bg-[#44008a] text-white px-4 py-2 rounded-md text-sm font-medium',
  'hover:bg-[#380073] transition-colors duration-200 hover:cursor-pointer',
  'focus:outline-none focus:ring-2 focus:ring-[#44008a] focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed'
].join(' ');

const Button = memo(function Button({
  text,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${BUTTON_STYLES} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
});

export default Button;