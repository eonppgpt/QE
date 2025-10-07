import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Order } from "@shared/schema";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const { toast } = useToast();

  // Check session status on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/admin/status");
        const data = await res.json();
        if (data.isAdmin) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Session check failed:", error);
      } finally {
        setIsCheckingSession(false);
      }
    };
    checkSession();
  }, []);

  const { data: orders = [], isLoading, refetch } = useQuery<Order[]>({
    queryKey: ["/api/orders"],
    enabled: isLoggedIn,
  });

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: { username: string; password: string }) => {
      const res = await apiRequest("POST", "/api/admin/login", { username, password });
      return await res.json();
    },
    onSuccess: () => {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
      refetch();
    },
    onError: () => {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/admin/logout", {});
      return await res.json();
    },
    onSuccess: () => {
      setIsLoggedIn(false);
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully",
      });
    },
  });

  const handleLogin = (username: string, password: string) => {
    loginMutation.mutate({ username, password });
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} isLoading={loginMutation.isPending} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading orders...</p>
        </div>
      </div>
    );
  }

  return <AdminDashboard orders={orders} onLogout={handleLogout} />;
}
