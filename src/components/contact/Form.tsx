import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Form = () => {
  return (
    <>
      <div className=" flex h-screen w-full gap-28 items-center px-52 my-20">
        <div className=" h-5/6  w-full justify-around flex flex-col">
          <div className=" text-4xl font-medium">Get In Touch</div>
          <div className=" shadow-md h-5/6 p-10 flex flex-col">
            <form action="" className=" flex flex-col h-full justify-evenly">
              <input
                type="text"
                placeholder="Full name"
                className=" h-14 border border-gray-400 outline-none p-3"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className=" h-14 border border-gray-400 outline-none p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className=" h-14 border border-gray-400 outline-none p-3"
              />
              <textarea
                placeholder="Message"
                className=" h-28 border border-gray-400 outline-none p-3"
              />
            </form>
            <div className=" w-32 h-10 bg-[#74a84a] text-white tracking-widest text-center p-2">
              SEND NOW
            </div>
          </div>
        </div>

        <div className=" h-5/6  w-full justify-around flex flex-col">
          <div className=" text-4xl font-medium">Talk To Us</div>
          <div className=" h-5/6  flex flex-col gap-14 mt-5">
            <div className="flex h-16  gap-6 ">
              <div className="border rounded-full h-10 w-10 flex justify-center items-center border-[#74a84a]">
                <CiMail />
              </div>
              <div>
                <div className=" text-base font-normal">EMAIL</div>
                <div className=" text-2xl">something@tyler.com</div>
              </div>
            </div>
            <div className="flex h-16  gap-6 ">
              <div className="border rounded-full h-10 w-10 flex justify-center items-center border-[#74a84a]">
                <MdOutlinePhoneInTalk />
              </div>
              <div>
                <div className=" text-base font-normal">PHONE NUMBER</div>
                <div className=" text-2xl">202-555-0188</div>
              </div>
            </div>
            <div className="flex h-16  gap-6 ">
              <div className="border rounded-full h-10 w-10 flex justify-center items-center border-[#74a84a]">
                <CiLocationOn />
              </div>
              <div>
                <div className=" text-base font-normal">ADDRESS</div>
                <div className=" text-2xl">
                  2727 Ocean Road,
                  <br />
                  Malibu, CA, 90264
                </div>
              </div>
            </div>
            <div className=" font-semibold flex flex-col gap-5 pl-16">
              Follow Us:
              <ul className="flex gap-5">
                <li className=" bg-[#74a84a] rounded-full h-8 w-8 flex justify-center items-center">
                  <FaFacebookF color="white" />
                </li>
                <li className=" bg-[#74a84a] rounded-full h-8 w-8 flex justify-center items-center">
                  <FaTwitter color="white" />
                </li>
                <li className=" bg-[#74a84a] rounded-full h-8 w-8 flex justify-center items-center">
                  <FaLinkedinIn color="white" />
                </li>
                <li className=" bg-[#74a84a] rounded-full h-8 w-8 flex justify-center items-center">
                  <FaPlay color="white" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
