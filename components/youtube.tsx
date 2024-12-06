import React from "react";
import YouTube from "react-youtube";

interface YouTubeShortProps {
  videoId: string;
}

const YouTubeShort: React.FC<YouTubeShortProps> = ({ videoId }) => {
  const opts = {
    height: "600",
    width: "315",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  return (
    <div className="youtube-short-container">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeShort;
