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
import { format } from "date-fns";

export default function MatchesPage() {
  const { data: matches } = useQuery<Match[]>({ queryKey: ["/api/matches"] });
  const { data: teams } = useQuery<Team[]>({ queryKey: ["/api/teams"] });

  if (!matches || !teams) return null;

  const teamMap = new Map(teams.map((team) => [team.id, team]));

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Match Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Home Team</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Away Team</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matches
                .sort(
                  (a, b) =>
                    new Date(b.playedAt).getTime() -
                    new Date(a.playedAt).getTime()
                )
                .map((match) => (
                  <TableRow key={match.id}>
                    <TableCell>
                      {format(new Date(match.playedAt), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>{teamMap.get(match.homeTeamId)?.name}</TableCell>
                    <TableCell>
                      {match.homeScore} - {match.awayScore}
                    </TableCell>
                    <TableCell>{teamMap.get(match.awayTeamId)?.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
