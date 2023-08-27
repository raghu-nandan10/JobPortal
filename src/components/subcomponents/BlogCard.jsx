import React from "react";

const BlogCard = ({ item }) => {
  return (
    <div className="p-4 w-[95%]  md:w-1/3  border relative     rounded-lg  shadow-md cursor-pointer  flex-col flex gap-4 shrink-0 m-2 ">
      <img src={item.image} className=" object-fill aspect-video" />
      <div className="flex flex-col gap-2 ">
        <h1 className="text-blue-600 text-xl font-bold ">{item.title}</h1>
        <p className="font-thin text-gray-500 text-base">{item.paragraph}</p>
      </div>
      <div className="bg-blue-600 p-2 text-white absolute t-3 cursor-pointer  ">
        Know more
      </div>
    </div>
  );
};

export default BlogCard;
