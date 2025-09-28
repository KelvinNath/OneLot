// components/shared/footer/Footer.tsx
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <FooterTop />
        
        {/* Divider Line */}
        <div className="border-t border-gray-200 mb-8"></div>
        
        <FooterBottom />
      </div>
    </footer>
  );
}