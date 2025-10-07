import brandImage from "@assets/브랜드이미지컷_1759850218887.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${brandImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/90" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center py-20">
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6"
          data-testid="text-hero-title"
        >
          Even from afar, your heart can reach them.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Send your love across borders with our curated gift sets, 
          delivered with care to your special someone in Korea.
        </p>
      </div>
    </section>
  );
}
