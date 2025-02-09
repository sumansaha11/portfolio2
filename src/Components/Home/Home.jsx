import React from "react";
import avatarImg from "../../assets/bg1.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm mt-4 md:text-2xl tracking-tight ">
          I'm a passionate & dedicated Web Developer and my expertise is to create Backend design, Frontend design and many more....
        </p>
        <a href="https://drive.google.com/file/d/1KhAkpcAs5tgbSoF10KzhmzATomFmXhGU/view?usp=drive_link" target="_blank">
          <button
            className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Download CV
          </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;