import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
});

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  homeTeamId: integer("home_team_id").notNull(),
  awayTeamId: integer("away_team_id").notNull(),
  homeScore: integer("home_score").notNull(),
  awayScore: integer("away_score").notNull(),
  playedAt: timestamp("played_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users, {
  username: z.string().min(1, "Kullanıcı adı gerekli"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı"),
}).omit({ id: true, isAdmin: true });

export const insertMatchSchema = createInsertSchema(matches);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Team = typeof teams.$inferSelect;
export type Match = typeof matches.$inferSelect;

export const TEAMS = [
  "Real Madrid", "PSG", "Roma", "Inter", "Dortmund",
  "Ajax", "PSV", "Arsenal", "Napoli", "Atalanta",
  "Feyenoord", "Milan", "Liverpool", "Bayern Munich", "Konyaspor",
  "Manchester City", "Leverkusen", "Juventus", "Manchester United", "Newcastle United"
];