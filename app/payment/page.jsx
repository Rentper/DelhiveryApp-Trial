

"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { LuGalleryThumbnails } from "react-icons/lu";
import { BiHeadphone } from "react-icons/bi";
import { GiProfit } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "../footer/page";
import Link from "next/link";
const PaymentsDate = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="  h-[668px]">
        <div className="w-96 h-full bg-orange-400 m-auto  border     ">
          <p className="text-white text-3xl text-center pt-14 pb-4">
            {" "}
            Payments
          </p>
          <div className="bg-white left rounded-t-3xl border border-white ">
            <div className=" h-10 mt-8 flex justify-between">
              <label className="inline-flex items-center cursor-pointer ">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={checked}
                  onChange={handleToggle}
                />
                <div className="ml-3 pl-1 relative w-24 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-orange-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[52px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600">
                  <span
                    id="toggle-text"
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {checked ? "Online" : "Offline"}
                  </span>
                </div>
              </label>

              <FaUserCircle className="text-orange-500 mr-3 w-[50px] h-[50px]" />
            </div>
          </div>

          <div className="bg-white h-[484px] ">
            <div className="border border-white  bg-white h-[390px] ">
              <div className="bg-white  p-2 rounded-2xl  border mt-3 w-[370px] m-auto  drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]">
                <div className="  w-[370px]  ">
                  <p>Tue, 4June</p>
                </div>
                <div className="flex text-2xl p-2  justify-between  w-[340px] m-auto border  ">
                  <p>40</p>
                  <p>₹ 5000</p>
                </div>
                <div className="flex text-lg  justify-between text-gray-400     w-[340px] bg-white  ">
                  <p>Total Orders</p>
                  <p>Total Earnings</p>
                </div>
              </div>

              <div className=" h-[274px]  scroll-auto overflow-y-auto  text-sm bg-white  p-3 mt-2 w-[370px] m-auto drop-shadow-[0_0px_3px_rgba(0,0,0,0.25)] rounded-2xl  ">
               

                <div className="bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]   p-2 mt-2 w-[350px] m-auto rounded-xl ">
                  <div className="flex justify-between ">
                    <p>Tue, 4June</p>
                    <p className=" ml-36 ">₹5000</p>
<Link href="/payhistory">                    
<FaAngleRight />
</Link>
                  </div>
                </div>

                {/* repeat only fordesign purpose */}
                <div className="bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]   p-2 mt-2 w-[350px] m-auto rounded-xl ">
                  <div className="flex justify-between ">
                    <p>Tue, 4June</p>
                    <p className=" ml-36 ">₹5000</p>
                    <FaAngleRight />
                  </div>
                </div>
                <div className="bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]   p-2 mt-2 w-[350px] m-auto rounded-xl ">
                  <div className="flex justify-between ">
                    <p>Tue, 4June</p>
                    <p className=" ml-36 ">₹5000</p>
                    <FaAngleRight />
                  </div>
                </div>
                <div className="bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]   p-2 mt-2 w-[350px] m-auto rounded-xl ">
                  <div className="flex justify-between ">
                    <p>Tue, 4June</p>
                    <p className=" ml-36 ">₹5000</p>
                    <FaAngleRight />
                  </div>
                </div>
                <div className="bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]   p-2 mt-2 w-[350px] m-auto rounded-xl ">
                  <div className="flex justify-between ">
                    <p>Tue, 4June</p>
                    <p className=" ml-36 ">₹5000</p>
                    
                    <FaAngleRight />
                  </div>
                </div>
                <div className="bg-white drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]   p-2 mt-2 w-[350px] m-auto rounded-xl ">
                  <div className="flex justify-between ">
                    <p>Tue, 4June</p>
                    <p className=" ml-36 ">₹5000</p>
                    
                    <FaAngleRight />
                  </div>
                </div>
             
              </div>
            </div>
            <div className="bg-white mt-8  ">
            <Footer />
          </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default PaymentsDate;


