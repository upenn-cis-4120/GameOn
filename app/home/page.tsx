"use client";
import { useSports } from "@/contexts/SportsContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sportVideos: { [key: string]: string } = {
  Basketball: "https://www.youtube.com/embed/7VUvcuHwgtw?si=G43zmdB6VHMfbUNJ",
  Football: "https://www.youtube.com/embed/1RwlGrjUdek?si=TCp8qg7Bj5xu05vJ",
  Soccer: "https://www.youtube.com/embed/7fS04X3Qy4Y?si=buwhXLzEU0dtRqng",
  Tennis: "https://www.youtube.com/embed/KrV9XK36U1A?si=8XU5KDYpTZ_Eil4l",
  Golf: "https://www.youtube.com/embed/P0BXiDrkt04?si=7BGDbGIjgxlH-a1r",
  // Add more sports and their corresponding YouTube embed URLs
};

export default function Home() {
  const { selectedSports } = useSports();

  return (
    <div className="px-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">LIVE GAMES</h2>
        {selectedSports.length > 0 ? (
          selectedSports.map((sport) => (
            <Card key={sport} className="mb-4">
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
                  <h3 className="font-bold text-lg mb-2">{sport}</h3>
                  <p className="text-gray-600 mb-4">
                    Live game information for {sport}
                  </p>
                  <Button className="w-full">Watch Now</Button>
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
    </div>
  );
}
