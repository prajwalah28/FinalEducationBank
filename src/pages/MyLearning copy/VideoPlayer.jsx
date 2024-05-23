import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Icons } from "../../assets/assets";
import { UserContext } from "../../Context/LoginContext";

const VideoPlayer = () => {


  return (
    <>
      {/* <div className="drive-video">
        <h1>{courseSetion.courseTitle}</h1>
        <div className="flex flex-wrap justify-center">
          {courseSetion.map((section, index) => (

            <div key={index} className="mt-12 mx-4">
              <div className="border-2 border-orange-500 flex max-w-xl">
                <div className="px-4 py-2 w-2/3">
                  <div className="text-orange-500 font-semibold">
                    <h1>{section.sectionName}</h1>
                  </div>
                  <div>
                    {section.videos.map((video, videoIndex) => (
                      <div key={videoIndex}>
                        <h2>{video.title}</h2>
                        <p>{video.duration}</p>
                        <iframe
                          // src={section.video[0].videoUrl}
                          width="1522"
                          height="634"
                          allow="autoplay"
                          allowFullScreen
                          frameBorder="0"
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="drive-video "></div>
      </div> */}
      <div className="drive-video ">
      <iframe
        src="https://drive.google.com/file/d/1C26unNzIcxaBRF3TldqXqztdU3OlagU5/preview"
        width="1522"
        height="634"
        allow="autoplay"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
      <Navbar />
    </>
  );
};

export default VideoPlayer;
