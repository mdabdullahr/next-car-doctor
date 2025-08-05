"use client";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerUser } from "@/app/actions/auth/registerUser";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    toast("Submitting....")
    const response = await registerUser(data);
    // Check if the response is successful
    if (response?.success && response.insertedId) {
      Swal.fire({
        title: "Registered successfully!",
        icon: "success",
      });
      reset(); // reset the form
    } else {
      console.error("Failed to register:", response);
      Swal.fire({
        title: "Registration failed",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <h2 className="text-[40px] font-bold text-center mb-[50px] text-[#444444]">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-[35px]">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-[#F3F3F3] h-12 rounded px-4 py-2 focus:outline-none focus:border-[#FF3811]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-[35px] relative">
          <label className="block text-lg font-medium mb-2" htmlFor="password">
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

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#FF3811] text-white text-[20px] font-semibold py-2 rounded-[10px] hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </form>

      {/* Or sign up with */}
      <p className="text-center mt-8 text-gray-600">or sign up with</p>

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
      <Link href={"/login"}>
        <p className="text-center mt-8 text-gray-700">
          Already have an account?{" "}
          <span className="text-[#FF3811] font-semibold cursor-pointer">
            Login
          </span>
        </p>
      </Link>
    </div>
  );
};

export default RegisterForm;
