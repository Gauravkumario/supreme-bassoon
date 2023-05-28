// import React from 'react'
import Data from "../Data.json";
console.log(Data);

const ProjectCard = () => {
  const posts = Data.map((post) => {
    return (
      <div key={post.id} className="w-[48%] mb-8 relative">
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          <img
            src={post.projectImg}
            alt="post"
            className="w-full rounded-md hover:rounded-none"
          />
        </a>
        <h2 className="py-5 text-2xl text-#bedbfe">{post.title}</h2>
      </div>
    );
  });

  return <div className="flex flex-wrap justify-between">{posts}</div>;
};

export default ProjectCard;
