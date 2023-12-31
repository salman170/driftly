import React, { useCallback, useEffect, useState } from "react";
import Header from "../../others/Header";
import HeroImage from "../../assets/How It Works/Howitwork-HeroImage.png";
import EMISlider from "./EMISlider";

const Finance = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="scroll-smooth">
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
      <section className="container flex gap-6 mx-auto my-16 select-none">
        <div className="select-none">
          <div
            onClick={() => {
              setSelected(1);
              window.scrollTo(0, 200);
            }}
            className={`px-6 py-3 mb-6 ${
              selected === 1
                ? "bg-gradient-to-tr from-[#0BF2B3] to-[#00BAB8] text-white shadow-xl"
                : "border-2 "
            }  cursor-pointer   rounded-r-full rounded-bl-full whitespace-nowrap hover:shadow-xl`}
          >
            <span className="text-lg font-semibold ">Loan Eligibility</span>
            <div className="text-sm">How much loan you are eligible for?</div>
          </div>
          <div
            onClick={() => {
              setSelected(2);
              window.scrollTo(0, 200);
            }}
            className={`px-6 py-3 mb-6 ${
              selected === 2
                ? "bg-gradient-to-tr from-[#0BF2B3] to-[#00BAB8] text-white shadow-xl"
                : " border-2"
            }  cursor-pointer   rounded-r-full rounded-bl-full whitespace-nowrap   hover:shadow-xl`}
          >
            <span className="text-lg font-semibold ">EMI Calculator</span>
            <div className="text-sm">How much EMI you have to pay?</div>
          </div>
          <div
            onClick={() => {
              setSelected(3);
              window.scrollTo(0, 200);
            }}
            className={`px-6 py-3 mb-6 ${
              selected === 3
                ? "bg-gradient-to-tr from-[#0BF2B3] to-[#00BAB8] text-white shadow-xl"
                : "border-2"
            }  cursor-pointer   rounded-r-full rounded-bl-full whitespace-nowrap   hover:shadow-xl`}
          >
            <span className="text-lg font-semibold ">Apply for Loan</span>
            <div className="text-sm">
              Receive immediate support in obtaining a loan.
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] w-full  rounded-xl ">
          {selected === 1 ? (
            <TabOne />
          ) : selected === 2 ? (
            <TabTwo />
          ) : (
            <TabThree />
          )}
        </div>
      </section>
    </div>
  );
};

