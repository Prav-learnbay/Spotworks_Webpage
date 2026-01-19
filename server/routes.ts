import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoBookingSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Demo booking routes
  app.post("/api/demo-booking", async (req, res) => {
    try {
      const validatedData = insertDemoBookingSchema.parse(req.body);
      const booking = await storage.createDemoBooking(validatedData);
      res.status(201).json({ success: true, booking });
    } catch (error) {
      console.error("Error creating demo booking:", error);
      if (error instanceof Error) {
        res.status(400).json({ success: false, error: error.message });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  app.get("/api/demo-booking", async (req, res) => {
    try {
      const bookings = await storage.getAllDemoBookings();
      res.json({ success: true, bookings });
    } catch (error) {
      console.error("Error fetching demo bookings:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  app.get("/api/demo-booking/:id", async (req, res) => {
    try {
      const booking = await storage.getDemoBooking(req.params.id);
      if (!booking) {
        res.status(404).json({ success: false, error: "Booking not found" });
        return;
      }
      res.json({ success: true, booking });
    } catch (error) {
      console.error("Error fetching demo booking:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  return httpServer;
}
