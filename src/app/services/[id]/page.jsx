import DBConnect, { collectionsNameObj } from "@/lib/DBConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuFileText } from "react-icons/lu";
import { HiOutlinePlayCircle } from "react-icons/hi2";

const page = async ({ params }) => {
  const p = await params;
  const serviceCollection = DBConnect(collectionsNameObj.servicesCollection);
  const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  const facilities = data?.facility;
  return (
    <div className="max-w-[1320px] mx-auto mt-6 lg:mt-8 2xl:mt-12 px-5 mb-20">
      <section className="flex justify-center items-center">
        <figure className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1320}
            height={300}
            alt="banner"
          />
          <div className="overlay-bg absolute rounded-[10px] w-full h-full top-0">
            <div className="w-full h-full flex items-center ps-16">
              <div>
                <h1 className="text-2xl md:text-4xl xl:text-5xl text-white font-bold">
                  Service Details
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full top-0">
            <div className="flex flex-col justify-end items-center h-full text-center">
              <div
                className="text-white text-xl font-medium px-8 py-2"
                style={{
                  backgroundColor: "#FF3811",
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
              >
                Home/Service Details
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="mt-10 lg:mt-18 2xl:mt-24 grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-8">
          <figure className="">
            <Image
              className="rounded-[10px]"
              src={data.img}
              width={850}
              height={400}
              alt={data.title}
            />
          </figure>
          <h1 className="text-[#151515] font-bold text-2xl md:text-3xl lg:text-4xl mt-12">
            {data.title}
          </h1>
          <p className="text-[#737373] text-[16px] mt-6">{data.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:mt-7 2xl:mt-8">
            {facilities.map((facility) => {
              return (
                <div
                  key={facility.name}
                  className="bg-[#F3F3F3] rounded-[10px] border-t-2 border-[#FF3811]"
                >
                  <div className="p-[40px]">
                    <h2 className="text-xl font-bold text-[#444444] mb-3">
                      {facility.name}
                    </h2>
                    <p className="text-[16px] text-[#737373]">
                      {facility.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[#737373] text-[16px] mt-6">{data.description}</p>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#151515]">
              3 Simple Steps to Process
            </h2>
            <p className="text-[#737373] text-[16px] mt-6">
              {data.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 2xl:mt-8">
              <div className="border border-[#E8E8E8] rounded-[10px] px-9 py-10">
                <div className="flex justify-center items-center">
                  <div className="bg-[#ff39111a] px-4 py-4 rounded-full">
                    <p className="text-xl font-bold text-white px-6 py-5 bg-[#FF3811] rounded-full">
                      01
                    </p>
                  </div>
                </div>
                <h3 className="text-[#151515] font-bold text-xl text-center my-5">
                  STEP ONE
                </h3>
                <p className="text-[16px] text-[#737373] text-center">
                  It uses a dictionary <br /> of over 200 .
                </p>
              </div>
              <div className="border border-[#E8E8E8] rounded-[10px] px-9 py-10">
                <div className="flex justify-center items-center">
                  <div className="bg-[#ff39111a] px-4 py-4 rounded-full">
                    <p className="text-xl font-bold text-white px-6 py-5 bg-[#FF3811] rounded-full">
                      02
                    </p>
                  </div>
                </div>
                <h3 className="text-[#151515] font-bold text-xl text-center my-5">
                  STEP TWO
                </h3>
                <p className="text-[16px] text-[#737373] text-center">
                  It uses a dictionary <br /> of over 200 .
                </p>
              </div>
              <div className="border border-[#E8E8E8] rounded-[10px] px-9 py-10">
                <div className="flex justify-center items-center">
                  <div className="bg-[#ff39111a] px-4 py-4 rounded-full">
                    <p className="text-xl font-bold text-white px-6 py-5 bg-[#FF3811] rounded-full">
                      03
                    </p>
                  </div>
                </div>
                <h3 className="text-[#151515] font-bold text-xl text-center my-5">
                  STEP THREE
                </h3>
                <p className="text-[16px] text-[#737373] text-center">
                  It uses a dictionary <br /> of over 200 .
                </p>
              </div>
            </div>
            <figure className="mt-6 2xl:mt-8 relative">
              <Image
                className="rounded-[10px]"
                src={"/assets/images/banner/2.jpg"}
                width={850}
                height={300}
                alt="data.title"
              />
              <div className="absolute w-full h-full flex justify-center top-0">
                <div className="flex justify-center items-center cursor-pointer">
                  <HiOutlinePlayCircle className="text-[#FF3811]" size={100} />
                </div>
              </div>
            </figure>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-7">
          <div className="bg-[#F3F3F3] rounded-[10px]">
            <div className="p-[40px]">
              <h2 className="text-2xl font-bold text-[#151515] mb-5">
                Services
              </h2>
              <ul className="space-y-5">
                <li className="p-[18px] bg-[#FF3811] text-white rounded-sm flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Full Car Repair</p>
                  <FaArrowRight />
                </li>
                <li className="p-[18px] bg-white hover:bg-[#FF3811] text-black hover:text-white rounded-sm flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Engine Repair</p>
                  <FaArrowRight />
                </li>
                <li className="p-[18px] bg-white hover:bg-[#FF3811] text-black hover:text-white rounded-sm flex justify-between items-center">
                  <p className="text-[16px] font-semibold">
                    Automatic Services
                  </p>
                  <FaArrowRight />
                </li>
                <li className="p-[18px] bg-white hover:bg-[#FF3811] text-black hover:text-white rounded-sm flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Engine Oil Change</p>
                  <FaArrowRight />
                </li>
                <li className="p-[18px] bg-white hover:bg-[#FF3811] text-black hover:text-white rounded-sm flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Battery Charge</p>
                  <FaArrowRight />
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#151515] rounded-[10px]">
            <div className="p-[40px]">
              <h2 className="text-white text-2xl font-bold mb-5">Download</h2>
              <ul className="space-y-5">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <LuFileText className="text-white" size={32} />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Our Brochure
                      </h4>
                      <p className="text-[#A2A2A2] text-[16px] mt-[5px]">
                        Download
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FF3811] rounded-sm">
                    <p className="p-4">
                      <FaArrowRight className="text-white" />
                    </p>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <LuFileText className="text-white" size={32} />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Company Details
                      </h4>
                      <p className="text-[#A2A2A2] text-[16px] mt-[5px]">
                        Download
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FF3811] rounded-sm">
                    <p className="p-4">
                      <FaArrowRight className="text-white" />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#151515] rounded-[10px]">
            <div className="p-[50px]">
              <figure className="flex justify-center items-center">
                <Image
                  src={"/assets/logo.svg"}
                  width={110}
                  height={90}
                  alt="logo"
                />
              </figure>
              <h2 className="text-white text-2xl font-bold text-center mt-5">
                Need Help? We Are Here <br /> To Help You
              </h2>
              <div className="bg-white rounded-[10px] pt-6 pb-12 mt-8">
                <h4 className="text-xl font-bold text-center">
                  <span className="text-[#FF3811]">Car Doctor</span>{" "}
                  <span className="text-[#151515]">Special</span>
                </h4>
                <p className="text-[16px] font-bold text-[#FF3811] text-center mt-2">
                  <span className="text-[#737373]">Save up to</span> 60% off
                </p>
              </div>
              <div className="flex justify-center items-center -mt-8">
                <button className="text-xl font-semibold text-white px-8 py-4 rounded-sm bg-[#FF3811] cursor-pointer">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl text-[#151515] font-bold mb-6">
              Price ${data.price}
            </h2>
            <button className="text-lg font-semibold text-white bg-[#FF3811] p-4 rounded-sm w-full cursor-pointer">
              Proceed Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
