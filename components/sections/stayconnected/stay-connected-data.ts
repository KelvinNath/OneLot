// components/sections/stayConnected/stay-connected-data.ts
export interface SocialMediaLink {
    id: string;
    platform: string;
    text: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
  }
  
  export interface CarPost {
    id: string;
    image: string;
    title: string;
    description: string;
    url: string;
    date: string;
    likes: number;
    comments: number;
    shares: number;
  }
  
  export const stayConnectedData = {
    title: "Stay connected",
    description: "Follow OneLot on our Facebook and Instagram page and stay up to date with our most recent recent offers, updates and new product features",
    socialMedia: [
      {
        id: 'facebook',
        platform: 'Facebook',
        text: 'Follow us on Facebook',
        icon: 'FacebookIcon', // We'll use a custom icon
        href: '#'
      },
      {
        id: 'instagram',
        platform: 'Instagram', 
        text: 'Follow us on Instagram',
        icon: 'InstagramIcon', // We'll use a custom icon
        href: '#'
      }
    ],
    carPosts: [
      {
        id: 'car1',
        image: '/assets/StayConnected/car1.webp',
        title: 'Efficiency never looked so good - introducing the fuel-efficient',
        description: 'Sign-up OneLot\'s dealer platform today, and your cars easier',
        url: 'https://one-lot.com/',
        date: 'October 31',
        likes: 177,
        comments: 42,
        shares: 5
      },
      {
        id: 'car2',
        image: '/assets/StayConnected/car2.webp',
        title: 'Luxury meets performance in the exquisite',
        description: 'Sign-up OneLot\'s dealer platform today, and your cars easier',
        url: 'https://one-lot.com/',
        date: 'October 30',
        likes: 177,
        comments: 42,
        shares: 5
      },
      {
        id: 'car3',
        image: '/assets/StayConnected/car3.webp',
        title: 'Rev up your dreams with our stunning lineup',
        description: 'Sign-up OneLot\'s dealer platform today, and your cars easier',
        url: 'https://one-lot.com/',
        date: 'October 29',
        likes: 177,
        comments: 42,
        shares: 5
      }
    ]
  };