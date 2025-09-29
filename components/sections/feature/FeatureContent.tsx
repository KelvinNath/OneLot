// components/sections/feature/FeatureContent.tsx
import { ChevronRight } from 'lucide-react';

export default function FeatureContent() {
  return (
    <div className='space-y-6'>
      {/* Main Heading */}
      <h2 className='text-3xl md:text-4xl font-black text-gray-900 leading-tight'>
        Everything you need to grow your business
      </h2>

      {/* Description */}
      <p className='text-md md:text-xl text-gray-600 leading-relaxed'>
        OneLot is your trusted lending and financing partner, exclusively
        tailored for used car dealership. We also offer digital tools for
        streamlined operations and growth of your dealership.
      </p>

      {/* Learn More Link */}
      <div className='pt-2'>
        <a
          href='#'
          className='inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base transition-colors group'
        >
          Learn more
          <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  );
}
