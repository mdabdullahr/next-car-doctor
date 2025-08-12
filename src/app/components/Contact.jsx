import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-5 mt-26">
      <div className="bg-[#151515] rounded-[10px] p-20 grid grid-cols-12 gap-10">
        <div className="flex items-center gap-4 col-span-12 md:col-span-6 lg:col-span-4">
          <div>
            <Image src={"/assets/contact/schedule.png"} width={40} height={40} alt="schedule icon"/>
          </div>
          <div>
            <p className="text-[16px] text-white">
              We are open monday-friday
            </p>
            <h3 className="text-2xl font-bold text-white mt-2">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 col-span-12 md:col-span-6 lg:col-span-4">
          <div>
            <Image src={"/assets/contact/phone.png"} width={40} height={40} alt="schedule icon"/>
          </div>
          <div>
            <p className="text-[16px] text-white">
              Have a question?
            </p>
            <h3 className="text-2xl font-bold text-white mt-2">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 col-span-12 md:col-span-6 lg:col-span-4">
          <div>
            <Image src={"/assets/contact/location.png"} width={40} height={40} alt="schedule icon"/>
          </div>
          <div>
            <p className="text-[16px] text-white">
              Need a repair? our address
            </p>
            <h3 className="text-2xl font-bold text-white mt-2">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
