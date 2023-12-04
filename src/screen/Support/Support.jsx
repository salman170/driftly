import React from "react";
import Header from "../../others/Header";
import heroImage from "../../assets/Support/Support.png";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import QuickAnswerSlider from "./QuickAnswerSlider";

const Support = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <section className="px-2">
        <ContactDetailsNumber />
        <QuickAnswerSlider />
        <QuickAnswer2 />
        <PopularQusteions />
      </section>
    </div>
  );
};

export default Support;

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <section>
      <div className="relative pb-10 overflow-hidden bg-black lg:pb-0">
        <img src={heroImage} alt="" srcSet="" className="w-full" />
        <div className=" lg:absolute top-1/4 left-[8%] container mx-auto w-full  text-white font-extralight  mt-10 lg:mt-0 ">
          <div className="mb-4 text-[2.5rem]">
            Driftly <span className="pl-2 font-medium">Support</span>
          </div>
          <div className="mb-4 text-[24px] font-medium">
            Whatever you need, we're here to help
          </div>
          <div className="flex items-center h-min">
            <input
              type="text"
              placeholder="Search"
              autoFocus
              className="w-1/2 px-8 py-2.5  border border-gray-300 rounded-l bg-opacity-60 bg-[#FFFFFF] placeholder:text-black outline-none  text-black focus:bg-opacity-100 font-text-xl"
              value={searchTerm}
              onChange={handleChange}
            />
            <div className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] h-[46px] w-12 flex justify-center items-center hover:cursor-pointer rounded-r">
              <BsSearch className="w-5 h-5" />
            </div>
            {/* <button className="flex items-center justify-center h-12 text-white bg-teal-500 w-11 rounded-r-md">
                <BsSearch className="w-5 h-5" />
              </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactDetailsNumber = () => {
  return (
    <div className="py-10">
      <div className="container grid gap-4 px-4 py-6 mx-auto border shadow-lg md:grid-cols-2 xl:grid-cols-4 rounded-xl shadow-gray-200">
        <div>
          Call us on
          <a href="tel:+919848898488" className="text-lg font-bold">
            {" "}
            +91 98488-98488
          </a>
        </div>
        <div>
          Whatsapp us
          <a
            href="https://wa.me/919848898488"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-1 text-lg font-bold"
          >
            +91 98488-98488
          </a>
        </div>
        <div className="md:col-span-2">
          If you need any help, we’re available from
          <a
            href="https://maps.app.goo.gl/YVPEeXvtrjpTUPz6A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold  text-[#00BAB8]"
          >
            {" "}
            <span className="text-lg font-bold"> 9am - 8pm, 7 days a week</span>
          </a>
        </div>
      </div>
      {/* Add the map link here */}
    </div>
  );
};

// const QuickAnswer1 = () => {
//   return (
//     <div className="container mx-auto">
//       <div>Quick Answers</div>
//     </div>
//   );
// };

const QuickAnswer2 = () => {
  const questionsData = [
    {
      title: "How Driftly",
      title2: "Works",
      content: "From delivery and collection to returning a car",
      link: "",
    },
    {
      title: "Buy or",
      title2: "Finance Car",
      content: "Help with placing an order, car finance, warranty and returns",
      link: "",
    },
    {
      title: "Car",
      title2: "Care",
      content: "What you need to know about our car care extras",
      link: "",
    },
    {
      title: "Contact",
      title2: "Us",
      content: "Still have questions? Here’s how to get in touch",
      link: "",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="mt-14 w-[90%]  text-[2.8rem] font-extralight mb-6 text-[#5E5E5E]">
        Quick Answers
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {questionsData.map((x, i) => {
          return (
            <div key={i} className="hover:bg-gradient-to-t from-[#00BAB8] to-[#0BF2B3] rounded-lg p-6 shadow-xl border relative cursor-pointer hover:text-white group">
              <div className="mb-2 text-3xl">
                {x.title}
                <br /> {x.title2}
              </div>
              <div className="mb-6">{x.content}</div>

              <div className=" text-[#0BF2B3] group-hover:text-white absolute top-6 right-6 group-hover:translate-x-3 duration-200 ">
                <AiOutlineArrowRight className="text-2xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PopularQusteions = () => {
  const data = [
    {
      question: "How do I buy a car?",
      content: "",
    },
    {
      question: "How does your process works?",
      content: "",
    },
    {
      question: "Will trade-in offer I receive from Driftly change?",
      content: "",
    },
    {
      question: "Will Driftly deliver to me for free?",
      content: "",
    },
    {
      question: "Where are Driftly cars located?",
      content: "",
    },
    {
      question:
        "If I get pre-qualified through Driftly, does it impact my credit?",
      content: "",
    },
    {
      question:
        "Can I sell my vehicle to Driftly without buying a car from you?",
      content: "",
    },
    {
      question:
        "If I have bad credit,  can I still finance purchase through Driftly?",
      content: "",
    },
    {
      question:
        "How will I know when my scheduled pickup or delivery is confirmed?",
      content: "",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <div className="mt-14 w-[90%]  text-[2.8rem] font-extralight mb-6 text-[#5E5E5E]">
          Popular Questions
        </div>
        {data.map((x, i) => {
          return (
            <div
              key={i}
              className="flex  justify-between w-[90%] border py-4 text-xl px-4 items-center rounded-xl hover:shadow-driftyShdaow cursor-pointer mb-8"
            >
              <div>{x.question}</div>
              <div className=" text-[#0BF2B3] ">
                <AiOutlineArrowRight className="text-xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
