import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  return (
    <>
      <div className=" h-px w-full bg-gray-100"></div>
      <div className=" max-w-[1180px] py-16 mx-auto h-auto px-5 ">
        <div className=" text-3xl">Checkout</div>
        <div className="border border-blue-600 flex p-3 items-center bg-blue-100 rounded mt-5">
          <div className="h-6 w-6 rounded-full flex items-center justify-center bg-blue-600">
            <IoIosInformationCircleOutline color="white" />
          </div>
          <div className="ml-2">Have a coupon?</div>
          <div className="text-[#74a84a] ml-1">
            Click here to enter your code
          </div>
        </div>
        <div className=" w-full flex mt-5">
          <div className=" w-3/5  pr-5">
            <div className=" font-extrabold text-xl">Billing details</div>
            <div className=" h-px w-full bg-gray-100"></div>
            <div className=" flex gap-5 w-full mt-5">
              <div className=" w-full ">
                <div className=" text-gray-600 font-bold">First name</div>
                <input
                  type="text"
                  className="h-12 border p-2 outline-none w-full"
                />
              </div>
              <div className=" w-full">
                <div className=" text-gray-600 font-bold">Last name</div>
                <input
                  type="text"
                  className="h-12 border p-2 outline-none w-full"
                />
              </div>
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">
                Company name (optional)
              </div>
              <input
                type="text"
                className="h-12 border p-2 outline-none w-full"
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">Country / Region</div>
              <CountryDropdown
              classes=" h-12 border outline-none w-full"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">Street address</div>
              <input
                type="text"
                className="h-12 border p-2 outline-none w-full"
                placeholder="House name and street name"
              />

              <input
                type="text"
                className="h-12 border p-2 outline-none w-full mt-5"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">Town / City</div>
              <input
                type="text"
                className="h-12 border p-2 outline-none w-full"
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">State</div>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                classes=" h-12 border outline-none w-full"
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">Pincode</div>
              <input
                type="text"
                className="h-12 border p-2 outline-none w-full"
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">Phone</div>
              <input
                type="text"
                className="h-12 border p-2 outline-none w-full"
              />
            </div>
            <div className=" w-full mt-5">
              <div className=" text-gray-600 font-bold">Email address</div>
              <input
                type="text"
                className="h-12 border p-2 outline-none w-full"
              />
            </div>

            <div className=" font-extrabold text-xl mt-5">
              Additional information
            </div>
            <div className=" h-px w-full bg-gray-100 mt-5"></div>

            <div className=" text-gray-600 font-semibold mt-5">
              Order notes (optional)
            </div>
            <div className=" w-full">
              <textarea
                className="h-12 border p-2 outline-none w-full mt-2"
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </div>
          <div className=" w-2/5 ">
            <div className=" w-11/12 ml-auto border-2 p-5">
              <div className="font-extrabold text-xl ">Your order</div>
              <div className="mt-5">
                <div className="flex w-full text-gray-600 font-semibold justify-between">
                  <div>Product</div>
                  <div>Subtotal</div>
                </div>
                <div className=" h-px w-full bg-gray-100 mt-5"></div>
                <div className="flex w-full text-gray-500  justify-between mt-5">
                  <div>Postcard V6 × 1</div>
                  <div>$14.99</div>
                </div>
                <div className=" h-px w-full bg-gray-100 mt-5"></div>{" "}
                <div className="flex w-full text-gray-500  justify-between mt-5">
                  <div>Postcard V6 × 1</div>
                  <div>$14.99</div>
                </div>
                <div className=" h-px w-full bg-gray-100 mt-5"></div>{" "}
                <div className="flex w-full text-gray-500  justify-between mt-5">
                  <div>Subtotal</div>
                  <div>$14.99</div>
                </div>
                <div className=" h-px w-full bg-gray-100 mt-5"></div>
                <div className="flex w-full text-gray-500  justify-between mt-5">
                  <div>Total</div>
                  <div>$14.99</div>
                </div>
                <div className=" h-px w-full bg-gray-100 mt-5"></div>
                <div className="border border-blue-600 flex p-3 bg-blue-100 rounded items-baseline mt-5">
                  <div className="h-4 w-7 rounded-full flex  bg-blue-600">
                    <IoIosInformationCircleOutline color="white" />
                  </div>
                  <div className="ml-2">
                    Sorry, it seems that there are no available payment methods.
                    Please contact us if you require assistance or wish to make
                    alternate arrangements.
                  </div>
                </div>
                <Link to={"/"}>
            <div className="bg-[#74a84a] p-5 text-white flex  text-center items-center justify-center mt-5 tracking-widest">
              PLACE ORDER
            </div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
