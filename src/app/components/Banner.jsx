import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="max-w-[1140px] mx-auto mt-10 px-5">
      <figure className="relative w-full aspect-[1140/600]">
        <Image
          className="rounded-[10px] object-cover"
          src={"/assets/images/banner/5.jpg"}
          fill
          alt="banner image"
        />
        <div className="absolute w-full h-full overlay-bg justify-center flex flex-col pl-[20px] md:pl-[50px] lg:pl-[100px] rounded-[10px]">
            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl text-white font-bold lg:leading-[70px]">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-sm md:text-lg text-white my-3 md:my-5 lg:my-[30px]">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="px-3 md:px-6 py-2 md:py-3 rounded-[5px] text-xs md:text-lg text-white font-semibold bg-[#FF3811] cursor-pointer">
                Discover More
              </button>
              <button className="px-3 md:px-6 py-2 md:py-3 rounded-[5px] text-xs md:text-lg text-white font-semibold border border-white cursor-pointer">
                Latest Project
              </button>
            </div>
            <div className="space-x-5 absolute right-4 md:right-10 bottom-4 md:bottom-10">
                <button className="p-3 md:p-5 bg-white/20 rounded-full cursor-pointer">
                    <FaArrowLeft className="text-white"/>
                </button>
                <button className="p-3 md:p-5 bg-[#FF3811] rounded-full cursor-pointer">
                    <FaArrowRight className="text-white"/>
                </button>
            </div>
        </div>
      </figure>
    </div>
  );
};

export default Banner;
