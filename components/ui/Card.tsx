// components/ui/Card.tsx
import { memo } from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

// Pre-computed styles for performance
const CARD_STYLES = [
  'bg-white rounded-lg shadow-sm border border-gray-100',
  'p-6 text-center',
  'hover:shadow-md transition-shadow duration-200',
  'flex flex-col items-center space-y-4'
].join(' ');

const Card = memo(function Card({
  icon,
  title,
  description,
  className = ''
}: CardProps) {
  return (
    <div className={`${CARD_STYLES} ${className}`}>
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
});

export default Card;