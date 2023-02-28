"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaApple, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="flex h-full w-[50%] flex-col justify-between pb-2">
      <h1 className="p-4 pb-0 text-2xl">
        Tech<span className="font-bold">Nepal</span>
      </h1>
      <div className="mx-auto w-[70%]">
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-2xl font-medium tracking-tight">
              Welcome again!
            </p>
            <p className="mt-1 text-[12px] font-medium text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="login-btn">
              <FcGoogle />
              <span className="text-sm">Log in with Google</span>
            </button>
            <button className="login-btn">
              <FaApple />
              <span className="text-sm">Log in with Apple</span>
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <div className="w-[50%] border-t border-gray-300"></div>
          <p className="text-sm text-gray-400">or</p>
          <div className="w-[50%] border-t border-gray-300"></div>
        </div>
        <div>
          <form action="#" method="POST" className="sm:mt-4">
            <div className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={passwordType}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  <div className="absolute top-3 right-4">
                    {passwordType === "password" ? (
                      <FaRegEyeSlash onClick={togglePasswordType} />
                    ) : (
                      <FaRegEye onClick={togglePasswordType} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="flex gap-x-2">
                <div className="flex h-6 items-center">
                  <input type="checkbox" />
                </div>
                <label
                  className="text-sm leading-6 text-gray-600"
                  id="switch-1-label"
                >
                  Remember for 30days
                </label>
              </div>
              <p className="text-right text-sm font-semibold leading-6 text-primary underline">
                <Link href={"#"}>Forget Password?</Link>
              </p>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-2 flex w-full justify-end text-sm">
            <p>
              Don't have an account?{" "}
              <Link href={"/auth/register"}>
                <span className="font-semibold text-primary underline">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[12px]">
        <p>2023 TechNepal, All right Reserved</p>
      </div>
    </div>
  );
};

export default Login;
