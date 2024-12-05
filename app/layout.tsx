import { Inter } from 'next/font/google'
import { BottomNav } from "@/components/bottom-nav"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="pt-36 pb-20">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}

