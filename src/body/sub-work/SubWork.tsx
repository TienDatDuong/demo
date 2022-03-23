import React from "react";
import Demo from "../../assets/images/demo.png";
import Doctor from "../../assets/images/Doctor.png"
import LucaMail from "../../assets/images/LucaMail.png"
import Uniclix from "../../assets/images/Uniclix.png"
import Solve from "../../assets/images/Solve.png"
import Safari  from "../../assets/images/Safari.png"
import Web3 from "../../assets/images/Web3.png"
function SubWork(){
    return(
        <ul className="ml-[100px] mr-[100px] m-auto flex flex-col mt-[45px] mb-[40px] w-[80%]">
            {/* 1 */}
          <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* image */}
            <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={Demo}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex absolute right-[-2%] top-[-5%]">
              <p className="block text-right w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-right w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">Chowbus</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-right">
                  This project was developed with Next.js. Chowbus is a food
                  delivery platform providing high-quality authentic Asian food,
                  empowering local independent restaurants and stores through
                  the technology.
                </p>
              </div>
              <ul className="flex justify-end w-[100%] text-right text-[13px] text-[#999]">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                  Next.js
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                  React.js
                </li>
              </ul>
              <div className="w-[100%] text-right flex justify-end text-[#CCD6F6] ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-right"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </li>
          {/* 2 */}
          <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex  ">
              <p className="block text-left w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-left w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">Doctor Client</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-left">
                This project was developed with Next.js and BootStrap. A video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer.Lorem Ipsum has been the industry standard dummy text ever since 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <ul className="flex justify-start w-[100%] text-left text-[13px] text-[#999] ">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                  Next.js
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                Node.js
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                BootStrap
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                Font Awesome
                </li>
              </ul>
              <div className="w-[100%] text-left flex justify-start text-[#CCD6F6] ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-left"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
             {/* image */}
             <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10 top-[9%]">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={Doctor}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
          </li>
          {/* 3 */}
          <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* image */}
            <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={LucaMail}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex absolute right-[-2%] top-[0%]">
              <p className="block text-right w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-right w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">LucaMail</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-right">
                LucaMail is an Open Source, Cross-Platform Email Client. LucaMail is developed to provide a cross-platform alternative to Email Clients that already exists.
                </p>
              </div>
              <ul className="flex justify-end w-[100%] text-right text-[13px] text-[#999]">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                Node.js
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                ElectronJs
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                ImapFlow
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                NodeMailer
                </li>
              </ul>
              <div className="w-[100%] text-right flex justify-end text-[#CCD6F6] ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-right"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </li>
            {/* 4 */}
            <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex  ">
              <p className="block text-left w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-left w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">Uniclix</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-left">
                This project was developed with PHP and Bootstrap.
                </p>
              </div>
              <ul className="flex justify-start w-[100%] text-left text-[13px] text-[#999] ">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                PHP
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                Node.js
                </li>
               
              </ul>
              <div className="w-[100%] text-left flex justify-start text-[#CCD6F6] ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-left"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
             {/* image */}
             <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10 top-[-5   %]">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={Uniclix}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
            </li>
            {/* 5 */}
            <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* image */}
            <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={Solve}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex absolute right-[-2%] top-[-5%]">
              <p className="block text-right w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-right w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">Solve problem with dlops</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-right">
                We are a network of designers, software engineers, data scientists and marketers whose passion for digital technologies binds us together to form this network of talents with abundant and diverse capabilities to tackle the most complex applications.
                </p>
              </div>
              <ul className="flex justify-end w-[100%] text-right text-[13px] text-[#999]">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                React
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                Node
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                Next.js
                </li>
              </ul>
              <ul className="flex justify-end w-[100%] text-right text-[13px] text-[#999]">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-right"
                >
                  <i className="fa-brands fa-github p-[10px] h-[40px] w-[40px] text-[20px]"></i>
                </a>
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-right"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                </li>
              </ul>           
            </div>
          </li>
            {/* 6 */}
            <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex  ">
              <p className="block text-left w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-left w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">Safari Trek Beach</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-left">
                This project was developed with Laravel and Vue. Safari Trek Beach is the biggest marketplace for Tanzania tour packages. This platform help travelers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. This platform is the platform when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris, or Mountain Climbing tours as well as Beach Holidays.
                </p>
              </div>
              <ul className="flex justify-start w-[100%] text-left text-[13px] text-[#999] ">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                Laravel
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                PHP
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                Vue.js
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-left inline ">
                Node.js
                </li>
              </ul>
              <div className="w-[100%] text-left flex justify-start text-[#CCD6F6] ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-left"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
             {/* image */}
             <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10 top-[16%]">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={Safari}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
          </li>
          {/* 7 */}
          <li className="grid grid-cols-12 relative mb-[100px] ">
            {/* image */}
            <div className="bg-[#64ffda] w-[580px] h-[310px] rounded opacity-100 hover:opacity-95 -z-10 col-span-7 relative visible z-10">
              <a
                href="https://www.chowbus.com/"
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <div>
                  <img
                    src={Web3}
                    alt=""
                    className="w-[580px] h-[310px] opacity-50 grayscale transition ease-in-out hover:grayscale-0 hover:opacity-100 rounded z-50 "
                  />
                </div>
              </a>
            </div>
            {/* context */}
            <div className="w-[500px] z-20 flex-wrap col-span-5 flex absolute right-[-2%] top-[-2%]">
              <p className="block text-right w-[100%] text-[13px] py-[10px]">
                Featured Project
              </p>
              <h3 className="block text-right w-[100%] text-[28px] font-semibold text-[#CCD6F6] pb-[20px]">
                <a href="https://www.chowbus.com/">Web3 Crypto App</a>
              </h3>
              <div className="p-[25px] bg-[#112240] w-[100%]">
                <p className="text-[15px] flex flex-wrap text-[#999] w-[100%] text-right">
                This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.
                </p>
              </div>
              <ul className="flex justify-end w-[100%] text-right text-[13px] text-[#999]">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                React
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                Solidity
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                Blockchain
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                Ethers
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                Hardhat
                </li>
              </ul>
              <ul className="flex justify-end w-[100%] text-right text-[13px] text-[#999]">
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-righ inline">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-right"
                >
                  <i className="fa-brands fa-github p-[10px] h-[40px] w-[40px] text-[20px]"></i>
                </a>
                </li>
                <li className="ml-[20px] mb-[15px] mt-[25px]  leading-4  text-right inline ">
                <a
                  href="https://www.chowbus.com/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="leading-3 text-right"
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
                    className="p-[10px] h-[42px] w-[40px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                </li>
              </ul> 
            </div>
          </li>
        </ul>
    )
}

export default SubWork