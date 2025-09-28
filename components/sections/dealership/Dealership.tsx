// components/sections/dealership/Dealership.tsx
import DealershipContent from './DealershipContent';
import DealershipImage from './DealershipImage';

export default function Dealership() {
  return (
    <section className="py-0 bg-[#f5f5f5]">
      <div className="flex flex-col lg:flex-row">
        {/* Content - Left side on desktop, top on mobile */}
        <div className="w-full lg:w-1/2 order-1 lg:order-1">
          <DealershipContent />
        </div>
        
        {/* Image - Right side on desktop, bottom on mobile */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2">
          <DealershipImage />
        </div>
      </div>
    </section>
  );
}