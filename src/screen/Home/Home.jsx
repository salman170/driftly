import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomerReview from "./CustomerReview";
import Header from "../../others/Header";

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
import PopularCarsSlider from "./PopularCarsSlider";
import LimitedEditonCarSlider from "./LimitedEditonCarSlider";

const Home = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <DriftlyBenefits />
      <HDW />
      <BrowseByLifestyle />
      <LimitedEditions />
      <PopularCars />
      <BrowseByBrand />
      <BrowsebyBodyType />
      <DCEC />
      <CustomerReview />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div
      className={`h-screen relative bg-no-repeat bg-cover bg-center bg-black`}
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
            <Link to="/find-a-car">FIND YOUR CAR </Link>
          </div>
          <div className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer bg-white text-black hover:text-white">
            <Link to="/sell"> SELL YOUR CAR </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DriftlyBenefits = () => {
  return (
    <div className="container relative py-20 mx-auto">
      <div className="absolute text-5xl top-16 left-[5%] font-light">
        Driftly Benefits
      </div>
      <div className="mt-4 lg:ml-16">
        <DriftyBenefitsSlider />
      </div>
    </div>
  );
};

const BrowseByLifestyle = () => {
  const data = [
    require("../../assets/Home/Family Friendly.png"),
    require("../../assets/Home/Daily Commuter.png"),
    require("../../assets/Home/Style Seeker.png"),
    require("../../assets/Home/Outdoor Loving.png"),
    require("../../assets/Home/Value For Money.png"),
    require("../../assets/Home/Featured Packed.png"),
  ];
  return (
    <div className=" pt-20  bg-[#000000]">
      <div className="container mx-auto mb-10 text-4xl font-light text-white pl-14">
        Browse by Lifestyle
      </div>
      <div className="container flex justify-center gap-4 mx-auto xl:gap-8 ">
        {data.map((x, i) => {
          return (
            <div key={i} className="cursor-pointer group">
              <img
                src={x}
                alt=""
                srcSet=""
                className="duration-200 select-none group-hover:-translate-y-2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LimitedEditions = () => {
  return (
    <div className=" pt-20  bg-[#000000]">
      <div className="container pl-16 mx-auto mb-10 text-4xl font-light text-white">
        Limited Editions
      </div>
      <div>
        <LimitedEditonCarSlider />
      </div>
    </div>
  );
};

const HDW = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative ">
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

      <div className="container px-4 py-10 mx-auto">
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
    <div className="container relative pt-16 mx-auto">
      <div className="absolute mb-10 text-4xl font-light left-[4%]">
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

const BrowsebyBodyType = () => {
  const [select, setSelected] = useState(2);

  const data = [
    {
      title: "Hatchback",
      img1: require("../../assets/Home/HATCHBACK.png"),
      img2: require("../../assets/Home/HATCHBACK-B.png"),
      content:
        "A compact car with a rear door that opens upward, providing easy access to the cargo area. Known for their versatility and space efficiency, hatchbacks are ideal for urban driving.",
    },
    {
      title: "SUV",
      img1: require("../../assets/Home/SUV.png"),
      img2: require("../../assets/Home/SUV-B.png"),
      content:
        "A robust vehicle with elevated ground clearance, spacious interiors, and off-road capabilities. Popular for family travel and varying terrains.",
    },
    {
      title: "SEDAN",
      img1: require("../../assets/Home/SEDAN.png"),
      img2: require("../../assets/Home/SEDAN-B.png"),
      content:
        "A passenger car in a three-box configuration with separate compartments for engine, passenger, and cargo.",
    },
    {
      title: "MUV",
      img1: require("../../assets/Home/MUV.png"),
      img2: require("../../assets/Home/MUV-B.png"),
      content:
        "A spacious vehicle designed for passenger comfort and multiple seating configurations. Ideal for families or group travel.",
    },
    {
      title: "Coupe",
      img1: require("../../assets/Home/COUPE.png"),
      img2: require("../../assets/Home/COUPE-B.png"),
      content:
        "A two-door car with a sleek design, often emphasizing style and performance. Known for its sporty appearance.",
    },
    {
      title: "Convertible",
      img1: require("../../assets/Home/CONVERTIBLE.png"),
      img2: require("../../assets/Home/Convertible-B.png"),
      content:
        "A car featuring a retractable or removable roof, allowing an open-air driving experience. Offers a sense of freedom and stylish design.",
    },
  ];

  return (
    <div className="container pt-10 mx-auto pb-14">
      <div className="container pl-16 mx-auto mb-10 text-4xl font-light ">
        Browse by Body type
      </div>
      <div className="flex overflow-hidden duration-500">
        {data.map((x, i) => {
          return (
            <div
              key={i}
              className={`text-center group relative p-10 duration-200 cursor-pointer  `}
              onMouseEnter={() => setSelected(i)}
              // onMouseLeave={() => setSelected(2)}
            >
              <div
                className={`${
                  select === i
                    ? "block font-bold text-xl text-white mx-auto"
                    : "hidden"
                }`}
              >
                {x.title}
              </div>
              <div className="flex items-end justify-center h-36">
                <img
                  src={x.img1}
                  alt=""
                  srcSet=""
                  className={`${select === i ? " hidden" : " block"}`}
                />
                <img
                  src={x.img2}
                  alt=""
                  srcSet=""
                  className={`${select === i ? "block w-max    " : "hidden"}`}
                />
              </div>
              <div
                className={`${
                  select === i ? "hidden " : " block mt-6 text-xl  mx-auto"
                }`}
              >
                {x.title}
              </div>
              <div
                className={`${
                  select === i
                    ? "block w-60 text-white mx-auto mt-4 text-sm px-2"
                    : "hidden"
                }`}
              >
                {x.content}
              </div>
              <div
                className={`${
                  select === i ? "block   mx-auto  text-sm mt-4 " : "hidden"
                } px-12 py-3 text-black uppercase bg-white rounded-r-full rounded-bl-full cursor-pointer w-min whitespace-nowrap `}
              >
                BROWSE
              </div>
              <div
                className={`absolute inset-0 -z-10 mx-auto w-[280px] ${
                  select === i
                    ? "bg-gradient-to-t from-[#00BAB8] to-[#0BF2B3] rounded-xl"
                    : ""
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PopularCars = () => {
  return (
    <div className="py-20 bg-[#F8F8F8] ">
      <div className="container relative mx-auto">
        <div className="absolute text-4xl font-light left-[4%] -top-4">
          Popular Cars
        </div>
        <div className="mt-4 lg:ml-14">
          <PopularCarsSlider />
        </div>
      </div>
    </div>
  );
};

DCEC.defaultProps = {
  butVisible: true,
};

export default Home;
