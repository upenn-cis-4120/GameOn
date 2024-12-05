import { Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">GAMEON</h1>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      <div className="px-4 pb-4">
        <Input type="search" placeholder="Search" className="w-full" />
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          <Button variant="secondary" className="rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700">
            Basketball
          </Button>
          <Button variant="secondary" className="rounded-full">
            Football
          </Button>
          <Button variant="secondary" className="rounded-full">
            Soccer
          </Button>
        </div>
      </div>
    </header>
  )
}

