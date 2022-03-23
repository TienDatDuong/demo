import React from "react";
import logo from "../assets/images/kakaka.png";
function About(): JSX.Element {
  return (
    <div
      className="text-text ml-[150px] mr-[150px] py-[100px] 
     font-sans leading-6"
    >
      <div className="mx-[162px] m-auto flex mt-[10px] mb-[40px] w-[80%] text-[26px] relative">
        <p className="text-text font-thin ">01.</p>
        <p className="   font-sans font-[700] text-[#CCD6F6] ml-2  ">About Me</p>
        <p className=" w-[300px] h-[0.2px] bg-[#999] absolute top-[51%] left-[19%]"></p>
      </div>

      <div className="flex ">
        {/* left */}
        <div className="w-[42%] text-[#999] ml-[200px]  ">
          <div className="mb-[15px]">
            <p className="break-words  text-[14px]">
              Hello! My name is Naruhito and Full Stack developer.
            </p>
            <p className=" text-[16px]">
              REACT | Angular | Node.js | MEAN stack | REACT Native | PHP |
              Laravel | MongoDB | Android | WordPress plugins Development,
              Social media API expert with and 9+ years of web application
              development experience.
            </p>
          </div>
          <div className="mb-[15px] text-[16px]">
            <p>
              I believe in client satisfaction. I need an opportunity to prove
              my skills. Just a talk and we can have a better understanding and
              can work together for a long time.
            </p>
          </div>
          <div className="mb-[15px] text-[16px] whitespace-normal ">
            <p className="inline"> I have also working experience with Model View Controller (MVC)
              and have been involved in maintaining versions of source code
              using </p>
              <div className="inline ">
                <a
                  href="https://github.com/wholespace"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-text text-[16px] relative inline-block pb-[0px] transition-all ease-in duration-1000 before::opacity-50 before:content-[''] before:absolute before:left-[0%] before:bottom-0 before:w-[0%] before:h-[0.5px] before:bg-text hover:before:w-[100%] hover:before:right-0 "
                >
                  GIT.
                </a>
                {/* <p className="bg-text w-[30px] h-[2px] relative left-[12%] "></p> */}
                
              </div >
              <div className="inline ml-[4px] text=[#999]">
                 I have also designed and developed web user controls, pages,
              validation controls, CSS files using technologies like AJAX 
              Toolkit, jQuery, JavaScript, Bootstrap UI controls, XML, HTML, and
              DHTML.
              </div>
          </div>
          <div className="mb-[15px] text-[17px]">
            <p>Qualifications and experience:</p>
          </div>
          <div>
            <ul className="text-[12px] flex flex-wrap">
              <li className="flex before:content-['▹'] before:text-text mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">JavaScript (ES6+)</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">TypeScript</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">React</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">Electron</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">Node.js</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">BlockChain</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">Vue.js</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">Angular</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">Next.js</p>
              </li>
              <li className="flex before:content-['▹'] before:text-text  mb-[10px] w-[180px] inline-block mr-[0px]">
                <p className="pl-[10px]">Figma</p>
              </li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="w-[40%] ml-[65px] ">
          <div className="relative transition ease-in-out hover:absolute ">
            <div className="bg-[#15ebc0] w-[300px] h-[300px] opacity-100 hover:opacity-95 rounded  ">
              <img
                src={logo}
                alt=""
                className="w-[300px] h-[300px] opacity-50 transition ease-in-out hover:opacity-100 rounded z-50 "
                data-main-image
              />
            </div>
            <div className="w-[300px] h-[300px] border-2 border-teal-400 rounded top-[6%] left-[4%] absolute -z-50 hover:absolute hover:top-[2%] hover:left-[2%] hover:origin-top-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
