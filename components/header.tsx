import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-40">
      <div className="p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo_text.png"
            alt="GameOn Logo"
            className="h-7 w-auto" // Smaller size for the logo
          />
        </div>
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/danae.jpg"
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
