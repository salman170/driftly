import React from "react";
// import ForBuyer1 from "../../assets/How It Works/Howitwork-ForBuyers-01.png";
import CheckCircle from "../../assets/How It Works/DoneTick.png";

const ForBuyer = () => {
  const data = [
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
  ];
  return (
    <>
      {/* <div className="-mb-72 flex items-end gap-8">
        <img src={ForBuyer1} alt="" srcset="" />
        <div >
          <div className="text-[9rem] text-[#BFBFBF]">01</div>
          <div className="text-5xl">Browse Online</div>
        </div>
      </div> */}
      <div className="container mx-auto bg-[#F8F8F8] h-screen p-20">
        <div className="grid grid-cols-2 gap-x-2 gap-y-12">
          {data.map((x, i) => {
            return (
              <div className="flex gap-4">
                <img src={CheckCircle} alt="" srcset="" className="h-min w-min scale-[1.20]" />
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
      </div>
    </>
  );
};

export default ForBuyer;
