import { TbBooks } from "react-icons/tb";
import { BsGraphUp, BsGrid } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";
import Midcard from "./Midcard";
const Usecases = () => {
  return (
    <div className="text-center ">
      <hr className="my-12 h-0.5 border-t-2 dark:bg-white/10" />
      <h4 className="text-blue-700 font-bold">USE CASES</h4>
      <h1 className="text-3xl">
        For teams who create training videos at scale
      </h1>
      <div>
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
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex mt-10">
          <li className="w-full flex focus-within:z-10">
            <a
              href="#"
              className="flex gap-5 w-full p-4 bg-white border-s-0 border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <TbBooks /> Learning & Development
            </a>
          </li>
          <li className="w-full flex focus-within:z-10">
            <a
              href="#"
              className="flex gap-5 w-full p-4 bg-white border-s-0 border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <BsGraphUp /> Sales Enablement
            </a>
          </li>
          <li className="w-full flex  focus-within:z-10">
            <a
              href="#"
              className="flex gap-5 w-full p-4 bg-white border-s-0 border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <TfiHeadphoneAlt /> Customer Service
            </a>
          </li>
          <li className="w-full flex focus-within:z-10">
            <a
              href="#"
              className="flex gap-5 w-full p-4 bg-white border-s-0 border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <BsGrid /> Information Security
            </a>
          </li>
          <li className="w-full flex focus-within:z-10">
            <a
              href="#"
              className="flex gap-5 w-full p-4 bg-white border-s-0 border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <FaRegStar />
              Marketing
            </a>
          </li>
        </ul>
      </div>
      <Midcard />
    </div>
  );
};

export default Usecases;
