"use client";
import React, { useState } from "react";
import { Tweet } from "react-tweet";

export default function MediaPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

  const platforms = ["Instagram", "X"];

  // Example embed links (replace with actual links)
  const instagramPosts = [
    "https://www.instagram.com/p/DC0N3l8Nvu0/embed",
    "https://www.instagram.com/p/DDNhFjbogWx/embed",
    "https://www.instagram.com/p/DDOLgBdxx7n/embed",
    "https://www.instagram.com/p/DC-S2m_gCE-/embed",
    "https://www.instagram.com/p/DDOHlJRRPgY/embed",
    "https://www.instagram.com/p/DC9Rgmkq_mH/embed",
    "https://www.instagram.com/p/DDOB_Fhtbu2/embed",
    "https://www.instagram.com/p/DCuGBP1Pe2c/embed",
    "https://www.instagram.com/p/DC67r_TRtpB/embed",
    "https://www.instagram.com/p/DDOedzaxP5k/embed",
    "https://www.instagram.com/p/DDOOq3Fs8eq/embed",
    "https://www.instagram.com/p/DDN20t8gtbP/embed",
    "https://www.instagram.com/p/DDOEk5bxvyJ/embed",
    "https://www.instagram.com/p/DDN_UL0xv8L/embed",
    "https://www.instagram.com/p/DDN86Uox_Z1/embed",
    "https://www.instagram.com/p/DDKK40VobKB/embed",
    "https://www.instagram.com/p/DDHNR-uIXYe/embed",
    "https://www.instagram.com/p/DDBuVMVIdJO/embed"
  ];
  const xPosts = [
    "1864890359005794776",
    "1859009392470901157",
    "1864921154722345247",
    "1864532784066244911",
    "1820113089972281701",
    "1824656436862783598",
    "1864909493525532741",
    "1864765941025845383",
    "1864879120296955936",
    "1807953245740192248",
    "1840775696827789740",
    "1864043466658832709",
  ];

  const getPosts = () => {
    if (selectedPlatform === "Instagram") return instagramPosts;
    if (selectedPlatform === "X") return xPosts;
    return [];
  };

  const posts = getPosts();

  // Determine grid columns based on platform
  const gridCols = selectedPlatform === "Instagram" ? "grid-cols-2" : "grid-cols-1";
  const gapSize = selectedPlatform === "Instagram" ? "gap-4" : "gap-2";

  return (
    <div className="flex flex-col w-full p-4">
      {/* Navigation Bar */}
      <div className="flex justify-center gap-4 mb-6">
        {platforms.map((platform) => (
          <button
            key={platform}
            className={`px-4 py-2 rounded-lg font-bold ${selectedPlatform === platform
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* Posts Section */}
      <div className={`grid ${gridCols} ${gapSize}`}>
        {posts.map((post, index) => (
          <div key={index} className="flex justify-center items-center">
            {selectedPlatform === "Instagram" && (
              <iframe
                src={post}
                width="175"
                height="175"
                allow="encrypted-media"
                scrolling="no"
                frameBorder="0"
                className="rounded-lg"
              ></iframe>
            )}
            {selectedPlatform === "X" && (
              <Tweet id={post} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}