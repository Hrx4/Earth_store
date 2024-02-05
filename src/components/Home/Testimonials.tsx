import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <div className=" flex flex-col justify-center  w-3/4 m-auto gap-10 p-5" style={{ height: "80vh" }}>
        <div className=" font-medium text-4xl">What Our Customers Say</div>
        <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <FaQuoteLeft size={24} color="#2c541d"/>
          <div className=" font-normal text-base text-left text-[#585858]">
            Fast shipping and excellent customer <br /> service. The product was even
            better <br /> than expected. I will definitely be a <br /> returning customer.
          </div>
          <img
            className=" rounded-full h-10 w-10"
            src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg"
            alt=""
          />
          <div className=" font-semibold text-xs tracking-widest">JENNIFER LEWIS</div>
        </div>
        <div className="flex flex-col gap-4">
          <FaQuoteLeft size={24} color="#2c541d"/>
          <div className=" font-normal text-base text-left text-[#585858]">
            Fast shipping and excellent customer <br /> service. The product was even
            better <br /> than expected. I will definitely be a <br /> returning customer.
          </div>
          <img
            className=" rounded-full h-10 w-10"
            src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg"
            alt=""
          />
          <div className=" font-semibold text-xs tracking-widest">JENNIFER LEWIS</div>
        </div>
        <div className="flex flex-col gap-4">
          <FaQuoteLeft size={24} color="#2c541d"/>
          <div className=" font-normal text-base text-left text-[#585858]">
            Fast shipping and excellent customer <br /> service. The product was even
            better <br /> than expected. I will definitely be a <br /> returning customer.
          </div>
          <img
            className=" rounded-full h-10 w-10"
            src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg"
            alt=""
          />
          <div className=" font-semibold text-xs tracking-widest">JENNIFER LEWIS</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
