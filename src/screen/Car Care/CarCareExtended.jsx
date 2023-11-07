import React from "react";

import HeroImage from "../../assets/How It Works/Howitwork-HeroImage.png";
import StartPrice from "../../assets/Car Care/StartPrice.png";

import GuardPaint from "../../assets/Car Care/GuardPaint.png";
import ExpKey from "../../assets/Home/key.png";
import ExpArtboard from "../../assets/Home/Artboard.png";
import ExpAuto from "../../assets/Home/automated.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const CarCareExtended = () => {
  const data = [
    {
      img: ExpKey,
      title: "Free 24/7 Roadside Assistance",
      content:
        "Help at hand whenever you need it and wherever you are in India",
    },
    {
      img: ExpArtboard,
      title: "Full Access to Our Service Centres",
      content: "Plus hundreds of Drively service centres across India",
    },
    {
      img: ExpAuto,
      title: "Mechanical & Electrical Parts Covered",
      content:
        "From the engine to the suspension, sat nav, in-car entertainment and more",
    },
  ];

//   const mechData = [
//     {
//       title: "Drivetrain",
//       content: [
//         "Braking system",
//         "Suspension",
//         "Steering",
//         "Drive system",
//         "Propshaft",
//       ],
//     },
//     {
//       title: "Engine",
//       content: [
//         "Cooling system",
//         "ECUs",
//         "Engine",
//         "Timing belt(s)",
//         "Supercharger",
//         "Turbo",
//         "Fuel system",
//         "Catalytic converter",
//         "Diesel particulate filter (DPF)",
//       ],
//     },
//     {
//       title: "Transmission",
//       content: [
//         "Manual and automatic gearbox",
//         "Clutch",
//         "Continuously variable transmission",
//       ],
//     },
//     {
//       title: "Electrical",
//       content: [
//         "Air conditioning",
//         " Electrical system",
//         "Steering",
//         "Drive system",
//         "ICE/Multi-media/Touchscreen display",
//       ],
//     },
//   ];

  return (
    <div>
      {/* Hero Section */}
      <section className="overflow-hidden">
        <div className="relative">
          <img src={HeroImage} alt="" srcSet="" className="w-full h-[45vh]" />
          <div className="container absolute mx-auto text-white top-1/4 left-40">
            <div className="py-2 mb-4 text-5xl">
              Drively Cover <br /> Extended Warranty
            </div>
            <div className="mb-6">
              Available on all cars under 7 years old and with less than
              <br />
              1,00,000 kms on the clock. Add to your purchase in checkout from
              <br /> just `29,999.
            </div>
          </div>
        </div>
      </section>

      <section className="container flex items-center py-20 mx-auto">
        <div className="w-1/2 px-20 ">
          <div className="mb-4 text-4xl font-extralight">
            Protection From Unexpected <br /> Expenses
          </div>
          <div className="text-[#8A8A8A]">
            Every used car comes with a free 1 year warranty. Want to stay
            covered for longer? Drively Cover protects you from unexpected costs
            after your car warranty has ended.
          </div>
        </div>
        <div className="w-1/2">
          <img src={GuardPaint} alt="" srcset="" className="w-full " />
        </div>
      </section>
      <section className="overflow-hidden bg-[#363636]">
        <div className="container px-4 py-20 mx-auto">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data.map((x, i) => {
              return (
                <div key={i} className="space-y-4 text-white">
                  <img src={x.img} alt="" />
                  <div>{x.title}</div>
                  <div className="w-1/2 text-sm font-extralight">
                    {x.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container py-20 mx-auto">
        <div className="text-4xl font-extralight text-[#5E5E5E] pb-10">
          Mechanical & Electrical Parts Coverage
        </div>

        <div className="bg-[#F8F8F8]  rounded-lg mb-8 ">
          <div className="px-5 py-3 bg-[#363636] rounded-t-md text-xl uppercase text-white  ">
            What's Included
          </div>
          <section className="px-5 py-5">
            <div>Drivley Cover Includes:</div>
            <div></div>
          </section>
        </div>
        <div className="bg-[#F8F8F8]  rounded-lg ">
          <div className="px-5 py-3 bg-[#363636] rounded-t-md text-xl uppercase text-white  ">
            What's Included
          </div>
          <section className="px-5 py-5 ">
            <div className="mb-4">
              Your cover doesn’t include high-use touch points where everyday
              wear and tear is to be expected, for example, brake pads, seats,
              carpets and more. <br />
              You can see the full list of exclusions here:{" "}
              <span className="text-[#00BAB8] font-semibold">
                terms and conditions.
              </span>
            </div>
            <div>
              The total combined claim value can’t be greater than the purchase
              price of the car. Individual claim limits also apply.
            </div>
          </section>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="relative ">
          <img src={StartPrice} alt="" srcSet="" className="w-full" />
          <div className=" lg:absolute top-1/3 left-[8%] container mx-auto w-full  lg:text-white font-extralight text-black mt-4 lg:mt-0">
            <div className="w-1/3 mb-4 text-5xl font-light">
              Price Starts From ₹29,999 A Year
            </div>
            <div className="w-1/2 mb-6">
              Extend your car warranty today and get free breakdown cover.
              Prices start from ₹29,999 a year which is less than ₹650 a week!
              With Drively Cover, you can extend your Drively free 1 year
              warranty or your manufacturer’s warranty if you do so before it
              expires and within 12 months after receiving your Drivley car.
            </div>
            <Link to="/sell">
              <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-6 py-3 cursor-pointer text-white">
                Search Cars
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

      <section>
        <div className="mb-10">
          <div className="mt-14 w-[90%] container mx-auto text-[2.5rem] font-extralight mb-6">
            Frequently Asked Questions
          </div>
          <div className="flex container mx-auto justify-between w-[90%] border py-4 text-xl px-4 items-center rounded-xl hover:shadow-dirftyShdaow cursor-pointer mb-8">
            <div>How long can I extend my warranty for?</div>
            <div className=" text-[#0BF2B3] ">
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>
          <div className="flex container mx-auto justify-between w-[90%] border py-4 text-xl px-4 items-center rounded-xl  hover:shadow-dirftyShdaow cursor-pointer mb-8">
            <div>How do I pay for Driftly Cover Extended Warranty?</div>
            <div className=" text-[#0BF2B3] ">
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>
          <div className="flex container mx-auto justify-between w-[90%] border py-4 text-xl px-4 items-center rounded-xl hover:shadow-dirftyShdaow cursor-pointer mb-12">
            <div>How do I cancel my extend warranty?</div>
            <div className=" text-[#0BF2B3] ">
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>

          <div className="cursor-pointer text-[#00BAB8] underline underline-offset-2 container mx-auto w-[80%] ">
            View All Extended Warranty FAQ
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarCareExtended;
