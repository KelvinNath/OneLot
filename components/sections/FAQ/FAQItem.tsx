// components/sections/FAQ/FAQItem.tsx
'use client';

import { memo, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { FAQItem as FAQItemType } from './faq-data';

interface FAQItemProps {
  item: FAQItemType;
  isLast?: boolean;
}

const FAQItem = memo(function FAQItem({ item, isLast = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(item.id === 'loan-application'); // First item open by default

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='py-4'>
        <button
          onClick={toggleOpen}
          className='w-full flex items-center justify-between text-left focus:outline-none group'
        >
          {/* Question Icon and Text */}
          <div className='flex items-center gap-3 flex-1'>
            <div className='w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0'>
              <span className='text-white text-xs font-black'>?</span>
            </div>
            <span className='text-gray-900 font-semibold text-base md:text-lg'>
              {item.question}
            </span>
          </div>

          {/* Arrow Icon */}
          <div className='ml-4 flex-shrink-0 hover:cursor-pointer'>
            {isOpen ? (
              <ChevronUp className='w-5 h-5 text-gray-600' />
            ) : (
              <ChevronDown className='w-5 h-5 text-gray-600' />
            )}
          </div>
        </button>

        {/* Answer Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='pt-4 pl-9'>
            <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
              {item.answer}
              {item.linkText && item.linkUrl && (
                <>
                  {' '}
                  <a
                    href={item.linkUrl}
                    className='text-purple-600 hover:text-purple-700 underline transition-colors duration-200'
                  >
                    {item.linkText}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      {!isLast && <hr className='border-gray-200' />}
    </>
  );
});

export default FAQItem;
