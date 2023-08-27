import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full  h-[40vh] flex flex-col gap-10 justify-center items-center relative">
      <div className="text-2xl flex gap-1 text-slate-600 font-bold">
        <div>Contact</div>
        <div className="text-blue-600">Us</div>
      </div>
      <div className="w-[90%] flex gap-4 justify-evenly rounded-lg border p-4 items-center   ">
        <div className="rounded-full p-3 hover:text-blue-600 hover:bg-slate-100 cursor-pointer transition-all duration-100  flex justify-center items-center ">
          <AiFillInstagram size={40} />
        </div>
        <div className="rounded-full p-3   hover:text-blue-600 cursor-pointer hover:bg-slate-100  transition-all duration-100 ">
          <AiFillLinkedin size={40} />
        </div>
        <div className="rounded-full p-3  hover:text-blue-600 cursor-pointer hover:bg-slate-100  transition-all duration-100 ">
          <AiFillMail size={40} />
        </div>
        <div className="rounded-full p-3 hover:text-blue-600 cursor-pointer hover:bg-slate-100  transition-all duration-100  ">
          <AiFillFacebook size={40} />
        </div>
      </div>
      <div className="w-[100%] bg-blue-600 p-2 text-white absolute  bottom-0 text-center flex gap-2 justify-center items-center">
        Crafted with Passion by Your_Name
      </div>
    </div>
  );
};

export default Footer;
