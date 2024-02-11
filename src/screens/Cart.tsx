import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="max-w-[1180px] py-16 mx-auto px-5 h-auto ">
        <div className=" text-3xl">Cart</div>
        {/* List */}
        <div className="w-full mt-5  overflow-x-scroll">
          <table className="w-[1150px] border">
            <thead className=" h-14  font-semibold text-gray-600 border bg-gray-100">
              <td></td>
              <td></td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </thead>
            <tbody className="border ">
              <td className=" p-3 ">
                <RxCrossCircled
                  size={22}
                  color="#74a84a"
                  className="flex ml-auto mr-auto"
                />
              </td>
              <td className=" py-5">
                <img
                  src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-1000x1000.jpg"
                  alt=""
                  className=" w-20"
                />
              </td>
              <td className=" text-[#74a84a]">Postcard V1</td>
              <td>₹ 23.99</td>
              <td>
                <div className="flex h-10 w-32 border justify-evenly items-center">
                  <div>-</div>
                  <input
                    type="number"
                    className=" w-1/3 h-full border outline-none text-center"
                    value={1}
                  />
                  <div>+</div>
                </div>
              </td>
              <td>₹ 23.99</td>
            </tbody>

            <tbody className="border">
              <td className=" p-3 ">
                <RxCrossCircled
                  size={22}
                  color="#74a84a"
                  className="flex ml-auto mr-auto"
                />
              </td>
              <td className=" py-5">
                <img
                  src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-1000x1000.jpg"
                  alt=""
                  className=" w-20"
                />
              </td>
              <td className=" text-[#74a84a]">Postcard V1</td>
              <td>₹ 23.99</td>
              <td>
                <div className="flex h-10 w-32 border justify-evenly items-center">
                  <div>-</div>
                  <input
                    type="number"
                    className=" w-1/3 h-full border outline-none text-center"
                    value={1}
                  />
                  <div>+</div>
                </div>
              </td>
              <td>₹ 23.99</td>
            </tbody>
          </table>
          <div className="  w-full border md:flex justify-between p-3">
            <div className=" flex gap-5">
              <input
                type="text"
                placeholder="Coupon code"
                name=""
                id=""
                className="border outline-none p-1"
              />
              <div className=" tracking-widest bg-[#74a84a] p-2 w-44 text-center text-white">
                APPLY COUPON
              </div>
            </div>
            <div className=" tracking-widest bg-[#74a84a] p-2 md:w-44 md:mt-0 mt-5 text-center text-white">
              UPDATE CART
            </div>
          </div>
        </div>
        {/* Total */}
        <div className="md:w-1/2 ml-auto border mt-10">
          <div className=" h-14  font-semibold  border bg-gray-100 text-xl p-4">
            Cart totals
          </div>
          <div className="p-3">
            <div className="flex m-5 justify-evenly">
              <div>Subtotal</div>
              <div>₹ 23.99</div>
            </div>
            <div className=" h-px w-full bg-gray-200"></div>
            <div className="flex m-5 justify-evenly">
              <div>Subtotal</div>
              <div>₹ 23.99</div>
            </div>
            <div className=" h-px w-full bg-gray-200"></div>

            <Link to={"/checkout"}>
            <div className="bg-[#74a84a] p-5 text-white flex  text-center items-center justify-center mt-5">
              PROCEED TO CHECKOUT
            </div></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
