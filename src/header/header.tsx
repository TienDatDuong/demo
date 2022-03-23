import React from "react";
import logo2 from "../assets/images/logo.png";

function Header() {
  let Link = [
    { name: "About", id: "01.", link: "#" },
    { name: "Experience", id: "02.", link: "#" },
    { name: "Work", id: "03.", link: "#" },
    { name: "Contact", id: "04.", link: "#" },
  ];
  return (
    <div className="bg-gray33 text-text h-[100px] w-full box-border fixed top-0 left-0 leading-5 opacity-90 z-50 ">
      <div className="mx-[30px]  md:flex justify-between justify-center  items-center h-[100px]  ">
        <div>
          <img src={logo2} alt="" className="w-[55px] h-[50px] " />
        </div>
        <ul className="md:flex md:top-0 md:left-0 md:right-0">
          <div>
          <i className="fa-solid fa-bars md:hidden "></i>  
          </div>
          {Link.map((item) => {
            return (
              <li className="px-[18px] text-[#a8b2d1]  text-[13px]">
                <a href={item.link}>
                  <span className="text-text">{item.id}</span>{item.name}
                </a>
              </li>
            );
          })}

          <button className="  border-[1px] border-[#59e2c5] text-[13px] leading-6 mr-4 px-[16px] py-[6px] rounded ml-[10px] mt-[-1.5%]">
            Resume
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Header;
