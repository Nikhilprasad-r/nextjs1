"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-white w-full z-20 text-base top-0 start-0 border-b border-gray-200 fixed font-[basiersquare]">
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
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
          <div class="text-base hidden md:block text-neutral-400 hover:text-blue-600 mr-6">
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => this.classList.add("hidden")}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <div className="flex group items-center gap-2 py-2 px-3 text-neutral-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative">
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
              <div className="flex group items-center gap-2 py-2 px-3 text-neutral-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative ">
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
              <div className="flex group py-2 px-3 text-neutral-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Pricing
              </div>
            </li>
            <li>
              <div className="flex group items-center gap-2 py-2 px-3 text-neutral-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative">
                <span> Resources</span>
                <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
                <div className="absolute right-0 top-5 hidden w-auto flex-col gap-1 rounded-lg transition-all group-hover:flex">
                  <Dropdown />
                </div>
              </div>
            </li>
            <li>
              <div className="flex group items-center gap-2 py-2 px-3 text-neutral-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 relative">
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
