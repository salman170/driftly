import React, { useState } from "react";
import Header from "../../others/Header";
import HeroImage from "../../assets/Sell/Mannual-Select-HeroImage.png";
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
import { AiOutlineArrowLeft } from "react-icons/ai";

const ManualSell = () => {
  const [miniStep, setMiniStep] = useState(1);

  const handleArrowLeftClick = () => {
    // Ensure miniStep doesn't go below 1
    setMiniStep((prevStep) => Math.max(1, prevStep - 1));
  };

  return (
    <>
      <Header />
      <div
        className={` relative bg-no-repeat bg-cover bg-center bg-black text-white  `}
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="container grid grid-cols-12 mx-auto">
          <div
            className="py-10 hover:text-[#0cf2b4]  cursor-pointer text-2xl sele"
            onClick={handleArrowLeftClick}
          >
            <AiOutlineArrowLeft />
          </div>
          <div className="col-span-10 py-10 select-none ">
            <div className="mb-6 text-4xl">Get the best offer for your car</div>
            <div className="font-extralight">
              Share a few details about your vehicle and we’ll give you real
              <br /> offers, right now.
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="container grid grid-cols-12 mx-auto">
        <div className="relative flex flex-col items-center justify-between gap-16 py-16 overflow-hidden h-[35rem]">
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep > 0
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black"
            } `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep > 1
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white "
            } `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep > 2
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white"
            } `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep > 3
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white"
            } `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep > 4
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white"
            } `}
          ></div>
          <div className="absolute w-0.5 h-[75%] bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] -z-10"></div>
        </div>
        <div className="col-span-11 ">
          {miniStep === 1 ? (
            <StepOneofOne setMiniStep={setMiniStep} />
          ) : miniStep === 2 ? (
            <StepTwoofOne setMiniStep={setMiniStep} />
          ) : miniStep === 3 ? (
            <StepThirdofOne setMiniStep={setMiniStep} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

const StepOneofOne = ({ setMiniStep }) => {
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
    <>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-2 text-3xl">Car Details</div>
          <div className="text-xl ">Select your car brand</div>
        </div>
        <div className="text-right">
          <div>Step 1 of 3</div>

          <div className="relative pt-2 text-gray-600">
            <input
              className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
              <svg
                className="w-4 h-4 text-[#00BAB8] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink" // Change from 'xmlns:xlink' to 'xlinkHref'
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 pt-10 border-none">
        {data.map((x, i) => (
          <div
            key={i}
            className={`flex items-center justify-center py-5 cursor-pointer border `}
          >
            <img src={x} alt={` ${x}`} className="mx" />
          </div>
        ))}
      </div>

      <div className="flex justify-end py-10">
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(2)}
        >
          PROCEED
        </div>
      </div>
    </>
  );
};

const StepTwoofOne = ({ setMiniStep }) => {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");

  const modelData = [
    {
      Model: "Fabia",
      variant: [
        { vName: "AMBITION 1.8 TSI", vType: "Petrol", vGear: "Manual" },
        { vName: "AMBITION 1.8 TSI", vType: "Petrol", vGear: "Automatic" },
        { vName: "RS", vType: "Diesel", vGear: "Automatic" },
      ],
    },
    {
      Model: "Laura",
      variant: [
        { vName: "AMBITION 2.8 TSI", vType: "Petrol", vGear: "Manual" },
        { vName: "AMBITION 2.8 TSI", vType: "Petrol", vGear: "Automatic" },
        { vName: "RS 2", vType: "Diesel", vGear: "Automatic" },
      ],
    },
    {
      Model: "Superb",
      variant: [
        { vName: "AMBITION 3.8 TSI", vType: "Petrol", vGear: "Manual" },
        { vName: "AMBITION 3.8 TSI", vType: "Petrol", vGear: "Automatic" },
        { vName: "RS 3", vType: "Diesel", vGear: "Automatic" },
      ],
    },
    {
      Model: "Octavia",
      variant: [
        { vName: "AMBITION 4.8 TSI", vType: "Petrol", vGear: "Manual" },
        { vName: "AMBITION 4.8 TSI", vType: "Petrol", vGear: "Automatic" },
        { vName: "RS 4", vType: "Diesel", vGear: "Automatic" },
      ],
    },
    {
      Model: "Rapid",
      variant: [
        { vName: "AMBITION 5.8 TSI", vType: "Petrol", vGear: "Manual" },
        { vName: "AMBITION 5.8 TSI", vType: "Petrol", vGear: "Automatic" },
        { vName: "RS 5", vType: "Diesel", vGear: "Automatic" },
      ],
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between pt-16 pb-4">
        <div>
          <div className="mb-2 text-3xl">Car Details</div>
          <div className="text-xl">Select your car model and variant</div>
        </div>
        <div className="text-right text-gray-400">Step 1 of 3</div>
      </div>

      <div>
        <div className="mt-4 mb-2 text-sm">Select Model</div>
        <div className="flex flex-wrap gap-2 mb-8">
          {modelData.map((model, index) => (
            <div
              key={index}
              className={` px-8 py-3  hover:text-white rounded-lg cursor-pointer ${
                selectedModel === index
                  ? "bg-[#363636] text-white"
                  : "bg-[#F4F4F4] hover:bg-[#363636]"
              }`}
              onClick={() => setSelectedModel(index)}
            >
              {model.Model}
            </div>
          ))}
        </div>

        <div className="mb-2 text-sm ">Select Variant</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedModel !== "" &&
            modelData[selectedModel].variant.map((variant, index) => (
              <div
                key={index}
                className={` px-8 py-3  hover:text-white rounded-lg cursor-pointer ${
                  selectedVariant === index
                    ? "bg-[#363636] text-white"
                    : "bg-[#F4F4F4] hover:bg-[#363636]"
                }`}
                onClick={() => setSelectedVariant(index)}
              >
                {variant.vName}
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-end py-10">
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(3)}
        >
          PROCEED
        </div>
      </div>
    </div>
  );
};

const StepThirdofOne = ({ setMiniStep }) => {
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
    <>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-2 text-3xl">Car Details</div>
          <div className="text-xl ">Select your car brand</div>
        </div>
        <div className="text-right">
          <div>Step 1 of 3</div>

          <div className="relative pt-2 text-gray-600">
            <input
              className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
              <svg
                className="w-4 h-4 text-[#00BAB8] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink" // Change from 'xmlns:xlink' to 'xlinkHref'
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 pt-10 border-none">
        {data.map((x, i) => (
          <div
            key={i}
            className={`flex items-center justify-center py-5 cursor-pointer border `}
          >
            <img src={x} alt={` ${x}`} className="mx" />
          </div>
        ))}
      </div>

      <div className="flex justify-end py-10">
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(4)}
        >
          PROCEED
        </div>
      </div>
    </>
  );
};

export default ManualSell;
