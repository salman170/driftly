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
import QualityAssuranceW from "../../assets/Home/QA-WHITE.png";
import OnlyRefurbishedW from "../../assets/Home/Only Refurbished Vehicles - White.png";
import VehicleTradeInW from "../../assets/Home/Vehicle Trade-in - White.png";
import YearWarrantyW from "../../assets/Home/1 Year Warranty - White.png";
import RoadSideAssistanceW from "../../assets/Home/Roadside Assistance - White.png";
import DoorstepDeliveryW from "../../assets/Home/Doorstep Delivery & Collection - White.png";
import MoneyBackGuranteeW from "../../assets/Home/Money Back Guarantee - White.png";

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
      img2: QualityAssuranceW,
      title: "Quality Assurance",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },

   
    {
      img1: VehicleTradeIn,
      img2: VehicleTradeInW,
      title: "Vehicle Trade-In",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img1: YearWarranty,
      img2: YearWarrantyW,
      title: "1 Year Warranty",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
    {
      img1: RoadSideAssistance,
      img2: RoadSideAssistanceW,
      title: "Roadside Assistance",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
    {
      img1: VehicleTradeIn,
      img2: VehicleTradeInW,
      title: "Vehicle Buyback",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    }, {
      img1: OnlyRefurbished,
      img2: OnlyRefurbishedW,
      title: "Only Refurbished Vehicles",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
    {
      img1: DoorstepDelivery,
      img2: DoorstepDeliveryW,
      title: "Doorstep Delivery & Collection",
      content:
        "All cars go through a 360-point inspection & are reconditioned ensuring there are no hidden issues with your car",
    },
    {
      img1: MoneyBackGurantee,
      img2: MoneyBackGuranteeW,
      title: "Money Back Guarantee",
      content:
        "All customers get a 7-day/250 miles full money-back guarantee to make sure they love their Drively car",
    },
  ];

  const styles = `
  .swiper-pagination-bullet {
    /* Add gradient styles */
    background: linear-gradient(to right, #00BAB8, #0BF2B3); /* Your gradient color */
    /* Other styles */
    width: 10px;
    height: 10px;
    margin: 0 8px;
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 12px; /* You can adjust the active bullet size */
  }
  `;

  return (
    <>
    <style>{styles}</style>
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
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="flex flex-col-reverse py-10 overflow-hidden bg-transparent mySwiper"
        >
           
          <div className="flex gap-4 mb-4 ml-2 -mt-6 md:-mt-10 md:mr-10 md:justify-end ">
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
                <SwiperSlide key={i} className="relative rounded-xl">
                  <div className=" hover:bg-gradient-to-b from-[#00BAB8] to-[#0BF2B3]  shadow-lg rounded-xl  cursor-pointer  p-5  hover:text-white border group h-60 flex  flex-col justify-center ">
                    <div className="relative h-16" >
                      <img
                        src={x.img1}
                        alt=""
                        srcSet=""
                        className="absolute inset-0 duration-200 group-hover:-translate-y-2 group-hover:opacity-0"
                      />
                      <img
                        src={x.img2}
                        alt=""
                        srcSet=""
                        className="duration-200 group-hover:-translate-y-2 "
                      />
                    </div>
                    <div className="mt-1 mb-2 font-semibold ">{x.title}</div>
                    <div className="h-16 text-sm">{x.content}</div>
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
