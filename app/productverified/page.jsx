import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";
import { FiCamera } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Confirm = () => {
  return (
    <div className=" h-[668px] border w-96 m-auto ">
      <div className=" ">
        <div className="w-96 h-full bg-orange-400 m-auto       ">
          <p className="text-white text-3xl text-center pt-14 pb-4">
            {" "}
            Payments
          </p>
          <div className="bg-white left rounded-t-3xl border border-white ">
            <div className=" h-10 mt-8 flex justify-between">
              <FiCamera className="text-5xl text-orange-500 ml-8" />

              <FaUserCircle className="text-orange-500 mr-3 w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
        <div className="h-32 border mt-4"></div>
        <div className=" mt-3  scroll-auto overflow-y-auto    h-[390px] 	 ">
          <div className="mt-6 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-sm w-[370px] flex   ">
            <input type="checkbox" className="w-6 mr-4" />
            <p>
              The product has been inspected and free from any visible damage
            </p>
          </div>
          <div className="mt-2 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-sm w-[370px] flex   ">
            <input type="checkbox" className="w-6 mr-4" />
            <p>
              The product matches the description and specifications provided in the order
            </p>
          </div>
          <div className="mt-2 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-sm w-[370px] flex   ">
            <input type="checkbox" className="w-6 mr-4" />
            <p>
              The product package includes all necessary parts and accessories as listed
            </p>
          </div>
          <button className="bg-orange-500 rounded-md text-white p-1 mt-4 text-center ml-32 ">Product Verified </button>
        </div>
        <div className="mt-[-140px]">
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
