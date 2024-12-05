import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
      <div className="p-4 flex items-center justify-between max-h-16">
        <Image src="/logo_text.png" alt="Logo" width={120} height={40} />
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/Home/profile.png"
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
