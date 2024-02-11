import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className=" md:h-[80vh] h-[60vh] absolute top-0 -z-10 gap-8 bg-[url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/About-banner.jpg')] bg-cover w-full justify-center items-center flex flex-col bg-center"
       
      ></div>
      <div
        className="md:h-[80vh] h-[48vh] -z-10 gap-8 w-full justify-center items-center flex flex-col bg-center"
       
      >
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className=" md:text-7xl text-4xl font-semibold tracking-widest text-[#2c541d]">
            WHO ARE WE ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
