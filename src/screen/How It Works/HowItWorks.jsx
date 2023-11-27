import React, { useState } from "react";
import HeroImage from "../../assets/How It Works/Howitwork-HeroImage.png";
import VideoThumbnail from "../../assets/How It Works/Videothumbnail.png";
import ForBuyer from "./ForBuyer";
import ForSellers from "./ForSellers";
import CustomerReview from "../Home/CustomerReview";
import Header from "../../others/Header";
// import { ImPlay3 } from "react-icons/im";

const HowItWorks = () => {
  const [buyer, setBuyer] = useState(true);
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="relative">
          <img src={HeroImage} alt="" srcSet="" className="w-full" />
          <div className="container absolute mx-auto text-white top-1/3 left-40">
            <div className="mb-4 text-5xl">
              Buying & Selling <br /> made easy
            </div>
            <div className="mb-2">
              Find a great car and make it yours or sell us the one you have,
              <br /> all without a trip to the dealership. But how, exactly?
            </div>
            <div className="font-semibold">Here's how.</div>
          </div>
        </div>
      </section>

      {/* Button Section  */}
      <section>
        <div className="flex justify-center my-12">
          <div className="flex border border-gray-300 rounded-full select-none">
            <div
              onClick={() => {
                setBuyer(true);
                window.scrollTo(0, 350);
              }}
              className={`px-7 rounded-full ${
                buyer && "bg-gray-900 text-white"
              } py-3  cursor-pointer  duration-200 `}
            >
              For Buyers
            </div>
            <div
              onClick={() =>  {
                setBuyer(false);
                window.scrollTo(0, 350);
              }}
              className={`px-7 rounded-full ${
                !buyer && "bg-gray-900 text-white"
              } py-3  cursor-pointer  duration-200`}
            >
              For Sellers
            </div>
          </div>
        </div>
      </section>

      {/* Selected Section  */}
      <section className="overflow-hidden">
        {buyer ? <ForBuyer /> : <ForSellers />}
      </section>

      {/* Video Section  */}
      <section className="overflow-hidden">
        <div className="relative mt-20 mb-10">
          <img src={VideoThumbnail} alt="" srcSet="" className="w-full" />
          <div className="container w-full mx-auto mt-4 text-black lg:absolute top-1/3 left-10 lg:text-white font-extralight lg:mt-0">
            <div className="mb-4 text-4xl">Ready for your next great car?</div>
            <div className="mb-4">
              Search, order, customise and finance your car - <br />
              All from the comfort of your sofa and get a <br /> doorstep
              delivery
            </div>
            <div className="bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
              Checkout our inventory
            </div>
          </div>
          {/* <div className="absolute flex items-end justify-center p-4 text-3xl text-white bg-white border rounded-full top-1/2 w-min bg-opacity-20 ">
            <ImPlay3 />
          </div> */}
          {/* <div className="absolute text-white bg-white rounded-full top-1/2 text-8xl w-min bg-opacity-10 ">
            <BsPlayCircle />
          </div> */}
        </div>
      </section>

      {/* Video Section  */}
      <section className="overflow-hidden">
        <CustomerReview />
      </section>
    </>
  );
};

export default HowItWorks;
