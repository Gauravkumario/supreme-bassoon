import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="border-t border-b border-1 border-blue-950 pt-8 my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-white font-semibold">Portfolio</h2>
        <a
          href="https://github.com/Gauravkumario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex gap-2 justify-between items-center text-xl">
            See All <FaAngleDoubleRight />
          </h2>
        </a>
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
