import React from "react";
import Subintro from "./S_About_Intro/S_intro";
function Intro() {
  return (
    <div>
      <div className=" bg-[#0a192f] w-[100%] h-[100%] sm:mb-[400px]  md:mb-[300px] sm:mt-[300px] md:mt-[200px]">
        {/* fixed left */}
        <div className="md:bottom-0 md:left-0 md:top-0 md:w-[150px] md:mt-[100px] sm:hidden">
          <a className="" href="https://github.com/wholespace">
            <i className="fa-brands fa-github text-[18px] text-[#8892b0] fixed bottom-[310px] left-[42px] hover:text-text hover:translate-y-[-3px] "></i>
          </a>
          <a className="" href="https://t.me/wholespace1">
            <i className="fa-brands fa-telegram text-[18px] text-[#8892b0] fixed bottom-[260px] left-[42px] hover:text-text hover:translate-y-[-3px] "></i>
          </a>
          <a className="" href="https://discord.com/invite/G6AK42FR">
            <i className="fa-brands fa-discord text-[18px] text-[#8892b0] fixed bottom-[210px] left-[42px] hover:text-text hover:translate-y-[-3px] "></i>
          </a>
          <a className="" href="https://www.linkedin.com/authwall?trk=bftrkInfo=AQFnxHUlqdSZ9wAAAX-TS7pAJ30DURUyKcR2WaQsPos7juTQJAxo3zGWEY63xc2ihnKrJ3iG4j2I1WddVsF_WnzWK5Qxw6pb6osBiG6GwGl0ItDQqJzgV0KM_UwhilcX2zb6nMI=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwholespace">
            <i className="fa-brands fa-linkedin text-[18px] text-[#8892b0] fixed bottom-[160px] left-[42px] hover:text-text hover:translate-y-[-3px] "></i>
          </a>
          <a className="" href="https://codepen.io/wholespace">
            <i className="fa-brands fa-codepen text-[18px] text-[#8892b0] fixed bottom-[110px] left-[42px] hover:text-text hover:translate-y-[-3px] "></i>
          </a>
          <div className="bg-[#8892b0] w-[2px] h-[80px] fixed bottom-0 left-[50px] "></div>
        </div>
        {/* info */}
        <div className="mt-[100px] sm:ml-[90px] md:ml-[265px] mr-[100px]">
          <h1 className="sm:pb-[10px] text-[16px] text-text font-sans">Hi, my name is</h1>
          <h2 className="sm:text-[28px] md:text-[68px] text-[#CCD6F6] font-sans font-extrabold">
            Naruhito Takei.
          </h2>
          <h3 className="sm:text-[2 8px] md:text-[68px] text-[#8892B0] font-sans font-extrabold mt-[10px]">
            I build things for the web.
          </h3>
          <p className="text-[18px] text-[#8892B0] font-sans font-thin w-[550px] mt-5">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences.
          </p>
        </div>
        {/* fixed right */}
        <div className="md:fixed md:bottom-0 md:right-0 md:top-0 md:w-[150px] md:mt-[100px] sm:hidden ">
          <a
            href="mailto:wholespace.214@gmail.com"
            className="text-[12px] text-[#8892b0] fixed bottom-[210px] right-[-46px] rotate-90 p-[10px] hover:text-text hover:translate-y-[-3px] "
          >
            wholespace.214@gmail.com
          </a>
          <div className="bg-[#8892b0] w-[2px] h-[80px] fixed bottom-0 right-[50px] "></div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
