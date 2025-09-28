// components/sections/stayConnected/StayConnected.tsx
import SocialMediaButton from './SocialMediaIcons';
import Carousel from './carousel';
import { stayConnectedData } from './stay-connected-data';

export default function StayConnected() {
  return (
    <section className='py-16 bg-white'>
      <div>
        {/* Header Section */}
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-6'>
              {stayConnectedData.title}
            </h2>
            <p className='text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-8'>
              {stayConnectedData.description}
            </p>

            {/* Social Media Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {stayConnectedData.socialMedia.map(social => (
                <SocialMediaButton
                  key={social.id}
                  platform={social.platform}
                  text={social.text}
                  href={social.href}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Carousel */}
        <Carousel items={stayConnectedData.carPosts} />
      </div>
    </section>
  );
}
