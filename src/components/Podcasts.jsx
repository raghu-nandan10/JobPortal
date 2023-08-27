import React from "react";
import PodcastCard from "./subcomponents/PodcastCard";
import { BiPodcast } from "react-icons/bi";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
const Podcasts = () => {
  const podcasts = [
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  ];
  const handleScrollLeft = () => {
    document.getElementById("podcast-scroll-bar").scrollLeft -= 200;
  };
  const handleScrollRight = () => {
    document.getElementById("podcast-scroll-bar").scrollLeft += 200;
  };
  return (
    <div className="bg-slate-50 w-[100%] h-[60vh]  gap-6 flex flex-col justify-center items-center">
      <div className=" w-[85%] flex gap-2 my-6 ">
        <BiPodcast size={30} color="blue " />
        <div className="text-2xl   ">Podcasts</div>
      </div>
      <div className="flex w-[90%] items-center justify-evenly">
        <div onClick={handleScrollLeft}>
          <AiFillCaretLeft color="blue" size={40} />
        </div>
        <div
          id="podcast-scroll-bar"
          className="w-[90%] podcast-scroll-bar  scroll-smooth  overflow-x-scroll  items-center  overflow-y-hidden flex "
        >
          {podcasts.map((item) => {
            return <PodcastCard item={item} />;
          })}
        </div>
        <div onClick={handleScrollRight}>
          <AiFillCaretRight color="blue" size={40} />
        </div>
      </div>

      <div className="bg-blue-600 w-[90%] p-3 text-center  cursor-pointer text-white rounded-lg shadow-sm hover:bg-blue-400  ">
        Click here to visit
      </div>
    </div>
  );
};

export default Podcasts;
