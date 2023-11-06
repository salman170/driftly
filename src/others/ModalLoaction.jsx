import React from "react";
import Mumbai from "../assets/Home/Mumbai.png";
import Bangalore from "../assets/Home/Bangalore.png";
import NewDelhi from "../assets/Home/New Delhi.png";
import Hyderabad from "../assets/Home/Hyderabad.png";
import { AiOutlineClose } from "react-icons/ai";
// import { useLocation, useNavigate } from "react-router-dom";

const ModalLoaction = ({ visible, setShowMyModal }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const hasVisited = localStorage.getItem("hasVisited");
//     if (!hasVisited) {
//       setShowMyModal(true);
//       localStorage.setItem("hasVisited", "true");
//     }
//   }, [navigate]);

  //   const handleOnClose = (e) => {
  //     if (e.target.id === "container") onClose();
  //   };
  if (!visible) return null;

  const handleOnClose = () => setShowMyModal(false);

  const data = [
    {
      img: Mumbai,
      val: "Mumbai",
    },
    {
      img: Bangalore,
      val: "Bangalore",
    },
    {
      img: Hyderabad,
      val: "Hyderabad",
    },
    {
      img: NewDelhi,
      val: "NewDelhi",
    },
  ];
  return (
    <div
      id="container"
      //   onClick={handleOnClose}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur"
    >
      <div className="relative p-12 m-1 overflow-hidden text-center bg-white select-none lg:w-2/3 rounded-2xl">
        <div className="pb-10 text-3xl">Select Location</div>
        <div className="flex justify-center gap-8 ">
          {data.map((x, i) => {
            return (
              <div key={i} className="">
                <div className="px-8 py-6 mb-4 border border-[#D1D1D1] cursor-pointer rounded-xl hover:bg-[#E9E9E9] hover:shadow-lg">
                  <div className="h-20 ">
                    <img src={x.img} alt={x.val} srcset="" className="" />
                  </div>
                </div>
                <div className="text-lg">{x.val}</div>
              </div>
            );
          })}
        </div>
        <div
          onClick={handleOnClose}
          className="p-1.5  text-lg border rounded-full bg-[#f0f0f0] font-extralight w-min absolute top-4 right-4 cursor-pointer hover:shadow-lg"
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default ModalLoaction;
