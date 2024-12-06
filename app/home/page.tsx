"use client";
import { useSports } from "@/contexts/SportsContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const sportVideos: { [key: string]: { title: string, url: string }[] } = {
  Basketball: [
    { title: "Sixers vs Knicks", url: "https://www.youtube.com/embed/7VUvcuHwgtw?si=G43zmdB6VHMfbUNJ" },
    { title: "Lakers vs Celtics", url: "https://www.youtube.com/embed/mJ0W6xZfweI?si=dMHQtCqCdjr5NqIw" }
  ],
  Soccer: [
    { title: "Liverpool vs Real Madrid", url: "https://www.youtube.com/embed/7fS04X3Qy4Y?si=buwhXLzEU0dtRqng" },
    { title: "Copa Italia", url: "https://www.youtube.com/embed/xjAQYUArXws?si=IQRSUm3b-vCivd76" }
  ],
  Tennis: [
    { title: "Zverev VS Alcaraz", url: "https://www.youtube.com/embed/KrV9XK36U1A?si=8XU5KDYpTZ_Eil4l" }
  ],
  Golf: [
    { title: "DP World Tour Round 4", url: "https://www.youtube.com/embed/P0BXiDrkt04?si=7BGDbGIjgxlH-a1r" }
  ],
  // Add more sports and their corresponding YouTube embed URLs
};

const communities = [
  { logo: "/Groups/group1.png", name: "Brick Squad", notifications: 5 },
  { logo: "/Groups/group2.png", name: "Hurts Lovers", notifications: 2 },
  { logo: "/Groups/group3.png", name: "Batter Up", notifications: 8 },
  { logo: "/Groups/group4.png", name: "Ball is Life", notifications: 1 },
];

export default function Home() {
  const { selectedSports } = useSports();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/stats'); // Replace '/target-page' with the path you want to navigate to
  };

  const handleCommunityClick = (communityName: string) => {
    router.push(`/groups?community=${communityName}`);
  };

  return (
    <div className="px-4">
      <section>
        <h2 className="text-xl font-bold mb-4">LIVE GAMES</h2>
        {selectedSports.length > 0 ? (
          <div className="flex overflow-x-auto snap-x snap-mandatory">
            {selectedSports.map((sport) => (
              <div key={sport} className="flex-shrink-0 w-full snap-center">
                <Card className="w-full bg-blue-100">
                  <CardContent className="p-0">
                    {sportVideos[sport]?.map((video, index) => (
                      <div key={index} style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "1rem" }}>
                        <iframe
                          src={video.url}
                          title={video.title}
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
                    ))}
                    <div className="p-4">
                      <h3 className="font-bold text-base mb-2">{sport}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Live game information for {sport}
                      </p>
                      <Button className="w-full text-sm" onClick={handleButtonClick}>See details</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 my-8 text-sm">
            No sports selected. Visit your profile to add sports preferences.
          </p>
        )}
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Communities</h2>
        <div className="flex justify-between">
          {communities.map((community, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => handleCommunityClick(community.name)}
            >
              <img src={community.logo} alt={community.name} className="w-16 h-16 mb-2" />
              <span className="font-bold text-sm">{community.name}</span>
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {community.notifications}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
