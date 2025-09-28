// components/sections/whyOnelot/WhyOnelotCards.tsx
import Card from '../../ui/Card';
import { whyOnelotData } from './why-onelot-data';

export default function WhyOnelotCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {whyOnelotData.cards.map((card) => (
        <Card
          key={card.id}
          icon={<card.icon className="w-6 h-6 text-purple-600" />}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}