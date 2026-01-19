import { type User, type InsertUser, type DemoBooking, type InsertDemoBooking } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoBooking(booking: InsertDemoBooking): Promise<DemoBooking>;
  getDemoBooking(id: string): Promise<DemoBooking | undefined>;
  getAllDemoBookings(): Promise<DemoBooking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private demoBookings: Map<string, DemoBooking>;

  constructor() {
    this.users = new Map();
    this.demoBookings = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoBooking(booking: InsertDemoBooking): Promise<DemoBooking> {
    const id = randomUUID();
    const demoBooking: DemoBooking = {
      ...booking,
      id,
      createdAt: new Date(),
    };
    this.demoBookings.set(id, demoBooking);
    return demoBooking;
  }

  async getDemoBooking(id: string): Promise<DemoBooking | undefined> {
    return this.demoBookings.get(id);
  }

  async getAllDemoBookings(): Promise<DemoBooking[]> {
    return Array.from(this.demoBookings.values());
  }
}

export const storage = new MemStorage();
