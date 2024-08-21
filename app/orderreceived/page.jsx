"use client";
import React, { useState } from "react";
import Footer from "../footer/page";
import Link from "next/link";
import { BsChat } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const OrderReceived = () => {
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
            <div className=" w-96     ">
              <div className="h-48 border w-full rounded-t-2xl m-auto ">
                <img
                  src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
                  alt=""
                  className="h-full w-full rounded-t-2xl"
                />
              </div>

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
            </div>

            <div className=" p-2  m-auto  text-xs w-[370px]  h-[191px] mt-2 scroll-auto overflow-y-auto     ">
           
                <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle mt-[-6px]">
                <span className="w-3.5 h-3.5 flex justify-center items-center flex-shrink-0 bg-orange-500 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white"></span>
                <p className="text-gray-400  w-52 truncate ">
                  24 pragati nagar, near c21 mall nakhed ujjaian {" "}
                </p>
                <div className=" h-8 w-32 ml-1 pl-12">
                  <p className="text-[10px] text-gray-500">Order id </p>
                  <p>#788927200</p>
                </div>
              </div>
              <div className="flex">
              <div className=" ml-1.5 h-12  w-0  border border-gray-500 mt-[-7px] "></div>
                <div className=" mt-3 md:w-full h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
              </div>
              <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle  mt-[-6px]">
                <span className="w-3.5 h-3.5 flex justify-center items-center flex-shrink-0 bg-orange-500 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white"></span>
                <p className="text-gray-400">Picked up Successfully</p>
              </div>
              <div className="flex">
              <div className=" ml-1.5 h-12  w-0  border border-gray-500 mt-[-7px] "></div>
                <div className=" mt-3 md:w-full h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
              </div>
              
              <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle  mt-[-6px]">
                <span className="w-3.5 h-3.5 flex justify-center items-center flex-shrink-0 bg-orange-500 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white"></span>
                <p className="text-gray-400">Delevery on the way</p>
              </div>
              <div className="flex">
                <div className=" mt-3 md:w-full h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
              </div>
            </div> 
            
            <Link href="/vendorproductverified">
              <button className="bg-orange-500 p-0.5 px-8 rounded-md ml-24 mt-1 text-white text-sm  ">
              Order received
              </button>
            </Link>
            <p className="text-gray-400 text-xs text-center pt-1">
              Report issue
            </p>
            <div className="   ">
              <Footer />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReceived;
