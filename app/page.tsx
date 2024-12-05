"use client";

import { useSports } from "@/contexts/SportsContext";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sportImages: { [key: string]: string } = {
  Basketball: "/placeholder.svg?text=Basketball",
  Football: "/placeholder.svg?text=Football",
  Soccer: "/placeholder.svg?text=Soccer",
  Tennis: "/placeholder.svg?text=Tennis",
  Golf: "/placeholder.svg?text=Golf",
  // Add more sports and their corresponding image URLs
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
                <Image
                  src={sportImages[sport] || "/placeholder.svg"}
                  alt={`${sport} game`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
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
