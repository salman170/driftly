import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="px-1 text-sm bg-black md:px-0">
      <div className="container flex w-full pt-10 mx-auto ">
        <img
          className="mb-6 h-14 -ml-3"
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/Driftly_Logo_Reverse.webp"
          alt=""
        />
      </div>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 text-[#acacac] gap-2 container mx-auto mb-6">
        <div class="    md:text-left mb-3">
          {/* <p className="font-thin">
            If you need any help, we're available from{" "}
            <span className="font-bold">8am-8pm, 7 days</span> a week
          </p>
          <br />
          <p className="font-thin">
            Call us on{" "}
            <span className="font-bold">040 25935587</span>
          </p>
          <br />
          <p className="font-thin">
            Whatsapp us <span className="font-bold">+91&nbsp;9817287234</span>
          </p> */}
          <div className="mb-2">
            If you need any help, we're available from
            <br />
            <span className="font-semibold text-white">
              {" "}
              9am - 8pm, 7 days
            </span>{" "}
            week
          </div>
          <div className="mb-2">
            Call us on{" "}
            <a href="tel:+91 98488 98488" className="font-semibold text-white">
              +91 98488 98488
            </a>
          </div>
          <div className="mb-4">
            Whatsapp us{" "}
            <a
              href="whatsapp://send?phone=919848898488"
              className="font-semibold text-white"
            >
              +91 98488 98488
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 mb-3 sm:grid-cols-3 md:col-span-2">
          <div className="space-y-2">
            <div className="cursor-pointer hover:text-white">
              <Link to="/sell">Search cars</Link>
            </div>
            <div className="cursor-pointer hover:text-white">
              <Link to="/sell">Sell/Trade</Link>
            </div>

            <div className="cursor-pointer hover:text-white">
              <Link to="/finance">Financing</Link>
            </div>

            <div className="cursor-pointer hover:text-white">
              <Link to="/car-care">Car Care</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="cursor-pointer hover:text-white">
              <Link to="/how-it-works">How it works</Link>
            </div>
            <div className="cursor-pointer hover:text-white">
              <Link to="/about">About us</Link>
            </div>

            <div className="cursor-pointer hover:text-white">
              <Link to="/">Career</Link>
            </div>

            <div className="cursor-pointer hover:text-white">
              <Link to="/support">Support</Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-lg font-semibold text-white">FOLLOW US</div>
            <div className="cursor-pointer hover:text-white">
              <a
                href="https://www.facebook.com/saboorksnexa/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>

            <div className="cursor-pointer hover:text-white">
              <a
                href="https://twitter.com/saboorksnexa"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>

            <div className="cursor-pointer hover:text-white">
              <a
                href="https://www.instagram.com/saboorksnexa/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 text-lg font-semibold text-white">
            SUBSCRIBE TO OUR NEWSLETTER
          </div>

          <div class="relative">
            <input
              type="text"
              class="bg-white h-10  px-4 w-full  focus:outline-none hover:cursor-pointer"
              name=""
              placeholder="Enter email address"
            />
            <button class="h-10 text-[#0cf2b4] absolute  text-2xl right-1 px-3  hover:scale-125">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] border-[#555555] "></div>
      <div className="container mx-auto text-[#8A8A8A] flex justify-between py-4 items-center ">
        <div>©Driftly 2021. All rights reserved</div>
        <div>
          <span className="mr-2 cursor-pointer hover:text-white">Site map</span>
          <span className="text-lg cursor-default">l</span>
          <span className="ml-2 cursor-pointer hover:text-white">Terms of use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
