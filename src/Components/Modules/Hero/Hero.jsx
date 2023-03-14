import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo/dodas-logo.png";

const Hero = () => {
  return (
    <section className="container w-full flex flex-col justify-center h-[500px] items-center mx-auto">
      <Image src={logo} alt="" />

      <form className="w-[818px] text-[#5A5A5A] my-10">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-[#5A5A5A] sr-only "
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-6 font-semibold pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block font-semibold text-lg w-full p-4 pl-14  text-[#5A5A5A] border border-[#5A5A5A] rounded-full bg-gray-50 focus:ring-gray-900 focus:border-gray-900 "
            placeholder="Search your NFT"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-white hover:text-black shadow-lg font-medium rounded-full text-sm px-6 py-3 "
          >
          Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default Hero;
