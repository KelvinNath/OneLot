// components/sections/dealership/DealershipImage.tsx
import Image from 'next/image';

export default function DealershipImage() {
  return (
    <div className="w-full h-[400px] lg:h-[600px] relative px-4 lg:px-0">
      <Image
        src="/assets/Dealership/dealership-management-system-pic.webp"
        alt="OneLot Dealership Management System Dashboard"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}