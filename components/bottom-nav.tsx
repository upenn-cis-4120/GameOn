"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart2, Play, Image, Users } from "lucide-react";

export function BottomNav({ isVisible }: { isVisible: boolean }) {
  const pathname = usePathname();

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white z-50">
      <div className="flex justify-around items-center h-14">
        <NavItem
          href="/media"
          icon={<Image className="h-4 w-4" />}
          label="Media"
          active={pathname === "/media"}
        />
        <NavItem
          href="/highlights"
          icon={<Play className="h-4 w-4" />}
          label="Highlights"
          active={pathname === "/highlights"}
        />
        <NavItem
          href="/home"
          icon={<Home className="h-4 w-4" />}
          label="Home"
          active={pathname === "/home"}
        />
        <NavItem
          href="/stats"
          icon={<BarChart2 className="h-4 w-4" />}
          label="Stats"
          active={pathname === "/stats"}
        />
        <NavItem
          href="/groups"
          icon={<Users className="h-4 w-4" />}
          label="Groups"
          active={pathname === "/groups"}
        />
      </div>
    </nav>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center space-y-1 ${
        active ? "text-blue-500" : "text-gray-500"
      }`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}
