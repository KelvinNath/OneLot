// components/sections/feature/FeatureCard.tsx
import React from 'react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight: string;
  description: string;
  iconColor: string;
  highlightColor: string;
}

export default function FeatureCard({
  icon: IconComponent,
  title,
  highlight,
  description,
  iconColor,
  highlightColor,
}: FeatureCardProps) {
  return (
    <div className='max-w-3xl mb-12 last:mb-0'>
      {/* Title with Icon */}
      <div className='flex items-start gap-4 mb-4'>
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0`}
        >
          <IconComponent className='w-5 h-5' />
        </div>

        {/* Title */}
        <h2 className='text-xl font-bold text-gray-900 leading-tight'>
          {title}
        </h2>
      </div>

      {/* Highlight text */}
      <p className={`text-md font-medium ${highlightColor} mb-3 leading-tight`}>
        {highlight}
      </p>

      {/* Description */}
      <p className='text-gray-600 leading-relaxed text-sm'>{description}</p>
    </div>
  );
}
