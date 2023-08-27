import React from "react";
import {
  AiOutlineRise,
  AiFillCaretRight,
  AiFillCaretLeft,
} from "react-icons/ai";
import { GrConnect } from "react-icons/gr";
import PublicationCard from "./subcomponents/PublicationCard";
const Publicaitons = () => {
  const pulicatons = [
    {
      image:
        "https://i.pinimg.com/1200x/b2/38/01/b238018c0a4861898f3f44f78ce3eb2c.jpg",
      title: "Good Inverstor",
      paragraph: "Warren Buffet",
    },
    {
      image:
        "https://elements-cover-images-0.imgix.net/c8bd2f0d-f245-4097-9b7f-5bbc9f2bd5ff?auto=compress%2Cformat&fit=max&w=433&s=ac385fd5f6cc75ae9aad92d643607f19",
      title: "Manipulation Mind",
      paragraph: "Aizen Sosuke",
    },

    {
      image:
        "https://elements-cover-images-0.imgix.net/c8bd2f0d-f245-4097-9b7f-5bbc9f2bd5ff?auto=compress%2Cformat&fit=max&w=433&s=ac385fd5f6cc75ae9aad92d643607f19",
      title: "Manipulation Mind",
      paragraph: "Aizen Sosuke",
    },
    {
      image:
        "https://elements-cover-images-0.imgix.net/c8bd2f0d-f245-4097-9b7f-5bbc9f2bd5ff?auto=compress%2Cformat&fit=max&w=433&s=ac385fd5f6cc75ae9aad92d643607f19",
      title: "Manipulation Mind",
      paragraph: "Aizen Sosuke",
    },
    {
      image:
        "https://elements-cover-images-0.imgix.net/c8bd2f0d-f245-4097-9b7f-5bbc9f2bd5ff?auto=compress%2Cformat&fit=max&w=433&s=ac385fd5f6cc75ae9aad92d643607f19",
      title: "Manipulation Mind",
      paragraph: "Aizen Sosuke",
    },
    {
      image:
        "https://elements-cover-images-0.imgix.net/c8bd2f0d-f245-4097-9b7f-5bbc9f2bd5ff?auto=compress%2Cformat&fit=max&w=433&s=ac385fd5f6cc75ae9aad92d643607f19",
      title: "Manipulation Mind",
      paragraph: "Aizen Sosuke",
    },
  ];
  const handleScrollLeft = () => {
    document.getElementById("publication-scroll-bar").scrollLeft -= 200;
  };
  const handleScrollRight = () => {
    document.getElementById("publication-scroll-bar").scrollLeft += 200;
  };
  return (
    <div className="w-[100%] h-[60vh] flex flex-col gap-8 justify-center items-center mt-8  bg-slate-100 ">
      <div className=" w-[90%] flex gap-1 text-3xl mt-8 ">
        <div className="text-black">Publications</div>
        <div className="p-2">
          <GrConnect size={25} color="gray" />
        </div>
      </div>
      <div className=" w-full flex justify-center items-center  overflow-x-scroll">
        <div onClick={handleScrollLeft}>
          <AiFillCaretLeft color="black" size={25} />
        </div>

        <div
          id="publication-scroll-bar"
          className="w-[90%]  overflow-x-scroll  overflow-y-hidden    flex   scroll-smooth "
        >
          {pulicatons.map((item) => {
            return <PublicationCard item={item} />;
          })}
        </div>
        <div onClick={handleScrollRight}>
          <AiFillCaretRight color="black" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Publicaitons;
