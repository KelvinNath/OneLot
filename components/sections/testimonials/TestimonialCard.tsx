// components/sections/testimonials/TestimonialCard.tsx
import Image from 'next/image';
import { memo } from 'react';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    position: string;
    company: string;
    quote: string;
    avatar: string;
  };
}

// Pre-computed styles for performance
const CARD_STYLES = [
  'text-center space-y-6',
  'max-w-4xl mx-auto'
].join(' ');

const TestimonialCard = memo(function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={CARD_STYLES}>
      {/* Avatar */}
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} profile picture`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Name and Position */}
      <div className=" flex flex-col gap-2 lg:flex-row lg:gap-5 justify-center space-y-1">
        <p className="text-sm font-semibold text-gray-900">
          {testimonial.name}
        </p>
        <p className="text-gray-600 text-sm">
          {testimonial.position}, {testimonial.company}
        </p>
      </div>
    </div>
  );
});

export default TestimonialCard;