import { useState } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { useToast } from "@/hooks/use-toast";

const mockOrders = [
  {
    id: "order-demo-001",
    senderName: "Emily Wilson",
    senderCountry: "United Kingdom",
    receiverName: "이지은",
    receiverAddress: "서울특별시 종로구 세종대로 209",
    receiverPhone: "+82-10-1111-2222",
    messageCard: "Thinking of you always. Hope this brightens your day!",
    giftSelection: "original",
    paymentMethod: "card",
    createdAt: "2025-01-07T14:20:00Z"
  },
  {
    id: "order-demo-002",
    senderName: "Michael Chen",
    senderCountry: "Singapore",
    receiverName: "최수영",
    receiverAddress: "인천광역시 연수구 송도국제대로 123",
    receiverPhone: "+82-10-3333-4444",
    messageCard: "For all your hard work and dedication. You deserve the best!",
    giftSelection: "luxury",
    paymentMethod: "paypal",
    createdAt: "2025-01-06T09:15:00Z"
  },
];

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const handleLogin = (username: string, password: string) => {
    if (username === "eonpp" && password === "moonchild12!") {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard orders={mockOrders} onLogout={handleLogout} />;
}
