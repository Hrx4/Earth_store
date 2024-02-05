import React from "react";
import { FaLock } from "react-icons/fa";

const Highlight = () => {
  return (
    <>
      <div className="flex justify-center items-center h-56">
        <div className=" flex mx-10 gap-4">
          <div className=" h-10 w-10 rounded-full bg-[#2c541d] flex justify-center items-center">
            <FaLock color="white"/>
          </div>
          <div>
            <div className=" font-medium text-sm">SECURE PAYMENT</div>
            <div className=" text-gray-600">All our payments our SSL secured</div>
          </div>
        </div>
        <div className=" h-12 w-px bg-gray-200"></div>

        <div className=" flex mx-10 gap-4">
          <div className=" h-10 w-10 rounded-full bg-[#2c541d] flex justify-center items-center">
            <FaLock color="white"/>
          </div>
          <div>
            <div className=" font-medium text-sm">SECURE PAYMENT</div>
            <div className=" text-gray-600">All our payments our SSL secured</div>
          </div>
        </div>
        <div className=" h-12 w-px bg-gray-200"></div>

        <div className=" flex mx-10 gap-4">
          <div className=" h-10 w-10 rounded-full bg-[#2c541d] flex justify-center items-center">
            <FaLock color="white"/>
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
