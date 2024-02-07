import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Shop.css";
import { Link } from "react-router-dom";
const Shop = () => {
  const [minValue, setminValue] = useState(25);
  const [maxValue, setmaxValue] = useState(75);
  return (
    <>
      <div className=" h-px w-full bg-gray-100"></div>
      <div className=" max-w-[1180px] py-16 mx-auto h-auto px-5">
        <div className=" w-full  flex">
          <div className=" w-[29.7%]  flex flex-col gap-11  pr-10">
            <div className="flex  justify-between">
              <input
                type="text"
                placeholder="Search products ... "
                className=" w-3/4 h-12 outline-none p-2 border"
              />
              <div className="bg-[#74a84a] w-14 h-12 outline-none p-2 flex justify-center items-center">
                <VscSearch color="white" />
              </div>
            </div>
            <div className=" gap-4 flex flex-col">
              <div className="flex gap-5 flex-col ">
                <div className=" font-medium text-2xl">Filter By Price</div>
                <RangeSlider
                  min={0}
                  max={500}
                  onInput={(value: [number, number]) => {
                    setminValue(value[0]);
                    setmaxValue(value[1]);
                  }}
                />
              </div>
              <div className="flex gap-5 justify-end">
                <input
                  type="text"
                  value={"₹" + minValue}
                  className=" w-14 h-10 outline-none p-2 border"
                />
                <input
                  type="text"
                  value={"₹" + maxValue}
                  className=" w-14 outline-none p-2 border"
                />
              </div>
              <div className="flex justify-end">
                <div className="bg-[#74a84a] w-20 h-12 outline-none flex justify-center items-center text-white tracking-widest">
                  RESET
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2 ">
              <div className="text-[#74a84a] font-medium text-xl">
                Categories
              </div>
              <ul className="ml-3">
                <li className="flex mb-2">
                  <div className="text-[#74a84a] ">Postcards</div>
                  <div>(6)</div>
                </li>
                <li className="flex ">
                  <div className="text-[#74a84a] ">Postcards</div>
                  <div>(6)</div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" h-auto w-px bg-gray-100"></div>
          <div className=" w-[70%] flex flex-col gap-11 pl-10">
            <div className=" text-gray-500">Home / Shop</div>
            <div className="text-[#74a84a] font-normal text-6xl">Shop</div>
            <div className=" flex h-12 items-center justify-between">
              <div className=" text-gray-500">Showing all 12 results</div>
              <select
                name=""
                id=""
                className="h-12 outline-none border text-gray-500"
              >
                <option value="Default sorting">Default sorting</option>
                <option value="Sort by popularity">Sort by popularity</option>
                <option value="Sort by average rating">
                  Sort by average rating
                </option>
                <option value="Sort by latest">Sort by latest</option>
                <option value="Sort by price: low to high">
                  Sort by price: low to high
                </option>
                <option value="Sort by price: high to low  ">
                  Sort by price: high to low{" "}
                </option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-5 ">
              <div className=" h-80 flex-col gap-2 mb-10">
                <Link to={"/product/p"}>
                  <img
                    className=" max-w-full"
                    src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
                    alt=""
                  />
                </Link>
                <div className=" text-sm text-gray-500 mt-1">Postcards</div>
                <div className=" font-semibold mt-2">Postcard V1</div>
                <div className=" text-sm text-gray-500 font-bold mt-1">
                  ₹ 23.99
                </div>
              </div>
              <div className=" h-80 flex-col gap-2 mb-10">
                <Link to={"/product/p"}>
                  <img
                    className="max-w-full"
                    src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
                    alt=""
                  />
                </Link>
                <div className=" text-sm text-gray-500 mt-1">Postcards</div>
                <div className=" font-semibold mt-2">Postcard V1</div>
                <div className=" text-sm text-gray-500 font-bold mt-1">
                  ₹ 23.99
                </div>
              </div>
              <div className=" h-80 flex-col gap-2 mb-10">
                <Link to={"/product/p"}>
                  <img
                    className="max-w-full"
                    src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
                    alt=""
                  />
                </Link>
                <div className=" text-sm text-gray-500 mt-1">Postcards</div>
                <div className=" font-semibold mt-2">Postcard V1</div>
                <div className=" text-sm text-gray-500 font-bold mt-1">
                  ₹ 23.99
                </div>
              </div>
              <div className=" h-80 flex-col gap-2 mb-10">
                <Link to={"/product/p"}>
                  <img
                    className="max-w-full"
                    src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg"
                    alt=""
                  />
                </Link>
                <div className=" text-sm text-gray-500 mt-1">Postcards</div>
                <div className=" font-semibold mt-2">Postcard V1</div>
                <div className=" text-sm text-gray-500 font-bold mt-1">
                  ₹ 23.99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
