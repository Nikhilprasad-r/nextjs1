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
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Login Button and Create Account Button */}
        <div className="flex items-center space-x-6 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/login"
            className="text-base text-neutral-400 hover:text-blue-600"
          >
            Log in
          </Link>
          <button className="text-white text-sm bg-[#084df2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center">
            Create Account
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Open main menu"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Main Navigation Menu */}
        <div
          className="hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <NavItem href="/features">Features</NavItem>
            <NavItem href="/use-cases">Use Cases</NavItem>
            <NavItem href="/pricing">Pricing</NavItem>
            <NavItem href="/resources">Resources</NavItem>
            <NavItem href="/company">Company</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Navigation Item Component
const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-2 py-2 px-3 text-neutral-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
      >
        {children}
        <IoIosArrowUp className="rotate-180 transition-all group-hover:rotate-0" />
      </Link>
    </li>
  );
};

export default Navbar;
