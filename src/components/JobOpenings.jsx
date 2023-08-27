import React from "react";
import InputField from "./subcomponents/InputField";

const JobOpenings = () => {
  return (
    <div className="w-[100%] h-[70vh] flex flex-col bg-slate-100   items-center p-4 gap-8  md:bg-jobOpenings   bg-right bg-no-repeat    ">
      <div className="w-[90%] md:w-[80%] flex flex-col md:mt-20 ">
        <div className="flex gap-8 flex-col  md:mt-52   ">
          <div className=" flex flex-col text-2xl md:text-5xl font-bold text-center  gap-2 ">
            <div className="text-gray-600 ">We Know the</div>
            <div className="text-gray-600 flex gap-3 justify-center items-center ">
              <div> way to</div> <div className="text-blue-600"> Success.</div>
            </div>
          </div>
          <div className=" text-gray-500 font-extrathin text-lg text-center ">
            Growing a business means having a right people in your Team
          </div>
        </div>
      </div>
      <InputField />
    </div>
  );
};

export default JobOpenings;
