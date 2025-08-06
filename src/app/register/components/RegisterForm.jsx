"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerUser } from "@/app/actions/auth/registerUser";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialLogin from "@/app/login/components/SocialLogin";

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
      <SocialLogin/>

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
