"use client";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../footer/page";
import Link from "next/link";
import { BsChat } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { TfiAngleDoubleUp } from "react-icons/tfi";
import axios from 'axios'; // Import axios for API requests

const OrderDelevered = () => {
  const [checked, setChecked] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null); // To store the fetched order data

  // Fetch order data from the API
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/orders/');
        setOrderDetails(response.data); // Assuming response.data contains the order details
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleToggle = () => {
    setChecked(!checked);
  };

  if (!orderDetails) {
    return <div>Loading...</div>; // Display loading message until the order details are fetched
  }

  return (
    <>
      <div className="bg-white h-[667px] border w-96 m-auto ">
        <div className="w-full h-full bg-orange-400">
          <p className="text-white text-3xl text-center pt-14 pb-4">
            Delivery
          </p>
          <div className="bg-white left rounded-t-3xl border border-white ">
            <div className="w-96">
              <div className="h-48 border w-full rounded-t-2xl m-auto ">
                <img
                  src={orderDetails.image || "https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"} // Dynamic image source
                  alt="Order Image"
                  className="h-full w-full rounded-t-2xl"
                />
              </div>

              <div className="flex justify-around mt-1 ">
                <button className="shadow-md rounded-2xl text-sm flex px-7 mt-2 p-1">
                  <span className="mt-1 mr-2">
                    <MdCall />
                  </span>
                  Call Vendor
                </button>
                <button className="shadow-md rounded-2xl text-sm flex px-3 mt-2 p-1">
                  <span className="mt-1 mr-2">
                    <BsChat />
                  </span>
                  Chat with Vendor
                </button>
              </div>
            </div>

            <div className="p-2 m-auto text-xs w-[370px] h-[191px] mt-2 scroll-auto overflow-y-auto">
              <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle mt-[-6px]">
                <span className="w-3.5 h-3.5 flex justify-center items-center flex-shrink-0 bg-orange-500 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white"></span>
                <p className="text-gray-400 w-52 truncate ">
                  {orderDetails.address || "24 pragati nagar, near c21 mall nakhed ujjaian"}
                </p>
                <div className="h-8 w-32 ml-1 pl-12">
                  <p className="text-[10px] text-gray-500">Order id</p>
                  <p>{orderDetails.orderId || "#788927200"}</p>
                </div>
              </div>
              <div className="flex">
                <div className="ml-1.5 h-12 w-0 border border-gray-500 mt-[-7px]"></div>
                <div className="mt-3 md:w-full h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
              </div>
              <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle mt-[-6px]">
                <span className="w-3.5 h-3.5 flex justify-center items-center flex-shrink-0 bg-orange-500 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white"></span>
                <p className="text-gray-400">Picked up Successfully</p>
              </div>
              <div className="flex">
                <div className="ml-1.5 h-12 w-0 border border-gray-500 mt-[-7px]"></div>
                <div className="mt-3 md:w-full h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
              </div>

              <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle mt-[-6px]">
                <span className="w-3.5 h-3.5 flex justify-center items-center flex-shrink-0 bg-orange-500 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white"></span>
                <p className="text-gray-400">Delivery on the way</p>
              </div>
              <div className="flex">
                <div className="mt-3 md:w-full h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
              </div>
            </div>

            <Link href="/outofdelevery">
              <button className="bg-orange-500 p-0.5 px-8 rounded-md ml-24 mt-1 text-white text-sm ">
                Order Delivered
              </button>
            </Link>
            <p className="text-gray-400 text-xs text-center pt-1">Report issue</p>
            <div className="">
              <Footer />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDelevered;
