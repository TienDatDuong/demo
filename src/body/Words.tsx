import React from "react";
import SubWork from "./sub-work/SubWork";
import Noteworthy from "../body/sub-work/Noteworthy"
function Works() {
  return (
    <div>
      <div
        className="text-text ml-[150px] mr-[150px] py-[100px] 
     font-sans leading-6"
      >
        <div className="ml-[100px] mr-[100px] m-auto flex mt-[10px] mb-[40px] w-[80%]  text-[26px] relative">
          <p className="text-text font-thin ">03.</p>
          <p className="font-sans font-[700] text-[#CCD6F6] ml-2  ">
            Some Things I’ve Built
          </p>
          <p className=" w-[300px] h-[0.2px] bg-[#999] absolute top-[51%] left-[35%]"></p>
        </div>

        {/* ul */}
        <SubWork/>
        <Noteworthy />
      </div>
    </div>
  );
}
export default Works;
