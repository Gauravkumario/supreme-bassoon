// import React from 'react'
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="border-t border-b border-1 border-blue-950 pt-16 my-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl text-white font-semibold">Portfolio</h2>
        <a
          href="https://github.com/Gauravkumario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="flex justify-between items-center text-xl">
            See All <ion-icon name="arrow-forward-outline" />
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
