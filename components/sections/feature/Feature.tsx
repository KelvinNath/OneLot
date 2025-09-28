// components/sections/feature/Feature.tsx
import FeatureContent from './FeatureContent';
import FeatureCards from './FeatureCards';

export default function Feature() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <FeatureContent />
          </div>
          
          {/* Right Column - Feature Cards */}
          <div className="flex flex-col">
            <FeatureCards />
          </div>
        </div>
      </div>
    </section>
  );
}