import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-20">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/home">
            <img
              src="/Logo.png"
              alt="GameOn Logo"
              className="h-8 w-auto" // Smaller size for the logo
            />
          </Link>
        </div>
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/Danae.jpg"
              alt="Profile"
              className="rounded-full"
              height={30}
              width={30}
            />
          </Button>
        </Link>
      </div>
    </header>
  );
}
