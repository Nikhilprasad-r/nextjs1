import Image from "next/image";
import Midcard from "./Midcard";
import { TbBooks } from "react-icons/tb";
import { BsGraphUp, BsGrid } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";

const Usercase = () => {
  return (
    <section className="w-5/6 relative justify-self-center pt-10 pb-24">
      <div className="block px-10">
        <div className="py-0 px-24">
          <div className="w-full max-w-6xl relative">
            <div className="w-full max-w-6xl relative">
              <div className="mb-12">
                <div className="flex items-center flex-col text-center">
                  <div className="mb-6">
                    <div className="mb-2">
                      <div className="tracking-tighter uppercase font-[basiersquare] text-sm font-medium text-[#084df2] ">
                        Use cases
                      </div>
                    </div>
                    <h2 className="text-4xl font-[archia] tracking-tight font-medium">
                      For teams who create training videos at scale
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid ">
          <div className="sm:hidden ">
            <label for="tabs" className="sr-only">
              Select your country
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Profile</option>
              <option>Dashboard</option>
              <option>setting</option>
              <option>Invoioce</option>
            </select>
          </div>
          <ul className="flex gap-x-2 border-2 border-solid border-[#e9ecf6] rounded-xl flex-row overflow-hidden relative bg-white">
            <li className="">
              <a
                href=""
                className="flex justify-center items-center gap-x-2 cursor-pointer bg-transparent flex-1 p-3 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <TbBooks className="justify-center items-center  w-5 h-5" />{" "}
                <span>Learning & Development</span>
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="flex justify-center items-center gap-x-2 cursor-pointer bg-transparent flex-1 p-3 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300  "
              >
                <BsGraphUp /> Sales Enablement
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="flex justify-center items-center gap-x-2 cursor-pointer bg-transparent flex-1 p-3 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300  "
              >
                <TfiHeadphoneAlt /> Customer Service
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="flex justify-center items-center gap-x-2 cursor-pointer bg-transparent flex-1 p-3 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300  "
              >
                <BsGrid /> Information Security
              </a>
            </li>
            <li className="">
              <a
                href=""
                className="flex justify-center items-center gap-x-2 cursor-pointer bg-transparent flex-1 p-3 rounded-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300  "
              >
                <FaRegStar />
                Marketing
              </a>
            </li>
          </ul>
        </div>
        <Midcard />
      </div>
    </section>
  );
};

export default Usercase;
