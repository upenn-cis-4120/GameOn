import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">GAMEON</h1>
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Profile"
              className="rounded-full"
            />
          </Button>
        </Link>
      </div>
    </header>
  );
}
