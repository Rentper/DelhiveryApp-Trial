"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../footer/page";

const Support = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="bg-white h-[668px] border w-96 m-auto ">
        <div className="w-full h-full  bg-orange-400    ">
          <p className="text-white text-3xl text-center pt-14 pb-4"> Support</p>
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

            <div className=" w-96 h-96 mt-2 pt-20     ">
              <div className="h-64  w-64 m-auto mt-[-80px] ">
                <img
                  src="/images/support.png"
                  className="w-full h-full m-auto "
                ></img>
              </div>
              <p className="text-gray-400 text-xs p-2 text-center m-auto ">
                Need assistance on the go? Our supporty team is here for you!
                Easyly call or chat with us directly through the app for quick
                help and solutions. We're dedicated to supporting our delivery
                partners every step of the way.
              </p>
              <div className="flex justify-around pt-2">
                <button className="bg-orange-500 rounded-lg  px-8 text-white flex p-2   ">
                  <span className="mt-1.5 mr-3">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_189_41)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.7303 12.9961C14.2673 14.4031 12.4533 15.1048 11.1573 14.9878C9.3873 14.8278 7.4613 13.889 5.9993 12.855C3.8503 11.335 1.8373 8.9838 0.664295 6.4888C-0.164705 4.7258 -0.350702 2.5582 0.882298 0.9512C1.3383 0.3572 1.8313 0.0399573 2.5723 0.00295733C3.6003 -0.0470427 3.7443 0.541059 4.0973 1.45706C4.3603 2.14206 4.7113 2.84081 4.9073 3.55081C5.2743 4.87581 3.9913 4.93119 3.8293 6.01419C3.7283 6.69719 4.5563 7.61313 4.9303 8.10013C5.6633 9.05413 6.5443 9.87696 7.5383 10.503C8.1073 10.862 9.0263 11.5089 9.6783 11.1519C10.6823 10.6019 10.5873 8.90896 11.9913 9.48196C12.7183 9.77796 13.4223 10.2051 14.1163 10.5791C15.1893 11.1561 15.1393 11.7541 14.7303 12.9961C15.0363 12.0681 14.4243 13.9241 14.7303 12.9961Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_189_41">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  support
                </button>

                <button className="bg-orange-500 rounded-lg  p-2 px-8 text-white flex ">
                  <span className="mt-2 mr-3">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 6.9549C15 10.7968 11.6424 13.9106 7.5 13.9106C6.78438 13.9116 6.07181 13.8171 5.38105 13.6296C3.89605 14.6119 2.03921 14.9095 1.05079 14.9989C0.825 15.0203 0.708158 14.7243 0.861316 14.5565C1.33105 14.042 1.99105 13.1294 2.21526 11.8907C0.847105 10.6298 0 8.88457 0 6.9549C0 3.11376 3.35763 0 7.5 0C11.6424 0 15 3.11376 15 6.9549Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  support
                </button>
              </div>
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

export default Support;
