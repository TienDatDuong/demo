import React from "react";

function Contact() {
  return (
    <div className="mx-[430px] text-center">
      <div className=" mb-[100px] pb-[100px]">
        <h2 className="text-text text-[16px] mb-[10px]">
          {" "}
          <span>04.</span> What’s Next?
        </h2>
        <h2 className="text-[#ccd6f6] text-[60px] mb-[10px] text-[50px] font-semibold">Get In Touch</h2>
        <p className="text-[#999] text-[18px] mb-[50px] ">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <button className="border bottom-[1px] rounded px-[30px] py-[20px] text-text text-[15px] border-text hover:bg-[#112240] font-normal">
          <a href="mailto:wholespace.214@gmail.com">Say Hello</a>
        </button>
      </div>
      <div className="mb-[30px] text-[#999] text-[12px] ">
            <a href="https://github.com/wholespace/">
                <div>Designed & Built by Naruhito Takei</div>
            </a>
      </div>
    </div>
  );
}

export default Contact;
