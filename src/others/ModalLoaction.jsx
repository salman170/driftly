import React, { useContext } from "react";
import Mumbai from "../assets/Home/Mumbai.png";
import Bangalore from "../assets/Home/Bangalore.png";
import NewDelhi from "../assets/Home/New Delhi.png";
import Hyderabad from "../assets/Home/Hyderabad.png";
import { AiOutlineClose } from "react-icons/ai";
import { LocationContext } from "../context/Location";
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
  const LocContext = useContext(LocationContext);

  if (!LocContext.openLoc) return null;

  const handleOnClose = () => LocContext.setOpenLoc(false);

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
      val: "New Delhi",
    },
  ];

  const handleClick = (val) => {
    LocContext.setLoc(val);
    LocContext.setOpenLoc(false);
  };

  return (
    <div
      id="container"
      //   onClick={handleOnClose}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur"
    >
      <div className="relative px-4 py-6 m-1 overflow-hidden text-center bg-white select-none md:p-12 lg:w-2/3 rounded-2xl">
        <div className="pb-4 text-2xl md:pb-10 md:text-3xl">Select Location</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 ">
          {data.map((x, i) => {
            return (
              <div key={i} className="" onClick={() => handleClick(x.val)}>
                <div className="px-2 py-3 lg:px-8 lg:py-6 mb-4 border border-[#D1D1D1] cursor-pointer rounded-xl hover:bg-[#E9E9E9] hover:shadow-lg">
                  <div className="flex items-end justify-center item lg:h-20">
                    <img src={x.img} alt={x.val} srcSet="" className="h-10 md:h-14 lg:h-16" />
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
