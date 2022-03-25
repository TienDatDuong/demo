import React from "react";
import logo2 from "../assets/images/logo.png";
import MenuRespon from "./MenuRespon";
import { useState } from "react";
function Header() {
  let Link = [
    { name: "About", id: "01.", link: "#" },
    { name: "Experience", id: "02.", link: "#" },
    { name: "Work", id: "03.", link: "#" },
    { name: "Contact", id: "04.", link: "#" },
  ];
  const [active, setActive] = useState(false);
  const handleActive = () => {};
  return (
    <div className=" bg-[rgba(10, 25, 47, 0.85)] backdrop-blur text-text px-[50px] w-full box-border fixed top-0 leading-5 md:opacity-90 z-50 flex justify-between justify-center items-center p-9 ">
      <div>
        <img src={logo2} alt="" className="w-[55px] h-[50px] block " />
      </div>
      <nav>
        <div>
          <MenuRespon />
        </div>
        <ul className="hidden md:flex">
          {Link.map((item) => {
            return (
              <li className="px-[18px] text-[#a8b2d1]  text-[13px]">
                <a href={item.link}>
                  <span className="text-text">{item.id}</span>
                  {item.name}
                </a>
              </li>
            );
          })}

          <button className="  border-[1px] border-[#59e2c5] text-[13px] leading-6 mr-4 px-[16px] py-[6px] rounded ml-[10px] mt-[-1.5%]">
            Resume
          </button>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
