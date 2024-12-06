"use client";
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react";
import { useSports } from "@/contexts/SportsContext";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge";

const allSports = [
    "Basketball",
    "Football",
    "Soccer",
    "Tennis",
    "Golf"
];

export default function SignUpPage() {
    const { setFavoriteSports } = useSports();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [error, setError] = useState("");

    const toggleSport = (sport: string) => {
        setSelectedSports((prev) =>
            prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
        );
    };

    async function signup(formData: FormData) {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setFavoriteSports(selectedSports);
        // This is just a placeholder action that redirects to /
        redirect("/")
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <div className="w-full max-w-md space-y-8 px-4">
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src="/GAMEON.png"
                        alt="GAMEON Logo"
                        width={200}
                        height={50}
                        priority
                        className="h-12 w-auto"
                    />
                    <Image
                        src="/Star.png"
                        alt="Star Icon"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
                <form action={signup} className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md">
                        <div>
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1"
                                placeholder="Confirm your password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Select Your Favorite Sports</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
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
                    </div>

                    <div>
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

