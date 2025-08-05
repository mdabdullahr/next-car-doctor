"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center max-w-[1320px] mx-auto my-8 px-5">
      <div>
        <Image
          src={"/assets/images/login/login.svg"}
          width={460}
          height={502}
          alt="login"
        />
      </div>
      <div className="w-full md:w-[448px] border-2 border-[#F3F3F3] rounded-[10px] p-6 md:p-10 lg:p-[72px]">
        <h2 className="text-[40px] font-bold text-center mb-[50px] text-[#444444]">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-[35px]">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-[#F3F3F3] h-12 rounded px-4 py-2 focus:outline-none focus:border-[#FF3811]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-[35px] relative">
            <label
              className="block text-lg font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-[#F3F3F3] h-12 rounded px-4 py-2 pr-10 focus:outline-none focus:border-[#FF3811]"
            />
            <div
              className="absolute right-3 top-[43px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#FF3811] text-white text-[20px] font-semibold py-2 rounded-[10px] hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Or sign up with */}
        <p className="text-center mt-8 text-gray-600">or sign in with</p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-4 text-xl text-gray-700">
          <p className="p-4 rounded-full bg-[#F5F5F8] cursor-pointer">
            <FaFacebookF className="cursor-pointer text-[#1877F2]" />
          </p>
          <p className="p-4 rounded-full bg-[#F5F5F8] cursor-pointer">
            <FaLinkedinIn className="cursor-pointer text-[#0A66C2]" />
          </p>
          <p className="p-4 rounded-full bg-[#F5F5F8] cursor-pointer">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
          </p>
        </div>

        {/* Already have account */}
        <Link href={"/register"}>
          <p className="text-center mt-8 text-gray-700">
            Don't have an account?{" "}
            <span className="text-[#FF3811] font-semibold cursor-pointer">
              Register
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
