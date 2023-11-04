import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import QualityAssurance from "../../assets/Home/QA.png";
import OnlyRefurbished from "../../assets/Home/Only Refurbished Vehicles.png";
import VehicleTradeIn from "../../assets/Home/Vehicle Trade-in.png";
import YearWarranty from "../../assets/Home/1 Year Warranty.png";
import RoadSideAssistance from "../../assets/Home/Roadside Assistance.png";
import DoorstepDelivery from "../../assets/Home/Doorstep Delivery & Collection.png";
import MoneyBackGurantee from "../../assets/Home/Money Back Guarantee.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function DriftyBenefitsSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const data = [
    {
      img1: QualityAssurance,
      img2: "",
      title: "Quality Assurance",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },

    {
      img1: OnlyRefurbished,
      img2: "",
      title: "Only Refurbished Vehicles",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
    {
      img1: VehicleTradeIn,
      img2: "",
      title: "Vehicle Trade-In",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img1: YearWarranty,
      img2: "",
      title: "1 Year Warranty",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
    {
      img1: RoadSideAssistance,
      img2: "",
      title: "Roadside Assistance",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
    {
      img1: VehicleTradeIn,
      img2: "",
      title: "Vehicle Buyback",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img1: DoorstepDelivery,
      img2: "",
      title: "Doorstep Delivery & Collection",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img1: MoneyBackGurantee,
      img2: "",
      title: "Money Back Guarantee",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
  ];

  return (
    <>
      <div className="container relative mx-auto overflow-visible select-none">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="overflow-hidden bg-transparent mySwiper"
        >
          <div className="absolute z-10 flex gap-4 right-2 md:right-20 -top-16">
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

          <div className="overflow-hidden ">
            {data.map((x, i) => {
              return (
                <SwiperSlide key={i} className="relative rounded-xl">
                  <div className=" hover:bg-gradient-to-b from-[#00BAB8] to-[#0BF2B3]  shadow-lg rounded-xl  cursor-pointer  p-5  hover:text-white border group ">
                    <div> 
                      <img src={x.img1} alt="" srcset="" className="duration-200 group-hover:-translate-y-1" />
                    </div>
                    <div className="mb-2 font-semibold">{x.title}</div>
                    <div className="text-sm ">{x.content}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>

          <div className="h-10"></div>
        </Swiper>
      </div>
    </>
  );
}
