import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";
const ConfirmOrder = () => {
  return (
    <div className=" h-[668px] border w-96 m-auto ">
      <div className=" ">
        <Header />
        <center className=" mt-11 scroll-auto overflow-y-auto rounded-md     h-[280px] w-[320px] m-auto	shadow-[0_0px_5px_rgba(0,0,0,0.25)] ">
          <img src="/images/tyre.png" alt="tyre image" className="mt-4" />
          <p className="w-64 text-sm">
            <span className="text-red-500">Please confirm</span>: Do you have a
            vehicle available for transportation, and is it suitable for carring
            parcels?
          </p>
          <div className="mt-14">
          <Link href="/vehicledetails">
            <button className="bg-orange-500  rounded-md text-white  px-14 mr-2    ">
              Yes
            </button>
            </Link>
            <Link href="https://www.rentper.org/c/vechicle?page=1">
              <button className="bg-orange-500  rounded-md text-white  px-14 ml-2    ">
                No
              </button>
            </Link>
          </div>
        </center>
        <div className="mt-24 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
