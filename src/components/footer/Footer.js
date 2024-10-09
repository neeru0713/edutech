import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

export const Footer = () => {
  return (
    <div className="pt-20 relative">
      <div class="absolute rounded-full w-full h-20 bottom-[460px] md:bottom-[150px] bg-white"></div>
      <div className="w-full h-[500px] md:h-[200px] bg-[#5845ee] pt-16 flex flex-col px-[20%]">
        <div className="flex items-center">
          <div className="font-semibold text-4xl text-white">EduTech+</div>
          <ul className="pl-[25%] flex flex-col md:flex-row text-white font-semibold gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact sections</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>

       
      </div>
      <div className="w-full flex flex-col items-center justify-center relative">
        <hr className="absolute h-1 w-[80%] bottom-12" />
      </div>
      <ul className="flex gap-2 items-center absolute bottom-0 md:bottom-3 pt-2 right-[12%]">
        <li>
          <AiOutlineLinkedin className="fill-white h-5 w-5 md:h-7 md:w-7" />
        </li>
        <li>
          <CiYoutube className="fill-white h-5 w-5 md:h-7 md:w-7" />
        </li>
        <li>
          <FaInstagramSquare className="fill-white h-4 w-4 md:h-6 md:w-6" />
        </li>
        <li>
          <FaSquareTwitter className="fill-white h-4 w-4 md:h-6 md:w-6" />
        </li>
        <li>
          <ImFacebook2 className="fill-white h-4 w-4 md:h-6 md:w-6" />
        </li>
      </ul>

       <p className="absolute bottom-5 md:bottom-4 text-white text-xs md:text-md left-[12%]">Copyright © 2024 Crio. All rights reserved.</p>
    </div>
  );
};
