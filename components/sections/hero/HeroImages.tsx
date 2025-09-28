import Image from 'next/image';

export default function HeroImages() {
  return (
    <div className='w-full'>
      {/* Dashboard Image */}
      <div className='container mx-auto px-4'>
        <Image
          src='/assets/hero/hero.webp'
          alt='OneLot Dealership Management System'
          width={1200}
          height={800}
          priority
          className='object-cover w-full h-auto mx-auto z-30'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
        />
      </div>

      {/* Text */}
      <div className='container mx-auto px-4 text-center py-4'>
        <span className='text-md text-gray-500'>Regulated by</span>
      </div>

      {/* Image 2 */}
      <div className='container mx-auto px-4 pb-8 text-center'>
        <Image
          src='/assets/hero/sec-large.webp'
          alt='Securities and Exchange Commission'
          width={200}
          height={60}
          className='object-contain mx-auto'
        />
      </div>
    </div>
  );
}
