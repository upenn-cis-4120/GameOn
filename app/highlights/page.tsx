"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { highlights, Highlight } from "@/data/highlights";
import YouTubeShort from "@/components/youtube";

export default function HighlightsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const highlightHeight = container.clientHeight;
      const newIndex = Math.round(scrollPosition / highlightHeight);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-8rem)] overflow-y-scroll snap-y snap-mandatory"
    >
      {highlights.map((highlight, index) => (
        <HighlightItem
          key={highlight.id}
          highlight={highlight}
          isActive={index === currentIndex}
        />
      ))}
    </div>
  );
}

function HighlightItem({
  highlight,
  isActive,
}: {
  highlight: Highlight;
  isActive: boolean;
}) {
  return (
    <div className="h-[calc(100vh-4rem)] snap-start flex flex-col relative max-h-[733px]">
      <div className="flex-1 bg-black">
        <YouTubeShort videoId={highlight.videoId} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
        <div className="flex items-center mb-2">
          <Image
            src={highlight.user.avatar}
            alt={highlight.user.name}
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <span className="font-bold">{highlight.user.name}</span>
        </div>
        <h2 className="text-xl font-bold mb-1">{highlight.title}</h2>
        <p className="text-sm mb-2">{highlight.description}</p>
        <div className="flex items-center space-x-4">
          <button className="flex items-center">
            <Heart className="w-6 h-6 mr-1" />
            <span>{highlight.likes}</span>
          </button>
          <button className="flex items-center">
            <MessageCircle className="w-6 h-6 mr-1" />
            <span>{highlight.comments}</span>
          </button>
          <button className="flex items-center">
            <Share2 className="w-6 h-6 mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
