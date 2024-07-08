"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../footer/page";
import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const Settings = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="bg-white h-[668px] border w-96 m-auto ">
        <div className="w-full h-full  bg-orange-400    ">
          <p className="text-white text-3xl text-center pt-14 pb-4">
            {" "}
            Settings
          </p>
          <div className="bg-white left rounded-t-3xl border border-white ">
        

            <div className="  h-96 mt-6">
              <div className="m-auto  w-[350px] flex mt-8  ">
                <CiSearch className="  bg-gray-100 p-1 text-4xl rounded-s-md    " />
                <input
                  type="text"
                  placeholder="Search for a setting..."
                  className="bg-gray-100 w-[350px] p-1.5 rounded-e-md m-auto  focus:border-orange-500 focus:outline-none "
                />
              </div>
              <div className="flex justify-around mt-6">
                <svg
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5769 14H4.42308C3.25 14 2.12498 14.5268 1.29549 15.4645C0.466001 16.4021 0 17.6739 0 19V26H1.76923V19C1.76923 18.2044 2.04883 17.4413 2.54652 16.8787C3.04422 16.3161 3.71923 16 4.42308 16H18.5769C19.2808 16 19.9558 16.3161 20.4535 16.8787C20.9512 17.4413 21.2308 18.2044 21.2308 19V26H23V19C23 17.6739 22.534 16.4021 21.7045 15.4645C20.875 14.5268 19.75 14 18.5769 14Z"
                    fill="#585858"
                  />
                  <path
                    d="M11.5001 12C12.5498 12 13.576 11.6481 14.4489 10.9888C15.3217 10.3295 16.002 9.39246 16.4037 8.2961C16.8055 7.19975 16.9106 5.99335 16.7058 4.82946C16.501 3.66557 15.9955 2.59648 15.2532 1.75736C14.5109 0.918247 13.5651 0.346802 12.5356 0.115291C11.506 -0.11622 10.4388 0.00259972 9.46891 0.456725C8.49906 0.910851 7.67011 1.67989 7.08689 2.66658C6.50367 3.65328 6.19238 4.81331 6.19238 6C6.19238 7.5913 6.75158 9.11742 7.74697 10.2426C8.74236 11.3679 10.0924 12 11.5001 12ZM11.5001 2C12.1999 2 12.884 2.2346 13.4659 2.67412C14.0478 3.11365 14.5014 3.73836 14.7692 4.46927C15.037 5.20017 15.1071 6.00444 14.9705 6.78036C14.834 7.55629 14.497 8.26902 14.0021 8.82843C13.5073 9.38784 12.8768 9.7688 12.1904 9.92314C11.504 10.0775 10.7925 9.99827 10.146 9.69552C9.4994 9.39277 8.94676 8.88008 8.55795 8.22228C8.16914 7.56449 7.96161 6.79113 7.96161 6C7.96161 4.93914 8.33441 3.92172 8.998 3.17158C9.6616 2.42143 10.5616 2 11.5001 2Z"
                    fill="#ACACAC"
                  />
                </svg>

                <p className="mr-16 mt-2 ml-[-72px]">Account</p>
                <div className="mt-2">
                  <svg
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L10 10L1 19"
                      stroke="#9A9A9A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr className="w-80 m-auto mt-4" />

              <div className="flex justify-around mt-4">
                <div className="ml-2">
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 19.1999C1 15.523 1 13.6845 2.01048 12.5422C3.02096 11.3999 4.64731 11.3999 7.9 11.3999H17.1C20.3527 11.3999 21.979 11.3999 22.9895 12.5422C24 13.6845 24 15.523 24 19.1999C24 22.8768 24 24.7153 22.9895 25.8576C21.979 26.9999 20.3527 26.9999 17.1 26.9999H7.9C4.64731 26.9999 3.02096 26.9999 2.01048 25.8576C1 24.7153 1 22.8768 1 19.1999Z"
                      stroke="#585858"
                      stroke-width="2"
                    />
                    <path
                      opacity="0.5"
                      d="M5.59961 11.4V8.8C5.59961 4.49218 8.68884 1 12.4996 1C16.3104 1 19.3996 4.49218 19.3996 8.8V11.4"
                      stroke="#585858"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <p className=" mt-2 ml-[-50px]">Privacy and Security</p>
                <div className="mt-2 mr-2 ">
                  <svg
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L10 10L1 19"
                      stroke="#9A9A9A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr className="w-80 m-auto mt-4" />

              <div className="flex justify-around mt-4">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 0C9.18479 0 6.00537 1.36964 3.66117 3.80761C1.31696 6.24558 0 9.55219 0 13C0 16.4478 1.31696 19.7544 3.66117 22.1924C6.00537 24.6304 9.18479 26 12.5 26C15.8152 26 18.9946 24.6304 21.3388 22.1924C23.683 19.7544 25 16.4478 25 13C25 9.55219 23.683 6.24558 21.3388 3.80761C18.9946 1.36964 15.8152 0 12.5 0ZM12.5 1.625C15.4008 1.625 18.1828 2.82343 20.234 4.95666C22.2852 7.08989 23.4375 9.98316 23.4375 13C23.4375 16.0168 22.2852 18.9101 20.234 21.0433C18.1828 23.1766 15.4008 24.375 12.5 24.375C9.59919 24.375 6.8172 23.1766 4.76602 21.0433C2.71484 18.9101 1.5625 16.0168 1.5625 13C1.5625 9.98316 2.71484 7.08989 4.76602 4.95666C6.8172 2.82343 9.59919 1.625 12.5 1.625Z"
                    fill="#585858"
                  />
                  <path
                    d="M12.8533 4.87662C12.1596 4.87662 11.5033 4.9595 10.8846 5.12525C10.3221 5.278 9.82363 5.486 9.36426 5.72813L9.83301 7.08012C10.7299 6.60725 11.6486 6.34888 12.5893 6.34888C13.3799 6.34888 14.0064 6.565 14.4393 7.01512C14.8643 7.44087 15.0799 8.01125 15.0799 8.68888C15.0799 9.10975 14.9861 9.503 14.7986 9.86375C14.6299 10.2115 14.408 10.5446 14.1361 10.8599C13.8705 11.1686 13.5893 11.4757 13.2924 11.7829L13.2893 11.7845C13.0002 12.0705 12.7268 12.3857 12.4658 12.7319L12.4643 12.7351C12.208 13.0601 11.9955 13.4144 11.8236 13.7995C11.6721 14.1749 11.5939 14.5957 11.5939 15.0654C11.5939 15.3481 11.6252 15.6114 11.6674 15.8698H13.083C13.083 15.8372 13.0752 15.8096 13.0752 15.7771V15.5252C13.0752 15.0004 13.1752 14.5226 13.3768 14.1018C13.5736 13.6793 13.8143 13.2925 14.1033 12.9447L14.1049 12.9415C14.3893 12.584 14.7018 12.2428 15.0439 11.9178C15.3783 11.6025 15.6814 11.271 15.9564 10.9265C16.2283 10.5836 16.4564 10.218 16.6424 9.83288C16.8221 9.44288 16.9143 9.0025 16.9143 8.502C16.9143 8.10712 16.8518 7.69437 16.7221 7.26375V7.2605L16.7205 7.25725C16.6076 6.81936 16.393 6.41703 16.0955 6.08562C15.7464 5.70749 15.3204 5.41544 14.8486 5.23088H14.8439L14.8408 5.22763C14.3393 4.99688 13.6752 4.875 12.8518 4.875L12.8533 4.87662ZM12.5002 18.369C12.0783 18.369 11.7689 18.5022 11.533 18.7752C11.2971 19.0386 11.1688 19.3871 11.1752 19.747C11.1752 20.124 11.2908 20.4392 11.5346 20.7188C11.7689 20.9918 12.0768 21.125 12.5002 21.125C12.9221 21.125 13.2314 20.9918 13.4689 20.7188C13.7042 20.455 13.8319 20.1067 13.8252 19.747C13.8316 19.3871 13.7033 19.0386 13.4674 18.7752C13.233 18.5022 12.9236 18.369 12.5002 18.369Z"
                    fill="#ACACAC"
                  />
                </svg>

                <p className="mr-16 mt-2 ml-[-72px]">About us</p>
                <div className="mt-2">
                  <svg
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L10 10L1 19"
                      stroke="#9A9A9A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr className="w-80 m-auto mt-4" />

              <div className="flex justify-around mt-4">
                <svg
                  width="25"
                  height="28"
                  viewBox="0 0 25 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5294 27H3.70588C2.21146 27 1 25.545 1 23.75V4.25C1 2.45507 2.21146 1 3.70588 1H14.5294M9.11765 14H24M24 14L19.9412 18.875M24 14L19.9412 9.125"
                    stroke="#585858"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 13.875H23.8824M23.8824 13.875L19.8235 18.75M23.8824 13.875L19.8235 9"
                    stroke="#ACACAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="mr-16 mt-2 ml-[-80px]">Logout</p>
                <div className="mt-2">
                  <svg
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L10 10L1 19"
                      stroke="#9A9A9A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr className="w-80 m-auto mt-4" />
            </div>
            <div className="mt-20">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
