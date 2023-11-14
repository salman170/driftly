import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import BMWX7 from "../../assets/Home/BMW X7.png";
// import MercedesAMGGLC from "../../assets/Home/Mercedes AMG GLC.png";
// import AudiQ2 from "../../assets/Home/Audi Q2.png";
// import Porsche from "../../assets/Home/Porsche.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function QuickAnswerSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    { img: BMWX7, title: "Purchasing from Driftly" },
    { img: BMWX7, title: "Financing with Driftly" },
    { img: BMWX7, title: "How it Works?" },
    { img: BMWX7, title: "Quality Inventory" },
    { img: BMWX7, title: "Do Driftly sell new cars?" },
    { img: BMWX7, title: "Where are Driftly cars located?" },
    { img: BMWX7, title: "Can I test drive the car?" },
    { img: BMWX7, title: "How can I see the car before I buy it?" },
  ];

  return (
    <>
      <div className="mt-14   text-[2.8rem] font-extralight text-[#5E5E5E] container mx-auto">
        Quick Answers
      </div>
      <div className="container relative mx-auto overflow-visible select-none">
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="flex flex-col-reverse pt-10 -mt-6 bg-transparent over6flow-hidden mySwiper"
        >
          <div className="flex justify-end gap-4 mb-4 mr-10 -mt-10 ">
            <div
              ref={navigationPrevRef}
              className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
            >
              <AiOutlineArrowLeft />
            </div>
            <div
              ref={navigationNextRef}
              className=" p-1.5 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125"
            >
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* <div className="h-10"></div> */}

          <div className="pb-10 overflow-hidden">
            {data.map((x, i) => {
              return (
                <SwiperSlide key={i} className="relative ">
                  <div className="flex flex-col justify-center  overflow-hidden cursor-pointer h-[24rem] border">
                    <img src={x.img} alt="" srcSet="" className="h-full " />
                    <div className="px-2 my-4 font-semibold">{x.title}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}
