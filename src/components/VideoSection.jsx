import React from "react";

const VideoSection = () => {
  return (
    <div className="w-[100%] aspect-video flex flex-col gap-6 justify-center items-center mt-8 ">
      <div className="flex gap-1 text-2xl md:text-3xl w-[90%] ">
        <div className="text-gray-500 ">Video</div>
        <div className="text-blue-500">Links</div>
      </div>
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/JdpDA8kdFEs?si=Qem9it7dT9ovKv9F"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
