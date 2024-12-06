import { Inter } from "next/font/google";
import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";
import { SportsProvider } from "@/contexts/SportsContext";
import "./globals.css";

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
          <Header />
          <main className="pt-[80px] pb-20">{children}</main>
          <BottomNav />
        </SportsProvider>
      </body>
    </html>
  );
}
