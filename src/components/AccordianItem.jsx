"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-5/6 mx-auto md:w-full md:ml-0 rounded-lg border-[1px] border-[#d0d7e7] transition-shadow bg-white p-4 md:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={(e) => handleToggle(e)}
      >
        <div className="w-full">
          <h3 className="mt-1 text-lg font-medium text-dark font-[basiersquare]">
            {header}
          </h3>
        </div>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <IoIosArrowDown
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
          />
        </div>
      </button>

      <div
        className={`px-8 pb-6 duration-200 ease-in-out box-border ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
export default AccordionItem;
