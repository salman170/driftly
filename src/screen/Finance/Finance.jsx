import React, { useState } from "react";
import Header from "../../others/Header";
import HeroImage from "../../assets/How It Works/Howitwork-HeroImage.png";

const Finance = () => {
  const [selected, setSelected] = useState(1)
  return (
    <>
      <Header />
      <section className="overflow-hidden">
        <div className="relative">
          <img src={HeroImage} alt="" srcSet="" className="w-full" />
          <div className="container absolute mx-auto text-white top-1/3 left-32">
            <div className="mb-4 text-5xl">
              Financing <br /> made easy
            </div>
            <div className="mb-2">
              Achieve your automotive aspirations with our hassle-free financing
              solutions.
              <br /> Whether you're eyeing a new ride or considering selling
              your existing one,
              <br /> our seamless process ensures a stress-free experience
              without stepping into a dealership.
            </div>
            <div className="font-semibold">Here's how.</div>
          </div>
        </div>
      </section>
      <section className="container flex gap-6 mx-auto my-16 ">
        <div className="">
          <div onClick={()=>setSelected(1)} className={`px-6 py-4 mb-6 ${selected===1?"bg-gradient-to-tr from-[#0BF2B3] to-[#00BAB8] text-white shadow-xl":"border-2 "}  cursor-pointer   rounded-r-full rounded-bl-full whitespace-nowrap w-80  text-lg font-semibold uppercase hover:shadow-xl`}>
            Loan Eligibility
          </div>
          <div onClick={()=>setSelected(2)} className={`px-6 py-4 mb-6 ${selected===2?"bg-gradient-to-tr from-[#0BF2B3] to-[#00BAB8] text-white shadow-xl":" border-2"}  cursor-pointer   rounded-r-full rounded-bl-full whitespace-nowrap w-80  text-lg font-semibold uppercase hover:shadow-xl`}>
            EMI
          </div>
          <div onClick={()=>setSelected(3)} className={`px-6 py-4 mb-6 ${selected===3?"bg-gradient-to-tr from-[#0BF2B3] to-[#00BAB8] text-white shadow-xl":"border-2"}  cursor-pointer   rounded-r-full rounded-bl-full whitespace-nowrap w-80  text-lg font-semibold uppercase hover:shadow-xl`}>
            Apply for Loan
          </div>
        </div>
        <div className="bg-[#F4F4F4] w-full h-[50vh] rounded-xl"></div>
      </section>
    </>
  );
};

export default Finance;
