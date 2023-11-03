import React from "react";
import ForBuyer1 from "../../assets/How It Works/Howitwork-ForBuyers-01.png";
import ForBuyer2 from "../../assets/How It Works/Howitwork-ForBuyers-02.png";
import ForBuyer3 from "../../assets/How It Works/Howitwork-ForBuyers-03.png";

const ForSellers = () => {
  const data = [
    [
      {
        title: "Tell us about Your Vehicle",
        body: "Provide basic information about your vehicle including your license plate, mileage & condition. Drively’s buying system gives you an instant price based on your vehicle description and data from thousands of similar transactions",
        link: "",
      },
      {
        title: "Get your Instant Price",
        body: "We’ll give you an instant price for your vehicle that is good for the earlier of 7 days or XXX additional kms. If we are unable to calculate an instant price, one of our Car Specialists will e-mail you the quote within the same day",
        link: "Learn more about Selling on Drively",
      },
    ],
    [
      {
        title: "Verify all your Information",
        body: "When you are ready to sell your vehicle to us, you will have to verify your ownership information and upload pictures of your Photo ID, registration, title in your name and Odometer. You are one step closer to getting paid! Our team will be in touch with you to discuss transfer details and finalizing your deal.",
        link: "",
      },
      {
        title: "Schedule your Pickup",
        body: "Our team will work with you to schedule a free pickup from your place or a convenient location near you. Pickup is absolutely free!",
        link: "Learn more about picking up your car",
      },
    ],
    [
      {
        title: "Look Out for Your Payment",
        body: "With the confirmation of the pickup, we will process & send it via your choice of direct deposit or check by mail. ",
        link: "Learn more about Getting Paid by Drively",
      },
    ],
  ];

  return (
    <div>
      <div className="   p-24 relative ">
        <div className=" lg:flex items-end gap-8 mb-2">
          <img src={ForBuyer1} alt="" srcset="" />
          <div>
            <div className="text-[9rem] text-[#BFBFBF] -mb-10 -ml-4">01</div>
            <div className="text-5xl">Make it Yours</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-12 mb-20 container mx-auto lg:px-24 py-12">
          {data[0].map((x, i) => {
            return (
              <div className="flex gap-4">
                <div className="w-16">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-full flex justify-center items-center text-white text-xl pt-1">
                    &#10003;
                  </div>
                </div>
                <div key={i}>
                  <div className="font-bold mb-4">{x.title}</div>
                  <div className="mb-2">{x.body}</div>
                  <div className="text-[#00BAB8] underline cursor-pointer underline-offset-2 font-semibold">
                    {x.link}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" lg:flex items-end gap-8 mb-2 justify-end">
          <div>
            <div className="text-[9rem] text-[#BFBFBF] -mb-10 -ml-4">02</div>
            <div className="text-5xl">Close the Deal</div>
          </div>
          <img src={ForBuyer2} alt="" srcset="" />
        </div>
        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-12 mb-20 container mx-auto lg:px-24 pt-12">
          {data[1].map((x, i) => {
            return (
              <div className="flex gap-4">
                <div className="w-16">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-full flex justify-center items-center text-white text-xl pt-1">
                    &#10003;
                  </div>
                </div>
                <div key={i}>
                  <div className="font-bold mb-4">{x.title}</div>
                  <div className="mb-2">{x.body}</div>
                  <div className="text-[#00BAB8] underline cursor-pointer underline-offset-2 font-semibold">
                    {x.link}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" lg:flex items-end gap-8 ">
          <img src={ForBuyer3} alt="" srcset="" />
          <div>
            <div className="text-[9rem] text-[#BFBFBF] -mb-10 -ml-4">03</div>
            <div className="text-5xl font-extralight ">Get Paid!</div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-12 container mx-auto lg:px-24 pt-12 ">
          {data[2].map((x, i) => {
            return (
              <div className="flex gap-4">
                <div className="w-16">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-full flex justify-center items-center text-white text-xl pt-1">
                    &#10003;
                  </div>
                </div>
                {/* <img
                  src={CheckCircle}
                  alt=""
                  srcset=""
                  className="h-min w-min scale-[1.20]"
                /> */}
                <div key={i}>
                  <div className="font-bold mb-4">{x.title}</div>
                  <div className="mb-2">{x.body}</div>
                  <div className="text-[#00BAB8] underline cursor-pointer underline-offset-2 font-semibold">
                    {x.link}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#F8F8F8] h-full container mx-auto absolute inset-0 -z-10"></div>
      </div>
    </div>
  );
};

export default ForSellers;
