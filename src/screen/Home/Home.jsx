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

import DriftyBenefitsSlider from "./DriftyBenefitsSlider";
import PopularCarsSlider from "./PopularCarsSlider";
import LimitedEditonCarSlider from "./LimitedEditonCarSlider";
import { AiOutlineClose } from "react-icons/ai";
import BBBrand from "./BBBrand";

const Home = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <div className="hidden md:block">
        <BotPopup />
      </div>
      <DriftlyBenefits />
      <HDW />
      <BrowseByLifestyle />
      <LimitedEditions />
      <PopularCars />

      <BrowseByBrand2 />
      <BrowsebyBodyType />
      <DCEC />
      <CustomerReview />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div
      className={`h-screen relative bg-no-repeat bg-cover bg-right md:bg-center bg-black`}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* <img
        src={HeroImage}
        alt=""
        srcSet=""
        className="w-full h-full"
      /> */}
      <div className="absolute bottom-32 md:bottom-[28%] left-5 md:left-[8%]  text-white">
        <div className="text-4xl lg:text-6xl font-extralight">The New</div>
        <div className="text-4xl lg:text-6xl">Car Feeling</div>
        <div className="text-xl">For a price you love</div>
        <div className="my-4 font-extralight">
          Buy and finance refurbished pre-owned cars entirely online
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap md:uppercase px-6 py-3 cursor-pointer text-white hover:bg-white">
            <Link to="/find-a-car">Find Your Car </Link>
          </div>
          <div className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap md:uppercase px-6 py-3 cursor-pointer bg-white text-black hover:text-white">
            <Link to="/sell"> Sell Your Car </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DriftlyBenefits = () => {
  return (
    <div className="container relative mx-auto ">
      <div className="absolute flex items-center justify-center h-20 px-2 pb-20 mt-10 text-3xl font-light md:h-40 md:text-5xl">
        Driftly Benefits
      </div>
      <div className="px-2 pt-10 pb-10 mt-4 md:pt-20 md:pb-16 ">
        <DriftyBenefitsSlider />
      </div>
    </div>
  );
};

