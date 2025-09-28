// components/sections/testimonials/TestimonialNavigation.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';

interface TestimonialNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

// Pre-computed styles for performance
const BUTTON_STYLES = [
  'w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200',
  'flex items-center justify-center transition-colors duration-200 hover:cursor-pointer'
].join(' ');

const TestimonialNavigation = memo(function TestimonialNavigation({
  
}: TestimonialNavigationProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Previous Button */}
      <button
        className={BUTTON_STYLES}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      
      
      
      {/* Next Button */}
      <button
        className={BUTTON_STYLES}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
});

export default TestimonialNavigation;