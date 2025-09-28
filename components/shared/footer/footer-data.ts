// components/shared/footer/footer-data.ts
import { Instagram, Facebook } from 'lucide-react';

export interface NavigationLink {
  name: string;
  href: string;
}

export interface SocialMediaLink {
  name: string;
  href: string;
  icon: any;
}

export const navigationLinks: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/onelot',
    icon: Instagram
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/onelot',
    icon: Facebook
  }
];