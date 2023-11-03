import React, { useState } from "react";
import HeroImage from "../../assets/How It Works/Howitwork-HeroImage.png";
import ForBuyer from "./ForBuyer";
import ForSellers from "./ForSellers";

const HowItWorks = () => {
  const [buyer, setBuyer] = useState(true);
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="relative">
          <img src={HeroImage} alt="" srcset="" className="w-full" />
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
      <section>{buyer ? <ForBuyer /> : <ForSellers />}</section>
    </>
  );
};

export default HowItWorks;
