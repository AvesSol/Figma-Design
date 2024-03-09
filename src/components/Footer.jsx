import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-[452px] bg-[#212731]">
      <div className="content w-[80%] mx-auto flex justify-between items-center h-[100%] flex-wrap">
        <div className="left flex justify-start items-start gap-4 flex-col ">
          <li className="text-[16px] list-none text-[#B6BDC4]">Categories</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">Web Builder</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">Hosting</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">Data Center</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">
            Robotic-Automation
          </li>
        </div>
        <div className="middle flex justify-start items-start gap-4 flex-col ">
          <li className="text-[16px] list-none text-[#B6BDC4]">Contact</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">contact</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">Privacy Policy</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">
            Terms of Services
          </li>
          <li className="text-[13px] list-none text-[#B6BDC4]">Categories</li>
          <li className="text-[13px] list-none text-[#B6BDC4]">about</li>
        </div>
        <div className="right text-[#B6BDC4] flex justify-center items-center">
          Top Relevant <IoIosArrowDown className="mx-2 " fontSize={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
