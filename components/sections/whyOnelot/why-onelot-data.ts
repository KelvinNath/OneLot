// components/sections/whyOnelot/why-onelot-data.ts
import { Shield, TrendingUp, Zap, Truck, ThumbsUp } from 'lucide-react';

export interface WhyOnelotCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const whyOnelotData = {
  title: "Why OneLot?",
  cards: [
    {
      id: 'trust',
      icon: Shield,
      title: 'Trust',
      description: 'Regulated by Securities and Exchange Commission (SEC) Philippines'
    },
    {
      id: 'high-amount',
      icon: TrendingUp,
      title: 'High Amount',
      description: 'Get the highest loan amounts compared to other banks and lenders'
    },
    {
      id: 'fast',
      icon: Zap,
      title: 'Fast',
      description: 'Get the money within a few hours on the same day'
    },
    {
      id: 'flexible',
      icon: Truck,
      title: 'Flexible',
      description: 'Loans are tailored to your needs'
    },
    {
      id: 'easy',
      icon: ThumbsUp,
      title: 'Easy',
      description: 'Run through an easy process and get your first loans within days'
    }
  ]
};