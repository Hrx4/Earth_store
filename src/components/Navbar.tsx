import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="min-h-24 flex justify-between items-center z-10 bg-transparent absolute pr-20 pl-40 w-11/12">
        <div className="font-bold text-2xl tracking-widest ">EARTH STORE</div>
        <div className="flex gap-8">
          <ul className="flex gap-8 items-center tracking-widest">
            <li>
              <Link to={"/"} className="text-base tracking-widest">
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-base">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to={"/shop"} className="text-base">
                SHOP
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-base">
                CONTACT
              </Link>
            </li>
          </ul>
          <ul className="flex gap-4 items-center">
            <li>
              <FaShoppingBag size={27} />
            </li>
            <li>
              <FaUser size={24} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
