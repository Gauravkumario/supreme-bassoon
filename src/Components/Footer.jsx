import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <h2 className="text-white text-3xl font-semibold text-center pb-5">
        Let&apos;s create awesome products!
      </h2>
      <h3 className="text-#bedbfe text-xl font-light text-center px-0 sm:px-4">
        From enhancing your online presence to tackling UX/UI design challenges,
        I&apos;m here to discuss and elevate your project.
      </h3>
      <div className="grid place-items-center my-6 md:my-12">
        <a href="mailto:gk445891@gmail.com">
          <button className="bg-blue-600 hover:bg-blue-900 py-2 px-10 rounded text-xl font-medium ">
            Say Hello
          </button>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center text-md text-#bedbfe">
        <div>Stalk me here</div>
        <hr className="border-1 border-blue-950 my-2 sm:m-0 w-3/5" />
        <div className="flex gap-4 mb-4 sm:mb-0">
          <a
            href="https://github.com/Gauravkumario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/gk2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/gkgaurv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <p className="text-center tracking-widest text-xs">
        &copy; {new Date().getFullYear()} Gaurav Kumar
      </p>
    </>
  );
};

export default Footer;
