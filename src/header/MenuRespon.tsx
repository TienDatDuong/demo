import React, { useState } from "react";
function MenuRespon() {
  let Link = [
    { name: "About", id: "01.", link: "#" },
    { name: "Experience", id: "02.", link: "#" },
    { name: "Work", id: "03.", link: "#" },
    { name: "Contact", id: "04.", link: "#" },
  ];
  let [open,setOpen] = useState(false)
  
  return (
    
    <div className="">
      <div onClick={()=>setOpen(!open)} className="block absolute top-[41%] right-[8%] text-[25px] z-50 cursor-pointer  md:hidden" >
        <i className={open ? 'fa-solid fa-xmark' : " fa-solid fa-bars bg-transparent backdrop-blur-xl"}></i>
      </div>

      <ul className={`md:hidden absolute right-0 h-[120vh] top-[-100px] bg-[#112240] flex flex-col items-center justify-center w-[60%] opacity-100 translate-x-full  transition-all duration-500 ease-out ${open ? 'translate-x-0': 'translate-x-full'} `}>
      
        {Link.map((item) => {
          return (
            <li className="px-[18px] text-[#a8b2d1]  text-[15px]">
              <a href={item.link}>
                <span className="text-text block text-center mb-[5px]">{item.id}</span>
                <span className="block text-center mb-[28px]">{item.name}</span>
                
              </a>
            </li>
          );
        })}

        <button className="  border-[1px] border-[#59e2c5] text-[13px] leading-6 mr-4 px-[41px] py-[19px] rounded ml-[10px] mt-[10%]">
          Resume
        </button>
      </ul>
    </div>
  );
}
export default MenuRespon;
