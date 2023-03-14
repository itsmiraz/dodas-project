import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/logo/dodas-logo.png";

const Hero = () => {
  return (
    <div>
      <nav>
        <div className="px-4 w-full z-50  relative container mx-auto text-white items-center py-3 flex justify-around ">
          <div className="flex items-center  w-full  gap-10 lg:gap-x-24"></div>

          <ul className="flex gap-10 items-center justify-around pl-20">
            <li>
              <Link
                href="/discover"
                className="flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/rewards"
                className="flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
              >
                Rewards
              </Link>
            </li>
          </ul>

          <ul
            className={`md:flex lg:flex  w-full left-0 p-3 py-4 gap-4 lg:z-50 items-center  font-semibold  text-black text-center md:justify-center lg:justify-end  
            `}
          >
            <li className="">
              <Link href="#">
                <button
                  type="button"
                  class="text-black border border-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2  "
                >
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="">
              <Link href="#">
                <button
                  type="button"
                  class="text-white bg-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 "
                >
                  Sign In
                </button>
              </Link>
            </li>

            <li>
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.8252 10.4768H27.3252"
                  stroke="black"
                  stroke-width="2.83333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.8252 1.97681H27.3252"
                  stroke="black"
                  stroke-width="2.83333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.8252 18.9768H27.3252"
                  stroke="black"
                  stroke-width="2.83333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>

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
    </div>
  );
};

export default Hero;
