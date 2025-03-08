import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Fixture = {
  homeTeam: string;
  awayTeam: string;
};

type Week = {
  weekNumber: number;
  matches: Fixture[];
};

const fixtures: Week[] = [
  {
    weekNumber: 1,
    matches: [
      { homeTeam: "Manchester United", awayTeam: "Roma" },
      { homeTeam: "Newcastle United", awayTeam: "Leverkusen" },
      { homeTeam: "Juventus", awayTeam: "Santos" },
      { homeTeam: "Manchester City", awayTeam: "Liverpool" },
      { homeTeam: "Bayern Munih", awayTeam: "Feyenoord" },
      { homeTeam: "Milan", awayTeam: "Napoli" },
      { homeTeam: "Atalanta", awayTeam: "PSV" },
      { homeTeam: "Arsenal", awayTeam: "Porto" },
      { homeTeam: "Ajax", awayTeam: "PSG" },
      { homeTeam: "Inter", awayTeam: "Real Madrid" },
    ],
  },
  // Week 2-19 will be added similarly from the text file
];

export default function FixturesPage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Sezon Fikstürü</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {fixtures.map((week) => (
              <AccordionItem key={week.weekNumber} value={`week-${week.weekNumber}`}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">
                    {week.weekNumber}. Hafta
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {week.matches.map((match, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 px-4 rounded-lg hover:bg-muted"
                      >
                        <span className="font-medium">{match.homeTeam}</span>
                        <span className="text-muted-foreground mx-4">vs</span>
                        <span className="font-medium">{match.awayTeam}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
