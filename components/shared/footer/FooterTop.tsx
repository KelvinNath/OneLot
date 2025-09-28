// components/shared/footer/FooterTop.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Flag } from 'lucide-react';
import { navigationLinks } from './footer-data';

export default function FooterTop() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-3 mb-4 lg:mb-6">
        <Image
          src="/assets/header/logo.webp"
          alt="OneLot Logo"
          width={130}
          height={32}
          className="w-32 h-12"
        />
      </div>

      {/* Right Side - Navigation and Language */}
      <div className="flex flex-col space-y-4">
        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="flex lg:justify-end">
          <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 flex-right">
            <span>ENG</span>
            <div className="w-4 h-3 bg-gray-200 rounded-sm flex items-center justify-center">
              <Flag className="w-3 h-3 text-gray-600" />
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}