const TabOne = () => {
  return (
    <div className="p-10 mx-auto ">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        <div className="">
          <div className="mb-2 text-xl font-semibold">Car Loan Required</div>
          <div className="flex">
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] w-12 h-12 rounded-l-lg flex justify-center items-center text-white">
              ₹
            </div>
            <input
              type="text"
              placeholder="Enter amount here"
              autoFocus
              className=" px-4 py-2.5  border-y border-r border-gray-300 rounded-r-lg bg-opacity-60 bg-[#FFFFFF] placeholder:text-gray-300 outline-none  text-black focus:bg-opacity-100 font-text-xl w-full"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold ">
            Net Income Per Month
          </div>
          <div className="flex">
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] w-12 h-12 rounded-l-lg flex justify-center items-center text-white">
              ₹
            </div>
            <input
              type="text"
              placeholder="Excluding LTA and Medical Allowances"
              className=" px-4 py-2.5  border-y border-r border-gray-300 rounded-r-lg bg-opacity-60 bg-[#FFFFFF] placeholder:text-gray-300 outline-none  text-black focus:bg-opacity-100 font-text-xl w-full"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold ">
            Existing Loan Commitments
          </div>
          <div className="flex">
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] w-12 h-12 rounded-l-lg flex justify-center items-center text-white">
              ₹
            </div>
            <input
              type="text"
              placeholder="Per Month"
              className=" px-4 py-2.5  border-y border-r border-gray-300 rounded-r-lg bg-opacity-60 bg-[#FFFFFF] placeholder:text-gray-300 outline-none  text-black focus:bg-opacity-100 font-text-xl w-full"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold ">Rate Of Interest</div>
          <div className="flex">
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] w-12 h-12 rounded-l-lg flex justify-center items-center text-white">
              %
            </div>
            <input
              type="text"
              placeholder=" Existing Loan Rate of Interest"
              className=" px-4 py-2.5  border-y border-r border-gray-300 rounded-r-lg bg-opacity-60 bg-[#FFFFFF] placeholder:text-gray-300 outline-none  text-black focus:bg-opacity-100 font-text-xl w-full"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 text-xl font-semibold ">Loan Tenure</div>
          <input
            type="text"
            placeholder="Total years"
            className=" px-4 py-2.5  border border-gray-300 rounded-lg bg-opacity-60 bg-[#FFFFFF] placeholder:text-gray-300 outline-none  text-black focus:bg-opacity-100 font-text-xl w-full"
          />
        </div>
        <div className="flex items-end">
          <div className="mt-2 text-center w-full text-xl font-semibold cursor-pointer bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] text-white py-3 px-3 rounded-r-full rounded-bl-full">
            Check Eligibility
          </div>
          {/* <input
            type="text"
            placeholder="Total years"
            autoFocus
            className=" px-4 py-2.5  border border-gray-300 rounded-lg bg-opacity-60 bg-[#FFFFFF] placeholder:text-gray-300 outline-none  text-black focus:bg-opacity-100 font-text-xl w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

const TabTwo = () => {
  const MIN1 = 1;
  const MAX1 = 100;
  const steps1 = 0.1;
  const MIN2 = 1;
  const MAX2 = 30;
  const steps2 = 0.01;
  const MIN3 = 1;
  const MAX3 = 30;
  const steps3 = 1;

  const initialValue1 = MIN1;
  const initialValue2 = MIN2;
  const initialValue3 = MIN3;

  const [value1, setValue1] = useState(initialValue1);
  const [value2, setValue2] = useState(initialValue2);
  const [value3, setValue3] = useState(initialValue3);
  const [perCentag, setPerCentag] = useState(5.056);

  const [monthlyEMI, setMonthlyEMI] = useState(8379);
  const [principalAmount, setPrincipalAmount] = useState(100000);
  const [totalInterest, setTotalInterest] = useState(542);
  const [totalAmount, setTotalAmount] = useState(100542);

  // Monthly EMI Calculation
  const calculateEMI = useCallback(() => {
    // Your EMI calculation logic here based on the values of value1, value2, and value3
    // For demonstration, I'm using a simple interest formula
    setPrincipalAmount(value1 * 100000);
    const rateOfInterest = value2 / 100;
    const numberOfPayments = value3 * 12;
    const monthlyInterestRate = rateOfInterest / 12;
    const emi =
      (principalAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return emi;
  }, [value1, value2, value3, principalAmount]);

  useEffect(() => {
    // Update EMI and other related values when any of the sliders change
    const emi = calculateEMI();
    setMonthlyEMI(emi.toFixed());
    setTotalInterest(emi * value3 * 12 - principalAmount);
    setTotalAmount(principalAmount + totalInterest);
    const am = 938 - (principalAmount / totalAmount) * 938;
    setPerCentag(am);
    
  }, [value1, value2, value3, principalAmount, totalInterest,totalAmount, calculateEMI]);

  // Function to reset value to initial state
  const resetValue = () => {
    setValue1(initialValue1);
    setValue2(initialValue2);
    setValue3(initialValue3);
  };


  return (
    <div className="p-10 ">
      <div className="grid gap-6 xl:grid-cols-2">
        <div>
          <div className="mb-10">
            <div className="flex items-end justify-between mb-2 ">
              <div className="text-xl font-semibold ">Loan Amount</div>
              <div className=" bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] text-white pr-3 py-1 w-36 text-right">
                <span className="pr-2 text-sm font-ligh6">₹</span>{" "}
                <span className="font-bold"> {value1}</span>
                <span className="pl-2 text-sm font-normal ">Lakhs</span>
              </div>
            </div>
            <EMISlider
              MIN={MIN1}
              value={value1}
              setValue={setValue1}
              steps={steps1}
              MAX={MAX1}
              points={[]}
            />
          </div>
          <div className="mb-10">
            <div className="flex items-end justify-between mb-2 ">
              <div className="text-xl font-medium ">Rate of interest (p.a)</div>
              <div className="font-bold bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] text-white pr-3 py-1 w-36 text-right">
                {value2}
                <span className="pl-2 text-sm font-normal">%</span>
              </div>
            </div>
            <EMISlider
              MIN={MIN2}
              value={value2}
              setValue={setValue2}
              steps={steps2}
              MAX={MAX2}
              points={[]}
            />
          </div>
          <div className="mb-6">
            <div className="flex items-end justify-between mb-2 ">
              <div className="text-xl font-semibold ">Loan tenure</div>
              <div className="font-bold bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] text-white pr-3 py-1 w-36 text-right">
                {value3}
                <span className="pl-2 text-sm font-normal">Years</span>
              </div>
            </div>
            <EMISlider
              MIN={MIN3}
              value={value3}
              setValue={setValue3}
              steps={steps3}
              MAX={MAX3}
              points = {[
                1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
               11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
               21, 22, 23, 24, 25, 26, 27, 28, 29, 30
              ]}
            />
          </div>

          <div
            className="mb-10 text-[#00BAB8] underline underline-offset-2 text-right cursor-pointer"
            onClick={resetValue}
          >
            Refresh
          </div>

          <div className="flex items-end justify-between mb-4 border-b">
            <div className="font-light ">Monthly EMI</div>
            <div>
              ₹{monthlyEMI.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="flex items-end justify-between my-2 border-b">
            <div className="font-light ">Principal amount</div>
            <div>
              ₹
              {principalAmount
                .toFixed()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="flex items-end justify-between my-4 border-b">
            <div className="font-light ">Total interest</div>
            <div>
              ₹
              {totalInterest
                .toFixed()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="flex items-end justify-between mb-2 ">
            <div className="font-light">Total amount</div>
            <div>
              ₹
              {totalAmount
                .toFixed()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </div>
        <div className="flex-col items-center hidden xl:flex ">
          <div className="flex items-center justify-center bg-[#8e8e8e]  rounded-full lg:w-60 lg:h-60 xl:w-80 xl:h-80 relative">
            {/* <svg width="100%" height="100%" viewBox="0 0 230 230">
              {/* <circle cx="115" cy="115" r="80"></circle>
              <path d="M115,115 L115,5 A110,110 0 0,1 190,35 z"></path>
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100%"
              height="100%"
            >
              {/* <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs> */}
              <circle
                cx="160"
                cy="160"
                r="151.3"
                strokeLinecap="round"
                className="stroke-[18] fill-none stroke-[#00BAB8]"
                style={{
                  strokeDasharray: "938",
                  strokeDashoffset: `${perCentag}`,
                }}
              />
            </svg>
            <div className="bg-[#F4F4F4] rounded-full lg:w-48 lg:h-48 xl:w-72 xl:h-72 absolute  "></div>
          </div>
          <div className="flex gap-4 mt-10">
            <div className="flex items-center justify-center gap-2 ">
              <div className="w-8 h-4 bg-[#00BAB8] rounded-full"></div>
              <div>Principal amount</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-4 bg-[#8e8e8e] rounded-full"></div>
              <div>Interest amount</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabThree = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanAmount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Add validation logic for email, etc.
    if (formData.fullName && formData.email) {
      // setFormNumber(2);
      // alert("Proceeding...");
      alert(
        `Name: ${formData.fullName}   Email: ${formData.email}  Phone: ${formData.phone} Loan Amount: ${formData.loanAmount}`
      );
      alert("form submitted successfully!");
    } else {
      alert("Please fill in both Full Name and Email.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-6 p-10">
        <div>
          <div className="mb-1 text-xl font-semibold">Full Name</div>
          <input
            type="text"
            name="fullName"
            id=""
            required
            className="w-full px-6 py-3 bg-white outline-none"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-1 text-xl font-semibold">Mobile Number</div>
          <div className="flex px-2 py-2 bg-white ">
            <div className="px-4 my-auto border-r border-black">+91</div>
            <div>
              <input
                type="tel"
                name="phone"
                id=""
                required
                pattern="[0-9]{10}"
                className="bg-[#ffffff] ml-4 px-2 py-1 outline-none"
                // className="bg-[#F4F4F4] ml-4 px-2 py-1 outline-none invalid:border border-0 border-gray-300  invalid:border-red-500"
                placeholder="Enter Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-4 mb-1 text-xl font-semibold">Email Address</div>
          <input
            type="email"
            name="email"
            id=""
            required
            className="w-full px-6 py-3 bg-white outline-none"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mt-4 mb-1 text-xl font-semibold">Loan Amount</div>
          <input
            type="text"
            name="loanAmount"
            id=""
            required
            className="w-full px-6 py-3 bg-white outline-none"
            placeholder="Enter Loan Amount (₹)"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-end mt-4">
          <button
            type="submit"
            className="mt-2 text-center w-full text-xl font-semibold cursor-pointer bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] text-white py-3 px-3 rounded-r-full rounded-bl-full"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Finance;
