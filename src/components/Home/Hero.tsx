import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="md:h-[96vh] h-[60vh] absolute top-0 -z-10 gap-8 bg-center bg-[url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg')] bg-cover w-full justify-center items-center flex flex-col"
      ></div>
      <div
        className="md:h-[80vh] h-[48vh] -z-10 gap-8 w-full justify-center items-center flex flex-col"
        
      >
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className=" md:text-7xl text-5xl font-semibold tracking-widest text-[#2c541d]">
            EARTH
          </div>
          <div className=" md-text-4xl text-2xl font-extralight tracking-widest">
            MULTIPURPOSE STORE
          </div>
        </div>
        <div className=" h-15 w-30 px-11 py-3 bg-[#74a84a] text-white">
          SHOP NOW
        </div>
      </div>
    </>
  );
};

export default Hero;
