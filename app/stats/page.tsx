"use client";
import { useState } from "react";
import Image from "next/image";
import { useSports } from "@/contexts/SportsContext";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

const sportStats: { [key: string]: { team: string; logo: string; score: number; players: { name: string; pts: number; ast: number; reb: number; img: string }[] }[] } = {
  Basketball: [
    {
      team: "SIXERS",
      logo: "/Stats/sixers-logo.png",
      score: 105,
      players: [
        { name: "Joel Embiid", pts: 39, ast: 7, reb: 10, img: "/Stats/joel-embiid.png" },
        { name: "Tyrese Maxey", pts: 25, ast: 8, reb: 2, img: "/Stats/tyrese-maxey.png" },
        { name: "Paul George", pts: 33, ast: 15, reb: 6, img: "/Stats/paul-george1.png" },
        { name: "Jared Mccain", pts: 20, ast: 5, reb: 3, img: "/Stats/jared-mccain.png" },
        { name: "Kyle Lowry", pts: 15, ast: 10, reb: 5, img: "/Stats/kyle-lowry.png" },
      ],
    },
    {
      team: "KNICKS",
      logo: "/Stats/knicks-logo.png",
      score: 110,
      players: [
        { name: "Julius Randle", pts: 28, ast: 3, reb: 6, img: "/Stats/julius-randle.png" },
        { name: "Jalen Brunson", pts: 41, ast: 12, reb: 3, img: "/Stats/jalen-brunson.png" },
        { name: "OG Anunoby", pts: 22, ast: 5, reb: 4, img: "/Stats/anunoby.png" },
        { name: "Karl-Anthony Towns", pts: 18, ast: 7, reb: 2, img: "/Stats/kat.png" },
        { name: "Mikal Bridges", pts: 10, ast: 2, reb: 8, img: "/Stats/bridges.png" },
      ],
    },
  ],
  Football: [
    {
      team: "PATRIOTS",
      logo: "/patriots_logo.svg",
      score: 32,
      players: [
        { name: "Tom Brady", pts: 3, ast: 0, reb: 0, img: "/brady.jpg" },
        { name: "Rob Gronkowski", pts: 2, ast: 0, reb: 0, img: "/gronkowski.jpg" },
      ],
    },
    {
      team: "GIANTS",
      logo: "/giants_logo.svg",
      score: 10,
      players: [
        { name: "Eli Manning", pts: 2, ast: 1, reb: 0, img: "/manning.jpg" },
        { name: "Odell Beckham Jr.", pts: 1, ast: 1, reb: 0, img: "/beckham.jpg" },
      ],
    },
  ],
  Soccer: [
    {
      team: "Liverpool",
      logo: "/Stats/liverpool.png",
      score: 3,
      players: [
      ],
    },
    {
      team: "Real Madrid",
      logo: "/Stats/real-madrid.png",
      score: 5,
      players: [
      ],
    },
  ],
  Tennis: [
    {
      team: "Alexander Zverev",
      logo: "/Stats/australia.png",
      score: 2,
      players: [
      ],
    },
    {
      team: "Carlos Alcaraz",
      logo: "/Stats/germany.png",
      score: 3,
      players: [
      ],
    },
  ],
  Golf: [
    {
      team: "Alex Melendez",
      logo: "/Stats/germany.png",
      score: 100,
      players: [
      ],
    },
    {
      team: "Ryggs Johnston",
      logo: "/Stats/australia.png",
      score: 92,
      players: [
      ]
    },
  ],
  // Add more sports and their corresponding stats
};

const sportVideos: { [key: string]: string } = {
  Basketball: "https://www.youtube.com/embed/7VUvcuHwgtw?si=G43zmdB6VHMfbUNJ",
  Football: "https://www.youtube.com/embed/1RwlGrjUdek?si=TCp8qg7Bj5xu05vJ",
  Soccer: "https://www.youtube.com/embed/7fS04X3Qy4Y?si=buwhXLzEU0dtRqng",
  Tennis: "https://www.youtube.com/embed/KrV9XK36U1A?si=8XU5KDYpTZ_Eil4l",
  Golf: "https://www.youtube.com/embed/P0BXiDrkt04?si=7BGDbGIjgxlH-a1r",
  // Add more sports and their corresponding YouTube embed URLs
};

export default function StatsPage() {
  const { selectedSports } = useSports();
  // const [showAllPlayers, setShowAllPlayers] = useState(false);

  return (
    <div className="px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FEATURED MATCH</h2>
        {selectedSports.length > 0 ? (
          selectedSports.map((sport) => (
            <Card key={sport} className="bg-blue-50">
              <CardContent className="p-0">
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={sportVideos[sport] || "https://www.youtube.com/embed/DEFAULT_VIDEO_ID"}
                    title={`${sport} game`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    {sportStats[sport]?.map((teamStats, index) => (
                      <TeamScore key={teamStats.team} team={teamStats.team} score={teamStats.score} logo={teamStats.logo} reverse={index !== 0} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 my-8">
            No sports selected. Visit your profile to add sports preferences.
          </p>
        )}
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-600">STATISTICS</h2>
          {/* <Button variant="link" onClick={() => setShowAllPlayers(!showAllPlayers)}>
            {showAllPlayers ? "Show Less" : "See All"}
          </Button> */}
        </div>

        <div className="space-y-4">
          {selectedSports.length > 0 ? (
            selectedSports.map((sport) =>
              sportStats[sport]?.map((teamStats) => (
                <div key={teamStats.team} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{teamStats.team}</h3>
                  {teamStats.players.map((player) => (
                    <PlayerStats key={player.name} player={player} />
                  ))}
                </div>
              ))
            )
          ) : (
            <p className="text-center text-gray-500 my-8">
              No sports selected. Visit your profile to add sports preferences.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

function TeamScore({
  team,
  score,
  logo,
  reverse = false,
}: {
  team: string;
  score: number;
  logo: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <Image
        src={logo}
        alt={`${team} logo`}
        width={40}
        height={40}
      />
      <div className={reverse ? "text-right" : ""}>
        <div className="font-bold text-blue-700">{team}</div>
        <div className="text-2xl font-bold text-blue-900">{score}</div>
      </div>
    </div>
  );
}

function PlayerStats({
  player,
}: {
  player: { name: string; pts: number; ast: number; reb: number; img: string };
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-blue-100 rounded-lg">
      <Image
        src={player.img}
        alt={player.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="flex-1">
        <div className="font-medium text-blue-800">{player.name}</div>
        <div className="flex gap-4 text-sm text-blue-600">
          <span>PTS: {player.pts}</span>
          <span>AST: {player.ast}</span>
          <span>REB: {player.reb}</span>
        </div>
      </div>
    </div>
  );
}
