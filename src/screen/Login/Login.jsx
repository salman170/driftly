import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex shadow-xl rounded-3xl">
        <div className="relative">
          <img
            src={require("../../assets/Login/LoginBackground.png")}
            alt=""
            srcSet=""
          />
          <img
            src={require("../../assets/Logo/ColorLogo.png")}
            alt=""
            srcSet=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="py-16 px-10">
          <div className="text-5xl font-extralight text-[#5E5E5E] mb-4">
            Hello{" "}
          </div>
          <div className="text-[#5E5E5E] mb-4">
            To keep connected with us please Log In with your <br />
            Mobile Number and verify your identity via OTP.
          </div>
          <div>Mobile Number</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
