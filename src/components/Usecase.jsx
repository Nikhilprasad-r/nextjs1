import Image from "next/image";
import Midcard from "./Midcard";
import { TbBooks } from "react-icons/tb";
import { BsGraphUp, BsGrid } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";

const Usecase = () => {
  return (
    <section className="w-full px-4 md:px-0 pt-10 pb-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-8">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-blue-500 uppercase">
              Use cases
            </div>
            <h2 className="text-2xl md:text-4xl font-medium">
              For teams who create training videos at scale
            </h2>
          </div>
        </div>
        <div className="grid md:hidden">
          <select
            htmlFor="tabs"
            className="bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          >
            <option>
              <div>
                <TbBooks />
                Learning & Development
              </div>
            </option>
            <option>
              <BsGraphUp />
              Sales Enablement
            </option>
            <option>
              <TfiHeadphoneAlt />
              Customer Service
            </option>
            <option>
              <BsGrid />
              Information Security
            </option>
            <option>
              <FaRegStar />
              Marketing
            </option>
          </select>
        </div>
        <div className="hidden md:flex gap-2 border-2 border-gray-100 border-solid overflow-hidden bg-white rounded-xl p-1">
          <a
            href=""
            className=" hover:text-blue-700  hover:bg-blue-50 focus:ring-4 focus:outline-none rounded-lg cursor-pointer bg-transparent flex items-center gap-2 p-3 text-gray-700 "
          >
            <TbBooks className="w-4 h-4 md:w-5 md:h-5" />
            Learning & Development
          </a>
          <a
            href=""
            className=" hover:text-blue-700  hover:bg-blue-50 focus:ring-4 focus:outline-none rounded-lg cursor-pointer bg-transparent flex items-center gap-2 p-3 text-gray-700 "
          >
            <BsGraphUp className="w-4 h-4 md:w-5 md:h-5" />
            Sales Enablement
          </a>
          <a
            href=""
            className=" hover:text-blue-700  hover:bg-blue-50 focus:ring-4 focus:outline-none rounded-lg cursor-pointer bg-transparent flex items-center gap-2 p-3 text-gray-700 "
          >
            <TfiHeadphoneAlt className="w-4 h-4 md:w-5 md:h-5" />
            Customer Service
          </a>
          <a
            href=""
            className=" hover:text-blue-700  hover:bg-blue-50 focus:ring-4 focus:outline-none rounded-lg cursor-pointer bg-transparent flex items-center gap-2 p-3 text-gray-700 "
          >
            <BsGrid className="w-4 h-4 md:w-5 md:h-5" />
            Information Security
          </a>
          <a
            href=""
            className=" hover:text-blue-700  hover:bg-blue-50 focus:ring-4 focus:outline-none rounded-lg cursor-pointer bg-transparent flex items-center gap-2 p-3 text-gray-700 justify-center grow shrink basis-0 "
          >
            <FaRegStar className="w-4 h-4 md:w-5 md:h-5" />
            Marketing
          </a>
        </div>
        <Midcard />
      </div>
    </section>
  );
};

export default Usecase;
