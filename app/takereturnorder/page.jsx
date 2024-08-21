import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";
const TakeReturnOrder = () => {
  return (
    <div className=" h-[668px] border w-96 m-auto ">
      <div className=" ">
        <Header />
        <div className=" mt-3  scroll-auto overflow-y-auto    h-[360px] 	 ">
          <div className="border mt-3 p-1  shadow-[0_0px_5px_rgba(0,0,0,0.25)] rounded-md m-auto  text-xs w-[370px] flex  ">
            <div className="w-64">
              <p className="text-gray-400 text-xs">Pick up</p>
              <p>24 Pragati nagar, near c21 mall nanakheda Ujjain </p>
            </div>
            <div className=" ">
              <p className="ml-4 mb-1">|</p>
              <p className="w-10 ml-2  ">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_219_1551)">
                    <path
                      d="M15.4845 7.06609L16.1707 12.9752C16.2197 13.3966 16.1628 13.8236 16.0051 14.2175C15.8475 14.6114 15.594 14.9597 15.2678 15.231C14.9416 15.5023 14.5528 15.6879 14.1368 15.771C13.7207 15.8541 13.2905 15.8322 12.8851 15.7072L6.42113 13.7131C5.13304 13.334 4.00408 12.5444 3.20607 11.4646C2.40806 10.3847 1.9847 9.07368 2.00042 7.73105C2.00533 7.57535 2.01554 7.41847 2.03106 7.2604C2.19983 5.60871 2.96938 4.07654 4.19354 2.95494C5.4177 1.83334 7.01119 1.20044 8.6713 1.17646C10.3314 1.15248 11.9425 1.7391 13.1986 2.82488C14.4546 3.91066 15.2681 5.41996 15.4845 7.06609Z"
                      stroke="#FF6700"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1703 12.9754L5.70678 8.00346C5.49081 7.90085 5.31618 7.72782 5.21159 7.5128C5.107 7.29778 5.07867 7.05358 5.13127 6.82033C5.18387 6.58708 5.31426 6.37866 5.50101 6.22934C5.68776 6.08002 5.91976 5.99868 6.15886 5.99869H15.2557"
                      stroke="#F58820"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5463 5.99869L10.6377 10.3462"
                      stroke="#F58820"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.43066 9.29756L11.5675 5.99869"
                      stroke="#FF6700"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_219_1551"
                      x="0.375"
                      y="0.550751"
                      width="17.4375"
                      height="20.8947"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="0.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_219_1551"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_219_1551"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </p>
              <p className="ml-4 mb-1">|</p>
            </div>
            <div className="w-64 ">
              <p className="text-gray-400 text-xs">Drop up</p>
              <p>24 Pragati nagar, near c21 mall nanakheda Ujjain</p>
            </div>
          </div>

          {/* repeat all bolck only for design  */}
        
          <div className="border mt-2 p-1  shadow-[0_0px_5px_rgba(0,0,0,0.25)] rounded-md m-auto  text-xs w-[370px] flex  ">
            <div className="w-64">
              <p className="text-gray-400 text-xs">Pick up</p>
              <p>24 Pragati nagar, near c21 mall nanakheda Ujjain </p>
            </div>
            <div className=" ">
              <p className="ml-4 mb-1">|</p>
              <p className="w-10 ml-2  ">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_219_1551)">
                    <path
                      d="M15.4845 7.06609L16.1707 12.9752C16.2197 13.3966 16.1628 13.8236 16.0051 14.2175C15.8475 14.6114 15.594 14.9597 15.2678 15.231C14.9416 15.5023 14.5528 15.6879 14.1368 15.771C13.7207 15.8541 13.2905 15.8322 12.8851 15.7072L6.42113 13.7131C5.13304 13.334 4.00408 12.5444 3.20607 11.4646C2.40806 10.3847 1.9847 9.07368 2.00042 7.73105C2.00533 7.57535 2.01554 7.41847 2.03106 7.2604C2.19983 5.60871 2.96938 4.07654 4.19354 2.95494C5.4177 1.83334 7.01119 1.20044 8.6713 1.17646C10.3314 1.15248 11.9425 1.7391 13.1986 2.82488C14.4546 3.91066 15.2681 5.41996 15.4845 7.06609Z"
                      stroke="#FF6700"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1703 12.9754L5.70678 8.00346C5.49081 7.90085 5.31618 7.72782 5.21159 7.5128C5.107 7.29778 5.07867 7.05358 5.13127 6.82033C5.18387 6.58708 5.31426 6.37866 5.50101 6.22934C5.68776 6.08002 5.91976 5.99868 6.15886 5.99869H15.2557"
                      stroke="#F58820"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5463 5.99869L10.6377 10.3462"
                      stroke="#F58820"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.43066 9.29756L11.5675 5.99869"
                      stroke="#FF6700"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_219_1551"
                      x="0.375"
                      y="0.550751"
                      width="17.4375"
                      height="20.8947"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="0.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_219_1551"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_219_1551"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </p>
              <p className="ml-4 mb-1">|</p>
            </div>
            <div className="w-64 ">
              <p className="text-gray-400 text-xs">Drop up</p>
              <p>24 Pragati nagar, near c21 mall nanakheda Ujjain</p>
            </div>
          </div>
        </div>
        <center className="">
          <Link href="/returndelevery">
            <button className="bg-orange-500  rounded-md text-white p-1 px-5    ">
              Take 
            </button>
          </Link>
        </center>
        <Footer />
      </div>
    </div>
  );
};

export default TakeReturnOrder;
