import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" h-px w-full bg-gray-200"></div>
      <div className=" h-24 w-full md:flex justify-evenly items-center md:mt-0 mt-10">
        <div>
          <ul className="flex md:flex-row flex-col gap-4 text-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="font-bold text-2xl tracking-widest text-center md:mt-0 mt-10">EARTH STORE</div>
        <div className=" text-center md:mt-0 mt-10">Copyright © 2024 Planet Earth Store</div>
      </div>
    </>
  );
};

export default Footer;
