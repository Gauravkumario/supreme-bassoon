import React from "react";
import Image from "next/image";
import Profile from "../../public/webProfile.webp";

const Header = () => {
  return (
    <div className="my-8 sm:flex justify-around">
      <div className="md:w-96">
        <Image src={Profile} alt="profile" width={1000} height={48} priority />
      </div>
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold ">Gaurav Kumar</h1>
        <h2 className="text-3xl my-2 font-medium text-[#D6E8FE]">
          Frontend Developer
        </h2>
        <p className="text-xl font-thin">
          I&#39;m Frontend Developer. Developer with a passion for crafting
          intuitive user experiences and leveraging modern technologies to build
          stunning web applications.{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
