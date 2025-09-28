// components/sections/stayConnected/SocialMediaButton.tsx
import { memo } from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface SocialMediaButtonProps {
  platform: string;
  text: string;
  href: string;
}

// Pre-computed styles 
const BUTTON_STYLES = [
  'flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-gray-300',
  ' transition-all duration-200 hover:bg-[#f5f5f5]',
  'text-gray-700 font-medium'
].join(' ');

const SocialMediaButton = memo(function SocialMediaButton({
  platform,
  text,
  href
}: SocialMediaButtonProps) {
  const renderIcon = () => {
    if (platform === 'Facebook') {
      return (
        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
          <Facebook className="w-5 h-5 text-gray-700" />
        </div>
      );
    }
    if (platform === 'Instagram') {
      return (
        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
          <Instagram className="w-5 h-5 text-gray-700" />
        </div>
      );
    }
    return null;
  };

  return (
    <a
      href={href}
      className={BUTTON_STYLES}
      target="_blank"
      rel="noopener noreferrer"
    >
      {renderIcon()}
      <span>{text}</span>
    </a>
  );
});

export default SocialMediaButton;