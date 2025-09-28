// app/page.tsx
import Hero from '@/components/sections/hero/Hero';
import Feature from '@/components/sections/feature/Feature';
import Financing from '@/components/sections/financing/Financing';
import Dealership from '@/components/sections/dealership/Dealership';
import WhyOnelot from '@/components/sections/whyOnelot/WhyOnelot';
import Testimonials from '@/components/sections/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Financing />
      <Dealership />
      <WhyOnelot />
      <Testimonials />
    </>
  );
}