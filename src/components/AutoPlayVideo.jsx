import React, { useRef, useEffect } from "react";

const AutoPlayVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play().catch((error) => {
        // Autoplay was prevented, handle the error
        console.error("Autoplay was prevented:", error);
      });
    };

    // Add event listener to play the video once it's loaded
    video.addEventListener("loadeddata", playVideo);

    return () => {
      // Cleanup: Remove event listener when component unmounts
      video.removeEventListener("loadeddata", playVideo);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <video ref={videoRef} src={src} autoPlay muted loop playsInline />;
};

export default AutoPlayVideo;
