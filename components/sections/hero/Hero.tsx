import HeroContent from './HeroContent';
import HeroImages from './HeroImages';
import HeroLayers from './HeroLayers';

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Background Layers */}
      <HeroLayers />
      
      {/* Content Section  */}
      <div className="relative z-10">
        <HeroContent />
      </div>
      
      {/* Images Section */}
      <div className="relative z-20">
        <HeroImages />
      </div>
      
     
    </section>
  );
}