import React from "react";

function Loader(){
    return(
        <div className="loader bg-gray33 flex justify-center items-center min-h-screen justify-around ">
            <div className="w-[5px] rounded-sm h-[53px] bg-text rotate-[63deg] absolute left-[49.5%] top-[42%] animate-wiggle duration-100 ease-linear origin-top-right "></div>
            <div className="w-[5px] rounded-sm h-[53px] bg-text absolute left-[46.5%] top-[45.5%] animate-wiggle duration-100 delay-200 ease-linear"></div>
            <div className="w-[5px] rounded-sm h-[53px] bg-text rotate-[297deg] absolute left-[46.2%] top-[52.5%] animate-wiggle duration-100 delay-400 ease-linear origin-top-right "></div>
            <div className="w-[5px] rounded-sm h-[53px] bg-text absolute left-[49%] top-[55.5%] rotate-[246deg] animate-wiggle duration-100 delay-600 ease-linear origin-top-right"></div>
            <div className="w-[5px] rounded-sm h-[55px] bg-text rotate-[0deg] absolute left-[52.5%] top-[45%] animate-wiggle duration-[100ms]    delay-800 ease-linear origin-bottom-left"></div>
            <div className="w-[5px] rounded-sm h-[53px] bg-text rotate-[118deg] absolute left-[52.3%] top-[45.1%] animate-wiggle duration-[100ms] delay-[2000ms] ease-linear origin-top-right "></div>
            <div className="text-[45px] font-semibold absolute top-[44%] left-[49%] text-text animate-wiggle duration-[100ms] delay-600 ">S</div>

        </div>
    )
}

export default Loader