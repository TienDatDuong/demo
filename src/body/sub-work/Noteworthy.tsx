import React from "react";
import { useState } from "react";
import Data_note from "../sub-work/Data_Note";
function Noteworthy() {
  const [scroll, setScroll] = useState(6);
  const slice = Data_note.cartData.slice(0, scroll);
  const handleScroll = () => {
    switch (scroll) {
      case 6:
        setScroll(scroll + 1);
        break;
      case 7:
        setScroll(scroll - 1);
        break;
    }
  };
  return (
    <div className="mx-[100px] pb-[62px] mb-[100px]">
      <div className="text-center mb-[50px]">
        <h2 className="block text-[32px] text-[#ccd6f6] p-[20px]">
          Other Noteworthy Projects
        </h2>
        <h3 className=" text-[14px] relative inline-block pb-[0px] transition-all ease-in duration-1000 before::opacity-50 before:content-[''] before:absolute before:left-[0%] before:bottom-0 before:w-[0%] before:h-[0.5px] before:bg-text hover:before:w-[100%] hover:before:right-0 ">view the archive</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-[80px]">
        {slice.map((item, index) => {
          return (
            <div className="transition-all ease-linear duration-200 hover:translate-y-[-10px] shadow-xl hover:relative ">
              <div className="bg-[#112240] h-[392px] p-6 hover:text-text flex flex-col justify-between">
                <header className="">
                  <div className="flex justify-between pb-[25px]">
                    <div>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-[35px] h-[38px]"
                      >
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex">
                      {" "}
                      <a
                        href="https://github.com/wholespace/laravel-large"
                        aria-label="GitHub Link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-[10px] "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="w-[24px] h-[22px] mt-[10px] text-[#999] hover:text-text"
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      {item.id !== 1 || 2 ? <a
                        href="https://dlopsai.netlify.app/"
                        aria-label="External Link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="w-[24px] h-[22px] mt-[10px] text-[#999] hover:text-text"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a> : 'hidden'}
                      
                    </div>
                  </div>
                  <h3 className="card-color hover:text-text">{item.tittle}</h3>
                  <p className="text-[13px] text-[#999] ">{item.sub_title}</p>
                </header>

                <footer className="">
                  <ul className="text-[13px] flex text-[#999]">
                    <li>{item.footer_a}</li>
                    <li className="ml-[20px]">{item.footer_b}</li>
                    <li className="ml-[20px]">{item.footer_c}</li>
                    <li className="ml-[20px]">{item.footer_d}</li>
                  </ul>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center content-center mt-[100px]">
        <button
          className="border bottom-[1px] rounded px-[24px] py-[16px] text-text text-[13px] border-text hover:bg-[#112240]"
          onClick={handleScroll}
        >
          {scroll > 6 ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
export default Noteworthy;
