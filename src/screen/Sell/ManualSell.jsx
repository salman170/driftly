import React, { useState } from "react";
import Header from "../../others/Header";
import HeroImage from "../../assets/Sell/Mannual-Select-HeroImage.png";

import { AiOutlineArrowLeft } from "react-icons/ai";
import Select from "react-select";
import ModalSell from "./ModalSell";
import LogoRender from "../Home/LogoRender";

const ManualSell = () => {
  const [miniStep, setMiniStep] = useState(1);
  const [visible, setVisible] = useState(false);

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
              miniStep > 1 && miniStep !== 5 && miniStep !== 8
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white "
            } ${miniStep > 7 && "opacity-0"} `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep > 2 && miniStep !== 6 && miniStep !== 5 && miniStep !== 8
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white"
            } ${miniStep > 7 && "opacity-0"} `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep === 4
                ? "bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3]"
                : "border border-black bg-white"
            } ${miniStep > 4 && "opacity-0"} `}
          ></div>
          <div
            className={`w-3 h-3  rounded-full ${
              miniStep === 4 ? "bg-white" : " bg-white"
            } `}
          ></div>
          <div
            className={`absolute w-0.5 duration-500 ${
              miniStep === 1
                ? "h-0"
                : miniStep === 2
                ? "h-[18.75%]"
                : miniStep === 3
                ? "h-[37.5%]"
                : miniStep === 4
                ? "h-[56.25%]"
                : miniStep === 5
                ? "h-[0]"
                : miniStep === 6
                ? "h-[18.75%]"
                : miniStep === 7
                ? "h-[37.5%]"
                : miniStep === 8
                ? "h-[0]"
                : miniStep === 9 && "h-[0%]"
            } bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] -z-10`}
          ></div>
          <div
            className={`absolute w-0.5 ${
              miniStep < 4 ? "h-[56.25%]" : miniStep < 7 ? "h-[37.5%]" : "h-0"
            } border border-dashed -z-20`}
          ></div>
        </div>
        <div className="col-span-11 ">
          {miniStep === 1 ? (
            <StepOneOfOne setMiniStep={setMiniStep} />
          ) : miniStep === 2 ? (
            <StepTwoOfOne setMiniStep={setMiniStep} />
          ) : miniStep === 3 ? (
            <StepThirdOfOne setMiniStep={setMiniStep} />
          ) : miniStep === 4 ? (
            <StepFourthOfOne setMiniStep={setMiniStep} />
          ) : miniStep === 5 ? (
            <StepOneOfSecond setMiniStep={setMiniStep} />
          ) : miniStep === 6 ? (
            <StepSecondOfSecond setMiniStep={setMiniStep} />
          ) : miniStep === 7 ? (
            <StepThirdOfSecond setMiniStep={setMiniStep} />
          ) : (
            miniStep > 7 && (
              <StepOneOfThird
                setMiniStep={setMiniStep}
                setVisible={setVisible}
              />
            )
          )}
        </div>
      </div>
      {miniStep === 8 && (
        <ModalSell visible={visible} setVisible={setVisible} />
      )}
    </>
  );
};

const StepOneOfOne = ({ setMiniStep }) => {
  const [clickedImage, setClickedImage] = useState(null);

  return (
    <div className="py-16 ">
      <div className="flex justify-between ">
        <div>
          <div className="mb-2 text-4xl">Car Details</div>
          <div className="text-xl font-semibold">Select your car brand</div>
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

      <LogoRender
        clickedImage={clickedImage}
        setClickedImage={setClickedImage}
      />

      <div
        className={`flex justify-end pt-2 ${
          clickedImage ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(2)}
        >
          PROCEED
        </div>
      </div>
    </div>
  );
};

