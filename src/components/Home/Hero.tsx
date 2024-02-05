import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="-z-10 gap-8 bg-[url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg')] bg-cover w-full justify-center items-center flex flex-col"
        style={{ height: "96vh" }}
      >
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className=" text-7xl font-semibold tracking-widest text-[#2c541d]">EARTH</div>
          <div className=" text-5xl font-light">MULTIPURPOSE STORE</div>
        </div>
        <div className=" h-15 w-30 px-11 py-3 bg-[#74a84a] text-white">SHOP NOW</div>
      </div>
    </>
  );
};

export default Hero;
