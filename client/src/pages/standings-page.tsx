import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Match, Team } from "@shared/schema";

type TeamStats = {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
};

function calculateStandings(teams: Team[], matches: Match[]): TeamStats[] {
  const standings = new Map<number, TeamStats>();

  // Initialize standings
  teams.forEach((team) => {
    standings.set(team.id, {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    });
  });

  // Calculate stats from matches
  matches.forEach((match) => {
    const homeStats = standings.get(match.homeTeamId)!;
    const awayStats = standings.get(match.awayTeamId)!;

    // Update matches played
    homeStats.played++;
    awayStats.played++;

    // Update goals
    homeStats.goalsFor += match.homeScore;
    homeStats.goalsAgainst += match.awayScore;
    awayStats.goalsFor += match.awayScore;
    awayStats.goalsAgainst += match.homeScore;

    // Update results
    if (match.homeScore > match.awayScore) {
      homeStats.won++;
      awayStats.lost++;
      homeStats.points += 3;
    } else if (match.homeScore < match.awayScore) {
      homeStats.lost++;
      awayStats.won++;
      awayStats.points += 3;
    } else {
      homeStats.drawn++;
      awayStats.drawn++;
      homeStats.points++;
      awayStats.points++;
    }

    // Update goal difference
    homeStats.goalDifference = homeStats.goalsFor - homeStats.goalsAgainst;
    awayStats.goalDifference = awayStats.goalsFor - awayStats.goalsAgainst;
  });

  return Array.from(standings.values()).sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference)
      return b.goalDifference - a.goalDifference;
    return b.goalsFor - a.goalsFor;
  });
}

export default function StandingsPage() {
  const { data: teams } = useQuery<Team[]>({ queryKey: ["/api/teams"] });
  const { data: matches } = useQuery<Match[]>({ queryKey: ["/api/matches"] });

  if (!teams || !matches) return null;

  const standings = calculateStandings(teams, matches);

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>League Standings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>P</TableHead>
                <TableHead>W</TableHead>
                <TableHead>D</TableHead>
                <TableHead>L</TableHead>
                <TableHead>GF</TableHead>
                <TableHead>GA</TableHead>
                <TableHead>GD</TableHead>
                <TableHead>Pts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.map((stats, index) => (
                <TableRow key={stats.team.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{stats.team.name}</TableCell>
                  <TableCell>{stats.played}</TableCell>
                  <TableCell>{stats.won}</TableCell>
                  <TableCell>{stats.drawn}</TableCell>
                  <TableCell>{stats.lost}</TableCell>
                  <TableCell>{stats.goalsFor}</TableCell>
                  <TableCell>{stats.goalsAgainst}</TableCell>
                  <TableCell>{stats.goalDifference}</TableCell>
                  <TableCell className="font-bold">{stats.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
