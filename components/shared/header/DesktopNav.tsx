// components/shared/header/DesktopNav.tsx
import Link from 'next/link';

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

export default function DesktopNav() {
  return (
    <nav className='hidden lg:flex lg:items-center'>
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
            item.isActive
              ? 'text-purple-600'
              : 'text-gray-900 hover:text-purple-600'
          }`}
        >
          {item.label}
          {item.hasDropdown && (
            <svg
              className='inline-block w-3 h-3 ml-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </Link>
      ))}
    </nav>
  );
}
