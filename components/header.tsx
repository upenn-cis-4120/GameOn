import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.png"
            alt="GameOn Logo"
            className="h-8 w-auto" // Smaller size for the logo
          />
        </div>
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/Groups/Phillip.png"
              alt="Profile"
              className="rounded-full"
            />
          </Button>
        </Link>
      </div>
    </header>
  );
}