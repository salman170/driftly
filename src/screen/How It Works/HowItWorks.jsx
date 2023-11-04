import React, { useState } from "react";
import HeroImage from "../../assets/How It Works/Howitwork-HeroImage.png";
import VideoThumbnail from "../../assets/How It Works/Videothumbnail.png";
import ForBuyer from "./ForBuyer";
import ForSellers from "./ForSellers";
import CustomerReview from "../Home/CustomerReview";
import Header  from "../../others/Header";
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
          <div className="container mx-auto absolute  text-white  top-1/3 left-40">
            <div className="text-5xl mb-4">
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
          <div className="flex border rounded-full border-gray-300 select-none">
            <div
              onClick={() => setBuyer(true)}
              className={`px-7 rounded-full ${
                buyer && "bg-gray-900 text-white"
              } py-3  cursor-pointer  duration-200 `}
            >
              For Buyers
            </div>
            <div
              onClick={() => setBuyer(false)}
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
        <div className="mt-20 mb-10 relative">
          <img src={VideoThumbnail} alt="" srcSet="" className="w-full" />
          <div className=" lg:absolute top-1/3 left-10 container mx-auto w-full  lg:text-white font-extralight text-black mt-4 lg:mt-0">
            <div className="text-4xl  mb-4">Ready for your next great car?</div>
            <div className="mb-4">
              Search, order, customise and finance your car - <br />
              All from the comfort of your sofa and get a <br /> doorstep
              delivery
            </div>
            <div className="bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
              Checkout our inventory
            </div>
          </div>
          {/* <div className="absolute top-1/2  text-3xl w-min rounded-full bg-white bg-opacity-20 text-white flex justify-center items-end border p-4 ">
            <ImPlay3 />
          </div> */}
          {/* <div className="absolute  top-1/2 text-8xl w-min rounded-full bg-white bg-opacity-10 text-white ">
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
