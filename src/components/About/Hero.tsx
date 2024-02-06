import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="absolute top-0 -z-10 gap-8 bg-[url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/About-banner.jpg')] bg-cover w-full justify-center items-center flex flex-col bg-center"
        style={{ height: "80dvh" }}
      ></div>
      <div
        className="-z-10 gap-8 w-full justify-center items-center flex flex-col bg-center"
        style={{ height: "60dvh" }}
      >
        <div className=" flex flex-col justify-center items-center gap-3">
          <div className=" text-7xl font-semibold tracking-widest text-[#2c541d]">
            WHO ARE WE ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
