import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" h-px w-full bg-gray-200"></div>
      <div className="absolute h-24 w-full flex justify-evenly items-center">
        <div>
          <ul className="flex gap-4">
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
        <div className="font-bold text-2xl tracking-widest ">EARTH STORE</div>
        <div>Copyright © 2024 Planet Earth Store</div>
      </div>
    </>
  );
};

export default Footer;
