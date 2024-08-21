import React from "react";
import Footer from "../footer/page";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
Link
const ProductVerified = () => {
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
              <div className="  p-1.5  w-12 h-12 ml-4">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 23.3333C19.9163 23.3333 21.875 21.3747 21.875 18.9583C21.875 16.542 19.9163 14.5833 17.5 14.5833C15.0837 14.5833 13.125 16.542 13.125 18.9583C13.125 21.3747 15.0837 23.3333 17.5 23.3333Z"
                    stroke="#F58820"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.95801 24.5V13.4167C4.95801 11.7832 4.95801 10.9664 5.27591 10.3425C5.55553 9.79372 6.00172 9.34753 6.55054 9.06791C7.17444 8.75001 7.9912 8.75001 9.62467 8.75001H11.1627C11.342 8.75001 11.4316 8.75001 11.5143 8.74053C11.9458 8.69111 12.3329 8.45191 12.5701 8.08806C12.6155 8.01832 12.6556 7.93813 12.7358 7.77778C12.8961 7.45708 12.9763 7.29672 13.0672 7.15725C13.5416 6.42954 14.3157 5.95115 15.1787 5.85229C15.3441 5.83334 15.5233 5.83334 15.8819 5.83334H20.2841C20.6427 5.83334 20.8219 5.83334 20.9873 5.85229C21.8503 5.95115 22.6244 6.42954 23.0988 7.15725C23.1897 7.29671 23.2699 7.45713 23.4303 7.77778C23.5103 7.93814 23.5504 8.01832 23.5959 8.08806C23.8332 8.45191 24.2201 8.69111 24.6516 8.74053C24.7345 8.75001 24.824 8.75001 25.0034 8.75001H26.5413C28.1748 8.75001 28.9916 8.75001 29.6155 9.06791C30.1643 9.34753 30.6105 9.79372 30.8901 10.3425C31.208 10.9664 31.208 11.7832 31.208 13.4167V24.5C31.208 26.1335 31.208 26.9503 30.8901 27.5742C30.6105 28.1229 30.1643 28.5692 29.6155 28.8488C28.9916 29.1667 28.1748 29.1667 26.5413 29.1667H9.62467C7.9912 29.1667 7.17444 29.1667 6.55054 28.8488C6.00172 28.5692 5.55553 28.1229 5.27591 27.5742C4.95801 26.9503 4.95801 26.1335 4.95801 24.5Z"
                    stroke="#ACACAC"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <FaUserCircle className="text-orange-500 mr-3 w-[50px] h-[50px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto mt-4">
          <div className="flex flex-nowrap">
            <div className="w-32 h-32 border rounded-xl mr-2 ml-2">
              <img src="/images/rider.png" alt="" />
            </div>

            <div className="w-32 h-32 border rounded-xl mr-2">
              <img src="/images/rider.png" alt="" />
            </div>
            <div className="w-32 h-32 border rounded-xl mr-2">
              <img src="/images/rider.png" alt="" />
            </div>
            <div className="w-32 h-32 border rounded-xl mr-2">
              <img src="/images/rider.png" alt="" />
            </div>
          </div>
        </div>

        <div className="   scroll-auto overflow-y-auto    h-[390px] 	 ">
          <div className="mt-6 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-sm w-[370px] flex   ">
            <input type="checkbox" className="w-6 mr-4" />
            <p>
              The product has been inspected and free from any visible damage
            </p>
          </div>
          {/* <div className="mt-2 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-sm w-[370px] flex   ">
            <input type="checkbox" className="w-6 mr-4" />
            <p>
              The product matches the description and specifications provided in
              the order
            </p>
          </div>
          <div className="mt-2 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-sm w-[370px] flex   ">
            <input type="checkbox" className="w-6 mr-4" />
            <p>
              The product package includes all necessary parts and accessories
              as listed
            </p>
          </div> */}
          <Link href='pickupsuccessfully'>
          <button className="bg-orange-500 rounded-md text-white p-0.5 mt-5 text-center ml-32 px-4  ">
            Product Verified{" "}
          </button>
          </Link>
        </div>
        <div className="mt-[-128px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductVerified;
