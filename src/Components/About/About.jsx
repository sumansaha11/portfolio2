import React from "react";
import AboutImg from "../../assets/bg2.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 mr-20 mt-4" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a backend developer proficient in JavaScript, Express, Node.js and MongoDB, I specialize in creating efficient and scalable applications. With a focus on writing clean, maintainable code, I am dedicated to optimizing performance and implementing best practices in backend development and contributing to building innovative solutions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a frontend developer skilled in ReactJs and Tailwind CSS, I create visually appealing and responsive user interfaces. I excel at transforming designs into interactive web applications while ensuring seamless user experiences. I stay updated with the latest frontend trends and also eager to contribute to build cutting-edge web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;