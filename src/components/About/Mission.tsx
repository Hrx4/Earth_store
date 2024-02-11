import React from "react";

const Mission = () => {
  return (
    <>
      <div
        className="flex justify-center items-center py-24"
      >
        <div className="lg:flex justify-center items-center w-3/4 gap-20">
          <div className=" flex-1">
            <img
              src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min.jpg"
              alt=""
              className=" h-full object-cover w-full"
            />
          </div>
          <div className=" flex-1 flex flex-col gap-5 lg:mt-0 mt-16">
            <div className=" font-medium text-4xl tracking-widest">
              OUR MISSION
            </div>
            <div className=" text-gray-500 tracking-wider text-justify pr-12">
              Hello, my name is Tyler Moore and with the help of many people I
              made this template. I made it so it is super easy to update and so
              that it flows perfectly with my tutorials. Lots of love and
              hundreds of hours went into making it. I hope you love it as much
              as I do. <br />
              <br />I wish you the best of luck with your business, enjoy the
              adventure.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
