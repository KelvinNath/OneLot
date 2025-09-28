// components/sections/hero/HeroContent.tsx
import Button from '../../ui/Button';

export default function HeroContent() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='flex flex-col items-center text-center space-y-6'>
        {/* H1 Heading */}
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
          Grow your dealership with working capital loans and digital tools from
          OneLot
        </h1>

        {/* Description Paragraph */}
        <p className='text-lg md:text-xl text-gray-500 max-w-3xl'>
          We enable dealers to buy more cars through our working capital loan
          solutions and sell cars more efficiently through our Dealership
          Management System with its inventory management, marketing solutions
          and market insights
        </p>

        {/* Button */}
        <div className='pt-4'>
          <Button text='Inquire now' className='px-8 py-4 text-lg' />
        </div>
      </div>
    </div>
  );
}
