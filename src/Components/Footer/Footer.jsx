import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#4a61be] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact Me</h1>
        <h3 className="text-sm md:text-2xl text-center mt-2 font-normal">
          Feel Free to Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex my-1 gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:sumansaha1108@gmail.com" target="_blank">sumansaha1108@gmail.com</a>
        </li>
        <li className="flex my-1 gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/suman-saha-384b36264" target="_blank">linkedin.com/sumansaha</a>
        </li>
        <li className="flex my-1 gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/sumansaha11" target="_blank">github.com/sumansaha11</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;