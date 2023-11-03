import React from "react";
import CustomerReview from "../../others/CustomerReview";
// import Header from "../../others/Header";

const Home = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <HeroSection />
      <CustomerReview />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="h-screen relative">
      <img
        src={require("../../assets/Home/HeroSection.png")}
        alt=""
        srcset=""
        className="w-full h-full"
      />
      <div className="absolute bottom-[28%] left-[8%]  text-white">
        <div className="text-6xl font-extralight">The New</div>
        <div className="text-6xl">Car Feeling</div>
        <div className="text-xl">For a price you love</div>
        <div className="my-4 font-extralight">
          Buy and finance refurbished pre-owned cars entirely online
        </div>
        <div className="flex gap-4">
          <div className="bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
            FIND YOUR CAR
          </div>
          <div className="hover:bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer bg-white text-black border">
            SELL YOUR CAR
          </div>
        </div>
      </div>
    </div>
  );
};

// const DriftlyBanefits = () => {
//   return <div></div>;
// };

export default Home;
