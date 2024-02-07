import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const Product = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className=" h-px w-full bg-gray-100 mt-4"></div>

      <div className=" max-w-[1180px] py-16  mx-auto h-auto px-5 ">
        {/* Details Section */}

        <div className="flex justify-between mb-20">
          <img
            className=" w-1/2"
            src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1.jpg"
            alt=""
          />
          <div className="ml-10">
            <div className=" text-gray-500">Home / Products /Product V1</div>
            <div className="text-[#74a84a] mt-5">Postcards</div>
            <div className=" text-2xl font-normal mt-5">Postcard V1</div>
            <div className=" text-2xl font-bold text-gray-600 mt-4">
              ₹ 23.99
            </div>
            <div className=" text-gray-500">
              Sending a travel postcard to a loved one is truly a thoughtful
              gesture that can bring joy and inspiration. Inspiration can come
              in the form of taking a break from the normal routine, while being
              reminded of the more adventurous and exotic destinations around
              the world.
            </div>
            <div className="flex mt-5 gap-3">
              <div className="flex h-10 w-32 border justify-evenly items-center">
                <div>-</div>
                <input
                  type="number"
                  className=" w-1/3 h-full border outline-none text-center"
                  value={1}
                />
                <div>+</div>
              </div>
              <div className=" w-36 bg-[#74a84a] text-white flex justify-center items-center tracking-widest">
                ADD TO CART
              </div>
            </div>
            <div className=" h-px w-full bg-gray-100 mt-4"></div>

            <div className="flex text-gray-500 mt-4">
              Category :<div className=" text-[#74a84a]">Postcards</div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div>
          <div className=" h-px w-full bg-gray-100 mt-4"></div>
          <div className="flex font-bold text-gray-600">
            <div
              className="w-32 cursor-pointer"
              onClick={() => setToggle(true)}
            >
              Description
            </div>
            <div
              className="w-32 cursor-pointer"
              onClick={() => setToggle(false)}
            >
              Reviews
            </div>
          </div>
          {toggle ? (
            <div>
              <div>
                <div className=" text-gray-600 font-bold mt-5">
                  Paper Type: Matte
                </div>
                <ul className=" list-disc flex flex-col gap-1 mt-2 ml-5 text-gray-600">
                  <li>17.5 pt thickness / 120 lb weight / 324 GSM</li>
                  <li>
                    Light white, uncoated matte finish with an eggshell texture
                  </li>
                  <li>Paper is easy to write on and won’t smudge</li>
                  <li>Made and printed in the USA</li>
                </ul>
              </div>
              <div>
                <div className=" text-gray-600 font-bold mt-5 ">
                  Paper Type: Semi-Gloss
                </div>
                <ul className=" list-disc flex flex-col gap-1 mt-2 ml-5 text-gray-600">
                  <li>12.5 pt thickness / 110 lb weight</li>
                  <li>Bright white, semi-gloss finish</li>
                  <li>50% recycled content</li>
                  <li>FSC certified</li>
                  <li>Paper imported from Italy; printed in the USA</li>
                </ul>
              </div>
              <div className="flex mt-5">
                <div className=" text-gray-600 font-bold min-w-12 ">Note :</div>
                <div className=" italic">
                  There may be a slight difference in actual color, due to the
                  colors of display.
                </div>
              </div>
            </div>
          ) : (
            <div className=" mt-5">
              <div>There are no reviews yet.</div>
              <div className="border w-full p-5 text-gray-500 mt-3">
                <div className=" font-normal text-xl">
                  Be the first to review “Postcard V6”
                </div>
                <div className="mt-3">
                  Your email address will not be published. Required fields are
                  marked *
                </div>
                <div className="flex mt-5 items-center">
                  <div className=" font-normal text-xl">Your rating *</div>
                  <div className="flex gap-1">
                    <FaRegStar color="#74a84a" size={22} />
                    <FaRegStar color="#74a84a" size={22} />
                    <FaRegStar color="#74a84a" size={22} />
                    <FaRegStar color="#74a84a" size={22} />
                    <FaRegStar color="#74a84a" size={22} />
                  </div>
                </div>
                <div>
                  <div className=" font-normal text-xl mt-4">Your review *</div>
                  <textarea name="" id="" className=" w-full h-24 border" />
                </div>
                <div className="flex gap-5 mt-4">
                  <div className="w-full">
                    <div>Name *</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className=" w-full h-14 border"
                    />
                  </div>
                  <div className="w-full">
                    <div>Email *</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className=" w-full h-14 border"
                    />
                  </div>
                </div>
                <div className=" w-24 text-center bg-[#74a84a] text-white p-2 tracking-widest mt-4">
                  SUBMIT
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className=" mt-14">
          <div className=" font-bold text-4xl">Related Products</div>
          <div className="grid grid-cols-4 gap-5 mt-7">
            <div className=" h-80 flex-col gap-2 mb-10">
              <img
                className=" max-w-full"
                src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
                alt=""
              />
              <div className=" text-sm text-gray-500 mt-1">Postcards</div>
              <div className=" font-semibold mt-2">Postcard V1</div>
              <div className=" text-sm text-gray-500 font-bold mt-1">
                ₹ 23.99
              </div>
            </div>
            <div className=" h-80 flex-col gap-2 mb-10">
              <img
                className=" max-w-full"
                src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
                alt=""
              />
              <div className=" text-sm text-gray-500 mt-1">Postcards</div>
              <div className=" font-semibold mt-2">Postcard V1</div>
              <div className=" text-sm text-gray-500 font-bold mt-1">
                ₹ 23.99
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
