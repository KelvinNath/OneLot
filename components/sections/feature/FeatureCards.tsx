// components/sections/feature/FeatureCards.tsx
import { featureCards } from '../feature/feature-data';
import FeatureCard from '../../sections/feature/FeatureCard';

export default function FeatureCards() {
  return (
    <div>
      {featureCards.map(card => (
        <FeatureCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          highlight={card.highlight}
          description={card.description}
          iconColor={card.iconColor}
          highlightColor={card.highlightColor}
        />
      ))}
    </div>
  );
}
