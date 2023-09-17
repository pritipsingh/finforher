import React from "react";
import NavMain from "../Components/NavMain";

const Plans = () => {
  return (
    <div>
      <NavMain />
      <div className="  text-center mt-10">
        <h1 className="text-[3rem] font-medium ">
          Available Schemes by government to empower women of India
        </h1>
        <div className="flex mx-[4rem] mt-[3rem] flex flex-col">
          <div className="border text-[2.5rem] w-[50%]  mx-auto border-red-100 bg-red-100 p-10">
            Mahila Samman Saving Certificate Scheme
          </div>
          <div className="text-[2rem]">
            Women will be given a 7.5 per cent interest rate under Mahila Samman
            Saving Certificate Scheme. PM Awas Yojana has also empowered women
            who are homemakers.
          </div>
        </div>
        <a
          href="https://www.indiatoday.in/india/video/women-to-get-75-interest-rate-under-mahila-samman-saving-certificate-scheme-pm-modi-2344797-2023-03-10"
          target="_blank"
          class="relative inline-flex items-center px-12 py-3 mt-5 overflow-hidden text-lg font-medium text-red-300 border-2 border-red-300 rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span class="absolute left-0 block w-full h-0 transition-all bg-red-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative">Find more schemes by government</span>
        </a>
      </div>
    </div>
  );
};

export default Plans;
