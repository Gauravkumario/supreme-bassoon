import React from "react";
import Image from "next/image";
import Data from "../../public/Data.json";

const ProjectCard = () => {
  const posts = Data.map((post) => {
    return (
      <div key={post.id} className="sm:w-[48%] w-full mb-4 relative">
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={post.projectImg}
            alt="post"
            width={1000}
            height={48}
            priority
            className="w-full rounded-md hover:rounded-none"
          />
        </a>
        <h2 className="py-2 md:py-5 text-xl text-center md:text-left text-#bedbfe">
          {post.title}
        </h2>
      </div>
    );
  });

  return (
    <div className="block sm:flex sm:flex-wrap sm:justify-between">{posts}</div>
  );
};

export default ProjectCard;
