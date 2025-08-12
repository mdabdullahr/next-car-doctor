import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-26 max-w-[1140px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-[61px]">
      {/* Left container (image container) */}
      <div>
        <figure className="relative w-full max-w-[400px] aspect-[400/413]">
          <Image
            className="object-cover rounded-[10px]"
            src={"/assets/images/about_us/person.jpg"}
            fill
            alt="about us image"
          />
          <div>
            <figure className="absolute -bottom-26 right-0 md:-right-20 w-full max-w-[300px] aspect-[300/305]">
              <Image
                className="object-cover border-8 border-white rounded-[10px]"
                src={"/assets/images/about_us/parts.jpg"}
                fill
                alt="parts"
              />
            </figure>
          </div>
        </figure>
      </div>

      {/* Right container (Text container) */}
      <div>
        <h4 className="text-lg md:text-xl font-bold text-[#FF3811]">
          About Us
        </h4>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-bold text-[#151515] mt-5 leading-16">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-xs md:text-sm lg:text-[16px] text-[#737373] mt-[30px] leading-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="text-xs md:text-sm lg:text-[16px] text-[#737373] mt-5 leading-8">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="text-lg font-semibold px-6 py-3 rounded-[5px] bg-[#FF3811] mt-[30px] text-white">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
