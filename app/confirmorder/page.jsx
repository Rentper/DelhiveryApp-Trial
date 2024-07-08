import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";
const Confirm = () => {
  return (
    <div className=" h-[668px] border w-96 m-auto ">
    <div className=" ">
      <Header />
      <div className=" mt-3  scroll-auto overflow-y-auto    h-[390px] 	 ">
      <div className="mt-6 bg-gray-100 p-2 shadow-md rounded-md m-auto  text-xs w-[370px]   ">
        <div className="flex justify-between text-gray-400 text-xs ">
          <p>PICK UP </p>
          <p className="w-22 float-left ">MONEY EARNED</p>
        </div>

        <div className="flex justify-between mt-1">
          <p>24 Pragati Nagar ,near c12 mall nanakhed Ujjain</p>
          <p className="pl-20 ">INR 500</p>
        </div>
        <div className="flex justify-between text-gray-400 mt-3">
          <p>DROP OFF </p>
          <p  className="w-22  text-xs">TOTAL DISTANCE</p>
        </div>

        <div className="flex justify-between ">
          <p>24 Pragati Nagar ,near c12 mall nanakhed Ujjain</p>
          <p className=" pl-20">10.5km</p>
        </div>
        <button className="text-gray-400  ml-52 text-md font-semibold ">Reject</button>
<Link href="/delevery">
<button className="bg-orange-400 float-end   rounded-md text-white pl-4 pr-4 ">Accept</button>
</Link>
      </div>

   
{/* repeat all bolck only for design  */}
      <div className="mt-3 bg-gray-100 p-2 shadow-md rounded-md  text-xs  w-[370px] m-auto  ">
        <div className="flex justify-between text-gray-400 text-xs ">
          <p>PICK UP </p>
          <p className="w-22 float-left ">MONEY EARNED</p>
        </div>

        <div className="flex justify-between mt-1">
          <p>24 Pragati Nagar ,near c12 mall nanakhed Ujjain</p>
          <p className="pl-20 ">INR 500</p>
        </div>
        <div className="flex justify-between text-gray-400 mt-3">
          <p>DROP OFF </p>
          <p  className="w-22  text-xs">TOTAL DISTANCE</p>
        </div>

        <div className="flex justify-between ">
          <p>24 Pragati Nagar ,near c12 mall nanakhed Ujjain</p>
          <p className=" pl-20">10.5km</p>
        </div>
        <button className="text-gray-400  ml-52 text-md font-semibold ">Reject</button>
        <button className="bg-orange-400 float-end   rounded-md text-white pl-4 pr-4 ">Accept</button>
      </div>
      <div className="mt-3 bg-gray-100 p-2 shadow-xl rounded-md  text-xs  w-[370px] m-auto  ">
        <div className="flex justify-between text-gray-400 text-xs ">
          <p>PICK UP </p>
          <p className="w-22 float-left ">MONEY EARNED</p>
        </div>

        <div className="flex justify-between mt-1">
          <p>24 Pragati Nagar ,near c12 mall nanakhed Ujjain</p>
          <p className="pl-20 ">INR 500</p>
        </div>
        <div className="flex justify-between text-gray-400 mt-3">
          <p>DROP OFF </p>
          <p  className="w-22  text-xs">TOTAL DISTANCE</p>
        </div>

        <div className="flex justify-between ">
          <p>24 Pragati Nagar ,near c12 mall nanakhed Ujjain</p>
          <p className=" pl-20">10.5km</p>
        </div>
        <button className="text-gray-400  ml-52 text-md font-semibold ">Reject</button>
        <button className="bg-orange-400 float-end   rounded-md text-white pl-4 pr-4 ">Accept</button>
      </div>
      </div>
      <Footer  />

      
    </div>

    </div>
  );
};

export default Confirm;





