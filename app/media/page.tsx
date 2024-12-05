import Image from "next/image";

export default function MediaPage() {
  return (
    <div className="flex flex-col w-full p-4">
      <h2 className="text-2xl font-bold mb-4">TRENDING POSTS</h2>

      <div className="flex flex-col gap-8">
        <div className="max-w-full">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Media/househighlights.png"
              alt={"House of Highlights"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">House of Highlights</h3>
          </div>

          <div className="flex justify-between gap-2">
            <Image
              src="/Media/post1.png"
              alt={`House of Highlights`}
              width={30}
              height={30}
              className="w-full"
            />
            <Image
              src="/Media/post2.png"
              alt={`House of Highlights`}
              width={30}
              height={30}
              className="w-full"
            />
            <Image
              src="/Media/post3.png"
              alt={`House of Highlights`}
              width={30}
              height={30}
              className="w-full"
            />
          </div>
        </div>

        <div className="max-w-full">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Media/br.png"
              alt={"Bleacher Report"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">Bleacher Report</h3>
          </div>

          <div className="flex justify-between gap-2">
            <Image
              src="/Media/post4.png"
              alt={`Bleacher Report`}
              width={30}
              height={30}
              className="w-full"
            />
            <Image
              src="/Media/post5.png"
              alt={`Bleacher Report`}
              width={30}
              height={30}
              className="w-full"
            />
            <Image
              src="/Media/post6.png"
              alt={`Bleacher Report`}
              width={30}
              height={30}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">LATEST TWEETS</h2>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Media/nba.jpg"
              alt="NBA"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">NBA</h3>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src="/Media/tweet1.png"
              alt="NBA"
              width={10}
              height={10}
              className="w-full"
            />
            <Image
              src="/Media/tweet2.png"
              alt="NBA"
              width={10}
              height={10}
              className="w-full"
            />
            <Image
              src="/Media/tweet3.png"
              alt="NBA"
              width={10}
              height={10}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
