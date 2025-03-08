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
  {
    weekNumber: 2,
    matches: [
      { homeTeam: "Roma", awayTeam: "Real Madrid" },
      { homeTeam: "PSG", awayTeam: "Inter" },
      { homeTeam: "Porto", awayTeam: "Ajax" },
      { homeTeam: "PSV", awayTeam: "Arsenal" },
      { homeTeam: "Napoli", awayTeam: "Atalanta" },
      { homeTeam: "Feyenoord", awayTeam: "Milan" },
      { homeTeam: "Liverpool", awayTeam: "Bayern Munih" },
      { homeTeam: "Santos", awayTeam: "Manchester City" },
      { homeTeam: "Leverkusen", awayTeam: "Juventus" },
      { homeTeam: "Manchester United", awayTeam: "Newcastle United" },
    ],
  },
  {
    weekNumber: 3,
    matches: [
      { homeTeam: "Newcastle United", awayTeam: "Roma" },
      { homeTeam: "Juventus", awayTeam: "Manchester United" },
      { homeTeam: "Manchester City", awayTeam: "Leverkusen" },
      { homeTeam: "Bayern Munih", awayTeam: "Santos" },
      { homeTeam: "Milan", awayTeam: "Liverpool" },
      { homeTeam: "Atalanta", awayTeam: "Feyenoord" },
      { homeTeam: "Arsenal", awayTeam: "Napoli" },
      { homeTeam: "Ajax", awayTeam: "PSV" },
      { homeTeam: "Inter", awayTeam: "Porto" },
      { homeTeam: "Real Madrid", awayTeam: "PSG" },
    ],
  },
  {
    weekNumber: 4,
    matches: [
      { homeTeam: "Roma", awayTeam: "PSG" },
      { homeTeam: "Porto", awayTeam: "Real Madrid" },
      { homeTeam: "PSV", awayTeam: "Inter" },
      { homeTeam: "Napoli", awayTeam: "Ajax" },
      { homeTeam: "Feyenoord", awayTeam: "Arsenal" },
      { homeTeam: "Liverpool", awayTeam: "Atalanta" },
      { homeTeam: "Santos", awayTeam: "Milan" },
      { homeTeam: "Leverkusen", awayTeam: "Bayern Munih" },
      { homeTeam: "Manchester United", awayTeam: "Manchester City" },
      { homeTeam: "Newcastle United", awayTeam: "Juventus" },
    ],
  },
  {
    weekNumber: 5,
    matches: [
      { homeTeam: "Juventus", awayTeam: "Roma" },
      { homeTeam: "Manchester City", awayTeam: "Newcastle United" },
      { homeTeam: "Bayern Munih", awayTeam: "Manchester United" },
      { homeTeam: "Milan", awayTeam: "Leverkusen" },
      { homeTeam: "Atalanta", awayTeam: "Santos" },
      { homeTeam: "Arsenal", awayTeam: "Liverpool" },
      { homeTeam: "Ajax", awayTeam: "Feyenoord" },
      { homeTeam: "Inter", awayTeam: "Napoli" },
      { homeTeam: "Real Madrid", awayTeam: "PSV" },
      { homeTeam: "PSG", awayTeam: "Porto" },
    ],
  },
  {
    weekNumber: 6,
    matches: [
      { homeTeam: "Roma", awayTeam: "Porto" },
      { homeTeam: "PSV", awayTeam: "PSG" },
      { homeTeam: "Napoli", awayTeam: "Real Madrid" },
      { homeTeam: "Feyenoord", awayTeam: "Inter" },
      { homeTeam: "Liverpool", awayTeam: "Ajax" },
      { homeTeam: "Santos", awayTeam: "Arsenal" },
      { homeTeam: "Leverkusen", awayTeam: "Atalanta" },
      { homeTeam: "Manchester United", awayTeam: "Milan" },
      { homeTeam: "Newcastle United", awayTeam: "Bayern Munih" },
      { homeTeam: "Juventus", awayTeam: "Manchester City" },
    ],
  },
  {
    weekNumber: 7,
    matches: [
      { homeTeam: "Manchester City", awayTeam: "Roma" },
      { homeTeam: "Bayern Munih", awayTeam: "Juventus" },
      { homeTeam: "Milan", awayTeam: "Newcastle United" },
      { homeTeam: "Atalanta", awayTeam: "Manchester United" },
      { homeTeam: "Arsenal", awayTeam: "Leverkusen" },
      { homeTeam: "Ajax", awayTeam: "Santos" },
      { homeTeam: "Inter", awayTeam: "Liverpool" },
      { homeTeam: "Real Madrid", awayTeam: "Feyenoord" },
      { homeTeam: "PSG", awayTeam: "Napoli" },
      { homeTeam: "Porto", awayTeam: "PSV" },
    ],
  },
  {
    weekNumber: 8,
    matches: [
      { homeTeam: "Roma", awayTeam: "PSV" },
      { homeTeam: "Napoli", awayTeam: "Porto" },
      { homeTeam: "Feyenoord", awayTeam: "PSG" },
      { homeTeam: "Liverpool", awayTeam: "Real Madrid" },
      { homeTeam: "Santos", awayTeam: "Inter" },
      { homeTeam: "Leverkusen", awayTeam: "Ajax" },
      { homeTeam: "Manchester United", awayTeam: "Arsenal" },
      { homeTeam: "Newcastle United", awayTeam: "Atalanta" },
      { homeTeam: "Juventus", awayTeam: "Milan" },
      { homeTeam: "Manchester City", awayTeam: "Bayern Munih" },
    ],
  },
  {
    weekNumber: 9,
    matches: [
      { homeTeam: "Bayern Munih", awayTeam: "Roma" },
      { homeTeam: "Milan", awayTeam: "Manchester City" },
      { homeTeam: "Atalanta", awayTeam: "Juventus" },
      { homeTeam: "Arsenal", awayTeam: "Newcastle United" },
      { homeTeam: "Ajax", awayTeam: "Manchester United" },
      { homeTeam: "Inter", awayTeam: "Leverkusen" },
      { homeTeam: "Real Madrid", awayTeam: "Santos" },
      { homeTeam: "PSG", awayTeam: "Liverpool" },
      { homeTeam: "Porto", awayTeam: "Feyenoord" },
      { homeTeam: "PSV", awayTeam: "Napoli" },
    ],
  },
  {
    weekNumber: 10,
    matches: [
      { homeTeam: "Roma", awayTeam: "Napoli" },
      { homeTeam: "Feyenoord", awayTeam: "PSV" },
      { homeTeam: "Liverpool", awayTeam: "Porto" },
      { homeTeam: "Santos", awayTeam: "PSG" },
      { homeTeam: "Leverkusen", awayTeam: "Real Madrid" },
      { homeTeam: "Manchester United", awayTeam: "Inter" },
      { homeTeam: "Newcastle United", awayTeam: "Ajax" },
      { homeTeam: "Juventus", awayTeam: "Arsenal" },
      { homeTeam: "Manchester City", awayTeam: "Atalanta" },
      { homeTeam: "Bayern Munih", awayTeam: "Milan" },
    ],
  },
  {
    weekNumber: 11,
    matches: [
      { homeTeam: "Milan", awayTeam: "Roma" },
      { homeTeam: "Atalanta", awayTeam: "Bayern Munih" },
      { homeTeam: "Arsenal", awayTeam: "Manchester City" },
      { homeTeam: "Ajax", awayTeam: "Juventus" },
      { homeTeam: "Inter", awayTeam: "Newcastle United" },
      { homeTeam: "Real Madrid", awayTeam: "Manchester United" },
      { homeTeam: "PSG", awayTeam: "Leverkusen" },
      { homeTeam: "Porto", awayTeam: "Santos" },
      { homeTeam: "PSV", awayTeam: "Liverpool" },
      { homeTeam: "Napoli", awayTeam: "Feyenoord" },
    ],
  },
  {
    weekNumber: 12,
    matches: [
      { homeTeam: "Roma", awayTeam: "Feyenoord" },
      { homeTeam: "Liverpool", awayTeam: "Napoli" },
      { homeTeam: "Santos", awayTeam: "PSV" },
      { homeTeam: "Leverkusen", awayTeam: "Porto" },
      { homeTeam: "Manchester United", awayTeam: "PSG" },
      { homeTeam: "Newcastle United", awayTeam: "Real Madrid" },
      { homeTeam: "Juventus", awayTeam: "Inter" },
      { homeTeam: "Manchester City", awayTeam: "Ajax" },
      { homeTeam: "Bayern Munih", awayTeam: "Arsenal" },
      { homeTeam: "Milan", awayTeam: "Atalanta" },
    ],
  },
  {
    weekNumber: 13,
    matches: [
      { homeTeam: "Atalanta", awayTeam: "Roma" },
      { homeTeam: "Arsenal", awayTeam: "Milan" },
      { homeTeam: "Ajax", awayTeam: "Bayern Munih" },
      { homeTeam: "Inter", awayTeam: "Manchester City" },
      { homeTeam: "Real Madrid", awayTeam: "Juventus" },
      { homeTeam: "PSG", awayTeam: "Newcastle United" },
      { homeTeam: "Porto", awayTeam: "Manchester United" },
      { homeTeam: "PSV", awayTeam: "Leverkusen" },
      { homeTeam: "Napoli", awayTeam: "Santos" },
      { homeTeam: "Feyenoord", awayTeam: "Liverpool" },
    ],
  },
  {
    weekNumber: 14,
    matches: [
      { homeTeam: "Roma", awayTeam: "Liverpool" },
      { homeTeam: "Santos", awayTeam: "Feyenoord" },
      { homeTeam: "Leverkusen", awayTeam: "Napoli" },
      { homeTeam: "Manchester United", awayTeam: "PSV" },
      { homeTeam: "Newcastle United", awayTeam: "Porto" },
      { homeTeam: "Juventus", awayTeam: "PSG" },
      { homeTeam: "Manchester City", awayTeam: "Real Madrid" },
      { homeTeam: "Bayern Munih", awayTeam: "Inter" },
      { homeTeam: "Milan", awayTeam: "Ajax" },
      { homeTeam: "Atalanta", awayTeam: "Arsenal" },
    ],
  },
  {
    weekNumber: 15,
    matches: [
      { homeTeam: "Arsenal", awayTeam: "Roma" },
      { homeTeam: "Ajax", awayTeam: "Atalanta" },
      { homeTeam: "Inter", awayTeam: "Milan" },
      { homeTeam: "Real Madrid", awayTeam: "Bayern Munih" },
      { homeTeam: "PSG", awayTeam: "Manchester City" },
      { homeTeam: "Porto", awayTeam: "Juventus" },
      { homeTeam: "PSV", awayTeam: "Newcastle United" },
      { homeTeam: "Napoli", awayTeam: "Manchester United" },
      { homeTeam: "Feyenoord", awayTeam: "Leverkusen" },
      { homeTeam: "Liverpool", awayTeam: "Santos" },
    ],
  },
  {
    weekNumber: 16,
    matches: [
      { homeTeam: "Roma", awayTeam: "Santos" },
      { homeTeam: "Leverkusen", awayTeam: "Liverpool" },
      { homeTeam: "Manchester United", awayTeam: "Feyenoord" },
      { homeTeam: "Newcastle United", awayTeam: "Napoli" },
      { homeTeam: "Juventus", awayTeam: "PSV" },
      { homeTeam: "Manchester City", awayTeam: "Porto" },
      { homeTeam: "Bayern Munih", awayTeam: "PSG" },
      { homeTeam: "Milan", awayTeam: "Real Madrid" },
      { homeTeam: "Atalanta", awayTeam: "Inter" },
      { homeTeam: "Arsenal", awayTeam: "Ajax" },
    ],
  },
  {
    weekNumber: 17,
    matches: [
      { homeTeam: "Ajax", awayTeam: "Roma" },
      { homeTeam: "Inter", awayTeam: "Arsenal" },
      { homeTeam: "Real Madrid", awayTeam: "Atalanta" },
      { homeTeam: "PSG", awayTeam: "Milan" },
      { homeTeam: "Porto", awayTeam: "Bayern Munih" },
      { homeTeam: "PSV", awayTeam: "Manchester City" },
      { homeTeam: "Napoli", awayTeam: "Juventus" },
      { homeTeam: "Feyenoord", awayTeam: "Newcastle United" },
      { homeTeam: "Liverpool", awayTeam: "Manchester United" },
      { homeTeam: "Santos", awayTeam: "Leverkusen" },
    ],
  },
  {
    weekNumber: 18,
    matches: [
      { homeTeam: "Roma", awayTeam: "Leverkusen" },
      { homeTeam: "Manchester United", awayTeam: "Santos" },
      { homeTeam: "Newcastle United", awayTeam: "Liverpool" },
      { homeTeam: "Juventus", awayTeam: "Feyenoord" },
      { homeTeam: "Manchester City", awayTeam: "Napoli" },
      { homeTeam: "Bayern Munih", awayTeam: "PSV" },
      { homeTeam: "Milan", awayTeam: "Porto" },
      { homeTeam: "Atalanta", awayTeam: "PSG" },
      { homeTeam: "Arsenal", awayTeam: "Real Madrid" },
      { homeTeam: "Ajax", awayTeam: "Inter" },
    ],
  },
  {
    weekNumber: 19,
    matches: [
      { homeTeam: "Inter", awayTeam: "Roma" },
      { homeTeam: "Real Madrid", awayTeam: "Ajax" },
      { homeTeam: "PSG", awayTeam: "Arsenal" },
      { homeTeam: "Porto", awayTeam: "Atalanta" },
      { homeTeam: "PSV", awayTeam: "Milan" },
      { homeTeam: "Napoli", awayTeam: "Bayern Munih" },
      { homeTeam: "Feyenoord", awayTeam: "Manchester City" },
      { homeTeam: "Liverpool", awayTeam: "Juventus" },
      { homeTeam: "Santos", awayTeam: "Newcastle United" },
      { homeTeam: "Leverkusen", awayTeam: "Manchester United" },
    ],
  },
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