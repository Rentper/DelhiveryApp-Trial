import React from "react";
import Footer from "../footer/page";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const EditNo = () => {
  return (
    <div className=" h-[667px] border w-96 m-auto ">
      <div className=" ">
        <div className="w-96 h-full bg-orange-400 m-auto       ">
          <p className="text-white text-3xl text-center pt-14 pb-4 "> Account</p>
          <div className="bg-white left rounded-t-3xl border border-l-0 border-b-0 ">
            <center className="">
              <FaUserCircle className="text-orange-500 mr-3 w-[70px] h-[70px] pt-4 " />
              <p className="text-gray-400">Sahil Patil</p>
              <p>MP 13 Sp 1234</p>
            </center>
          </div>
        </div>

        <div className="    scroll-auto overflow-y-auto    h-[360px]   	 ">
          <div className=" rounded-md w-[360px] m-auto  mt-4 border shadow-lg ">
          <p className="text-orange-500 text-lg mt-2 ml-2">Number</p>
          <p className="text-gray-400 text-xs ml-2">Used for Profile</p>
            <div className="bg-orange-500 text-sm  w-80 m-auto text-white  p-2 pl-4 rounded-md mt-2 ">
              <p className="text-[10px] ml-0">Current phone no</p>
              <p >+91 9675842134</p>
            </div>
            <center>
            <input placeholder="Change phone no" type="text" className="bg-orange-500  mt-2 text-[10px]  w-80 m-auto text-white   p-3.5 pl-4 rounded-md " />
            </center>
            
<button className="bg-orange-500 p-1 px-12 mt-20 rounded-md ml-20 text-white mb-4 ">save Changes</button>
          </div>
         
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default EditNo;
