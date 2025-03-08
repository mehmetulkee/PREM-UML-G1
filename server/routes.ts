import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { insertMatchSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  app.get("/api/teams", async (_req, res) => {
    const teams = await storage.getTeams();
    res.json(teams);
  });

  app.get("/api/matches", async (_req, res) => {
    const matches = await storage.getMatches();
    res.json(matches);
  });

  app.post("/api/matches", async (req, res) => {
    if (!req.isAuthenticated() || !req.user?.isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    try {
      const matchData = insertMatchSchema.parse(req.body);
      const match = await storage.addMatch(matchData);
      res.status(201).json(match);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid match data" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
