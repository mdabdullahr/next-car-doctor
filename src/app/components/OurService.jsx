import DBConnect, { collectionsNameObj } from "@/lib/DBConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurService = async () => {
  const serviceCollection = DBConnect(collectionsNameObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <section className="max-w-[1320px] mx-auto mt-20 px-5">
      <p className="text-xl font-bold text-[#FF3811] text-center">Service</p>
      <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] text-center my-5">
        Our Service Area
      </h2>
      <p className="text-[16px] text-[#737373] text-center max-w-3xl mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-12 gap-6 mt-12">
        {data.map((item) => {
          return (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 p-6 h-full border border-[#E8E8E8] rounded-[10px]"
              key={item._id}
            >
              <figure className="w-full h-3/4 flex justify-center items-center">
                <Image
                  className="w-full h-full object-cover rounded-[10px]"
                  alt={item.title}
                  src={item.img}
                  width={314}
                  height={208}
                />
              </figure>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <h2 className="font-bold text-xl lg:text-2xl text-[#444444]">
                    {item.title}
                  </h2>
                  <p className="font-bold text-lg lg:text-xl text-[#FF3811] mt-5">
                    Price : ${item.price}
                  </p>
                </div>
                <div>
                  <Link href={`/services/${item._id}`}>
                    <FaArrowRight className="text-[#FF3811]" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurService;
