// components/sections/testimonials/testimonials-data.ts
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonialsData = {
  title: 'Testimonials',
  testimonials: [
    {
      id: 'mark-vergel',
      name: 'Mark Vergel de Dios',
      position: 'Owner',
      company: 'MVD Auto Works',
      quote:
        'The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.',
      avatar: '/assets/Testimonials/avatar1.webp',
    },
    // Add more testimonials as needed
  ],
};
