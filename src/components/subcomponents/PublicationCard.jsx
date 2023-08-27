import React from "react";

const PublicationCard = ({ item }) => {
  return (
    <div className="p-4 w-[90%]  md:w-1/5  border relative  rounded-lg bg-white  shadow-md cursor-pointer  flex-col flex gap-4 shrink-0 m-2 ">
      <img src={item.image} className=" object-fill aspect-video" />
      <div className="flex flex-col gap-2 ">
        <h1 className="text-blue-600 text-xl font-bold ">{item.title}</h1>
        <p className="font-thin text-gray-500 text-base">{item.paragraph}</p>
      </div>
    </div>
  );
};

export default PublicationCard;
