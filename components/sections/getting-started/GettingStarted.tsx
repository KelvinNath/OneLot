// components/sections/getting-started/GettingStarted.tsx
import Button from '../../ui/Button';

export default function GettingStarted() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Get started today
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
          </p>

          {/* CTA Button */}
          <div>
            <Button 
              text="Inquire now"
              className="px-2 py-2 text-base md:text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}