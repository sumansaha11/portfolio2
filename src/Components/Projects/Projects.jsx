import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/1.jpg";
import bannerImg2 from "../../assets/2.png";
import bannerImg3 from "../../assets/3.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-center text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
        <ProjectCard
          title="Vimio"
          main="This is an ultimate video platform designed for seamless uploading, sharing, and viewing of a diverse range of videos to suit every taste - Express, ReactJS MongoDB, Node.js"
          image={bannerImg1}
        />
        <ProjectCard
          title="ezNotes"
          main="This is a sleek, user-friendly and secure notes app, designed to help individuals to capture their thoughts and manage their tasks - Express, ReactJS, MongoDB, Node.js"
          image={bannerImg2}
        />
        <ProjectCard
          title="Blogly"
          main="A blogging website  where readers can find inspiration, learn something new and connect with a community of like-minded individuals - ReactJS, Tailwind CSS, Node.js, Appwrite"
          image={bannerImg3}
        />
      </div>
    </div>
  );
};

export default Projects;