"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const router = useRouter();
    const session = useSession();

  const handleSocialLogin = async (providerName) => {
    toast("Processing...");
     await signIn(providerName);
  }

  useEffect(()=>{
    if(session?.status === "authenticated"){
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
        });
        router.push("/");
    }
  },[session?.status])

  return (
    <div className="flex justify-center items-center gap-6 mt-4 text-xl text-gray-700">
      <p
        onClick={() => handleSocialLogin("github")}
        className="p-4 rounded-full bg-[#F5F5F8] cursor-pointer"
      >
        <FaGithub className="cursor-pointer" />
      </p>
      <p
        onClick={() => handleSocialLogin("google")}
        className="p-4 rounded-full bg-[#F5F5F8] cursor-pointer"
      >
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
  );
};

export default SocialLogin;
