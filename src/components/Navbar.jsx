import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <>
      <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/services"}>Services</Link>
      </li>
      <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/blogs"}>Blogs</Link>
      </li>
      <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
};
const Navbar = () => {
  return (
    <div className="navbar max-w-[1320px] mx-auto py-3 lg:py-5 p-0 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                NavMenu()
            }
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image src={"/assets/logo.svg"} alt="logo" width={60} height={50} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 2xl:space-x-8">
            {
                NavMenu()
            }
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/login"}>Login</Link>
      </li>
      <li className="text-[#444444] font-semibold text-lg">
        <Link href={"/register"}>Register</Link>
      </li>
        </ul>
        <a className="btn btn-outline text-[#FF3811] text-lg rounded">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
