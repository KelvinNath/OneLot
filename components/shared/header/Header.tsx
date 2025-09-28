// components/shared/header/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import Button from '../../ui/Button';

export default function Header() {
  return (
    <header className="bg-white shadow-sm  sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left Section - Logo + OneLot */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/header/logo.webp"
                alt="OneLot Logo"
                width={120}
                height={32}
                priority
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-shrink-0 ml-8">
            <DesktopNav />
          </div>
          
          {/*  Mobile Menu */}
          <div className="flex-shrink-0 ml-auto flex items-center space-x-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Log In
              </Link>
              <Button text="Inquire now"/>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}