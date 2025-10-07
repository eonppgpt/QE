import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToGifts = () => {
    const giftsSection = document.getElementById('gifts-section');
    giftsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center py-20">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-primary/10 rounded-full">
            <Heart className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4"
          data-testid="text-hero-title"
        >
          Even from afar,<br />
          <span className="text-primary">your heart can reach them.</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Send meaningful gifts to your loved ones in Korea, no matter where you are in the world.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToGifts}
          className="rounded-full px-8"
          data-testid="button-explore-gifts"
        >
          Explore Our Gifts
        </Button>
      </div>
    </section>
  );
}
