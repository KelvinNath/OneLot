// components/sections/financing/FinancingImage.tsx
import Image from 'next/image';

export default function FinancingImage() {
  return (
    <div className='w-full h-[400px] lg:h-[600px] relative px-10  lg:px-0 shadow-md'>
      <Image
        src='/assets/Financing/car-financing-pic.webp'
        alt='OneLot Car Financing Dashboard'
        fill
        priority
        className='object-contain'
        sizes='(max-width: 1024px) 100vw, 50vw'
      />
    </div>
  );
}
