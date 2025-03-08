import { User, InsertUser, Team, Match, TEAMS } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getTeams(): Promise<Team[]>;
  getMatches(): Promise<Match[]>;
  addMatch(match: Omit<Match, "id">): Promise<Match>;
  sessionStore: ReturnType<typeof MemoryStore>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private teams: Map<number, Team>;
  private matches: Map<number, Match>;
  public sessionStore: ReturnType<typeof MemoryStore>;
  private currentId: number;
  private currentMatchId: number;

  constructor() {
    this.users = new Map();
    this.teams = new Map();
    this.matches = new Map();
    this.currentId = 1;
    this.currentMatchId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });

    // Initialize teams
    TEAMS.forEach((name, index) => {
      this.teams.set(index + 1, { id: index + 1, name });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    // Make the first user an admin
    const isAdmin = this.users.size === 0;
    const user: User = { ...insertUser, id, isAdmin };
    this.users.set(id, user);
    return user;
  }

  async getTeams(): Promise<Team[]> {
    return Array.from(this.teams.values());
  }

  async getMatches(): Promise<Match[]> {
    return Array.from(this.matches.values());
  }

  async addMatch(match: Omit<Match, "id">): Promise<Match> {
    const id = this.currentMatchId++;
    const newMatch = { ...match, id };
    this.matches.set(id, newMatch);
    return newMatch;
  }
}

export const storage = new MemStorage();