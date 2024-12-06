"use client";
import { Inter } from "next/font/google";
import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";
import { SportsProvider } from "@/contexts/SportsContext";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <SportsProvider>
          <ClientOnly>
            <HeaderAndNav />
          </ClientOnly>
          <main className="pt-[80px] pb-[80px]">{children}</main>
        </SportsProvider>
      </body>
    </html>
  );
}

function ClientOnly({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function HeaderAndNav() {
  const pathname = usePathname();
  const isVisible = (pathname !== "/" && pathname !== "/signup");

  return (
    <>
      <Header isVisible={isVisible} />
      <BottomNav isVisible={isVisible} />
    </>
  );
}
