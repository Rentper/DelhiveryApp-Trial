"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../footer/page";
import Link from "next/link";
import { BsChat } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { TfiAngleDoubleUp } from "react-icons/tfi";

const Delevery = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="bg-white h-[667px] border w-96 m-auto ">
        <div className="w-full h-full  bg-orange-400    ">
          <p className="text-white text-3xl text-center pt-14 pb-4">
            {" "}
            Delevery
          </p>
          <div className="bg-white left rounded-t-3xl border border-white ">
            <div className=" h-10 mt-8 flex justify-between  ">
              <div></div>
              <FaUserCircle className="text-orange-500 mr-3 w-[50px] h-[50px]" />
            </div>

            <div className=" w-96  mt-3     ">
              <div className="h-48 border w-full rounded-2xl m-auto ">
                <img
                  src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
                  alt=""
                  className="h-full w-full rounded-2xl"
                />
              </div>

              <div className=" p-2  m-auto  text-xs w-[370px]    ">
                <div className="flex  text-gray-400 text-xs ">
                  <p>PICK UP </p>
                  <p className="w-22 pl-40 ml-2  ">DROP OFF</p>
                </div>

                <div className="flex justify-between mt-1 ">
                  <p className="text-xs">
                    24 Pragati Nagar, near c12 mall nanakhed Ujjain
                  </p>
                  <p className="pl-20 text-xs ">
                    24 Pragati Nagar, near c12 mall nanakhed Ujjain
                  </p>
                </div>
              </div>

              <div className="mt-2 border w-[350px] m-auto"></div>
              <div className="flex justify-around mt-1 ">
                <button className=" shadow-md rounded-2xl text-sm   flex px-7 mt-2 p-1    ">
                  <span className="mt-1 mr-2 ">
                    <MdCall />
                  </span>
                  Call Vendor
                </button>
                <button className=" shadow-md rounded-2xl text-sm      flex px-3 mt-2 p-1    ">
                  <span className="mt-1 mr-2 ">
                    <BsChat />
                  </span>
                  Chat with Vendor
                </button>
              </div>
              {/* <div className="mt-2 border w-[350px] m-auto"></div>  */}
            </div>
            <div className=" text-orange-500 border mt-2 shadow-orange-500   ">
              <center>
                <TfiAngleDoubleUp className="mt-2 text-2xl " />
                <p className="pt-1">Product Verification</p>
              </center>
            </div>

            <div className="   ">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delevery;
