import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formNumber, setFormNumber] = useState(1);

  // const handleOnClose = () => {};
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex shadow-xl shadow-[#707070] rounded-3xl">
        <div className="relative">
          <img
            src={require("../../assets/Login/LoginBackground.png")}
            alt=""
            srcSet=""
            className="h-full "
          />
          <img
            src={require("../../assets/Logo/ColorLogo.png")}
            alt=""
            srcSet=""
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        {formNumber === 1 ? (
          <NumberForm setFormNumber={setFormNumber} />
        ) : formNumber === 2 ? (
          <OTPForm setFormNumber={setFormNumber} />
        ) : (
          <EmailForm setFormNumber={setFormNumber} />
        )}
      </div>
    </div>
  );
};

export const NumberForm = ({ setFormNumber }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  const handleSubmitMobile = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // alert("hello");
    setFormNumber(2);
  };

  return (
    <form onSubmit={handleSubmitMobile}>
      <div className="relative flex flex-col justify-between py-16 px-14">
        <div className="mb-8">
          <div className="text-5xl font-extralight text-[#5E5E5E] mb-4">
            Hello
          </div>
          <div className="text-[#5E5E5E] mb-5">
            To keep connected with us please Log In with your <br />
            Mobile Number and verify your identity via OTP.
          </div>
        </div>
        <div>
          <div className="mb-1 text-sm">Mobile Number</div>
          <div className="px-2 py-2 bg-[#F4F4F4] flex   ">
            <div className="px-4 my-auto border-r border-black">+91</div>
            <div>
              <input
                type="tel"
                name=""
                id=""
                required
                pattern="[0-9]{10}"
                className="bg-[#F4F4F4] ml-4 px-2 py-1 outline-none"
                // className="bg-[#F4F4F4] ml-4 px-2 py-1 outline-none invalid:border border-0 border-gray-300  invalid:border-red-500"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              required
              className="transform cursor-pointer scale-[2.0] mx-2"
            />
            <div className="text-[#a9a9a9] ml-2">Send updates on WhatsApp</div>
          </div>
        </div>
        <div>
          <div className="mt-16 mb-4">
            <span>By logging in, I agree to</span>{" "}
            <Link to="/privacy" className="text-[#00BAB8]">
              terms & privacy policy
            </Link>
          </div>
          <div>
            {/* <button
          type="submit"
          onSubmit={handleSubmitMobile}
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white"
        >
          PROCEED
        </button> */}
            <input
              type="submit"
              value="PROCEED"
              className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer text-white hover:bg-white"
            />
          </div>
        </div>
        <div
          onClick={handleGoBack}
          className="p-1.5 text-sm border rounded-full bg-[#f9f9f9] font-extralight w-min absolute top-4 right-4 cursor-pointer hover:shadow-lg"
        >
          {/* <Link to="/"> */}
          <AiOutlineClose />
          {/* </Link> */}
        </div>
      </div>
    </form>
  );
};

