// components/shared/footer/FooterBottom.tsx
import { socialMediaLinks } from './footer-data';

export default function FooterBottom() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
      {/* Left Side - Copyright */}
      <div className="space-y-4 text-sm text-gray-500 mb-4 lg:mb-0">
        <p>© 2023 OneLot Technologies Incorporated Pte. Ltd. All rights reserved.</p>
        <p>© 2023 OneLot Financing Corporation All rights reserved.</p>
      </div>

      {/* Right Side - Social Media Icons */}
      <div className="flex items-center space-x-4">
        {socialMediaLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center "
              aria-label={`Follow us on ${social.name}`}
            >
              <IconComponent className="w-6 h-6 text-black" />
            </a>
          );
        })}
      </div>
    </div>
  );
}