import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiGpsLine } from "react-icons/ri";
const InputField = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-3xl md:bg-white gap-4 md:gap-0   w-[100%] md:w-[60%] md:shadow-lg p-2 items-center font-thin justify-evenly mt-5 ">
      <div className="flex gap-1  items-center justify-between bg-white shadow-md p-1 rounded-xl md:shadow-none md:justify-center w-[90%] md:w-1/3">
        <BsSearch color="gray" className=" ml-3 md:mr-2 m-0 " size={20} />
        <input
          className="outline-none p-3 w-[90%] md:w-auto   "
          placeholder="Job title"
        />
      </div>
      <div className="flex gap-1  items-center justify-between bg-white shadow-md p-1 rounded-xl md:shadow-none md:justify-center w-[90%] md:w-1/3">
        <ImLocation color="gray" className="md:mr-2 m-0 ml-3" size={20} />
        <input
          className="outline-none p-3 w-[90%] md:w-auto "
          placeholder="location"
        />
      </div>

      <div className="flex gap-1  items-center justify-between bg-white shadow-md p-1 rounded-xl md:shadow-none md:justify-center w-[90%] md:w-1/3 ">
        <RiGpsLine color="gray" className="md:mr-2 m-0 ml-3" size={20} />
        <select
          id="cars"
          name="car"
          className="p-3 w-[90%]  md:w-auto outline-none  "
        >
          <option value="Remotely">Remotely</option>
          <option value="Hybrid">Hybrid</option>
          <option value="WFH">WFH</option>
          <option value="WFO">WFO</option>
        </select>
      </div>
      <div className=" hidden md:flex rounded-full text-center   bg-blue-600  text-white p-3">
        <BsSearch />
      </div>
      <div className=" rounded-full text-center md:hidden w-[90%] flex justify-center item-center  bg-blue-600  text-white p-3">
        <div className="flex gap-3 ">
          <div> Find jobs</div> <BsSearch className="mt-[1.4px]" size={20} />
        </div>
      </div>
    </div>
  );
};

export default InputField;
