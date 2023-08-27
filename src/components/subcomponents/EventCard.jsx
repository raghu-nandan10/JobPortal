import React from "react";

const EventCard = ({ item }) => {
  return (
    <div className="p-4  border cursor-pointer rounded-lg  shadow-md  flex-col flex gap-4 w-[95%] md:w-1/4 shrink-0 m-4 ">
      <div className=" text-black p-2 text-base gap-2 flex  ">
        <div> Date:</div>
        <div className="text-blue-600"> {item.date}</div>
      </div>

      <div className="flex flex-col gap-2 ">
        <h1 className="text-blue-600 text-xl font-bold ">{item.title}</h1>
        <p className="font-thin text-gray-500 text-base">{item.paragraph}</p>
      </div>
    </div>
  );
};

export default EventCard;
