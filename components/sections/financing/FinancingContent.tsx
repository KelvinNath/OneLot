// components/sections/financing/FinancingContent.tsx
import { Check } from 'lucide-react';
import Button from '../../ui/Button';
import { financingData } from './financing-data';

export default function FinancingContent() {
  return (
    <div className='p-4 lg:p-12 space-y-6'>
      {/* Title */}
      <h2 className='text-3xl lg:text-4xl font-black text-gray-900'>
        {financingData.title}
      </h2>

      {/* Subtitle */}
      <h3 className='text-xl lg:text-2xl font-semibold text-gray-800'>
        {financingData.subtitle}
      </h3>

      {/* Description */}
      <p className='text-gray-600 text-semibold leading-relaxed text-base lg:text-lg'>
        {financingData.description}
      </p>

      {/* Divider */}
      <div className='border-t border-gray-200 my-6'></div>

      {/* Benefits List */}
      <div className='space-y-4'>
        {financingData.benefits.map(benefit => (
          <div key={benefit.id} className='flex items-start gap-3'>
            <div className='w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
              <Check className='w-3 h-3 text-purple-600' />
            </div>
            <p className='text-gray-700 font-semibold text-sm lg:text-base'>
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
      {/* Divider */}
      <div className='border-t border-gray-200 my-6'></div>

      {/* CTA Text */}
      <p className='text-gray-600 leading-relaxed text-base lg:text-lg pt-4'>
        {financingData.ctaText}
      </p>

      {/* Button */}
      <div className='pt-6'>
        <Button
          text={financingData.buttonText}
          showArrow
          className='px-6 py-3 text-base'
        />
      </div>
    </div>
  );
}
