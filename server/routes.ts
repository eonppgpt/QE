import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema } from "@shared/schema";

const ADMIN_USERNAME = "eonpp";
const ADMIN_PASSWORD = "moonchild12!";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin login endpoint
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Regenerate session to prevent session fixation
        req.session?.regenerate((err) => {
          if (err) {
            console.error("Session regeneration error:", err);
            return res.status(500).json({ error: "Login failed" });
          }
          if (req.session) {
            req.session.isAdmin = true;
          }
          res.json({ success: true, message: "Login successful" });
        });
      } else {
        res.status(401).json({ success: false, error: "Invalid credentials" });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Admin logout endpoint
  app.post("/api/admin/logout", async (req, res) => {
    // Properly destroy session on logout
    req.session?.destroy((err) => {
      if (err) {
        console.error("Session destruction error:", err);
        return res.status(500).json({ error: "Logout failed" });
      }
      res.json({ success: true, message: "Logged out" });
    });
  });

  // Check admin status
  app.get("/api/admin/status", async (req, res) => {
    res.json({ isAdmin: req.session?.isAdmin || false });
  });

  // Middleware to check admin authentication
  const requireAdmin = (req: any, res: any, next: any) => {
    if (req.session?.isAdmin) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  };

  // Order submission endpoint (public)
  app.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);
      res.json(order);
    } catch (error: any) {
      console.error("Order creation error:", error);
      res.status(400).json({ error: error.message || "Failed to create order" });
    }
  });

  // Get all orders endpoint (admin only)
  app.get("/api/orders", requireAdmin, async (req, res) => {
    try {
      const orders = await storage.getAllOrders();
      res.json(orders);
    } catch (error: any) {
      console.error("Get orders error:", error);
      res.status(500).json({ error: "Failed to retrieve orders" });
    }
  });

  // Get single order endpoint (admin only)
  app.get("/api/orders/:id", requireAdmin, async (req, res) => {
    try {
      const order = await storage.getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error: any) {
      console.error("Get order error:", error);
      res.status(500).json({ error: "Failed to retrieve order" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
