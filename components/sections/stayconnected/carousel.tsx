// components/sections/stayConnected/carousel.tsx
import Image from 'next/image';

interface CarouselProps {
  items: Array<{
    id: string;
    image: string;
    title: string;
  }>;
  className?: string;
}

export default function Carousel({ items, className = "" }: CarouselProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex gap-6 animate-scroll">
        {/* First set of images */}
        {items.map((item) => (
          <div key={`first-${item.id}`} className="flex-shrink-0 w-80 h-100 rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        {/* Second set of images */}
        {items.map((item) => (
          <div key={`second-${item.id}`} className="flex-shrink-0 w-80 h-100 rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        {/* Third set of images */}
        {items.map((item) => (
          <div key={`third-${item.id}`} className="flex-shrink-0 w-80 h-100 rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}