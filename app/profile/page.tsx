"use client";

import Image from "next/image";
import { friends } from "@/data/friends";
import { groups } from "@/data/messages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSports } from "@/contexts/SportsContext";

const allSports = ["Basketball", "Soccer", "Tennis", "Golf"];

export default function ProfilePage() {
  const { selectedSports, setSelectedSports } = useSports();

  const toggleSport = (sport: string) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Image
            src="/danae.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <CardTitle>Danae Metaxa</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Sports enthusiast and die-hard fan
          </p>
          <div className="flex justify-center space-x-4">
            <div>
              <p className="font-bold text-2xl">{friends.length}</p>
              <p className="text-gray-500">Friends</p>
            </div>
            <div>
              <p className="font-bold text-2xl">{groups.length}</p>
              <p className="text-gray-500">Groups</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sports Preferences</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {allSports.map((sport) => (
              <Badge
                key={sport}
                variant={selectedSports.includes(sport) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleSport(sport)}
              >
                {sport}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mt-8 mb-4">Friends</h2>
      <div className="grid grid-cols-2 gap-4">
        {friends.map((friend) => (
          <Card key={friend.id}>
            <CardContent className="flex items-center p-4">
              <Image
                src={friend.avatar}
                alt={friend.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <p className="font-medium">{friend.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
