"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
const router =useRouter();
  const [passwordError, setPasswordError] = useState("");
  const [details, setDetails] = useState({
    phoneno: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(details);

    if (!validatePassword(details.password)) {
      setPasswordError(
        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
    } else {
      setPasswordError("");
    }
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*()=?]{8,}$/;
    return regex.test(password);
  };

  return (
    <div>
      <div className=" h-[668px]">
        <div className="w-96 h-full bg-orange-400   m-auto    ">
          <p className="text-white text-3xl text-center pt-14 pb-4">Login</p>
          <div className="bg-white left rounded-t-3xl border     ">
            <p className="p-6 text-orange-500  text-2xl  ">
              Welcome back! Glad to See You, Again!
            </p>
            <center>
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={setDetails.phoneno}
                  onChange={handleChange}
                  placeholder="Phone no, email or username"
                  name="phoneno"
                  className="border  w-[350px] p-2 m-auto bg-gray-100 mt-2  rounded-md"
                />
                <input
                  type="text"
                  value={setDetails.password}
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                  className="border  w-[350px] p-2 m-auto bg-gray-100  mt-4 rounded-md "
                />
                {passwordError && (
                  <p className="text-red-500 text-xs   ml-4">{passwordError}</p>
                )}
<Link href='/homepage'>
                <button className="bg-orange-500 w-[350px] p-2 m-auto mt-6 rounded-md text-white ">
                  Login
                </button>
                </Link>
              </form>
              <p className="text-xs mt-2">
                Forgot your login details? <b>Get help logging in</b>{" "}
              </p>
              <div className="flex mt-4">
                <div className="border bg-gray-200 w-28 h-0 mt-3 m-2"></div>
                <p className="text-sm">or Register with</p>
                <div className="border bg-gray-200 w-32 h-0 mt-3 m-2"></div>
              </div>
              <button className="border w-[350px] p-2 m-auto mt-6 rounded-md text-white  ">
                <center>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.88468 15.9998C6.88468 14.9836 7.05345 14.0094 7.35468 13.0956L2.08213 9.06934C1.05454 11.1557 0.475586 13.5067 0.475586 15.9998C0.475586 18.4908 1.05383 20.8404 2.07999 22.9253L7.34969 18.8912C7.05131 17.9817 6.88468 17.011 6.88468 15.9998Z"
                      fill="#FBBC05"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.1422 6.75547C18.3497 6.75547 20.3437 7.53769 21.9103 8.81769L26.4679 4.26658C23.6906 1.8488 20.13 0.355469 16.1422 0.355469C9.95097 0.355469 4.63 3.89609 2.08203 9.06942L7.35458 13.0957C8.56946 9.40791 12.0325 6.75547 16.1422 6.75547Z"
                      fill="#EB4335"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.1422 25.2443C12.0325 25.2443 8.56946 22.5919 7.35458 18.9041L2.08203 22.9297C4.63 28.1037 9.95097 31.6443 16.1422 31.6443C19.9634 31.6443 23.6116 30.2875 26.3497 27.7453L21.3449 23.8761C19.9328 24.7657 18.1546 25.2443 16.1422 25.2443Z"
                      fill="#34A853"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.0971 16C31.0971 15.0755 30.9547 14.08 30.7411 13.1555H16.1426V19.2H24.5456C24.1255 21.2608 22.9818 22.8451 21.3453 23.8762L26.3501 27.7454C29.2264 25.0759 31.0971 21.0993 31.0971 16Z"
                      fill="#4285F4"
                    />
                  </svg>
                </center>
              </button>
              <p className="text-sm mt-28 mb-2   ">
                Don't have an account?{" "}
                <Link href="/registerverify">
                <span className="text-orange-500">Register</span>{" "}
                </Link>
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
