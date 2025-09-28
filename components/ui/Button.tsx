// components/ui/Button.tsx
'use client';

import { ButtonHTMLAttributes, memo } from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  showArrow?: boolean;
}

// Pre-computed styles
const BUTTON_STYLES = [
  'bg-[#44008a] text-white px-4 py-2 rounded-md text-sm font-medium',
  'hover:bg-[#380073] transition-colors duration-200 hover:cursor-pointer',
  'focus:outline-none focus:ring-2 focus:ring-[#44008a] focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  'inline-flex items-center justify-center gap-2',
].join(' ');

const Button = memo(function Button({
  text,
  showArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={`${BUTTON_STYLES} ${className}`} {...props}>
      {text}
      {showArrow && <ChevronRight className='w-4 h-4' />}
    </button>
  );
});

export default Button;
