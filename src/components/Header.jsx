import React, { useState } from "react";
import { PiOfficeChair } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [options, setOptions] = useState(false);
  const handleOptions = () => {
    setOptions(!options);
  };
  return (
    <>
      <div className="flex  w-[100%] items-center justify-between bg-slate-100 p-3 overflow-hidden   ">
        <div className="w-1/3  flex gap-1">
          <span className="text-2xl italic ml-3 ">
            C<span className="text-blue-600">II</span>
          </span>
        </div>
        <div className=" w-1/3 flex text-xl italic text-center justify-center items-center">
          <div className="flex">
            <div className="text-blue-600">NI</div>
            <div>CAREERS</div>
          </div>
        </div>
        <div className=" w-1/4  gap-5 item-center justify-evenly text-center  hidden md:flex    ">
          <select id="cars" name="car" className="p-2 rounded-xl">
            <option value="volvo">Hindi</option>
            <option value="saab">Tamil</option>
            <option value="mercedes">Telugu</option>
            <option value="audi">Malayalam</option>
          </select>
          <div className=" rounded-xl text-center p-3 bg-blue-600 text-white">
            Login/Signup
          </div>
        </div>
        <div
          className="md:hidden w-1/3 flex justify-end"
          onClick={handleOptions}
        >
          <RxHamburgerMenu size={30} color="black" />
        </div>
      </div>
      {options && (
        <div className="w-full bg-slate-100 md:hidden flex flex-col gap-4 justify-center items-center h-[25vh]  ">
          <select id="cars" name="English" className="p-3 w-[90%] rounded-xl">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Malayalam">Malayalam</option>
          </select>
          <div className=" rounded-xl text-center p-3 bg-blue-600 w-[90%] text-white">
            Login/Signup
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
