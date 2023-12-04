import React from "react";
import ForBuyer1 from "../../assets/How It Works/Howitwork-ForBuyers-01.png";
import ForBuyer2 from "../../assets/How It Works/Howitwork-ForBuyers-02.png";
import ForBuyer3 from "../../assets/How It Works/Howitwork-ForBuyers-03.png";

const ForBuyer = () => {
  const data = [
    [
      {
        title: "Choose your Car",
        body: "Explore thousands of high-quality, low-mileage luxury vehicles on drively.com, with luxury cars added every week. All vehicles pass a through inspection and all damages are refurbished so you can feel confident you are getting a good ride.",
        link: "Learn more about our Car Quality",
      },
      {
        title: "Start your Purchase",
        body: "Once you found a car suitable for your needs,  Click on ‘Make an Offer’ and create an account with  Drively to save future information and purchase details",
        link: "Learn more about making an offer",
      },
      {
        title: "Choose how to Pay",
        body: "Finance with Drively and make the hard part easy. We partner with major banks to get you the right rate. You can also pay cash or finance with your own bank. A Drively Car Specialist with guide you through the entire process and discuss further details.",
        link: "Learn more about Financing",
      },
      {
        title: "Tell us about your Trade",
        body: "If you have a trade, get a fast, easy appraisal by giving us some basic details about your ride. This will give our Drively Car Specialist even more information to be able to structure the right deal for you.",
        link: "Learn more about Trading In",
      },
    ],
    [
      {
        title: "Choose your Car",
        body: "Explore thousands of high-quality, low-mileage luxury vehicles on drively.com, with luxury cars added every week. All vehicles pass a through inspection and all damages are refurbished so you can feel confident you are getting a good ride.",
        link: "Learn more about our Car Quality",
      },
      {
        title: "Start your Purchase",
        body: "Once you found a car suitable for your needs,  Click on ‘Make an Offer’ and create an account with  Drively to save future information and purchase details",
        link: "Learn more about making an offer",
      },
      {
        title: "Choose how to Pay",
        body: "Finance with Drively and make the hard part easy. We partner with major banks to get you the right rate. You can also pay cash or finance with your own bank. A Drively Car Specialist with guide you through the entire process and discuss further details.",
        link: "Learn more about Financing",
      },
    ],
    [
      {
        title: "Plan for Delivery",
        body: "With your signed and approved paperwork and deposit, we give your car one last inspection and book it for delivery. Once its on the road to you, our Delivery Support Team will be in touch with you for regular updates.",
        link: "Learn more about our Car Quality",
      },
      {
        title: "Meet your Car",
        body: "Your vehicle will typically arrive within 10-14 days of purchase, though sometimes it can take longer. We ship the car right to your home or to a convenient nearby location.",
        link: "Learn more about Delivery",
      },
      {
        title: "Take it for a Spin… or Two",
        body: "Finance with Drively and make the hard part easy. We partner with major banks to get you the right rate. You can also pay cash or finance with your own bank. A Drively Car Specialist with guide you through the entire process and discuss further details.",
        link: "Learn more about our 7-Day Return Period",
      },
      {
        title: "Enjoy Your Ride",
        body: "Feel good that you got your car at a great price, delivered right to you. Enjoy your ride, tell your friends and give our Customer Support a call if you need anything else.",
        link: "Contact Us",
      },
    ],
  ];

  return (
    <div >
     
      <div className="relative p-24 ">
        <div className="items-end gap-8 mb-2 lg:flex">
          <img src={ForBuyer1} alt="" srcSet="" />
          <div>
            <div className="text-[9rem] text-[#BFBFBF] -mb-10 -ml-4">01</div>
            <div className="text-5xl">Browse Online</div>
          </div>
        </div>

        <div className="container grid py-12 mx-auto mb-20 lg:grid-cols-2 gap-x-2 gap-y-12 lg:px-24">
          {data[0].map((x, i) => {
            return (
              <div key={i} className="flex gap-4">
                <div className="w-16">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-full flex justify-center items-center text-white text-xl pt-1">
                    &#10003;
                  </div>
                </div>
                <div >
                  <div className="mb-4 font-bold">{x.title}</div>
                  <div className="mb-2">{x.body}</div>
                  <div className="text-[#00BAB8] underline cursor-pointer underline-offset-2 font-semibold">
                    {x.link}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="items-end justify-end gap-8 mb-2 lg:flex">
          <div>
            <div className="text-[9rem] text-[#BFBFBF] -mb-10 -ml-4">02</div>
            <div className="text-5xl">Make it Yours</div>
          </div>
          <img src={ForBuyer2} alt="" srcSet="" />
        </div>
        <div className="container grid pt-12 mx-auto mb-20 lg:grid-cols-2 gap-x-2 gap-y-12 lg:px-24">
          {data[1].map((x, i) => {
            return (
              <div  key={i} className="flex gap-4">
                <div className="w-16">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-full flex justify-center items-center text-white text-xl pt-1">
                    &#10003;
                  </div>
                </div>
                <div>
                  <div className="mb-4 font-bold">{x.title}</div>
                  <div className="mb-2">{x.body}</div>
                  <div className="text-[#00BAB8] underline cursor-pointer underline-offset-2 font-semibold">
                    {x.link}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="items-end gap-8 lg:flex">
          <img src={ForBuyer3} alt="" srcSet="" />
          <div>
            <div className="text-[9rem] text-[#BFBFBF] -mb-10 -ml-4">03</div>
            <div className="text-5xl">Get it Delivered</div>
          </div>
        </div>
        <div className="container grid pt-12 mx-auto lg:grid-cols-2 gap-x-2 gap-y-12 lg:px-24 ">
          {data[2].map((x, i) => {
            return (
              <div key={i} className="flex gap-4">
                <div className="w-16">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#00bbb8] to-[#0cf2b4] rounded-full flex justify-center items-center text-white text-xl pt-1">
                    &#10003;
                  </div>
                </div>
                {/* <img
                  src={CheckCircle}
                  alt=""
                  srcSet=""
                  className="h-min w-min scale-[1.20]"
                /> */}
                <div >
                  <div className="mb-4 font-bold">{x.title}</div>
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

export default ForBuyer;
