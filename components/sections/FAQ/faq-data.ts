// components/sections/FAQ/faq-data.ts
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
}

export const faqData = {
  title: 'Frequently asked questions',
  items: [
    {
      id: 'loan-application',
      question: 'How do I apply for a loan?',
      answer:
        'OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan. Check here for the exact requirements',
      linkText: 'See full requirements.',
      linkUrl: '#',
    },
    {
      id: 'interest-rates',
      question: 'What are the interest rates offered?',
      answer:
        'Our interest rates are competitive and tailored to your specific needs. Rates vary based on loan amount, term length, and your credit profile. Contact our team for personalized rates.',
    },
    {
      id: 'vehicle-types',
      question: 'What kind of vehicles can I upload?',
      answer:
        'You can upload various types of vehicles including cars, trucks, motorcycles, and commercial vehicles. All vehicles must be legally owned and meet our eligibility criteria.',
    },
    {
      id: 'buyer-tracking',
      question: 'How can I keep track of potential buyers?',
      answer:
        'Our platform provides a comprehensive buyer management system where you can track inquiries, schedule viewings, manage communications, and monitor the sales process all in one place.',
    },
  ],
  seeAllButton: {
    text: 'See all',
    url: '#',
  },
};
