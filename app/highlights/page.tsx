import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HighlightsPage() {
  return (
    <div className="px-4">
      <section className="mb-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg"
              alt="Celtics game"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">CELTICS VS KNICKS</h2>
              <p className="text-gray-500">
                Celtics celebrate Banner 18 by making record-tying 29 3-pointers and crushing Knicks 132-109.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">FEATURED MATCH</h2>
          <Button variant="link">See All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg"
                alt="WNBA game"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </CardContent>
          </Card>
          <Card className="bg-blue-50">
            <CardContent className="p-4 flex flex-col justify-center h-full">
              <h3 className="text-xl font-bold mb-2">WNBA Daily</h3>
              <p className="text-gray-600 mb-4">Watch match highlights</p>
              <Button>PLAY</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">POPULAR MATCHES</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            "South Carolina vs. Iowa",
            "Iowa vs. UConn",
            "Iowa vs. LSU",
            "Iowa vs. Colorado"
          ].map((match) => (
            <Card key={match}>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt={match}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <div className="text-sm text-gray-500">March Madness 2023</div>
                  <div className="font-medium">{match}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

