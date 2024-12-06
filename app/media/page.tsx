import React from "react";

export default function MediaPage() {
  return (
    <div className="flex flex-col w-full p-4">
      <h2 className="text-2xl font-bold mb-4">TRENDING POSTS</h2>

      <div className="flex flex-col gap-8">
        {/* House of Highlights Section */}
        <div className="max-w-full">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Media/househighlights.png"
              alt={"House of Highlights"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">House of Highlights</h3>
          </div>

          {/* Two Posts Per Row with Padding */}
          <div className="grid grid-cols-2 gap-8">
            <iframe
              src="https://www.instagram.com/p/DC0N3l8Nvu0/embed"
              width="150"
              height="150"
              allowTransparency="true"
              allow="encrypted-media"
              scrolling="no"
              frameBorder="0"
              style={{ borderRadius: '8px' }}
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/DC0N3l8Nvu0/embed"
              width="150"
              height="150"
              allowTransparency="true"
              allow="encrypted-media"
              scrolling="no"
              frameBorder="0"
              style={{ borderRadius: '8px' }}
            ></iframe>
          </div>
        </div>

        {/* Bleacher Report Section */}
        <div className="max-w-full">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Media/br.png"
              alt={"Bleacher Report"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">Bleacher Report</h3>
          </div>

          {/* Two Posts Per Row with Padding */}
          <div className="grid grid-cols-2 gap-8">
            <iframe
              src="https://www.instagram.com/p/DC0N3l8Nvu0/embed"
              width="150"
              height="150"
              allowTransparency="true"
              allow="encrypted-media"
              scrolling="no"
              frameBorder="0"
              style={{ borderRadius: '8px' }}
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/DC0N3l8Nvu0/embed"
              width="150"
              height="150"
              allowTransparency="true"
              allow="encrypted-media"
              scrolling="no"
              frameBorder="0"
              style={{ borderRadius: '8px' }}
            ></iframe>
          </div>
        </div>

        {/* NBA Twitter Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LATEST TWEETS</h2>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Media/nba.jpg"
              alt="NBA"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl text-gray-500">NBA</h3>
          </div>

          {/* Two Tweets Per Row with Padding */}
          <div className="grid grid-cols-2 gap-8">
            <blockquote className="twitter-tweet" data-lang="en">
              <a href="https://twitter.com/USER/status/TWEET_ID1"></a>
            </blockquote>
            <blockquote className="twitter-tweet" data-lang="en">
              <a href="https://twitter.com/USER/status/TWEET_ID2"></a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
