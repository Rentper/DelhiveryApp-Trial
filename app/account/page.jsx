import React from "react";
import Footer from "../footer/page";
import { FaUserCircle } from "react-icons/fa";
import Rating from "./rating";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const Account = () => {
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

        <div className="    scroll-auto overflow-y-auto    h-[360px]  	 ">
          <div className="bg-orange-500 text-sm rounded-md w-[360px] m-auto text-white mt-4 ">
            <p className="pt-1.5 pl-4 ">Overall rating </p>
            <div className="flex p-1  pl-4">
              <p>4.0</p>
              <Rating />
            </div>

          </div>
          <div className="bg-orange-500 text-sm rounded-t-md w-[360px] m-auto text-white mt-2 p-2 flex pl-4 ">
            <p>Name</p> 
            <FaAngleRight className="ml-[272px] mt-1 " />
          </div>
          <div className="bg-orange-500 text-sm  w-[360px] m-auto text-white  p-2 flex pl-4 ">
            <p>Phone no</p> 
            <Link href="/editno">
            <FaAngleRight className="ml-[250px]  mt-1 " />
            </Link>
          </div>
          <div className="bg-orange-500 text-sm rounded-b-md w-[360px] m-auto text-white  p-2 flex pl-4 shadow-md ">
            <p>Email address</p> 
            <FaAngleRight className="ml-[220px] mt-1 " />
          </div>
          <div className="flex flex-nowrap overflow-x-auto   p-2 rounded-md shadow-lg mt-14 w-[360px] m-auto">
            <div className="flex flex-nowrap">
              <div className="w-32 h-20 border rounded-xl mr-2 ml-2"></div>
              <div className="w-32 h-20 border rounded-xl mr-2"></div>
              <div className="w-32 h-20 border rounded-xl mr-2"></div>
              <div className="w-32 h-20 border rounded-xl mr-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Account;
