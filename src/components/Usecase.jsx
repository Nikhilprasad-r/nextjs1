import Image from "next/image";
import Midcard from "./Midcard";
import { TbBooks } from "react-icons/tb";
import { BsGraphUp, BsGrid } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";

const Usecase = () => {
  return (
    <section className="w-full px-4 sm:px-0 pt-10 pb-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-8">
          <div className="text-center">
            <div className="mb-2 text-sm font-medium text-blue-500 uppercase">
              Use cases
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium">
              For teams who create training videos at scale
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:hidden">
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option>Learning & Development</option>
            <option>Sales Enablement</option>
            <option>Customer Service</option>
            <option>Information Security</option>
            <option>Marketing</option>
          </select>
        </div>
        <div className="hidden sm:flex gap-4 overflow-hidden bg-white rounded-xl">
          <a
            href=""
            className="flex items-center gap-2 p-3 text-gray-700 hover:text-gray-900"
          >
            <TbBooks className="w-4 h-4 sm:w-5 sm:h-5" />
            Learning & Development
          </a>
          <a
            href=""
            className="flex items-center gap-2 p-3 text-gray-700 hover:text-gray-900"
          >
            <BsGraphUp className="w-4 h-4 sm:w-5 sm:h-5" />
            Sales Enablement
          </a>
          <a
            href=""
            className="flex items-center gap-2 p-3 text-gray-700 hover:text-gray-900"
          >
            <TfiHeadphoneAlt className="w-4 h-4 sm:w-5 sm:h-5" />
            Customer Service
          </a>
          <a
            href=""
            className="flex items-center gap-2 p-3 text-gray-700 hover:text-gray-900"
          >
            <BsGrid className="w-4 h-4 sm:w-5 sm:h-5" />
            Information Security
          </a>
          <a
            href=""
            className="flex items-center gap-2 p-3 text-gray-700 hover:text-gray-900"
          >
            <FaRegStar className="w-4 h-4 sm:w-5 sm:h-5" />
            Marketing
          </a>
        </div>
        <Midcard />
      </div>
    </section>
  );
};

export default Usecase;
