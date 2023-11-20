import React, { useState } from "react";
import Header from "../../others/Header";
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const Compare = () => {
  return (
    <>
      <Header />
      <CompareHero />
      <AccordianCompare />
    </>
  );
};

const CompareHero = () => {
  return (
    <>
      <div className="container p-2 mx-auto">
        <nav class="bg-grey-light w-full rounded-md">
          <ol class="list-reset flex">
            <li>
              <a
                href="#/"
                class="text-primary transition duration-150 ease-in-out font-extralight"
              >
                All Cars
              </a>
            </li>
            <li>
              <span class="mx-2 text-neutral-500 ">&gt;</span>
            </li>
            <li>
              <a href="#/" class="text-[#0CF2B4]">
                Compare
              </a>
            </li>
          </ol>
        </nav>
        {/* compare block */}
        <div class=" text-black">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="container  flex justify-end h-full underline text-xs text-[#00BAB8]">
              <p>Share Comparison</p>
            </div>

            {/* card 1 */}
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-2">
              <div class="overflow-hidden">
                <div class="block max-w-sm pt-2">
                  <div class="text-4xl text-gray-500 font-extralight tracking-tight">
                    Compare Car Model
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div class="my-1 w-full md:w-1/2 lg:my-4 lg:w-1/4 p-2">
              <div class="w-30 bg-white shadow rounded">
                <div
                  class="h-48 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                  }}
                >
                  <div class="flex justify-between p-2">
                    <AiFillCloseCircle className="text-white" />
                    <AiFillHeart className="text-white" />
                  </div>
                  <div className="flex justify-end">
                    <span className="uppercase rounded-tl-lg text-l p-2 bg-gradient-to-r from-[#0BF2B3] via-[#05D3A4] to-transparent   text-white font-light select-none">
                      ₹ 97,00,500
                    </span>
                  </div>
                </div>
                <div class="p-4 flex flex-col items-left">
                  <div class="flex justify-between w-full ">
                    <div class="flex items-center text-gray-500">
                      <label
                        htmlFor="input1"
                        class="select-none cursor-pointer text-lg text-black"
                      >
                        BMW X7
                      </label>
                    </div>
                    <div className="text-xs font-extralight">
                      <p>EMI:&nbsp;&nbsp;₹1,20,000</p>
                    </div>
                  </div>
                  <p class="text-gray-400 font-light text-xs text-left">
                    XDrive401 M Sport
                  </p>

                  <div class="flex items-center justify-center mt-4">
                    <button class="p-2">
                      <svg
                        width="180"
                        height="48"
                        viewBox="0 0 180 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="linear-gradient"
                            x1="0"
                            y1="0.5"
                            x2="1"
                            y2="0.5"
                          >
                            <stop offset="0" stopColor="#0BF2B3" />
                            <stop offset="1" stopColor="#00BAB8" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z"
                          fill="url(#linear-gradient)"
                        />
                        <text
                          x="50%"
                          y="50%"
                          fill="#fff"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fontSize="14"
                          dominant-baseline="middle"
                        >
                          <tspan x="50%" dy="0">
                            RESERVE
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div class="my-1 w-full md:w-1/2 lg:my-4 lg:w-1/4 p-2">
              <div class="w-30 bg-white shadow rounded">
                <div
                  class="h-48 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                  }}
                >
                  <div class="flex justify-between p-2">
                    <AiFillCloseCircle className="text-white" />
                    <AiFillHeart className="text-white" />
                  </div>
                  <div className="flex justify-end">
                    <span className="uppercase rounded-tl-lg text-l p-2 bg-gradient-to-r from-[#0BF2B3] via-[#05D3A4] to-transparent   text-white font-light select-none">
                      ₹ 97,00,500
                    </span>
                  </div>
                </div>
                <div class="p-4 flex flex-col items-left">
                  <div class="flex justify-between w-full">
                    <div class="flex items-center text-gray-500">
                      <label
                        htmlFor="input1"
                        class="select-none cursor-pointer text-lg text-black"
                      >
                        BMW X7
                      </label>
                    </div>
                    <div className="text-xs font-extralight">
                      <p>EMI:&nbsp;&nbsp;₹1,20,000</p>
                    </div>
                  </div>
                  <p class="text-gray-400 font-light text-xs text-left">
                    XDrive401 M Sport
                  </p>

                  <div class="flex items-center justify-center mt-4">
                    <button class="p-2">
                      <svg
                        width="180"
                        height="48"
                        viewBox="0 0 180 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="linear-gradient"
                            x1="0"
                            y1="0.5"
                            x2="1"
                            y2="0.5"
                          >
                            <stop offset="0" stopColor="#0BF2B3" />
                            <stop offset="1" stopColor="#00BAB8" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z"
                          fill="url(#linear-gradient)"
                        />
                        <text
                          x="50%"
                          y="50%"
                          fill="#fff"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fontSize="14"
                          dominant-baseline="middle"
                        >
                          <tspan x="50%" dy="0">
                            RESERVE
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div class="my-1 w-full md:w-1/2 lg:my-4 lg:w-1/4 p-2">
              <div class="w-30 bg-white shadow rounded">
                <div
                  class="h-48 w-full bg-gray-200 flex flex-col justify-between bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                  }}
                >
                  <div class="flex justify-between p-2">
                    <AiFillCloseCircle className="text-white" />
                    <AiFillHeart className="text-white" />
                  </div>
                  <div className="flex justify-end">
                    <span className="uppercase rounded-tl-lg text-l p-2 bg-gradient-to-r from-[#0BF2B3] via-[#05D3A4] to-transparent   text-white font-light select-none">
                      ₹ 97,00,500
                    </span>
                  </div>
                </div>
                <div class="p-4 flex flex-col items-left">
                  <div class="flex justify-between w-full">
                    <div class="flex items-center text-gray-500">
                      <label
                        htmlFor="input1"
                        class="select-none cursor-pointer text-lg text-black"
                      >
                        BMW X7
                      </label>
                    </div>
                    <div className="text-xs font-extralight">
                      <p>EMI:&nbsp;&nbsp;₹1,20,000</p>
                    </div>
                  </div>
                  <p class="text-gray-400 font-light text-xs text-left">
                    XDrive401 M Sport
                  </p>

                  <div class="flex items-center justify-center mt-4">
                    <button class="p-2">
                      <svg
                        width="180"
                        height="48"
                        viewBox="0 0 180 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="linear-gradient"
                            x1="0"
                            y1="0.5"
                            x2="1"
                            y2="0.5"
                          >
                            <stop offset="0" stopColor="#0BF2B3" />
                            <stop offset="1" stopColor="#00BAB8" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z"
                          fill="url(#linear-gradient)"
                        />
                        <text
                          x="50%"
                          y="50%"
                          fill="#fff"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fontSize="14"
                          dominant-baseline="middle"
                        >
                          <tspan x="50%" dy="0">
                            RESERVE
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AccordianCompare = () => {
  const accordionData = [
    {
      name: "GENERAL",
      content: (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Insurance Validity
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        2023
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        2023
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        2023
                      </td>
                    </tr>
                    <tr class="border-b bg-white">
                      <td class="whitespace-nowrap px-6 py-4 ">Ownership</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1st
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1st
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1st
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">Kms Driven</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        23000
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        23000
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        23000
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Body Type</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Sedan
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Sedan
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Sedan
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Registration Year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        2019
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        2019
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        2019
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Fuel</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Petrol
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Petrol
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Petrol
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100  ">
                      <td class="whitespace-nowrap px-6 py-4 ">PUC</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Valid
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Valid
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Valid
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4">
                        Boot Space (seats-up)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        520 liters
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        520 liters
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        520 liters
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "FEATURES",
      content: (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div className="flex mt-4">
                  <div className="font-light">SAFE</div>
                </div>
                <hr className="w-full my-2 border-t border-gray-300"></hr>
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">NCAP Rating</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        NCAP Rating
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        5 Star (Global NCAP)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        5 Star (Global NCAP)
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Overspeed Warning
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        beeps over 120 kmph
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        beeps over 120 kmph
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        beeps over 120 kmph
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Emergency Brake Light Flashing
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Puncture Kit</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100">
                      <td class="whitespace-nowrap px-6 py-4 ">Air Bags</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Middle Rear Three - Point Seat Belt
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100  ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Middle Rear Head Rest
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Section -2  */}
              <div class="overflow-hidden">
                <div className="flex mt-4">
                  <div className="font-light">BRAKING AND TRACTION</div>
                </div>
                <hr className="w-full my-2 border-t border-gray-300"></hr>
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Anti-Lock Braking System (ABS)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Electronic Brake - force Distribution (EBD)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Brake Assist (BA)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Electronic Stability Program (ESP)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Hill Hold Control
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Traction Control System (TC/TCS)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100  ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Hill Descent Control
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        No
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Section - 3 */}
              <div class="overflow-hidden">
                <div className="flex mt-4">
                  <div className="font-light">LOCKS AND SECURITY</div>
                </div>
                <hr className="w-full my-2 border-t border-gray-300"></hr>
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Engine immobilizer
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Central Locking
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Speed Sensing Door Lock
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Electronic Stability Program
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Child Safety Lock
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Section - 4 */}
              <div class="overflow-hidden">
                <div className="flex mt-4">
                  <div className="font-light">COMFORT AND CONVENIENCE</div>
                </div>
                <hr className="w-full my-2 border-t border-gray-300"></hr>
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Air Conditioner
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes (Manual)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes (Manual)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes (Manual)
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Front AC</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Single Zone, <br />
                        Common Fan Speed Control
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Single Zone, <br />
                        Common Fan Speed Control
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Single Zone, <br />
                        Common Fan Speed Control
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">Rear AC</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">-</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">-</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">-</td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Heater</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Yes
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Vanity Mirrors on Sun Visors
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Co-Driver Only
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Co-Driver Only
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Co-Driver Only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "SPECS",
      content: (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <div className="flex mt-4">
                  <div className="font-light">PERFORMANCE AND ECONOMY</div>
                </div>
                <hr className="w-full my-2 border-t border-gray-300"></hr>
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-2 ">Top Speed</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        180 kmph
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        180 kmph
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        180 kmph
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-2 ">No of Valves</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        16
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        16
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        16
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        No of Cylinders
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">4</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">4</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">4</td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Acceleration</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        11.3 seconds
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        11.3 seconds
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        11.3 seconds
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">Economy</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-2 ">Power</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        110 bhp
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        110 bhp
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        110 bhp
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-2 ">Torque</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Section -2  */}
              <div class="overflow-hidden">
                <div className="flex mt-4">
                  <div className="font-light">WEIGHT AND DIMENSIONS</div>
                </div>
                <hr className="w-full my-2 border-t border-gray-300"></hr>
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-2 ">Height</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1572 mm
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1572 mm
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1572 mm
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-2 ">Width</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1758 mm
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1758 mm
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1758 mm
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-2 ">Length</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        3994 mm
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        3994 mm
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        3994 mm
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-2 ">Wheelbase</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        ₹6000 per year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        ₹6000 per year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        ₹6000 per year
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Fuel Tank Capacity
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        ₹12054 / year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        ₹12054 / year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        ₹12054 / year
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Boot Space (seats down)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        N/a
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        N/a
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        N/a
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100  ">
                      <td class="whitespace-nowrap px-6 py-2 ">
                        Boot Space (seats up)
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        336 litres
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        336 litres
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        336 litres
                      </td>
                    </tr>
                    <tr class="border-b bg-white  ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Minimum Kerb Weight
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1039 kg
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1039 kg
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        1039 kg
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "RUNNING COST",
      content: (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <tbody>
                    <tr class=" bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">Service Cost</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        6000 per year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        6000 per year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        6000 per year
                      </td>
                    </tr>
                    <tr class="border-b bg-white ">
                      <td class="whitespace-nowrap px-6 py-2 ">Insurance</td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        12054 / year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        12054 / year
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        12054 / year
                      </td>
                    </tr>
                    <tr class="border-b bg-neutral-100 ">
                      <td class="whitespace-nowrap px-6 py-4 ">
                        Fuel Consumption
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        14 kmpl
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [accordionStates, setAccordionStates] = useState(
    accordionData.map((_, index) => index === 0)
  );

  const handleAccordionClick = (index) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

  return (
    <section className="container py-20 mx-auto">
      {accordionData.map(({ name, content }, index) => (
        <div className="mb-10 rounded-lg select-none" key={index}>
          <div
            className={`px-5 py-3 bg-[#363636] rounded-t-md text-md uppercase text-white flex justify-between items-center cursor-pointer ${
              !accordionStates[index] && "rounded-b-md"
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            <div className="">{name}</div>
            <div
              className={`duration-200 ${
                accordionStates[index] ? "rotate-180" : ""
              }`}
            >
              <BsChevronDown />
            </div>
          </div>
          {accordionStates[index] && (
            <section className="px-1 py-1">
              <div className="pb-2">{content}</div>
              <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-1"></div>
            </section>
          )}
        </div>
      ))}
    </section>
  );
};

export default Compare;
