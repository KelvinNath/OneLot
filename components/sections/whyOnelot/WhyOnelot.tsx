// components/sections/whyOnelot/WhyOnelot.tsx
import WhyOnelotCards from './WhyOneLotCards';
import { whyOnelotData } from './why-onelot-data';

export default function WhyOnelot() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {whyOnelotData.title}
          </h2>
        </div>
        
        {/* Cards Grid */}
        <WhyOnelotCards />
      </div>
    </section>
  );
}