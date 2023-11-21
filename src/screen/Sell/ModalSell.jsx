import React from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalSell = ({ visible, setVisible }) => {
  const [step, setStep] = useState(1);
  const handleClose = () => setVisible(false);

  const handleOnClose = (e) => {
    if (e.target.id === "container") handleClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-20 flex flex-col items-center justify-center min-h-screen bg-black backdrop-blur-sm bg-opacity-60"
    >
      <div className="m-1 overflow-hidden bg-white lg:w-2/3 xl:max-w-6xl rounded-3xl">
        {step === 1 ? (
          <Appointerform2 handleClose={handleClose} setStep={setStep} />
        ) : (
          <Appointerform3 handleClose={handleClose} />
        )}
      </div>

      {/* <button
        onClick={handleClose}
        className="px-4 py-1 mt-4 text-lg text-white border rounded-full lg:px-8 lg:py-2 md:text-xl"
      >
        Close
      </button> */}
    </div>
  );
};

const Appointerform2 = ({ handleClose, setStep }) => {
  const getUpcomingDates = () => {
    const currentDate = new Date();
    const upcomingDates = [];
    let count = 0;

    while (count < 5) {
      currentDate.setDate(currentDate.getDate() + 1);

      // Exclude weekends (Saturday and Sunday)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        const formattedDate = currentDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        const dayName = currentDate.toLocaleDateString("en-US", {
          weekday: "short",
        });

        upcomingDates.push({ date: formattedDate, day: dayName });
        count++;
      }
    }

    return upcomingDates;
  };

  const upcomingDates = getUpcomingDates();
  return (
    <>
      <div className="px-14 py-6 bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] flex justify-between items-center">
        <div className="text-white">
          <div className="text-3xl font-bold"> Get unmatched service</div>
          <div className="text-lg">
            Enter your details to book an appointment.
          </div>
        </div>
        <AiFillCloseCircle
          className="text-3xl text-white cursor-pointer hover:drop-shadow-xl hover:text-black "
          onClick={handleClose}
        />
      </div>
      <div className="py-8 px-14 ">
        <div className="mb-2 ">Location</div>
        <div>
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#F4F4F4] placeholder-gray-400 border  rounded-md outline-none md:w-1/2 "
            placeholder="Somajiguda Hyderabad - 500082"
          />
        </div>
        <div className="mt-8 mb-2 ">
          Where would you get your car inspected?
        </div>
        <div className="flex gap-6 mt-4 mb-8 whitespace-nowrap">
          <div className="px-12 py-3 uppercase bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
            Home Inspection
          </div>
          <div className="px-12 py-3 uppercase bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
            Branch Inspection
          </div>
        </div>
        <div className="mt-8 mb-2 ">Preferred date</div>
        <div>
          <ul className="flex gap-4">
            {upcomingDates.map((dateInfo, index) => (
              <li
                key={index}
                className="px-12 py-3 text-center group uppercase bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border  "
              >
                <span className="pr-2 text-gray-400 group-hover:text-gray-100">
                  {dateInfo.day}
                </span>
                <span className="whitespace-nowrap">{dateInfo.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 mb-2 ">Preferred Time</div>
        <div className="flex gap-6 mt-4 mb-8 whitespace-nowrap">
          <div className="px-12 py-3 uppercase bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
            10:00 am - 12:00 pm
          </div>
          <div className="px-12 py-3 uppercase bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
            12:00 pm - 03:00 pm
          </div>
          <div className="px-12 py-3 uppercase bg-[#F4F4F4] hover:bg-[#363636] w-min hover:text-white cursor-pointer rounded-xl border ">
            03:00 pm - 06:00 pm
          </div>
        </div>
        <div className="flex justify-between gap-10 pt-4">
          <div className="hover:bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-14 py-3 cursor-pointer hover:text-white hover:shadow-xl select-none border">
            Back
          </div>
          <div
            onClick={() => setStep(2)}
            className="bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-10 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          >
            CONFIRM APPOINTMENT
          </div>
        </div>
      </div>
    </>
  );
};

const Appointerform3 = ({ handleClose }) => {
  return (
    <>
      <div className="px-14 py-6 bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] flex justify-between items-center">
        <div className="text-white">
          <div className="text-3xl font-bold"> Appointment Confirmed</div>
          <div className="text-lg">
            Our service agents will soon get in touch with you.
          </div>
        </div>
        <AiFillCloseCircle
          className="text-3xl text-white cursor-pointer hover:drop-shadow-xl hover:text-black "
          onClick={handleClose}
        />
      </div>
      <div className="py-8 px-14 ">
        <div className="flex">
          <section className="lg:w-1/2">
            <div className="mb-2 ">BRANCH INSPECTION</div>
            <div>
              <span className="text-sm">Reference no.</span>{" "}
              <span className="pl-1 font-bold">08969</span>
            </div>
          </section>
          <section className="w-1/2">
            <div className="mb-2 font-bold">Toyota Land Cruiser Prado 4X4</div>
            <div className="text-sm">VX L2982 cc</div>
          </section>
        </div>
        <div className="flex mt-8 mb-2">
          <section className="w-1/2">
            <div className="mb-2 font-bold">Driftly - Lower Parel</div>
            <div className="text-sm">
              High Street Phoenix, 462, Senapati Bapat Marg Lower Parel, Mumbai,
              Maharashtra 400013
            </div>
          </section>
          <section className="w-1/2">
            <div className="mb-2 font-bold">10th October 2021</div>
            <div className="text-sm">
              Walk in anytime between 10:00am to 06:00pm
            </div>
          </section>
        </div>

        <div className="flex justify-end">
          <div
            onClick={handleClose}
            className="pt-4 bg-gradient-to-l from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-20 py-3 cursor-pointer text-white hover:bg-white hover:shadow-xl select-none"
          >
            DONE
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSell;
