import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="min-h-24 flex flex-wrap justify-between items-center z-10 bg-transparent  mx-auto max-w-[1180px] px-4">
        <div className="font-bold text-2xl tracking-widest ">EARTH STORE</div>
        <div className="flex gap-8">
          <ul className="gap-8 items-center tracking-widest md:flex hidden">
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
              <Link to={"/cart"}>
                <FaShoppingBag size={27} />
              </Link>
            </li>
            <li className=" md:block hidden">
              <Link to={"/profile"}>
              <FaUser size={24} /></Link>
            </li>
            <li className=" md:hidden block bg-black p-2 cursor-pointer">
              <GiHamburgerMenu color="white" onClick={()=>setOpen(!open)} />
            </li>
          </ul>
        </div>
      </div>
      <div className={open ? "h-auto w-full absolute z-50 bg-white" : "h-auto w-full hidden"}>
        <ul className="gap-8 items-center tracking-widest md:hidden">
          <li className="text-center p-2 border">
            <Link to={"/"} className="text-base tracking-widest">
              HOME
            </Link>
          </li>
          <li className="text-center p-2 border">
            <Link to={"/about"} className="text-base">
              ABOUT
            </Link>
          </li>
          <li className="text-center p-2 border">
            <Link to={"/shop"} className="text-base">
              SHOP
            </Link>
          </li>
          <li className="text-center p-2 border">
            <Link to={"/contact"} className="text-base">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
