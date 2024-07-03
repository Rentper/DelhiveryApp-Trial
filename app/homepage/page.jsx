"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Footer from '../deleveryapp/Footer'
import Link from "next/link";
const Homepage = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="bg-white h-[667px] border w-96">
        <div className="w-full h-full  bg-orange-400    ">
          <p className="text-white text-3xl text-center pt-14 pb-4"> Welcome</p>
          <div className="bg-white left rounded-t-3xl border border-white ">
            <div className=" h-10 mt-8 flex justify-between  ">
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

            <div className=" w-96 h-96 mt-2 pt-20 pl-10   ">
              {checked && (
                <img
                  src="/images/rider.png"
                  alt="rider"
                  width="300px"
                  height="300px"
                />
              )}
              {!checked && (
                <img
                  src="/images/bwrider.png"
                  alt="bwrider"
                  width="300px"
                  height="300px"
                />
              )}
            </div>
            <div className="pt-4 ">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
