import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void;
  isLoading?: boolean;
}

export interface OrderFormData {
  senderName: string;
  senderCountry: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhone: string;
  messageCard: string;
  giftSelection: string;
  paymentMethod: string;
}

const giftOptions = [
  { value: "original", label: "QE ORIGINAL SET (Premium) - ₩170,000" },
  { value: "luxury", label: "LUXURY EDITION - For your hardworking self - ₩220,000" },
  { value: "wine", label: "WINE & ROSE PACKAGE (Romantic Set) - ₩200,000" },
  { value: "roses", label: "100 ROSES BOUQUET - ₩500,000" },
];

const paymentOptions = [
  { value: "card", label: "Credit Card" },
  { value: "paypal", label: "PayPal" },
  { value: "bank", label: "Bank Transfer" },
];

export default function OrderForm({ onSubmit, isLoading = false }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    senderName: "",
    senderCountry: "",
    receiverName: "",
    receiverAddress: "",
    receiverPhone: "",
    messageCard: "",
    giftSelection: "",
    paymentMethod: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Sender Information</h3>
        
        <div className="space-y-2">
          <Label htmlFor="senderName">Sender Name</Label>
          <Input
            id="senderName"
            value={formData.senderName}
            onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
            required
            data-testid="input-sender-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="senderCountry">Sender Country</Label>
          <Input
            id="senderCountry"
            value={formData.senderCountry}
            onChange={(e) => setFormData({ ...formData, senderCountry: e.target.value })}
            required
            data-testid="input-sender-country"
          />
        </div>
      </div>

      <div className="border-t border-border pt-8 space-y-6">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Receiver Information</h3>
        
        <div className="space-y-2">
          <Label htmlFor="receiverName">Receiver Name</Label>
          <Input
            id="receiverName"
            value={formData.receiverName}
            onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
            required
            data-testid="input-receiver-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="receiverAddress">Receiver Address (Korea)</Label>
          <Input
            id="receiverAddress"
            value={formData.receiverAddress}
            onChange={(e) => setFormData({ ...formData, receiverAddress: e.target.value })}
            required
            data-testid="input-receiver-address"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="receiverPhone">Receiver Phone</Label>
          <Input
            id="receiverPhone"
            type="tel"
            value={formData.receiverPhone}
            onChange={(e) => setFormData({ ...formData, receiverPhone: e.target.value })}
            required
            data-testid="input-receiver-phone"
          />
        </div>
      </div>

      <div className="border-t border-border pt-8 space-y-6">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Gift Details</h3>
        
        <div className="space-y-2">
          <Label htmlFor="messageCard">Message Card Content</Label>
          <Textarea
            id="messageCard"
            value={formData.messageCard}
            onChange={(e) => setFormData({ ...formData, messageCard: e.target.value })}
            rows={4}
            required
            data-testid="input-message-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="giftSelection">Gift Selection</Label>
          <Select 
            value={formData.giftSelection}
            onValueChange={(value) => setFormData({ ...formData, giftSelection: value })}
            required
          >
            <SelectTrigger id="giftSelection" data-testid="select-gift">
              <SelectValue placeholder="Select a gift set" />
            </SelectTrigger>
            <SelectContent>
              {giftOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <Select 
            value={formData.paymentMethod}
            onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
            required
          >
            <SelectTrigger id="paymentMethod" data-testid="select-payment">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              {paymentOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full rounded-full"
        disabled={isLoading}
        data-testid="button-submit-order"
      >
        {isLoading ? "Processing..." : "Complete Order"}
      </Button>
    </form>
  );
}
