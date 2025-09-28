// components/sections/FAQ/FAQ.tsx
import { faqData } from './faq-data';
import FAQItem from './FAQItem';
import Button from '../../ui/Button';

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          {faqData.title}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.items.map((item, index) => (
            <FAQItem 
              key={item.id} 
              item={item} 
              isLast={index === faqData.items.length - 1} 
            />
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Button 
            text={faqData.seeAllButton.text}
            showArrow={true}
            className="px-6 py-3"
          />
        </div>
      </div>
    </section>
  );
}