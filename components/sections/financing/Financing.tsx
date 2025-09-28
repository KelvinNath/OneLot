// components/sections/financing/Financing.tsx
import FinancingContent from './FinancingContent';
import FinancingImage from './FinancingImage';

export default function Financing() {
  return (
    <section className='py-12 lg:py-20 bg-[#f5f5f5]'>
      <div className='flex flex-col lg:flex-row'>
        {/* Image - Left side on desktop, bottom on mobile */}
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
          <FinancingImage />
        </div>

        {/* Content - Right side on desktop, top on mobile */}
        <div className='w-full lg:w-1/2 order-1 lg:order-2'>
          <FinancingContent />
        </div>
      </div>
    </section>
  );
}
