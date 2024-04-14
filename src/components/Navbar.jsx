"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowUp } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";
import Dropdown from "./subcomponents/Dropdown";
import { useState } from "react";
import clsx from "clsx";
const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <nav className="bg-white w-full z-20 text-base top-0 start-0 border-b border-gray-200 fixed font-[basiersquare]">
      <div className="max-w-[70rem] flex flex-nowrap items-center justify-between mx-auto p-4">
        <div
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="./logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex md:order-2  items-center space-x-6 md:space-x-0 rtl:space-x-reverse">
          <div className="text-base hidden md:block text-[#6e778c] hover:text-blue-600 mr-6">
            Log in
          </div>
          <button
            type="button"
            className="hidden md:block text-white text-sm bg-[#084df2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center"
          >
            Create Account
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={(e) => handleToggle(e)}
          >
            <IoMenu className="text-6xl cursor-pointer" />
          </button>
        </div>
        <div
          className={clsx(
            "fixed h-lvh w-screen md:hidden bg-white top-0 left-0  transition-all delay-75",
            active ? "-translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-row justify-between items-center bg-white border-b-[1px] border-[#cfd4e4] h-16 px-5">
            <Image
              src="./logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              width={100}
              height={100}
            />

            <IoClose
              className="text-3xl cursor-pointer"
              onClick={(e) => handleToggle(e)}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="w-full relative overflow-y px-5 gap-x-0 border-b border-[#e4e4e4] border-solid flex flex-col mx-0 my-auto flex-shrink flex-grow basis-0 text-[#6e778c]">
              <div className="flex group justify-between gap-2 pt-6 pb-3 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative border-b-[1px] border-[#cfd4e4]">
                <span>Features</span>

                <IoIosArrowUp className="rotate-180 transition-all content-center group-hover:rotate-0" />

                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>

              <div className="flex group justify-between gap-2 pt-6 pb-3 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative border-b-[1px] border-[#cfd4e4] ">
                <span>Use cases</span>
                <span>
                  <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                </span>
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>

              <div className="flex group pt-6 pb-3 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 border-b-[1px] border-[#cfd4e4]">
                Pricing
              </div>

              <div className="flex group justify-between gap-2 pt-6 pb-3 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative border-b-[1px] border-[#cfd4e4]">
                <span> Resources</span>
                <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>

              <div className="flex group justify-between gap-2 pt-6 pb-3 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative border-b-[1px] border-[#cfd4e4]">
                <span>Company</span>
                <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>
            </div>
            <div className="flex flex-col p-6 mt-auto text-base gap-4 basis-0 items-center shrink grow">
              <button
                type="button"
                className="text-white w-5/6  bottom-0 text-sm bg-[#084df2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center"
              >
                Create Account
              </button>
              <button
                type="button"
                className="border-[1px_solid_rgb(0,0,0)] w-5/6  bottom-0 text-sm bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-[#6e778c] md:bg-white">
            <li>
              <div className="flex group items-center cursor-pointer text-sm gap-2 py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative">
                <span>Features</span>
                <span>
                  <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                </span>
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>
            </li>
            <li>
              <div className="flex group items-center cursor-pointer text-sm gap-2 py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative ">
                <span>Use cases</span>
                <span>
                  <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                </span>
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>
            </li>
            <li>
              <div className="flex text-sm cursor-pointer group py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Pricing
              </div>
            </li>
            <li>
              <div className="flex group items-center cursor-pointer text-sm gap-2 py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative">
                <span> Resources</span>
                <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>
            </li>
            <li>
              <div className="flex group items-center cursor-pointer text-sm gap-2 py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative">
                <span>Company</span>
                <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
