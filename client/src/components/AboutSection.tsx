import { Heart, Package, Globe } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Heartfelt Service",
      description: "Every gift is carefully curated and delivered with love"
    },
    {
      icon: Package,
      title: "Premium Quality",
      description: "Only the finest products for your special someone"
    },
    {
      icon: Globe,
      title: "Worldwide Reach",
      description: "Send gifts from anywhere to Korea with ease"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Globe className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <h2 
            className="font-serif text-3xl md:text-5xl font-light mb-6"
            data-testid="text-about-title"
          >
            About QE
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            "QE connects hearts beyond borders. Even from afar, we help you share love and warmth under the same sky."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
