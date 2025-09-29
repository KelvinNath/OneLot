// components/sections/dealership/DealershipContent.tsx
import { Check } from 'lucide-react';
import Button from '../../ui/Button';
import { dealershipData } from './dealership-data';

export default function DealershipContent() {
  return (
    <div className='p-4 lg:p-8 space-y-4'>
      {/* Title */}
      <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
        {dealershipData.title}
      </h2>

      {/* Description */}
      <p className='text-gray-600 leading-relaxed text-base lg:text-lg'>
        {dealershipData.description}
      </p>

      {/* First Divider */}
      <div className='border-t border-gray-200 my-4'></div>

      {/* Features List */}
      <div className='md:space-y-6'>
        {dealershipData.features.map(feature => (
          <div key={feature.id} className='flex items-start gap-3'>
            <div className='w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5'>
              <Check className='w-3 h-3 text-purple-600' />
            </div>
            <p className='text-gray-700 text-sm lg:text-base'>
              <span className='font-bold text-gray-900'>{feature.title}:</span>{' '}
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Second Divider */}
      <div className='border-t border-gray-200 my-4'></div>

      {/* CTA Text */}
      <p className='text-gray-600 leading-relaxed text-base lg:text-lg'>
        {dealershipData.ctaText}
      </p>

      {/* Button */}
      <div className='pt-4'>
        <Button
          text={dealershipData.buttonText}
          showArrow
          className='px-6 py-3 text-base'
        />
      </div>
    </div>
  );
}
