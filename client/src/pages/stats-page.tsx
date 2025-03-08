import { useQuery } from "@tanstack/react-query";
import { Match, Team } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TeamStats = {
  teamId: number;
  teamName: string;
  matchesPlayed: number;
  goalsScored: number;
  goalsConceded: number;
  cleanSheets: number;
  failedToScore: number;
  avgGoalsScored: number;
  avgGoalsConceded: number;
};

function calculateTeamStats(teams: Team[], matches: Match[]): TeamStats[] {
  const stats = new Map<number, TeamStats>();

  // Initialize stats
  teams.forEach((team) => {
    stats.set(team.id, {
      teamId: team.id,
      teamName: team.name,
      matchesPlayed: 0,
      goalsScored: 0,
      goalsConceded: 0,
      cleanSheets: 0,
      failedToScore: 0,
      avgGoalsScored: 0,
      avgGoalsConceded: 0,
    });
  });

  // Calculate stats
  matches.forEach((match) => {
    const homeStats = stats.get(match.homeTeamId)!;
    const awayStats = stats.get(match.awayTeamId)!;

    // Update home team stats
    homeStats.matchesPlayed++;
    homeStats.goalsScored += match.homeScore;
    homeStats.goalsConceded += match.awayScore;
    if (match.awayScore === 0) homeStats.cleanSheets++;
    if (match.homeScore === 0) homeStats.failedToScore++;

    // Update away team stats
    awayStats.matchesPlayed++;
    awayStats.goalsScored += match.awayScore;
    awayStats.goalsConceded += match.homeScore;
    if (match.homeScore === 0) awayStats.cleanSheets++;
    if (match.awayScore === 0) awayStats.failedToScore++;
  });

  // Calculate averages
  stats.forEach((teamStats) => {
    if (teamStats.matchesPlayed > 0) {
      teamStats.avgGoalsScored =
        teamStats.goalsScored / teamStats.matchesPlayed;
      teamStats.avgGoalsConceded =
        teamStats.goalsConceded / teamStats.matchesPlayed;
    }
  });

  return Array.from(stats.values()).sort(
    (a, b) => b.avgGoalsScored - a.avgGoalsScored
  );
}

export default function StatsPage() {
  const { data: matches } = useQuery<Match[]>({ queryKey: ["/api/matches"] });
  const { data: teams } = useQuery<Team[]>({ queryKey: ["/api/teams"] });

  if (!matches || !teams) return null;

  const teamStats = calculateTeamStats(teams, matches);

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Team Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead>Played</TableHead>
                <TableHead>Goals Scored</TableHead>
                <TableHead>Goals Conceded</TableHead>
                <TableHead>Clean Sheets</TableHead>
                <TableHead>Failed to Score</TableHead>
                <TableHead>Avg Goals Scored</TableHead>
                <TableHead>Avg Goals Conceded</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamStats.map((stats) => (
                <TableRow key={stats.teamId}>
                  <TableCell>{stats.teamName}</TableCell>
                  <TableCell>{stats.matchesPlayed}</TableCell>
                  <TableCell>{stats.goalsScored}</TableCell>
                  <TableCell>{stats.goalsConceded}</TableCell>
                  <TableCell>{stats.cleanSheets}</TableCell>
                  <TableCell>{stats.failedToScore}</TableCell>
                  <TableCell>{stats.avgGoalsScored.toFixed(2)}</TableCell>
                  <TableCell>{stats.avgGoalsConceded.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
