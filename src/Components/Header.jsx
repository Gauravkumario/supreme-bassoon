// import React from 'react'
import Profile from "../assets/webProfile.webp";

const Header = () => {
  return (
    <div className="my-8 flex justify-around pt-10">
      <div className="">
        <img src={Profile} alt="profile" className="w-96 h-44" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Gaurav Kumar</h1>
        <h2 className="text-3xl my-2 font-medium text-[#D6E8FE]">
          UI/UX Developer
        </h2>
        <p className="text-xl font-thin">
          I&#39;m UI/UX Developer. Developer with a passion for crafting
          intuitive user experiences and leveraging modern technologies to build
          stunning web applications.{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
