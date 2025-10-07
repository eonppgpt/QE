import { useState } from "react";
import Hero from "@/components/Hero";
import GiftCard from "@/components/GiftCard";
import AboutSection from "@/components/AboutSection";
import OrderForm, { OrderFormData } from "@/components/OrderForm";
import { useToast } from "@/hooks/use-toast";

import originalSet from "@assets/QE ORIGINAL SET_1759850209760.jpg";
import luxuryEdition from "@assets/LUXURY EDITION_1759850205169.jpg";
import winePackage from "@assets/WINE & ROSE PACKAGE_1759850213261.jpg";
import brandImage2 from "@assets/브랜드이미지컷2_1759850222413.jpg";

const giftSets = [
  {
    id: "original",
    name: "QE ORIGINAL SET",
    subtitle: "Premium",
    description: "Large flower bouquet, chocolate, diffuser",
    price: "₩170,000",
    image: originalSet,
  },
  {
    id: "luxury",
    name: "LUXURY EDITION",
    subtitle: "For your hardworking self",
    description: "Charcoal robe, candle, tea, body scrub",
    price: "₩220,000",
    image: luxuryEdition,
  },
  {
    id: "wine",
    name: "WINE & ROSE PACKAGE",
    subtitle: "Romantic Set",
    description: "Wine, chocolate, premium rose bouquet, handwritten letter",
    price: "₩200,000",
    image: winePackage,
  },
  {
    id: "roses",
    name: "100 ROSES BOUQUET",
    subtitle: "",
    description: "Stunning bouquet of 100 premium roses",
    price: "₩500,000",
    image: brandImage2,
  },
];

export default function Home() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedGift, setSelectedGift] = useState("");
  const { toast } = useToast();

  const handleSendGift = (giftId: string) => {
    setSelectedGift(giftId);
    setShowOrderForm(true);
    const formSection = document.getElementById("order-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderSubmit = (data: OrderFormData) => {
    console.log("Order submitted:", data);
    toast({
      title: "Order Received!",
      description: "Thank you for your order. We'll process it shortly.",
    });
    setShowOrderForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 
            className="font-serif text-3xl md:text-5xl font-light text-center mb-16"
            data-testid="text-gifts-title"
          >
            Our Gift Collections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {giftSets.map((gift) => (
              <GiftCard
                key={gift.id}
                {...gift}
                onSendGift={() => handleSendGift(gift.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <section id="order-form" className="py-24 md:py-32 bg-accent/20">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 
            className="font-serif text-3xl md:text-5xl font-light text-center mb-4"
            data-testid="text-order-title"
          >
            Send Your Gift
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Complete the form below to send love across borders
          </p>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md">
            <OrderForm onSubmit={handleOrderSubmit} />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 QE - Q's Embrace. Connecting hearts beyond borders.
          </p>
        </div>
      </footer>
    </div>
  );
}
