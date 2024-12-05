import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StatsPage() {
  return (
    <div className="px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FEATURED MATCH</h2>
        <Card>
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg"
              alt="Game highlight"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <TeamScore team="SIXERS" score={121} />
                <TeamScore team="KNICKS" score={112} reverse />
              </div>
              <Button className="w-full" variant="secondary">
                See Match
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">STATISTICS</h2>
          <Button variant="link">See All</Button>
        </div>

        <div className="space-y-4">
          {[
            { name: "Joel Embiid", pts: 39, ast: 7, reb: 10 },
            { name: "Tyrese Maxey", pts: 25, ast: 8, reb: 2 },
            { name: "Jalen Brunson", pts: 41, ast: 12, reb: 3 },
            { name: "Julius Randle", pts: 28, ast: 3, reb: 6 },
          ].map((player) => (
            <PlayerStats key={player.name} player={player} />
          ))}
        </div>
      </section>
    </div>
  );
}

function TeamScore({
  team,
  score,
  reverse = false,
}: {
  team: string;
  score: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <Image
        src="/placeholder.svg"
        alt={`${team} logo`}
        width={40}
        height={40}
      />
      <div className={reverse ? "text-right" : ""}>
        <div className="font-bold">{team}</div>
        <div className="text-2xl font-bold">{score}</div>
      </div>
    </div>
  );
}

function PlayerStats({
  player,
}: {
  player: { name: string; pts: number; ast: number; reb: number };
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <Image
        src="/placeholder.svg"
        alt={player.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="flex-1">
        <div className="font-medium">{player.name}</div>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>PTS: {player.pts}</span>
          <span>AST: {player.ast}</span>
          <span>REB: {player.reb}</span>
        </div>
      </div>
    </div>
  );
}
