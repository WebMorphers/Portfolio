import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="lg:py-[10%]   bg-gradient-to-b from-[#3085C3] to-[#5CD2E6] container mx-auto pt-20 flex items-center justify-center flex-col min-w-full">
      <h1 className="xs:text-[50px] sm:text-[60px] md:text-[66px]" >Projects</h1>
      <div className="mt-4" id="te">
        <p className="xs:text-[18px] sm:text-[20px] md:text-[20px]  ">
          With a wealth of experience in web development, we are a team of
          dedicated creators driven by innovation and technical excellence. Our
          diverse portfolio includes successful collaborations with a wide range
          of clients, from startups to large enterprises. We are committed to
          crafting tailor-made websites that combine aesthetics, functionality,
          and performance. Our cutting-edge technical expertise enables us to
          embrace the latest technologies to meet each client's unique needs. We
          take pride in continuously pushing the boundaries of creativity to
          deliver exceptional online experiences.
        </p>
      </div>
    </div>
  );
};

export default Projects;
