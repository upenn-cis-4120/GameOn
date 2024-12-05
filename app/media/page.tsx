import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function MediaPage() {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold mb-4">TRENDING POSTS</h2>
      
      <div className="space-y-8">
        <TrendingSection title="House of Highlights" />
        <TrendingSection title="Bleacher Report" />
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/placeholder.svg"
              alt="NBA"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">NBA</h3>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p className="text-gray-600">
                    "And now this court will bear the signature of his name forever."
                  </p>
                  <p className="text-sm text-gray-400 mt-2">10m ago</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TrendingSection({ title }: { title: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/placeholder.svg"
          alt={title}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h3 className="text-xl text-gray-500">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg"
                alt={`${title} ${i}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

