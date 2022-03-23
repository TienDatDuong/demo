import React from "react";

function Freelancer(){
    return(
        <div>
              <h2 className="text-[20px] text-[#c5cfef] font-semibold mb-[10px]">
                Full-Stack Developer <span className="text-text font-semibold text-[18px]">@ Freelancer</span>
              </h2>
              <h3 className="mb-[15px] text-[13px] text-[#949ebc]">April 2021 - Present</h3>
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
                  Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station
                  </p>
                </li>
                <li className="flex before:content-['▹'] before:text-text mb-[10px] text-[15px] w-[550px] inline-block mr-[0px]">
                  <p className="pl-[10px]">
                  Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps
                  </p>
                </li>
              </ul>
            </div>
    )
}
export default Freelancer