export const OTPForm = ({ setFormNumber }) => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, e) => {
    if (e.target.value.length > 0 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    // Handle your OTP input here
  };

  const handleSubmitOtp = async (event) => {
    event.preventDefault();

    const otp = inputRefs.reduce((code, inputRef) => {
      return code + inputRef.current.value;
    }, "");

    alert(`OTP is ${otp}`);
    setFormNumber(3);

    // try {
    //   const response = await axios.post("YOUR_API_ENDPOINT", {
    //     otp: otp,
    //   });

    //   if (response.status === 200) {
    //     // Valid OTP, do something (navigate to next step, etc.)
    //     setFormNumber(3);
    //   } else {
    //     // Invalid OTP, handle accordingly (display error message, etc.)
    //     alert("Invalid OTP!");
    //   }
    // } catch (error) {
    //   // Handle errors (network issues, server errors, etc.)
    //   console.error("Error:", error);
    //   alert("An error occurred while verifying the OTP.");
    // }
  };

  const styles = `
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
         -webkit-appearance: none;
          margin: 0;
  }

  input[type=number] {
      -moz-appearance: textfield;
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <form onSubmit={handleSubmitOtp}>
        <div className="relative flex flex-col justify-between py-16 px-14">
          <div className="mb-8">
            <div className="text-5xl font-extralight text-[#5E5E5E] mb-4">
              Hello
            </div>
            <div className="text-[#5E5E5E] mb-5">
              We have sent an One Time Password to your <br /> registered mobile
              number.
            </div>
          </div>
          <div className="mb-1 text-sm">Please Enter OTP</div>
          <div className="flex gap-1 mb-2">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                type="number"
                name={`otp-${index}`}
                ref={ref}
                className="bg-[#F4F4F4]   py-2 w-14 text-center outline-none border border-gray-300 rounded-xl px-4"
                maxLength={1}
                // min={1}
                // max={1}
                onInput={(e) => handleChange(index, e)}
              />
            ))}
          </div>
          <div className="text-sm text-[#363636] flex gap-1">
            Didn’t receive an OTP ?{" "}
            <div
              onClick={() => {
                alert("OTP Resent Successfully!");
              }}
              className="text-[#00BAB8] cursor-pointer"
            >
              Resend OTP
            </div>
          </div>
          <div>
            <div className="mt-16 mb-4">
              <span>By logging in, I agree to</span>{" "}
              <Link to="/privacy" className="text-[#00BAB8]">
                terms & privacy policy.
              </Link>
            </div>
            <div>
              {/* <button
          type="submit"
          onSubmit={handleSubmitMobile}
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white"
        >
          PROCEED
        </button> */}
              <input
                type="submit"
                value="PROCEED"
                className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer text-white hover:bg-white"
              />
            </div>
          </div>
          {/* <div className="p-1.5 text-sm border rounded-full bg-[#f9f9f9] font-extralight w-min absolute top-4 right-4 cursor-pointer hover:shadow-lg">
            <Link to="/">
              <AiOutlineClose />
            </Link>
          </div> */}
        </div>
      </form>
    </>
  );
};

export const OTPForm2 = ({ setFormNumber }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  // const handleChange = (index, e) => {
  //   if (e.target.value.length > 0 && index < inputRefs.length - 1) {
  //     inputRefs[index + 1].current.focus();
  //   }
  //   // Handle your OTP input here
  // };

  const handleSubmitOtp = (event) => {
    event.preventDefault();

    if (otpValues.every((value) => value !== "")) {
      alert("Proceeding with form submission...");
      // Additional logic here for form submission after validating the OTP
    } else {
      alert("Please fill all OTP inputs");
    }
    alert(otpValues);
  };
  // const handleSubmitOtp = async (event) => {
  //   event.preventDefault();

  //   const otp = inputRefs.reduce((code, inputRef) => {
  //     return code + inputRef.current.value;
  //   }, "");

  //   alert(otp);
  //   setFormNumber(3);

  //   // try {
  //   //   const response = await axios.post("YOUR_API_ENDPOINT", {
  //   //     otp: otp,
  //   //   });

  //   //   if (response.status === 200) {
  //   //     // Valid OTP, do something (navigate to next step, etc.)
  //   //     setFormNumber(3);
  //   //   } else {
  //   //     // Invalid OTP, handle accordingly (display error message, etc.)
  //   //     alert("Invalid OTP!");
  //   //   }
  //   // } catch (error) {
  //   //   // Handle errors (network issues, server errors, etc.)
  //   //   console.error("Error:", error);
  //   //   alert("An error occurred while verifying the OTP.");
  //   // }
  // };

  const styles = `
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
         -webkit-appearance: none;
          margin: 0;
  }

  input[type=number] {
      -moz-appearance: textfield;
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <form onSubmit={handleSubmitOtp}>
        <div className="relative flex flex-col justify-between px-10 py-16">
          <div className="mb-8">
            <div className="text-5xl font-extralight text-[#5E5E5E] mb-4">
              Hello
            </div>
            <div className="text-[#5E5E5E] mb-5">
              We have sent an One Time Password to your <br /> registered mobile
              number.
            </div>
          </div>
          <div className="mb-1 text-sm">Please Enter OTP</div>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                type="number"
                name={`otp-${index}`}
                className="bg-[#F4F4F4]   py-2 w-14 text-center outline-none border border-gray-300 rounded-xl px-4"
                maxLength={1}
                value={otpValues[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <div className="text-sm text-[#363636] flex gap-1">
            Didn’t receive an OTP ?{" "}
            <div
              onClick={() => {
                alert("OTP Resent Successfully!");
              }}
              className="text-[#00BAB8] cursor-pointer"
            >
              Resend OTP
            </div>
          </div>
          <div>
            <div className="mt-16 mb-4">
              <span>By logging in, I agree to</span>{" "}
              <Link to="/privacy" className="text-[#00BAB8]">
                terms & privacy policy.
              </Link>
            </div>
            <div>
              <input
                type="submit"
                value="PROCEED"
                className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer text-white hover:bg-white"
              />
            </div>
          </div>
          {/* <div className="p-1.5 text-sm border rounded-full bg-[#f9f9f9] font-extralight w-min absolute top-4 right-4 cursor-pointer hover:shadow-lg">
            <Link to="/">
              <AiOutlineClose />
            </Link>
          </div> */}
        </div>
      </form>
    </>
  );
};

export const EmailForm = ({ setFormNumber }) => {
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  let history = useNavigate();

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
      // alert(`Name: ${formData.fullName}   Email: ${formData.email}`);
      // alert("form submitted successfully!");
      history("/select-manual");
    } else {
      alert("Please fill in both Full Name and Email.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex flex-col justify-between py-16 px-14">
        <div className="mb-4">
          <div className="text-5xl font-extralight text-[#5E5E5E] mb-4">
            Hello
          </div>
          <div className="text-[#8d8d8d] mb-5">
            To keep connected with us please Log In with your personal <br />{" "}
            information
          </div>
        </div>
        <div>
          <div>
            <div className="mb-1 text-sm">Full Name</div>
            <input
              type="text"
              name="fullName"
              id=""
              required
              className="bg-[#F4F4F4]  px-2 py-2 outline-none w-full rounded-lg"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mt-4 mb-1 text-sm">Email Address</div>
            <input
              type="email"
              name="email"
              id=""
              required
              className="bg-[#F4F4F4]  px-2 py-2 outline-none w-full rounded-lg"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="mt-12 mb-4">
            <span>By logging in, I agree to</span>{" "}
            <Link to="/privacy" className="text-[#00BAB8]">
              terms & privacy policy
            </Link>
          </div>
          <div>
            {/* <button
          type="submit"
          onSubmit={handleSubmitMobile}
          className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white"
        >
          PROCEED
        </button> */}
            <input
              type="submit"
              value="PROCEED"
              className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer text-white hover:bg-white"
            />
          </div>
        </div>
        {/* <div className="p-1.5 text-sm border rounded-full bg-[#f9f9f9] font-extralight w-min absolute top-4 right-4 cursor-pointer hover:shadow-lg">
          <Link to="/">
            <AiOutlineClose />
          </Link>
        </div> */}
      </div>
    </form>
  );
};

export default Login;
