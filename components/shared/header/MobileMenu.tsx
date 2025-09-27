// components/shared/MobileMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../../ui/Button';

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', isActive: true },
  { href: '/products', label: 'Products', hasDropdown: true },
  { href: '/about', label: 'About', hasDropdown: true },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        aria-label="Open mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-transparent bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div 
            className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Content */}
            <nav className="p-6">
              <div className="space-y-4">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-base py-3 px-3 transition-colors duration-200 ${
                      item.isActive ? 'text-purple-600' : 'text-gray-900 hover:text-purple-600'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                ))}
                
                {/* Mobile Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <Link 
                    href="/login" 
                    className="block text-base text-gray-700 hover:text-gray-900 py-2 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Log In
                  </Link>
                  <Button text="Inquire now" className="w-full" />
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}