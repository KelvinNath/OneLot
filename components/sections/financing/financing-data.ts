// components/sections/financing/financing-data.ts
export interface FinancingBenefit {
  id: string;
  text: string;
}

export const financingData = {
  title: 'Car Financing',
  subtitle: 'Dealer Loans',
  description:
    "OneLot's working capital loans allows car dealer to buy more cars and capitalize on car purchase opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.",
  benefits: [
    {
      id: 'interest-rate',
      text: 'Interest as low as 1.5% per month with daily calculation of interest',
    },
    {
      id: 'financing-amount',
      text: 'Financing up to 70% of the vehicle purchase',
    },
    {
      id: 'financing-period',
      text: 'Financing period up to 90 days with flexible repayment schedule at any point',
    },
  ],
  ctaText:
    "Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits.",
  buttonText: 'View Loans',
};
