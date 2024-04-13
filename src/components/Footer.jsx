import Image from "next/image";
import React from "react";
import {
  RiTwitterXFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <Image
                src="./logo.svg"
                className="h-8 me-3"
                alt=" Logo"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 md:text-center ">
            © 2024{" "}
            <a href="" className="hover:underline">
              synthesia
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 md:justify-center md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <RiLinkedinBoxFill className="w-4 h-4" />

              <span className="sr-only">Linked in</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <RiYoutubeFill className="w-4 h-4" />
              <span className="sr-only">Youtube</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <RiTwitterXFill className="w-4 h-4" />
              <span className="sr-only">X page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
