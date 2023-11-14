import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiCustomerService2Fill, RiUser6Fill } from "react-icons/ri";

import { FaChevronDown } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>

      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="px-4 sm:px-6">
          <div className="container flex items-center justify-between py-4 mx-auto border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="w-auto h-10 sm:h-14"
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/Driftly_Logo_Primary.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="-my-2 -mr-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ea580c]"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                {/* Heroicon name: outline/menu */}

                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden space-x-5 md:flex">
              <Link to="/sell" className="font-medium cursor-pointer">
                FIND CAR
              </Link>

              <Link to="/sell" className="font-medium cursor-pointer">
                SELL/TRADE
              </Link>

              <Link to="/finance" className="font-medium cursor-pointer">
                FINANCE
              </Link>

              <Link to="/car-care" className="font-medium cursor-pointer">
                CAR CARE
              </Link>

              <Link to="/how-it-works" className="font-medium cursor-pointer">
                HOW IT WORKS
              </Link>

              <Link to="/about" className="font-medium cursor-pointer">
                ABOUT
              </Link>
            </nav>

            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0 ">
              <div className="flex items-center gap-3 mr-4 cursor-pointer">
                <div className="uppercase"> Mumabi</div>{" "}
                <FaChevronDown className="text-[#0BF2B3] font-bold" />
              </div>
              <div className="relative group">
                <div className="border-l border-[#949494]">
                  <RiUser6Fill className="text-2xl text-[#808080] group-hover:text-[#0BF2B3] cursor-pointer   mx-4" />
                </div>
                <div className="absolute right-0 z-10 invisible top-4 group-hover:visible">
                  <div className="relative z-10 p-5 mt-8 bg-white rounded-xl shadow-driftyShdaow2">
                    <Link to="/login">
                      <div className="flex items-center w-48 gap-5 pb-3 border-b cursor-pointer hover:font-semibold">
                        <RiUser6Fill className="text-2xl text-[#808080] hover:text-[#0BF2B3]" />
                        <div className="my-auto mt-2">Accounts</div>
                      </div>
                    </Link>
                    <Link to="/wishlist">
                      <div className="flex items-center w-48 gap-5 py-3 border-b cursor-pointer hover:font-semibold">
                        <AiFillHeart className="text-2xl text-[#808080] hover:text-[#0BF2B3]" />
                        <div className="my-auto mt-2">Wishlist</div>
                      </div>
                    </Link>
                    <Link to="/support">
                      <div className="flex items-center w-48 gap-5 py-2 cursor-pointer hover:font-semibold">
                        <RiCustomerService2Fill className="text-2xl text-[#808080] hover:text-[#0BF2B3]" />
                        <div className="my-auto mt-2">Support</div>
                      </div>
                    </Link>
                    <div className="absolute w-5 h-5 rotate-45 bg-white border-t border-l right-8 -top-2.5 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2  transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>

                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ea580c]"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>

                    {/* Heroicon name: outline/x */}

                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}

                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#ea580c]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Standard Room
                    </span>
                  </a>

                  <a
                    href="/"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}

                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#ea580c]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Executive Room
                    </span>
                  </a>

                  <a
                    href="/"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}

                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#ea580c]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Delux Room
                    </span>
                  </a>

                  <a
                    href="/"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/view-grid */}

                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#ea580c]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Delux Suite
                    </span>
                  </a>

                  <a
                    href="/"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/refresh */}

                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#ea580c]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>

            {/* <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>

                <a
                  href="/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact Us
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  FAQs
                </a>

                <a
                  href="/events"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Events
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ea580c] hover:bg-[#ea580c]"
                >
                  Sign up
                </a>

                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?
                  <a href="/" className="text-[#ea580c] hover:text-[#ea580c]">
                    Sign in
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
