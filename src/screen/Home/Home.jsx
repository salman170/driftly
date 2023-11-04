import React from "react";
import { Link } from "react-router-dom";
import CustomerReview from "./CustomerReview";
// import Header from "../../others/Header";

import VideoThumbnail from "../../assets/Home/HowItWorksLarger.png";
import CustomerExp from "../../assets/Home/DriftlyCustomerExp.png";
import HeroImage from "../../assets/Home/HeroSection.png";
import ExpKey from "../../assets/Home/key.png";
import ExpArtboard from "../../assets/Home/Artboard.png";
import ExpAuto from "../../assets/Home/automated.png";
import ExpArt from "../../assets/Home/Art.png";
import MercedesBenz from "../../assets/Home/MercedesBenz.png";
import Audi from "../../assets/Home/Audi.png";
import BMW from "../../assets/Home/BMW.png";
import LR from "../../assets/Home/LandRover.png";
import Jeep from "../../assets/Home/Jeep.png";
import Jaguar from "../../assets/Home/Jaguar.png";
import Volvo from "../../assets/Home/Volvo.png";
import Mini from "../../assets/Home/Mini.png";
import Lexus from "../../assets/Home/Lexus.png";
import DC from "../../assets/Home/DC.png";
import Chrysler from "../../assets/Home/Chrysler.png";
import Nisan from "../../assets/Home/Nisan.png";

import DriftyBenefitsSlider from "./DriftyBenefitsSlider";

const Home = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <HeroSection />
      <DriftlyBanefits />
      <HDW />
      <BrowseByBrand />
      <DCEC />
      <CustomerReview />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div
      className={`h-screen relative bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* <img
        src={HeroImage}
        alt=""
        srcSet=""
        className="w-full h-full"
      /> */}
      <div className="absolute bottom-[28%] left-[8%]  text-white">
        <div className="text-6xl font-extralight">The New</div>
        <div className="text-6xl">Car Feeling</div>
        <div className="text-xl">For a price you love</div>
        <div className="my-4 font-extralight">
          Buy and finance refurbished pre-owned cars entirely online
        </div>
        <div className="flex gap-4">
          <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white hover:bg-white">
            FIND YOUR CAR
          </div>
          <div className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer bg-white text-black hover:text-white">
            SELL YOUR CAR
          </div>
        </div>
      </div>
    </div>
  );
};

const DriftlyBanefits = () => {
  return (
    <div className="container relative py-20 mx-auto">
      <div className="absolute text-5xl top-16 left-[5%] font-light">
        Driftly Banefits
      </div>
      <div className="mt-16 ">
        <DriftyBenefitsSlider />
      </div>
    </div>
  );
};

const HDW = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mb-10 ">
        <img src={VideoThumbnail} alt="" srcSet="" className="w-full" />
        <div className=" lg:absolute top-1/3 left-[8%] container mx-auto w-full  lg:text-white font-extralight text-black mt-4 lg:mt-0">
          <div className="mb-4 text-5xl font-light">How Driftly Works</div>
          <div className="mb-6">
            Search, order, customise and finance your <br />
            car - All from the comfort of your sofa and get <br />a doorstep
            delivery
          </div>
          <Link to="/how-it-works">
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
              KNOW MORE
            </div>
          </Link>
        </div>
        {/* <div className="absolute flex items-end justify-center p-4 text-3xl text-white bg-white border rounded-full top-1/2 w-min bg-opacity-20 ">
    <ImPlay3 />
  </div> */}
        {/* <div className="absolute text-white bg-white rounded-full top-1/2 text-8xl w-min bg-opacity-10 ">
    <BsPlayCircle />
  </div> */}
      </div>
    </section>
  );
};

export const DCEC = ({ butVisible }) => {
  const data = [
    {
      img: ExpKey,
      title: "Enjoy Free Test Drives",
      content:
        "All our cars include a free 1-year      warranty and roadside assistance for      total peace of mind",
    },
    {
      img: ExpArtboard,
      title: "Guest Lounge Area",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img: ExpAuto,
      title: "Automated Showrooms",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img: ExpArt,
      title: "State of the Art Interiors",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
  ];
  return (
    <section className="overflow-hidden bg-[#171614]">
      <div className="relative mb-10 ">
        <img src={CustomerExp} alt="" srcSet="" className="w-full" />
        <div className=" lg:absolute top-1/4 left-[8%] container mx-auto w-full  text-white font-extralight  mt-10 lg:mt-0">
          <div className="mb-4 text-4xl">
            Driftly Customer Experience Center
          </div>
          <div className="mb-4">
            Visit nearest Drively customer experience centre to <br />
            enjoy free test drives and much more
          </div>
          {butVisible && (
            <Link to="/experience-center">
              <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
                VIEW ALL CENTER
              </div>
            </Link>
          )}
        </div>
        {/* <div className="absolute flex items-end justify-center p-4 text-3xl text-white bg-white border rounded-full top-1/2 w-min bg-opacity-20 ">
    <ImPlay3 />
  </div> 
         <div className="absolute text-white bg-white rounded-full top-1/2 text-8xl w-min bg-opacity-10 ">
    <BsPlayCircle />
  </div> */}
      </div>

      <div className="container py-10 mx-auto ">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {data.map((x, i) => {
            return (
              <div key={i} className="space-y-4 text-white">
                <img src={x.img} alt="" />
                <div>{x.title}</div>
                <div className="text-sm font-extralight">{x.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BrowseByBrand = () => {
  const data = [
    MercedesBenz,
    Audi,
    BMW,
    LR,
    Jeep,
    Jaguar,
    Volvo,
    Mini,
    Lexus,
    DC,
    Chrysler,
    Nisan,
  ];
  return (
    <div className="container relative py-16 mx-auto">
      <div className="absolute mb-10 text-4xl font-light left-[6%]">
        Browse by Brands
      </div>
      <div className="grid grid-cols-6 mx-10 mt-16 mb-20 border-none">
        {data.map((x, i) => (
          <div
            key={i}
            className={`flex items-center justify-center py-5 ${
              i >= 0 && i < 6 ? "border-b" : ""
            } ${i === 5 || i === 11 ? "" : "border-r"}`}
          >
            <img src={x} alt={` ${x}`} className="mx" />
          </div>
        ))}
      </div>
      <div className="hover:bg-gradient-to-l select-none from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-8 py-3 cursor-pointer bg-white text-black hover:text-white border border-gray-300 mx-auto">
        View More
      </div>
    </div>
  );
};

DCEC.defaultProps = {
  butVisible: true,
};

export default Home;
