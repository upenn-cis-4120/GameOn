import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="px-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">LIVE GAMES</h2>
        <div className="rounded-lg overflow-hidden border">
          <Image
            src="/placeholder.svg"
            alt="Basketball game"
            width={600}
            height={400}
            className="w-full object-cover"
          />
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg"
                  alt="76ers logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <div className="font-bold">SIXERS</div>
                  <div className="text-2xl font-bold">121</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="font-bold">KNICKS</div>
                  <div className="text-2xl font-bold">112</div>
                </div>
                <Image
                  src="/placeholder.svg"
                  alt="Knicks logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            </div>
            <Link
              href="#"
              className="block w-full text-center py-2 bg-blue-100 rounded-lg text-blue-700 font-medium"
            >
              See Match
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

