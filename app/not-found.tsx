import Link from 'next/link';
import { Car } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Car Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-[#44008a] rounded-full flex items-center justify-center">
            <Car className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl md:text-8xl font-bold text-[#44008a] mb-4">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button 
              text="Go Home" 
              className="px-6 py-3"
            />
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-[#44008a] rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-[#44008a] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#44008a] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
