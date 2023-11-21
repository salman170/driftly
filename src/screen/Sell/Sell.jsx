import React, { useState } from "react";
import Header from "../../others/Header";
import HeroImage from "../../assets/Sell/SellHero.png";
import CustomerReview from "../Home/CustomerReview";
// import axios from "axios";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowSellingToDriftlyWorks />
      <CustomerReview />
    </div>
  );
};

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [data, setData] = useState(null);

  // const handleSearch = async (event) => {
  //   try {
  //     // Make the API call
  //     const response = await axios.get(`https://test=${searchTerm}`);
  //     // const response = await axios.get(`https://app.turtlemint.com/api/findregistrationresult?registration=${searchTerm}`);
  //     // Assuming the response data is an object with some properties, adjust this based on the actual API response
  //     setData(response.data);
  //   } catch (error) {
  //     // Handle errors if any
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div
      className={`h-screen relative bg-no-repeat bg-cover bg-center `}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* <img
          src={HeroImage}
          alt=""
          srcSet=""
          className="w-full h-full"
        /> */}
      <div className="absolute bottom-[24%] left-[8%]  text-white">
        <div className="mb-1 text-4xl font-extralight">Sell Cars</div>
        <div className="text-6xl font-extralight">Get a real Offer </div>
        <div className="text-6xl font-extralight">
          in just <span className="font-bold">5 minutes</span>
        </div>
        <div className="mb-6 text-2xl font-extralight">
          We pick up your car, You get paid on the spot
        </div>
        <div className="flex items-center mb-6 h-min">
          <input
            type="text"
            placeholder="Enter license plate"
            required
            className=" px-8 py-4  border border-gray-300 rounded bg-opacity-60 bg-[#FFFFFF] placeholder:text-black outline-none  text-black focus:bg-opacity-100 font-text-xl w-[40rem] uppercase"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <Link to="/select-manual">
          <div
            // onClick={handleSearch}
            className="bg-gradient-to-l select-none from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-4 cursor-pointer text-white hover:bg-white"
          >
            GET MY OFFER
            {/* <Link to="/find-a-car">GET MY OFFER </Link> */}
          </div>
        </Link>

        <div className="mt-4 text-xl font-extralight">
          Don’t have your license plate number?{" "}
          <Link to="/login" className="text-[#00BAB8] font-bold">
            Select your car{" "}
          </Link>
        </div>
      </div>
      {/* {!searchTerm && (
        <div className="absolute flex justify-end w-full h-full bg-[#00000030] bg-opacity-20">
          <div className="bg-white w-[500px] h-[90%] rounded-l-2xl shadow shadow-black"></div>
        </div>
      )} */}
    </div>
  );
};

const HowSellingToDriftlyWorks = () => {
  return (
    <div className="container pt-16 pb-10 mx-auto ">
      <div className="mb-4 text-6xl text-center font-extralight">
        How Selling to Drifty Works
      </div>
      <div className="text-2xl font-light text-center">
        Sell or Trade your vehicle in 3 easy steps
      </div>
      <div className="flex items-center justify-between pt-10 select-none">
        <div className="flex justify-center w-full cursor-pointer">
          <img src={require("../../assets/Sell/GetOffer.png")} alt="" />
        </div>
        <div className="flex justify-center w-full ">
          <img src={require("../../assets/Sell/Line.png")} alt="" />
        </div>
        <div className="flex justify-center w-full cursor-pointer">
          <img src={require("../../assets/Sell/TradeIn.png")} alt="" />
        </div>
        <div className="flex justify-center w-full ">
          <img src={require("../../assets/Sell/Line.png")} alt="" />
        </div>
        <div className="flex justify-center w-full cursor-pointer">
          <img src={require("../../assets/Sell/GetPaid.png")} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="w-full text-center ">
          <div>GET OFFER</div>
          <div className="pt-2 text-sm font-extralight">
            Give us a few details and we will give you a real offer in just 2
            minutes
          </div>
        </div>
        <div className="w-full "></div>
        <div className="w-full text-center ">
          <div>TRADE IN / SELL</div>
          <div className="pt-2 text-sm font-extralight">
            Trade in your old vehicle for a new one or sell it to Driftly.
            Either way we pick it up!
          </div>
        </div>
        <div className="w-full "></div>
        <div className="w-full text-center ">
          <div>GET PAID</div>
          <div className="pt-2 text-sm font-extralight">
            After a quick, on-site review of the vehicle, we’ll either cut you a
            check, or hand over the keys to your new ride!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
