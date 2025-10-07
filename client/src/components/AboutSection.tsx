import brandImage2 from "@assets/브랜드이미지컷2_1759850222413.jpg";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="font-serif text-3xl md:text-5xl font-light mb-6"
              data-testid="text-about-title"
            >
              About QE
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              QE connects hearts beyond borders. Even from afar, we help you share love and warmth under the same sky.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              Every gift tells a story of connection, care, and thoughtfulness. 
              We curate premium gift sets that express your feelings perfectly, 
              delivering them with exceptional care to your loved ones in Korea.
            </p>
          </div>
          <div className="relative">
            <img 
              src={brandImage2} 
              alt="QE Brand" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
