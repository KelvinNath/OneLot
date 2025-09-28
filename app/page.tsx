// app/page.tsx
import dynamic from 'next/dynamic';

// Dynamic import with loading fallback
const Hero = dynamic(() => import('@/components/sections/hero/Hero'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 animate-pulse">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <div className="h-16 bg-gray-200 rounded w-3/4 max-w-4xl"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 max-w-2xl"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3 max-w-xl"></div>
        <div className="h-12 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  ),
  ssr: true
});

export default function Home() {
  return <Hero />;
}