"use client";
import Image from "next/image";
import Midcard from "./Midcard";
import { TbBooks } from "react-icons/tb";
import { BsGraphUp, BsGrid } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import clsx from "clsx";
const Usecase = () => {
  const [dropdown, setDropdown] = useState(false);
  const [option, setOption] = useState("Learning & Development");

  const options = [
    { label: "Learning & Development", icon: <TbBooks /> },
    { label: "Sales Enablement", icon: <BsGraphUp /> },
    { label: "Customer Service", icon: <TfiHeadphoneAlt /> },
    { label: "Information Security", icon: <BsGrid /> },
    { label: "Marketing", icon: <FaRegStar /> },
  ];

  const handleOptionClick = (option) => {
    setOption(option);
    setDropdown(false);
  };

  return (
    <section className="w-full px-4 md:px-0 pt-10 pb-12">
      <div className="max-w-[70rem] mx-auto">
        <div className="mb-8">
          <div className="text-center">
            <div className="mb-2 text-xs  md:text-sm font-medium text-[#084df2] uppercase">
              Use cases
            </div>
            <h2 className="text-3xl font-[archia] md:text-4xl font-medium">
              For teams who create training videos at scale
            </h2>
          </div>
        </div>
        <div className="grid md:hidden">
          <div
            className={clsx(
              "bg-gray-50 flex justify-between gap-2 text-[#2c374f] border border-blue-700 font-[basiersquare]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            )}
            onClick={() => setDropdown(!dropdown)}
          >
            {options.map((item, index) => {
              if (item.label === option)
                return (
                  <div
                    key={index}
                    className="flex justify-start border-0 gap-x-2 bg-transparent grow shrink items-center p-3 cursor-pointer mb-0 text-sm "
                  >
                    {item.icon}
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                );
            })}
            <div className="flex items-center">
              <IoIosArrowDown
                className={clsx("transition-all text-sm content-center", {
                  "rotate-180": dropdown,
                })}
              />
            </div>
          </div>
          <div
            className={clsx(
              "relative flex-col bg-white border-[1px] gap-0 rounded-xl mr-0 overflow-scroll shadow-[0_4px_20px_rgba(11,18,32,.08)] mt-[.1875rem]",
              dropdown ? "grid" : "hidden"
            )}
          >
            {options.map((opt, index) => (
              <div
                key={index}
                className="flex justify-start border-0 gap-x-2 bg-transparent grow shrink items-center p-3 cursor-pointer mb-0"
                onClick={() => handleOptionClick(opt.label)}
              >
                {opt.icon}
                <div className="text-sm font-medium font-[basiersquare] whitespace-nowrap">
                  {opt.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex gap-2 border-2 border-gray-100 border-solid overflow-hidden bg-white rounded-xl p-1">
          {options.map((opt, index) => (
            <a
              key={index}
              href=""
              className="hover:text-blue-700 hover:bg-blue-50 focus:ring-4 focus:outline-none rounded-lg cursor-pointer bg-transparent flex items-center gap-2 p-3 text-gray-700"
              onClick={() => handleOptionClick(opt.label)}
            >
              {opt.icon}
              {opt.label}
            </a>
          ))}
        </div>
        <Midcard />
      </div>
    </section>
  );
};

export default Usecase;
