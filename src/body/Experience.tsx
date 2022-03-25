import React from "react";
import { useState } from "react";
function Experience() {
  const [toggle,setToggle] = useState<number>(1)
  const handleFreelancer = (index:any) => {
    setToggle(index)
  };
  

  return (
    <div
      className="text-text md:ml-[150px] md:mr-[150px] py-[100px] 
      font-sans leading-6"
    >
      <div className="sm:mx-[80px] md:mx-[162px] m-auto">
        <div className=" flex mt-[10px] mb-[40px] w-[80%] whitespace-nowrap text-[26px] relative">
          <p className="text-text font-thin ">02.</p>
          <p className=" ml-0  font-sans font-[700] text-[#CCD6F6] ml-2  ">
            Where I’ve Worked
          </p>
          <p className=" w-[300px] h-[0.2px] bg-[#999] absolute fixed top-[51%] left-[46%] bottom-[10%]"></p>
        </div>

        <div className="flex relative sm:flex-col md:flex-row">
          {/* tittle */}
          <div className="mt-[-12px] md:mr-[20px] sm:pb-[20px] ">
            <div className="flex md:flex-col">
              <div className={toggle === 1 ? "tab-title active " : "tab-title"} onClick={()=> handleFreelancer(1)} >
                Freelancer
              </div>
              <div className={toggle === 2 ? "tab-title active" : "tab-title"} onClick={()=> handleFreelancer(2)}>
                Win-Win
              </div>
              <div className={toggle === 3 ? "tab-title active" : "tab-title"} onClick={()=> handleFreelancer(3)}>
                Codegram
              </div>
            </div>
          </div>
          {/* content */}
          <div>
            {/* freelancer */}
            <div className={toggle === 1 ? "block" : "hidden"} >
              <h2 className="text-[20px] text-[#c5cfef] font-semibold mb-[10px]">
                Full-Stack Developer{" "}
                <span className="text-text font-semibold text-[18px]">
                  @ Freelancer
                </span>
              </h2>
              <h3 className="mb-[15px] text-[13px] text-[#949ebc]">
                April 2021 - Present
              </h3>
              <ul className="text-[#999]">
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Engineered and maintained major features of Starry's
                    customer-facing web app using ES6, Handlebars, Backbone,
                    Marionette and CSS
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Proposed and implemented scalable solutions to issues
                    identified with cloud services and applications responsible
                    for communicating with Starry Station
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Interfaced with user experience designers and other
                    developers to ensure thoughtful and coherent user
                    experiences across Starry’s iOS and Android mobile apps
                  </p>
                </li>
              </ul>
            </div>
            {/* win-win */}
            <div className={toggle === 2 ? "block" : "hidden"} >
              <h2 className="text-[20px] text-[#c5cfef] font-semibold mb-[10px]">
                Full-Stack Developer{" "}
                <span className="text-text font-semibold text-[18px]">
                  @ Win-Win
                </span>
              </h2>
              <h3 className="mb-[15px] text-[13px] text-[#949ebc]">
                July 2016 - April 2021
              </h3>
              <ul className="text-[#999]">
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Win-Win is a IT service company which has been started in
                    2017.It islocated in Italy
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    RadioTokenSwap: Frontend of Defi with Vue js
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Quras : Frontend of DApp with React js
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    PastelUtility : Utility for Pastel Blockchain with goLang
                  </p>
                </li>
              </ul>
            </div>
            {/* Codegram */}
            <div className={toggle === 3 ? "block" : "hidden"} >
              <h2 className="text-[20px] text-[#c5cfef] font-semibold mb-[10px]">
                Full-Stack Developer{" "}
                <span className="text-text font-semibold text-[18px]">
                  @ Codegram
                </span>
              </h2>
              <h3 className="mb-[15px] text-[13px] text-[#949ebc]">
                April 2014 - Jun 2016
              </h3>
              <ul className="text-[#999]">
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Codegram is an International Digital Marketing Plan with the
                    aim ofimproving its online positioning in foreign markets{" "}
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    PPH Health : Health Care site with React js{" "}
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Comey & Barrow : Booking site with Vue Js{" "}
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Square Online Store: E-commerce system withAngular 2+{" "}
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Kitey Tech: Online school with Angular 2+{" "}
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                    Next Round: Blog Site Backend with node js{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
