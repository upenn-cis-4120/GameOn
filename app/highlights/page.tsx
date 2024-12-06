"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
      className="h-[calc(100vh-rem)] overflow-y-scroll snap-y snap-mandatory"
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
}: {
  highlight: Highlight;
  isActive: boolean;
}) {
  return (
    <div className="h-[calc(100vh-4rem)] snap-start flex flex-col relative max-h-[733px]">
      <YouTubeShort videoId={highlight.videoId} />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white z-10">
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
      </div>
    </div>
  );
}
