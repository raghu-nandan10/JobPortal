import React from "react";

const PodcastCard = ({ item }) => {
  return (
    <div className="rounded-full h-[250px] w-[250px]  shrink-0 m-4 ">
      <img src={item.img} />
    </div>
  );
};

export default PodcastCard;
