import React from "react";
import { FaLock } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";


const Highlight = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 py-24">
        <div className=" flex md:ml-4 gap-4">
          <div className=" h-10 w-10 rounded-full bg-[#2c541d] flex justify-center items-center">
            <FaLock color="white"/>
          </div>
          <div>
            <div className=" font-medium text-sm">SECURE PAYMENT</div>
            <div className=" text-gray-600">All our payments our SSL secured</div>
          </div>
        </div>
        <div className=" md:h-12 md:w-px w-full h-px bg-gray-200"></div>

        <div className=" flex md:ml-4 gap-4">
          <div className=" h-10 w-10 rounded-full bg-[#2c541d] flex justify-center items-center">
            <FaBox color="white"/>
          </div>
          <div>
            <div className=" font-medium text-sm">SECURE PAYMENT</div>
            <div className=" text-gray-600">All our payments our SSL secured</div>
          </div>
        </div>
        <div className=" md:h-12 md:w-px w-full h-px bg-gray-200"></div>

        <div className=" flex md:ml-4 gap-4">
          <div className=" h-10 w-10 rounded-full bg-[#2c541d] flex justify-center items-center">
            <FaHandHoldingHeart color="white" size={16}/>
          </div>
          <div>
            <div className=" font-medium text-sm">SECURE PAYMENT</div>
            <div className=" text-gray-600">All our payments our SSL secured</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
