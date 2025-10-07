import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import GiftCard from "@/components/GiftCard";
import AboutSection from "@/components/AboutSection";
import OrderForm, { OrderFormData } from "@/components/OrderForm";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

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
  const [selectedGift, setSelectedGift] = useState("");
  const { toast } = useToast();

  const orderMutation = useMutation({
    mutationFn: async (data: OrderFormData) => {
      const res = await apiRequest("POST", "/api/orders", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Order Received!",
        description: "Thank you for your order. We'll process it shortly and deliver it with care.",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    onError: (error: any) => {
      toast({
        title: "Order Failed",
        description: error.message || "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSendGift = (giftId: string) => {
    setSelectedGift(giftId);
    const formSection = document.getElementById("order-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderSubmit = (data: OrderFormData) => {
    orderMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <section id="gifts-section" className="py-24 md:py-32">
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
            <OrderForm onSubmit={handleOrderSubmit} isLoading={orderMutation.isPending} />
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-border bg-accent/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">QE</h3>
            <p className="text-sm text-muted-foreground italic mb-6">
              "Connecting hearts beyond borders"
            </p>
          </div>
          
          <div className="text-center space-y-2 text-sm text-muted-foreground mb-8">
            <p>Privacy Officer: 이가언</p>
            <p>Address: 성북구 정릉로 77 국민대학교 경영관</p>
          </div>
          
          <div className="text-center pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2025 QE - Q's Embrace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
