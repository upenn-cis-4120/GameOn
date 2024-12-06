import React from "react";
import YouTube from "react-youtube";

interface YouTubeShortProps {
  videoId: string;
}

const YouTubeShort: React.FC<YouTubeShortProps> = ({ videoId }) => {
  const opts = {
    height: "720",
    width: "390",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };

  return (
    <div className="youtube-short-container z-0">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeShort;
