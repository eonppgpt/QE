import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GiftCardProps {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: string;
  image: string;
  onSendGift: () => void;
}

export default function GiftCard({ id, name, subtitle, description, price, image, onSendGift }: GiftCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1"
      data-testid={`card-gift-${id}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl font-normal mb-2" data-testid={`text-gift-name-${id}`}>
          {name}
        </h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
        )}
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-medium text-primary" data-testid={`text-price-${id}`}>
            {price}
          </span>
          <Button 
            variant="default"
            size="lg"
            onClick={onSendGift}
            data-testid={`button-send-gift-${id}`}
            className="rounded-full"
          >
            Send Gift
          </Button>
        </div>
      </div>
    </Card>
  );
}
