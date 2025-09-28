// components/sections/testimonials/Testimonials.tsx
'use client';

import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import TestimonialNavigation from './TestimonialNavigation';
import { testimonialsData } from './testimonials-data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, testimonials } = testimonialsData;

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
            {title}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className='mb-8'>
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Navigation */}
        <TestimonialNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentIndex={currentIndex}
          totalCount={testimonials.length}
        />
      </div>
    </section>
  );
}