const BrowseByLifestyle = () => {
 
  const data = [
    {
      img: require("../../assets/Home/Family Friendly.png"),
      title: "FamilyFriendly",
    },
    {
      img: require("../../assets/Home/Daily Commuter.png"),
      title: "DailyCommuter",
    },
    {
      img: require("../../assets/Home/Style Seeker.png"),
      title: "StyleSeeker",
    },
    {
      img: require("../../assets/Home/Outdoor Loving.png"),
      title: "OutdoorLoving",
    },
    {
      img: require("../../assets/Home/Value For Money.png"),
      title: "ValueForMoney",
    },
    {
      img: require("../../assets/Home/Featured Packed.png"),
      title: "FeaturedPacked",
    },
  ];
  return (
    <div className=" pt-20  bg-[#000000]">
      <div className="container px-2 mx-auto mb-10 text-4xl font-light text-white lg:pl-14 lg:text-5xl">
        Browse by Lifestyle
      </div>
      <div className="container grid grid-cols-3 gap-2 mx-auto lg:grid-cols-6 ">
        {data.map((x, i) => {
          return (
            <div key={i} className="cursor-pointer group">
              <Link to="/find-a-car" >

              <img
                src={x.img}
                alt=""
                srcSet=""
                className="duration-200 select-none group-hover:-translate-y-2"
              /> 
              </Link>
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
      <div className="container px-2 mx-auto mb-10 text-4xl font-light text-white lg:text-5xl lg:pl-16 md:text-4xl">
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
        <div className=" lg:absolute top-1/3 left-[8%] container mx-auto w-full  lg:text-white font-extralight text-black mt-4 lg:mt-0 p-1">
          <div className="mb-4 text-3xl font-light md:text-5xl">
            How Driftly Works
          </div>
          <div className="mb-6">
            Search, order, customise and finance your{" "}
            <br className="hidden md:block" />
            car - All from the comfort of your sofa and get{" "}
            <br className="hidden md:block" />a doorstep delivery
          </div>
          <Link to="/how-it-works">
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 mb-4 cursor-pointer text-white">
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
        <div className=" px-2 lg:absolute top-1/4 left-[8%] container mx-auto w-full  text-white font-extralight  mt-10 lg:mt-0">
          <div className="mb-4 text-4xl">
            Driftly Customer Experience Center
          </div>
          <div className="mb-4">
            Visit nearest Driftly customer experience centre to <br />
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

const BrowseByBrand2 = () => {
  return (
    <div className="container relative pt-16 mx-auto">
      <div className="absolute mb-10 text-4xl font-light left-[4%]">
        Browse by Brands
      </div>
      <BBBrand />
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
      img2: require("../../assets/Home/CoupeUpdated.png"),
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
    <div className="container pt-10 mx-auto pb-14 ">
      <div className="container pl-16 mx-auto mb-10 text-4xl font-light ">
        Browse by Body type
      </div>
      <div className="hidden overflow-hidden duration-500 lg:flex">
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
              <Link to="/find-a-car" >
                
              <div
                className={`${
                  select === i ? "block   mx-auto  text-sm mt-4 " : "hidden"
                } px-12 py-3 text-black uppercase bg-white rounded-r-full rounded-bl-full cursor-pointer w-min whitespace-nowrap `}
              >
                BROWSE
              </div>
              </Link>
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
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
        {data.map((x, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center py-4 text-center rounded-r-full rounded-bl-full cursor-pointer hover:shadow hover:text-white hover:bg-gradient-to-t from-[#00BAB8] to-[#0BF2B3]"
            >
              <div className="mb-2 text-lg">{x.title}</div>
              <img src={x.img1} alt="" srcSet="" />
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
        <div className="container px-2 mx-auto text-4xl font-light lg:text-5xl lg:pl-16 md:text-4xl">
          Popular Cars
        </div>
        <div className="mt-4 lg:ml-14">
          <PopularCarsSlider />
        </div>
      </div>
    </div>
  );
};

const BotPopup = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const questionData = [
    {
      quest: "How to buy a car from Driftly?",
      answer: [
        "Buying from Driftly is a simple 3 step process- ",
        "1. Choose your car:     Browse through thousands of cars on our website. Find the car that fits your requirements using our dynamic filters. Virtually inspect the features.    ",
        "2. Book online in a click: Pay a nominal amount and reserve your car.        ",
        "3. Pay at delivery:  Complete the payment and documentation process at the time of delivery and we will initiate the transfer process on your behalf.",
      ],
    },
    {
      quest: "Can I get my car financed?",
      answer: [
        "Yes, Driftly provides financing options for purchasing a car. Our financing process is designed to be simple and accessible, offering you flexibility in securing your desired vehicle. Feel free to explore our website for more details or contact our support team for personalized assistance.",
      ],
    },
    {
      quest: "How does Driftly works?",
      answer: [
        "For Buyers: ",
        "1. Browse Online - Sell/Trade tab    ",
        "2. Book online in a click:  Pay a nominal amount and reserve your car.        ",
        "3. Pay at delivery:  Complete the payment and documentation process at the time of delivery and we will initiate the transfer process on your behalf.",
        "For Seller: ",
        "1. Tell us about your vehicle - Find car tab    ",
        "2. Verify all your car details and close the deal ",
        "3. Get paid",
      ],
    },
  ];

  const handleDivClick = (index) => {
    setSelectedIndices([...selectedIndices, index]);
  };

  return (
    <div className="fixed z-10 bottom-5 right-5 md:bottom-10 md:right-10">
      {open ? (
        <div className="w-[24rem] rounded-3xl overflow-hidden shadow-2xl bg-white ">
          <div className="text-white bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] px-8 py-6 flex justify-between ">
            <div>
              <div className="text-2xl font-semibold">Welcome</div>
              <div>What can we help with today?</div>
            </div>
            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="text-xl cursor-pointer"
            />
          </div>
          <div
            className={`mx-8 my-6 bg-white ${
              selectedIndices.length ? "h-[28rem]" : "h-[22rem]"
            } overflow-y-scroll`}
          >
            {selectedIndices?.map((selectedIndex, i) => {
              return (
                <>
                  <div className="flex justify-end">
                    <div
                      key={i}
                      className="px-6 py-3 mt-1 mb-4 mr-1 border rounded-l-full rounded-br-full bg-[#363636] text-white  text-right"
                    >
                      {questionData[selectedIndex].quest}
                    </div>
                  </div>

                  <div
                    key={i}
                    className="px-6 py-3 mt-1 mb-4 border rounded-r-[1.5rem] rounded-bl-[1.5rem] bg-[#F4F4F4]  w-[90%]"
                  >
                    {questionData[selectedIndex].answer.map((line, index) => {
                      return <div className="mb-2">{line}</div>;
                    })}
                  </div>
                </>
              );
            })}
            <div className="mb-2 text-center">Popular topics:</div>
            <div className="w-[95%]">
              <div>
                {questionData.map((x, i) => {
                  return (
                    <div
                      key={i}
                      className="px-6 py-3 mt-1 mb-4 border rounded-r-full rounded-bl-full hover:bg-[#363636] hover:text-white cursor-pointer shadow-lg"
                      onClick={() => handleDivClick(i)}
                    >
                      {x.quest}
                    </div>
                  );
                })}
              </div>
              <div className="text-[#7B7B7B] space-y-3 text-sm mt-6">
                <div>
                  If you need any help, we’re available from{" "}
                  <span className="font-semibold ">9am-8pm, 7 days</span> a week
                </div>
                <div>
                  Call us on{" "}
                  <a
                    href="tel:+91 98488 98488"
                    className="font-semibold hover:text-black "
                  >
                    +91 98488 98488
                  </a>
                </div>
                <div>
                  Whatsapp us{" "}
                  <a
                    href="whatsapp://send?phone=919848898488"
                    className="font-semibold hover:text-black"
                  >
                    +91 98488 98488
                  </a>
                </div>
              </div>
              {selectedIndices.length ? (
                <div
                  className="mt-2 text-sm text-right cursor-pointer text-[#00BAB8] underline underline-offset-2 "
                  onClick={() => setSelectedIndices([])}
                >
                  Clear
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          // onDoubleClick={() => {
          //   window.scrollTo({
          //     top: 0,
          //     behavior: "smooth", // Optional smooth scrolling
          //   });
          // }}

          className="w-10 h-10 xl:w-14 xl:h-14 bg-gradient-to-t from-[#00BAB8] to-[#0BF2B3]   text-white  rounded-l-full rounded-tr-full pt-0.5  select-none xl:pt-2 my-auto text-xl xl:text-2xl text-center cursor-pointer   "
        >
          . . .
        </div>
      )}
    </div>
  );
};

DCEC.defaultProps = {
  butVisible: true,
};

export default Home;
