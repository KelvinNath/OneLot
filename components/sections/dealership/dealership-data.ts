// components/sections/dealership/dealership-data.ts
export interface DealershipFeature {
    id: string;
    title: string;
    description: string;
  }
  
  export const dealershipData = {
    title: "Dealership Management System",
    description: "OneLot's digital platform has been built with the single goal to help used car dealers to operate their business more efficiently.",
    features: [
      {
        id: 'inventory-management',
        title: 'Inventory Management',
        description: 'Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place'
      },
      {
        id: 'marketing-tools',
        title: 'Marketing Tools',
        description: 'Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages and Instagram with a single click of a button'
      },
      {
        id: 'market-insights',
        title: 'Market Insights (Coming Soon)',
        description: 'Get insights on prices and volumes for all cars in the market. We provide you all the data by combining data from various sources with a single click of a button'
      }
    ],
    ctaText: 'Sign-up OneLot\'s dealer platform today, and sell your cars easier.',
    buttonText: 'Explore now'
  };