const StepTwoOfOne = ({ setMiniStep }) => {
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
          <div className="mb-2 text-4xl">Car Details</div>
          <div className="text-xl font-semibold">
            Select your car model and variant
          </div>
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

      <div className="flex justify-end gap-10 py-10">
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          Back
        </div>
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

const StepThirdOfOne = ({ setMiniStep }) => {
  const statesData = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const yearsArray = [
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024,
  ];

  const RTOCodeData = [
    "MH 01",
    "MH 02",
    "MH 03",
    "MH 04",
    "MH 05",
    "MH 06",
    "MH 07",
    "MH 08",
    "MH 09",
    "MH 10",
    "MH 11",
    "MH 12",
    "MH 13",
    "MH 14",
    "MH 15",
    "MH 16",
    "MH 17",
    "MH 18",
    "MH 19",
    "MH 20",
  ];

  // You can use the 'yearsArray' in your JavaScript code.

  return (
    <>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-2 text-4xl">Car Details</div>
          <div className="text-xl font-semibold">
            Your Car's Registration Details
          </div>
        </div>
        <div className="text-right">Step 1 of 3</div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row">
        <div className="w-full">
          <div className="mt-4 mb-2 text-sm">Select State</div>
          <Select
            isClearable={true}
            options={statesData.map((state) => ({
              value: state,
              label: state,
            }))}
            className="w-full text-gray-900 placeholder-gray-500 rounded-md "
          />
        </div>
        <div className="w-full">
          <div className="mt-4 mb-2 text-sm">Select Year (as per RC) </div>
          <Select
            isClearable={true}
            options={yearsArray.map((state) => ({
              value: state,
              label: state,
            }))}
            className="w-full text-gray-900 placeholder-gray-500 rounded-md "
          />
        </div>
      </div>
      <div>
        <div className="mt-6 mb-4 text-sm">RTO code</div>
        <div className="flex flex-wrap gap-4 lg:gap-5">
          {RTOCodeData.map((x, i) => {
            return (
              <div className="px-8 py-3 bg-[#F4F4F4] hover:bg-[#363636] w-min whitespace-nowrap rounded-xl cursor-pointer hover:text-white">
                {x}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end gap-10 py-10">
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          Back
        </div>
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

const StepFourthOfOne = ({ setMiniStep }) => {
  return (
    <div>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-4 text-4xl">Car Details</div>
          <div className="text-xl font-semibold">Enter Car Location</div>
        </div>
        <div className="text-right">Step 1 of 3</div>
      </div>
      <div>
        <div className="mt-4 mb-2 text-sm">Zip Code</div>
        <div>
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#F4F4F4] placeholder-gray-500 border  rounded-md outline-none md:w-1/2 lg:w-1/3"
          />
        </div>
      </div>
      <div>
        <div className="mt-4 text-xl font-semibold lg:mt-8">
          Enter milage completed by car
        </div>
        <div className="mt-4 mb-2 text-sm">Approximate milage (km)</div>
        <input
          type="text"
          className="w-full px-4 py-3 bg-[#F4F4F4] placeholder-gray-500 border  rounded-md outline-none md:w-1/2 lg:w-1/3"
        />
      </div>

      <div className="flex justify-end gap-10 py-10">
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          Back
        </div>
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(5)}
        >
          PROCEED
        </div>
      </div>
    </div>
  );
};

const StepOneOfSecond = ({ setMiniStep }) => {
  return (
    <div>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-4 text-4xl">Vehicle History</div>
          <div className="text-xl font-semibold">
            Has the vehicle been in accident?
          </div>
        </div>
        <div className="text-right">Step 2 of 3</div>
      </div>
      <div className="flex gap-6 mt-4 mb-8">
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          NO
        </div>
        <div className="px-10 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border whitespace-nowrap">
          1 Accident
        </div>
        <div className="px-10 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border whitespace-nowrap">
          2 Accident
        </div>
      </div>
      <div className="text-xl font-semibold">
        Does your vehicle have any issues that would stop us from driving it?
      </div>
      <div className="flex gap-6 mt-4 mb-8">
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          YES
        </div>
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          NO
        </div>
      </div>
      <div className="flex justify-end gap-10 py-10">
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          Back
        </div>
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(6)}
        >
          PROCEED
        </div>
      </div>
    </div>
  );
};

const StepSecondOfSecond = ({ setMiniStep }) => {
  return (
    <div>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-4 text-4xl">Vehicle History</div>
          <div className="text-xl font-semibold">
            Does your vehicle need mechanical repairs or display dashboard{" "}
            <br className="hidden lg:block" /> warning lights?
          </div>
        </div>
        <div className="text-right">Step 2 of 3</div>
      </div>
      <div className="flex gap-6 mt-4 mb-8">
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          YES
        </div>
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          NO
        </div>
      </div>
      <div className="text-xl font-semibold">
        What is the condition of your vehicle?
      </div>
      <div className="flex gap-6 mt-4 mb-8 whitespace-nowrap">
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
          Pretty Great
        </div>
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
          Just Okay
        </div>
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
          Kind of rough
        </div>
      </div>
      <div className="flex justify-end gap-10 py-10">
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          Back
        </div>
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(7)}
        >
          PROCEED
        </div>
      </div>
    </div>
  );
};

const StepThirdOfSecond = ({ setMiniStep }) => {
  return (
    <div>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-4 text-4xl">Vehicle History</div>
          <div className="text-xl font-semibold">
            How many keys do you have for this vehicle?
          </div>
        </div>
        <div className="text-right">Step 2 of 3</div>
      </div>
      <div className="flex gap-6 mt-4 mb-8">
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border whitespace-nowrap">
          1 KEY
        </div>
        <div className="px-10 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border whitespace-nowrap">
          2 KEY
        </div>
      </div>
      <div className="text-xl font-semibold">
        Does your currently have a current loan vehicle?
      </div>
      <div className="flex gap-6 mt-4 mb-8">
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          YES
        </div>
        <div className="px-16 py-2.5 bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border">
          NO
        </div>
      </div>
      <div className="flex justify-end gap-10 py-10">
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          Back
        </div>
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          onClick={() => setMiniStep(8)}
        >
          PROCEED
        </div>
      </div>
    </div>
  );
};

const StepOneOfThird = ({ setMiniStep, setVisible }) => {
  return (
    <div>
      <div className="flex justify-between pt-16">
        <div>
          <div className="mb-4 text-4xl">Thank you for contacting us</div>
          <div className="lg:w-2/3 font-extralight">
            We evaluated thousand of similar cars based on condition, mileage
            and vehicle history to arrive at your offer.{" "}
          </div>
        </div>
        <div className="text-right">Step 3 of 3</div>
      </div>
      <div className="flex gap-10 py-10">
        <div
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none "
          onClick={() => setVisible(true)}
        >
          BOOK INSPECTION
        </div>
        <div
          className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border"
          onClick={() => setMiniStep((prevStep) => Math.max(1, prevStep - 1))}
        >
          SAVE DETAILS
        </div>
      </div>
    </div>
  );
};

export default ManualSell;
