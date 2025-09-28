// lib/feature/feature-data.ts
import { DollarSign, Megaphone } from 'lucide-react';

export interface FeatureCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight: string;
  description: string;
  iconColor: string;
  highlightColor: string;
}

export const featureCards: FeatureCard[] = [
  {
    id: 'dealer-loans',
    icon: DollarSign,
    title: 'Dealer Loans',
    highlight: 'Accelerate your growth with tailored loan solutions',
    description:
      'Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights.',
    iconColor: 'bg-[#D5EEF0] text-[#6BCDD7]',
    highlightColor: 'text-[#6BCDD7]',
  },
  {
    id: 'dealership-management',
    icon: Megaphone,
    title: 'Dealership Management System',
    highlight:
      'Enhance Efficiency and Sales with free digital tools for car dealerships',
    description:
      "OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.",
    iconColor: 'bg-purple-100 text-purple-600',
    highlightColor: 'text-purple-600',
  },
];
