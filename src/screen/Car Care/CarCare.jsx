import React from "react";
import { Link } from "react-router-dom";

import HeroImage from "../../assets/Car Care/CarCareHeroImage.png";
import CoverExtended from "../../assets/Car Care/CoverExtended.png";
import GuardPaint from "../../assets/Car Care/GuardPaint.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const CarCare = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="relative">
          <img src={HeroImage} alt="" srcSet="" className="w-full h-[45vh]" />
          <div className="container absolute mx-auto text-white top-1/4 left-40">
            <div className="mb-4 text-5xl">Drively Car Care</div>
            <div className="mb-6">
              From extending your warranty to protecting your car’s paintwork{" "}
              <br />
              and more, our car care extras provide peace of mind on top of{" "}
              <br /> what we offer for free
            </div>
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white hover:bg-white">
              <Link to="/how-it-works">SEE HOW IT WORKS </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container relative px-24 pt-10 pb-20 mx-auto">
        <div className="items-end gap-8 my-20 lg:flex">
          <img src={CoverExtended} alt="" srcSet="" className="lg:w-1/2 " />
          <div className="lg:w-1/2">
            <div className="mb-8 text-5xl font-extralight">
              Driftly Cover Extended Warranty
            </div>
            <div className="text-[#8A8A8A] mb-4">
              Stay protected from unexpected expenses after your <br />
              car warranty has ended with Driftly Cover
            </div>

            <ul className="list-disc space-y-3 text-[#8A8A8A] pl-4 mb-10">
              <li>Cover for mechanical and electrical parts</li>
              <li>24/7 recovery breakdown from the RAC</li>
              <li>Car hire and much more!</li>
            </ul>
            <div className="cursor-pointer text-[#00BAB8] underline underline-offset-2">
              <Link to="/car-care-extended"> Learn more </Link>
            </div>
          </div>
        </div>

        <div className="items-end justify-end gap-8 my-20 lg:flex">
          <div className="lg:w-1/2">
            <div className="mb-8 text-5xl font-extralight">
              Driftly Guard Paint & Fabric Protection
            </div>
            <div className="text-[#8A8A8A] mb-4">
              Preserve your paintwork with Drively Guard Paint & Fabric
              Protection, a high-gloss barrier that bonds to your car and seals
              the surface
            </div>

            <ul className="list-disc space-y-3 text-[#8A8A8A] pl-4 mb-10">
              <li>Protects against bird droppings and more</li>
              <li>Preserves the interior and exterior</li>
              <li>One-time coating that lasts for the lifetime of your car</li>
            </ul>
            <div className="cursor-pointer text-[#00BAB8] underline underline-offset-2">
            <Link to="/car-care-extended"> Learn more </Link>
              Learn more
            </div>
          </div>
          <img src={GuardPaint} alt="" srcSet="" className="lg:w-1/2 " />
        </div>
        <div className="my-10 text-5xl text-center font-extralight">
          A Complete Car Protection
        </div>
        <div>
          <img
            src={require("../../assets/Car Care/CarProtection.png")}
            alt=""
            srcSet=""
            className="w-full h-full mx-auto"
          />
        </div>

        <div className="container flex justify-center gap-10 mx-auto my-10">
          <div className="relative border rounded-xl shadow  bg-white w-[400px]">
            <div className="p-5 ">
              <div className="flex items-center gap-4 text-xl ">
                <img
                  src={require("../../assets/Car Care/RightTick.png")}
                  alt=""
                  srcSet=""
                />
                <div>Included With Vehicle</div>
              </div>
            </div>
            <div className="space-y-5 border-t p-7 ">
              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 -mt-1 bg-black rounded-full"></div>
                <div className="">360 point inspection and reconditioning</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 -mt-1 bg-black rounded-full"></div>
                <div className="">
                  7-day/250 miles full money back guarantee
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 -mt-1 bg-black rounded-full"></div>
                <div className="">1 year warranty and road side assistance</div>
              </div>
            </div>
          </div>
          <div className="relative border rounded-xl shadow bg-white w-[400px]">
            <div className="p-5 ">
              <div className="flex items-center gap-4 text-xl ">
                <img
                  src={require("../../assets/Car Care/CareExtra.png")}
                  alt=""
                  srcSet=""
                />
                <div>Car Care Extra</div>
              </div>
            </div>
            <div className="space-y-4 border-t p-7 rounded-b-xl ">
              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 -mt-1 bg-black rounded-full"></div>
                <div className="">Driftly Cover extended warranty</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 -mt-1 bg-black rounded-full"></div>
                <div className="">Driftly Guard Paint & Fabric Protection</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl text-center">
          Find your perfect Driftly car and get it delivered to your doorstep
        </div>

        <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white hover:bg-white mx-auto mt-10">
          <Link to="/sell">SEARCH CAR </Link>
        </div>

        <div className="bg-[#F8F8F8]   container mx-auto absolute inset-0 top-10 -z-10  "></div>
      </div>
      <div className="mb-10">
        <div className="mt-14 w-[80%] container mx-auto text-[2.5rem] font-extralight mb-6">
          Frequently Asked Questions
        </div>
        <div className="flex container mx-auto justify-between w-[80%] border py-4 text-xl px-4 items-center rounded-xl hover:shadow-driftyShdaow cursor-pointer mb-8">
          <div>What's included with my Driftly car?</div>
          <div className=" text-[#0BF2B3] ">
            <AiOutlineArrowRight className="text-xl" />
          </div>
        </div>
        <div className="flex container mx-auto justify-between w-[80%] border py-4 text-xl px-4 items-center rounded-xl  hover:shadow-driftyShdaow cursor-pointer mb-8">
          <div>How does the 7-Day Money Back Guarantee work?</div>
          <div className=" text-[#0BF2B3] ">
            <AiOutlineArrowRight className="text-xl" />
          </div>
        </div>
        <div className="flex container mx-auto justify-between w-[80%] border py-4 text-xl px-4 items-center rounded-xl hover:shadow-driftyShdaow cursor-pointer mb-12">
          <div>What is 360 point inspection?</div>
          <div className=" text-[#0BF2B3] ">
            <AiOutlineArrowRight className="text-xl" />
          </div>
        </div>

        <div className="cursor-pointer text-[#00BAB8] underline underline-offset-2 container mx-auto w-[80%] ">
          View All
        </div>
      </div>
    </div>
  );
};

export default CarCare;
